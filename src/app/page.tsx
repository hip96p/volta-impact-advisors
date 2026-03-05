'use client';

import Link from 'next/link';
import { Building2, TrendingUp, Landmark, Globe, GraduationCap, ArrowRight, Shield, Target, Lightbulb, Users } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Counter from '@/components/Counter';
import RotatingText from '@/components/RotatingText';

const segments = [
  { icon: Building2, title: 'Banks', desc: 'PRB compliance, IFRS S1/S2, green bonds, climate finance, ESG risk integration.', href: '/services#banks' },
  { icon: TrendingUp, title: 'Investors', desc: 'Impact measurement, ESG due diligence, portfolio integration, SDG alignment.', href: '/services#investors' },
  { icon: Landmark, title: 'Governments', desc: 'National climate strategy, green taxonomy, carbon markets, just transition.', href: '/services#governments' },
  { icon: Globe, title: 'DFIs', desc: 'ESIA, IFC compliance, impact assessment, resettlement planning.', href: '/services#dfis' },
  { icon: GraduationCap, title: 'Cross-Cutting', desc: 'ESG training, carbon accounting, net-zero planning, EIA.', href: '/services#cross-cutting' },
];

const caseStudies = [
  {
    tag: 'Banking',
    title: 'PRB Reporting & Impact Analysis',
    client: 'Leading West African Bank',
    summary: 'Developed a comprehensive Principles for Responsible Banking framework, including impact analysis, target-setting, and first reporting cycle — enabling the bank to demonstrate alignment with the SDGs and Paris Agreement.',
  },
  {
    tag: 'DFI / Climate Finance',
    title: 'IFC Sustainable Finance & Paris Alignment',
    client: 'International Finance Corporation',
    summary: 'Supported IFC\'s Paris Alignment assessment for financial intermediary investments in Sub-Saharan Africa, evaluating climate risk exposure and developing actionable transition pathways for portfolio companies.',
  },
];

const differentiators = [
  { icon: Target, title: 'Implementation Focus', desc: 'We go beyond reports to embed real operational change.' },
  { icon: Shield, title: 'Africa Expertise', desc: 'Deep local knowledge — not imported Western templates.' },
  { icon: Lightbulb, title: 'Regulatory Bridge', desc: 'Translating global standards into local reality.' },
  { icon: Users, title: 'Full Spectrum', desc: 'Banks, investors, DFIs, and governments under one roof.' },
];

const logos = [
  'African Development Bank', 'IFC', 'World Bank', 'British International Investment',
  'Africa Finance Corporation', 'Standard Chartered', 'Standard Bank', 'Citigroup', 'UBS',
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100vh] flex items-center bg-midnight overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[600px] h-[600px] bg-green -top-40 -right-40 absolute" />
        <div className="gradient-blob w-[400px] h-[400px] bg-teal bottom-0 -left-20 absolute" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 py-32">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-8 font-body">
              ESG &middot; Impact &middot; Sustainability
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-heading font-bold leading-[1.05] mb-10 max-w-4xl">
              Turning{' '}
              <RotatingText
                words={['impact', 'ESG', 'sustainability', 'CSR']}
                className="text-green-light"
              />{' '}
              <br className="hidden md:block" />
              into action.
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-white/70 text-lg md:text-xl font-body font-light max-w-xl mb-14 leading-relaxed">
              Advisory for banks, investors, DFIs, and governments navigating ESG across Africa and emerging markets.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green/20 inline-block">
              Start a Conversation
            </Link>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-28 pt-12 border-t border-white/10">
            {[
              { target: 40, suffix: '+', label: 'Services' },
              { target: 15, suffix: '+', label: 'Frameworks' },
              { target: 23, suffix: '', label: 'Countries' },
              { target: 20, suffix: '+', label: 'Years Experience' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={1 + i * 0.1}>
                <div>
                  <div className="text-green-light font-heading font-bold text-4xl md:text-5xl">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/50 text-sm mt-2 font-body">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO TICKER ── */}
      <section className="bg-white !py-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-center text-[11px] text-charcoal/50 tracking-[0.15em] uppercase mb-6 font-body">Our team has worked with</p>
          <div className="overflow-hidden">
            <div className="flex gap-16 items-center animate-scroll">
              {[...logos, ...logos].map((name, i) => (
                <span key={i} className="text-charcoal/30 font-heading font-bold text-sm whitespace-nowrap hover:text-charcoal/60 transition">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Who We Serve</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading mb-6 max-w-lg leading-tight">
              Five client segments. One integrated practice.
            </h2>
            <p className="text-charcoal/70 font-body max-w-2xl mb-20 leading-relaxed text-base">
              We deliver tailored advisory that bridges international sustainability standards with local African realities — helping each client segment navigate their specific ESG challenges with practical, implementable solutions.
            </p>
          </FadeIn>

          <div className="space-y-6">
            {segments.map((seg, i) => (
              <FadeIn key={seg.title} delay={i * 0.08}>
                <Link href={seg.href} className="flex items-start gap-6 p-6 rounded-2xl border border-gray-100 bg-white hover:border-green/20 hover:shadow-sm transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-green/5 flex items-center justify-center flex-shrink-0">
                    <seg.icon size={22} className="text-green" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-bold text-navy text-lg mb-1">{seg.title}</h3>
                    <p className="text-charcoal/60 text-sm font-body leading-relaxed">{seg.desc}</p>
                  </div>
                  <ArrowRight size={16} className="text-charcoal/20 group-hover:text-green transition-colors mt-1 flex-shrink-0" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-cream/50">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Why Us</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading mb-6 leading-tight max-w-lg">
              Not another Western template.
            </h2>
            <p className="text-charcoal/70 font-body leading-relaxed mb-20 max-w-2xl text-base">
              Most ESG advisory firms apply the same playbooks everywhere. We combine deep Africa expertise with international standards knowledge to deliver solutions that work on the ground.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <d.icon size={22} className="text-green mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-heading font-bold text-navy text-base mb-1.5">{d.title}</h4>
                    <p className="text-charcoal/60 text-sm font-body leading-relaxed">{d.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDIES ── */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Selected Work</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading mb-20 max-w-lg leading-tight">
              Impact in practice.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.title} delay={i * 0.1}>
                <div className="border border-gray-100 rounded-2xl p-8 h-full flex flex-col">
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-medium font-body bg-green/5 text-green mb-5 self-start">
                    {cs.tag}
                  </span>
                  <h3 className="font-heading font-bold text-navy text-xl mb-2">{cs.title}</h3>
                  <p className="text-charcoal/50 text-[13px] font-body mb-4">{cs.client}</p>
                  <p className="text-charcoal/60 text-sm font-body leading-relaxed flex-1">{cs.summary}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-midnight relative overflow-hidden !py-28">
        <div className="gradient-blob w-[500px] h-[500px] bg-green top-0 right-0 absolute" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6">
              Ready to start?
            </h2>
            <p className="text-white/60 text-lg font-body mb-12 max-w-md mx-auto leading-relaxed">
              From PRB compliance to impact assessment — let&apos;s talk about what you need.
            </p>
            <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green/20 inline-block">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
