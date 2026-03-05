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
      headers: { 'User-Agent': 'VoltaImpactAdvisors/1.0' },
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

export async function getNewsFeeds(): Promise<NewsItem[]> {
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

  return allItems.slice(0, 20);
}
