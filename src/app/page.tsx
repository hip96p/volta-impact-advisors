'use client';

import Link from 'next/link';
import { Building2, TrendingUp, Landmark, Globe, GraduationCap, ArrowRight, Shield, Target, Lightbulb, Users } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Counter from '@/components/Counter';

const segments = [
  { icon: Building2, title: 'Banks', desc: 'PRB, IFRS S1/S2, green bonds, climate finance', href: '/services#banks', color: 'bg-blue-50 text-blue-600' },
  { icon: TrendingUp, title: 'Investors', desc: 'Impact reports, ESG due diligence, validation', href: '/services#investors', color: 'bg-emerald-50 text-emerald-600' },
  { icon: Landmark, title: 'Governments', desc: 'Climate strategy, program design, carbon markets', href: '/services#governments', color: 'bg-amber-50 text-amber-600' },
  { icon: Globe, title: 'DFIs', desc: 'ESIA, impact assessment, IFC compliance', href: '/services#dfis', color: 'bg-purple-50 text-purple-600' },
  { icon: GraduationCap, title: 'Everyone', desc: 'ESG training, EIA, carbon accounting, CSR', href: '/services#cross-cutting', color: 'bg-rose-50 text-rose-600' },
];

const frameworks = [
  'IFRS S1/S2', 'CSRD/ESRS', 'PRB', 'IFC PS', 'TCFD', 'TNFD',
  'SBTi', 'EU Taxonomy', 'GRI', 'CDP', 'PRI', 'NZAOA', 'UN Global Compact', 'ICMA',
];

const logos = [
  'African Development Bank', 'IFC', 'World Bank', 'British International Investment',
  'Africa Finance Corporation', 'Standard Chartered', 'Standard Bank', 'Citigroup', 'UBS',
];

const differentiators = [
  { icon: Target, title: 'Implementation Focus', desc: 'We go beyond reports to operational change' },
  { icon: Shield, title: 'Africa Expertise', desc: 'Deep local knowledge, not Western templates' },
  { icon: Lightbulb, title: 'Regulatory Bridge', desc: 'Translating global standards to local reality' },
  { icon: Users, title: 'Full Spectrum', desc: 'Banks, investors, DFIs, and governments' },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100vh] flex items-center bg-midnight overflow-hidden !pt-0 !pb-0">
        {/* Blobs */}
        <div className="gradient-blob w-[600px] h-[600px] bg-green -top-40 -right-40 absolute" />
        <div className="gradient-blob w-[400px] h-[400px] bg-teal bottom-0 -left-20 absolute" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 py-32">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-6 font-body">
              ESG &middot; Impact &middot; Sustainability
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[1.05] mb-8 max-w-4xl">
              Global standards.<br />
              <span className="text-green-light">Local impact.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-white/50 text-lg md:text-xl font-body font-light max-w-xl mb-12 leading-relaxed">
              Advisory for banks, investors, DFIs, and governments navigating ESG across Africa and emerging markets.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="bg-green text-white px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green/20">
                Explore Services
              </Link>
              <Link href="/contact" className="border border-white/20 text-white/80 px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-white/10 transition-all">
                Start a Conversation
              </Link>
            </div>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/10">
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
                  <div className="text-white/30 text-sm mt-2 font-body">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOGO TICKER ── */}
      <section className="bg-white !py-10 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-center text-[11px] text-charcoal/30 tracking-[0.15em] uppercase mb-6 font-body">Our team has worked with</p>
          <div className="overflow-hidden">
            <div className="flex gap-16 items-center animate-scroll">
              {[...logos, ...logos].map((name, i) => (
                <span key={i} className="text-charcoal/20 font-heading font-bold text-sm whitespace-nowrap hover:text-charcoal/50 transition">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-white grid-bg">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-3 font-body">Who We Serve</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading mb-6 max-w-lg">
              Five client segments.<br />One integrated practice.
            </h2>
            <p className="text-charcoal/50 font-body max-w-md mb-16 leading-relaxed">
              Tailored advisory that bridges international standards with local realities.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {segments.map((seg, i) => (
              <FadeIn key={seg.title} delay={i * 0.1}>
                <Link href={seg.href} className="glass-card p-6 group block border border-gray-100 bg-white">
                  <div className={`w-10 h-10 rounded-xl ${seg.color} flex items-center justify-center mb-4`}>
                    <seg.icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-base mb-1.5">{seg.title}</h3>
                  <p className="text-charcoal/40 text-[13px] font-body leading-relaxed mb-4">{seg.desc}</p>
                  <ArrowRight size={14} className="text-green opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-cream/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <FadeIn>
                <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-3 font-body">Why Us</p>
                <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading mb-6 leading-tight">
                  Not another Western template.
                </h2>
                <p className="text-charcoal/50 font-body leading-relaxed mb-12 max-w-md">
                  We combine deep Africa expertise with international standards knowledge to deliver solutions that work on the ground.
                </p>
              </FadeIn>

              <div className="grid grid-cols-2 gap-6">
                {differentiators.map((d, i) => (
                  <FadeIn key={d.title} delay={i * 0.1}>
                    <div>
                      <d.icon size={20} className="text-green mb-3" />
                      <h4 className="font-heading font-bold text-navy text-sm mb-1">{d.title}</h4>
                      <p className="text-charcoal/40 text-[13px] font-body">{d.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn direction="left">
              <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
                <h3 className="text-sm font-heading font-bold text-navy mb-6 uppercase tracking-wider">Frameworks</h3>
                <div className="flex flex-wrap gap-2.5">
                  {frameworks.map((fw) => (
                    <span key={fw} className="bg-green/5 text-green/80 border border-green/10 px-3.5 py-1.5 rounded-full text-[12px] font-medium font-body">
                      {fw}
                    </span>
                  ))}
                </div>
                <Link href="/frameworks" className="inline-flex items-center gap-2 text-green text-sm font-medium font-body mt-8 hover:gap-3 transition-all">
                  Explore frameworks <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-midnight relative overflow-hidden !py-28">
        <div className="gradient-blob w-[500px] h-[500px] bg-green top-0 right-0 absolute" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-5">
              Ready to start?
            </h2>
            <p className="text-white/40 text-lg font-body mb-10 max-w-md mx-auto">
              From PRB compliance to impact assessment — let&apos;s talk about what you need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green/20">
                Get in Touch
              </Link>
              <Link href="/services" className="border border-white/20 text-white/70 px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-white/10 transition-all">
                View All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
