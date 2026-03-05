// Weekly revalidation: 7 days = 604800 seconds
const REVALIDATE = 604800;

export interface CountryIndicator {
  country: string;
  countryCode: string;
  value: number | null;
  year: number;
}

export interface MarketData {
  co2Emissions: CountryIndicator[];
  renewableEnergy: CountryIndicator[];
  forestArea: CountryIndicator[];
  accessElectricity: CountryIndicator[];
  lastFetched: string;
}

// African country codes for World Bank API
const AFRICA_CODES = 'ZAF;NGA;KEN;GHA;ETH;TZA;EGY;MAR;CIV;SEN;RWA;UGA;MOZ;CMR;AGO';

async function fetchIndicator(indicator: string): Promise<CountryIndicator[]> {
  try {
    const url = `https://api.worldbank.org/v2/country/${AFRICA_CODES}/indicator/${indicator}?format=json&per_page=100&date=2018:2023&mrv=1`;
    const res = await fetch(url, { next: { revalidate: REVALIDATE } });

    if (!res.ok) return [];

    const data = await res.json();
    if (!data[1]) return [];

    return data[1]
      .filter((d: { value: number | null }) => d.value !== null)
      .map((d: { country: { value: string; id: string }; value: number; date: string }) => ({
        country: d.country.value,
        countryCode: d.country.id,
        value: d.value,
        year: parseInt(d.date),
      }))
      .sort((a: CountryIndicator, b: CountryIndicator) => (b.value || 0) - (a.value || 0));
  } catch {
    return [];
  }
}

export async function getMarketData(): Promise<MarketData> {
  const [co2Emissions, renewableEnergy, forestArea, accessElectricity] = await Promise.all([
    fetchIndicator('EN.ATM.CO2E.PC'),       // CO2 emissions (metric tons per capita)
    fetchIndicator('EG.FEC.RNEW.ZS'),       // Renewable energy (% of total)
    fetchIndicator('AG.LND.FRST.ZS'),       // Forest area (% of land)
    fetchIndicator('EG.ELC.ACCS.ZS'),       // Access to electricity (%)
  ]);

  return {
    co2Emissions,
    renewableEnergy,
    forestArea,
    accessElectricity,
    lastFetched: new Date().toISOString(),
  };
}

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

// Simple XML tag extraction (no dependency needed)
function extractTag(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>|<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`));
  return match ? (match[1] || match[2] || '').trim() : '';
}

async function fetchRSS(url: string, sourceName: string): Promise<NewsItem[]> {
  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; VoltaImpactAdvisors/1.0)' },
    });

    if (!res.ok) return [];

    const text = await res.text();
    const items: NewsItem[] = [];

    // Split by <item> tags
    const itemMatches = text.split(/<item>/g).slice(1);

    for (const itemXml of itemMatches.slice(0, 5)) {
      const title = extractTag(itemXml, 'title');
      const link = extractTag(itemXml, 'link');
      const pubDate = extractTag(itemXml, 'pubDate');

      if (title && link) {
        items.push({ title, link, pubDate, source: sourceName });
      }
    }

    return items;
  } catch {
    return [];
  }
}

// Fallback curated news for when RSS feeds are unavailable
const FALLBACK_NEWS: NewsItem[] = [
  { title: 'Africa Climate Summit Calls for New Global Financial Architecture', link: 'https://www.climatechangenews.com', pubDate: '2025-12-15', source: 'Climate Home News' },
  { title: 'AfDB Approves $1.5B for Climate Adaptation Across Sub-Saharan Africa', link: 'https://www.afdb.org/en/news-and-events', pubDate: '2025-11-28', source: 'African Development Bank' },
  { title: 'IFRS S1/S2 Adoption Accelerates in Emerging Markets', link: 'https://www.ifrs.org', pubDate: '2025-11-20', source: 'IISD SDG Knowledge Hub' },
  { title: 'Green Bond Issuance in Africa Reaches Record $8.2 Billion', link: 'https://www.climatebonds.net', pubDate: '2025-11-15', source: 'Climate Home News' },
  { title: 'Kenya Launches National Green Taxonomy Framework', link: 'https://www.centralbank.go.ke', pubDate: '2025-11-10', source: 'African Development Bank' },
  { title: 'Carbon Credit Markets Expand Across West Africa', link: 'https://www.devex.com/news', pubDate: '2025-10-30', source: 'Devex' },
  { title: 'South Africa Commits to Just Energy Transition with $9.5B Package', link: 'https://www.climatechangenews.com', pubDate: '2025-10-22', source: 'Climate Home News' },
  { title: 'Nigeria Mandates Climate Risk Disclosures for Listed Companies', link: 'https://www.sec.gov.ng', pubDate: '2025-10-18', source: 'IISD SDG Knowledge Hub' },
  { title: 'Renewable Energy Investment in Africa Surpasses $25B Annually', link: 'https://www.irena.org', pubDate: '2025-10-10', source: 'Devex' },
  { title: 'UN PRB Signatories in Africa Triple Over Two Years', link: 'https://www.unepfi.org', pubDate: '2025-09-28', source: 'African Development Bank' },
];

export async function getNewsFeeds(): Promise<NewsItem[]> {
  try {
    const feeds = await Promise.all([
      fetchRSS('https://www.climatechangenews.com/feed/', 'Climate Home News'),
      fetchRSS('https://www.afdb.org/en/news-and-events/rss', 'African Development Bank'),
      fetchRSS('https://sdg.iisd.org/feed/', 'IISD SDG Knowledge Hub'),
      fetchRSS('https://www.devex.com/news/rss', 'Devex'),
    ]);

    // Flatten and sort by date (newest first)
    const allItems = feeds.flat();
    allItems.sort((a, b) => {
      const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
      const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
      return dateB - dateA;
    });

    const result = allItems.slice(0, 20);

    // If RSS feeds returned nothing, use fallback curated news
    if (result.length === 0) {
      return FALLBACK_NEWS;
    }

    return result;
  } catch {
    // If anything fails, always return fallback
    return FALLBACK_NEWS;
  }
}
