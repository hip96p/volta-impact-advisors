'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const frameworks = [
  { name: 'IFRS S1/S2', full: 'Sustainability Disclosure Standards', demand: 'Very High', category: 'Reporting', desc: 'Global baseline for sustainability reporting. 36+ jurisdictions adopting.' },
  { name: 'CSRD / ESRS', full: 'Corporate Sustainability Reporting Directive', demand: 'Very High', category: 'Reporting', desc: 'EU\'s comprehensive ESG reporting mandate. Double materiality, value chain reporting.' },
  { name: 'PRB', full: 'Principles for Responsible Banking', demand: 'High', category: 'Banking', desc: 'UNEP FI framework for banks to align with SDGs and Paris Agreement.' },
  { name: 'IFC PS', full: 'IFC Performance Standards', demand: 'Steady', category: 'E&S', desc: 'Eight standards defining E&S responsibilities. Foundational for all DFI projects.' },
  { name: 'TCFD / TNFD', full: 'Climate & Nature Financial Disclosures', demand: 'Growing', category: 'Climate', desc: 'Climate and nature-related risk disclosure. TCFD now embedded in IFRS S2.' },
  { name: 'SBTi', full: 'Science Based Targets initiative', demand: 'High', category: 'Climate', desc: 'Paris-aligned emission reduction targets. 7,000+ companies committed.' },
  { name: 'EU Taxonomy', full: 'Taxonomy for Sustainable Activities', demand: 'High', category: 'Classification', desc: 'Classification system for environmentally sustainable economic activities.' },
  { name: 'GRI / SASB / CDP', full: 'Global Reporting Standards', demand: 'Steady', category: 'Reporting', desc: 'Most widely used sustainability reporting frameworks globally.' },
  { name: 'UN Global Compact', full: 'Ten Principles Initiative', demand: 'Moderate', category: 'Principles', desc: 'World\'s largest corporate sustainability initiative. 20,000+ participants.' },
  { name: 'PRI', full: 'Principles for Responsible Investment', demand: 'High', category: 'Investment', desc: 'Leading responsible investment framework. 5,000+ signatories, $120T+ AUM.' },
  { name: 'NZAOA', full: 'Net-Zero Asset Owners Alliance', demand: 'Growing', category: 'Climate', desc: 'Institutional investors committed to net-zero portfolios by 2050.' },
  { name: 'ICMA', full: 'Green/Social/Sustainability Bond Principles', demand: 'High', category: 'Bonds', desc: 'Market standard for $4T+ in labeled bonds. Use of proceeds, reporting.' },
];

const demandColor: Record<string, string> = {
  'Very High': 'bg-green/10 text-green',
  'High': 'bg-teal/10 text-teal',
  'Growing': 'bg-sunglow/20 text-amber-700',
  'Steady': 'bg-blue-50 text-blue-600',
  'Moderate': 'bg-gray-100 text-gray-500',
};

const categoryColor: Record<string, string> = {
  'Reporting': 'bg-blue-50 text-blue-600',
  'Banking': 'bg-emerald-50 text-emerald-600',
  'E&S': 'bg-purple-50 text-purple-600',
  'Climate': 'bg-amber-50 text-amber-700',
  'Classification': 'bg-rose-50 text-rose-600',
  'Principles': 'bg-cyan-50 text-cyan-700',
  'Investment': 'bg-indigo-50 text-indigo-600',
  'Bonds': 'bg-green/5 text-green',
};

export default function FrameworksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-midnight overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[500px] h-[500px] bg-teal -top-20 -left-20 absolute" />
        <div className="gradient-blob w-[300px] h-[300px] bg-green bottom-0 right-10 absolute" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 py-32">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-6 font-body">Frameworks & Standards</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-8 max-w-3xl">
              15+ international frameworks.<br />
              <span className="text-green-light">One expert team.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/50 text-lg font-body font-light max-w-xl leading-relaxed">
              Translating global requirements into practical, locally-adapted implementation plans.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Framework Grid */}
      <section className="bg-white grid-bg">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-3 font-body">All Frameworks</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-16 max-w-lg">
              Deep expertise across every major standard.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {frameworks.map((fw, i) => (
              <FadeIn key={fw.name} delay={i * 0.05}>
                <div className="glass-card p-6 border border-gray-100 bg-white group h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium font-body ${categoryColor[fw.category] || 'bg-gray-100 text-gray-500'}`}>
                      {fw.category}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium font-body ${demandColor[fw.demand]}`}>
                      {fw.demand}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-lg mb-1">{fw.name}</h3>
                  <p className="text-charcoal/30 text-[11px] font-body mb-3">{fw.full}</p>
                  <p className="text-charcoal/50 text-sm font-body leading-relaxed mb-4 flex-1">{fw.desc}</p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-green text-[13px] font-medium font-body opacity-0 group-hover:opacity-100 transition-opacity">
                    Get expert help <ArrowRight size={12} />
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight relative overflow-hidden !py-28">
        <div className="gradient-blob w-[500px] h-[500px] bg-green top-0 left-0 absolute" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-5">
              Working with a framework not listed?
            </h2>
            <p className="text-white/40 text-lg font-body mb-10 max-w-md mx-auto">
              We have experience across the full spectrum of ESG and sustainability standards.
            </p>
            <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green/20">
              Get Expert Guidance
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
