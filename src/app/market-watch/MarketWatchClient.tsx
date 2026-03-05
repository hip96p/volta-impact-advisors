'use client';

import { Activity, Zap, TreePine, Leaf, ExternalLink, Rss, BarChart3 } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import BarChart from '@/components/BarChart';
import type { MarketData, NewsItem } from '@/lib/market-data';

interface Props {
  marketData: MarketData;
  news: NewsItem[];
}

export default function MarketWatchClient({ marketData, news }: Props) {
  const formatDate = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    } catch {
      return dateStr;
    }
  };

  const dataSections = [
    {
      icon: Activity,
      title: 'CO₂ Emissions',
      subtitle: 'Metric tons per capita',
      color: '#1B2E4A',
      data: marketData.co2Emissions.map((d) => ({ label: d.country, value: d.value || 0 })),
      unit: 't',
    },
    {
      icon: Zap,
      title: 'Renewable Energy',
      subtitle: '% of total energy consumption',
      color: '#09814A',
      data: marketData.renewableEnergy.map((d) => ({ label: d.country, value: d.value || 0 })),
      unit: '%',
    },
    {
      icon: TreePine,
      title: 'Forest Area',
      subtitle: '% of total land area',
      color: '#0BA55E',
      data: marketData.forestArea.map((d) => ({ label: d.country, value: d.value || 0 })),
      unit: '%',
    },
    {
      icon: Leaf,
      title: 'Access to Electricity',
      subtitle: '% of population',
      color: '#0078A1',
      data: marketData.accessElectricity.map((d) => ({ label: d.country, value: d.value || 0 })),
      unit: '%',
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-charcoal overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[500px] h-[500px] bg-teal -top-40 right-10 absolute" />
        <div className="gradient-blob w-[300px] h-[300px] bg-green bottom-0 -left-10 absolute" />
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24 relative z-10 pt-36 pb-24">
          <FadeIn delay={0.2}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
              <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase font-body">Market Watch</p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-8 max-w-3xl">
              Sustainability data.<br />
              <span className="text-green-light">Africa in focus.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/70 text-lg font-body font-light max-w-xl leading-relaxed">
              Live indicators from key markets and curated ESG news — updated weekly.
            </p>
          </FadeIn>
          <FadeIn delay={0.8}>
            <p className="text-white/30 text-xs font-body mt-6">
              Last updated: {formatDate(marketData.lastFetched)}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Data Dashboard */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <BarChart3 size={18} className="text-green" />
              <p className="text-green text-sm font-medium tracking-[0.15em] uppercase font-body">Africa Sustainability Indicators</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading mb-4 max-w-lg">
              Key metrics across 15 African economies.
            </h2>
            <p className="text-charcoal/60 text-sm font-body mb-16">
              News aggregated from leading sources. Updated weekly.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dataSections.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.1}>
                <div className="glass-card p-8 border border-gray-100 bg-white">
                  <div className="flex items-center gap-3 mb-1">
                    <section.icon size={18} className="text-green" />
                    <h3 className="font-heading font-bold text-charcoal text-base">{section.title}</h3>
                  </div>
                  <p className="text-charcoal/50 text-[11px] font-body mb-6 ml-[30px]">{section.subtitle}</p>
                  {section.data.length > 0 ? (
                    <BarChart data={section.data} unit={section.unit} color={section.color} />
                  ) : (
                    <p className="text-charcoal/50 text-sm font-body italic">Data temporarily unavailable</p>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="bg-cream-light">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-3">
              <Rss size={18} className="text-green" />
              <p className="text-green text-sm font-medium tracking-[0.15em] uppercase font-body">Curated News</p>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading mb-4 max-w-lg">
              Sustainability & climate finance news.
            </h2>
            <p className="text-charcoal/60 text-sm font-body mb-16">
              Aggregated from leading climate and development news sources.
            </p>
          </FadeIn>

          {news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((item, i) => (
                <FadeIn key={`${item.link}-${i}`} delay={i * 0.05}>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card p-5 border border-gray-100 bg-white group flex items-start gap-4 hover:border-green/20"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-medium font-body bg-green/5 text-green">
                          {item.source}
                        </span>
                        {item.pubDate && (
                          <span className="text-[10px] text-charcoal/50 font-body">
                            {formatDate(item.pubDate)}
                          </span>
                        )}
                      </div>
                      <h3 className="text-charcoal text-sm font-medium font-body leading-snug group-hover:text-green transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                    <ExternalLink size={14} className="text-charcoal/30 group-hover:text-green transition-colors flex-shrink-0 mt-1" />
                  </a>
                </FadeIn>
              ))}
            </div>
          ) : (
            <FadeIn>
              <div className="glass-card p-8 border border-gray-100 bg-white text-center">
                <p className="text-charcoal/50 text-sm font-body">News feeds are being refreshed. Check back soon.</p>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Data Sources — no CTA */}
      <section className="bg-white !py-16">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24">
          <FadeIn>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-heading font-bold text-charcoal text-sm mb-2">Data Sources</h3>
              <p className="text-charcoal/60 text-[12px] font-body leading-relaxed max-w-2xl">
                News aggregated from leading sources. Updated weekly.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
