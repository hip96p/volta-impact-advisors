'use client';

import Link from 'next/link';
import { Target, Shield, Lightbulb, Users, Handshake, BookOpen, Check, X } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Counter from '@/components/Counter';

const values = [
  { icon: Target, title: 'Context Over Templates', desc: 'We adapt global frameworks to local realities — because what works in London rarely works in Lagos without translation.' },
  { icon: Shield, title: 'Impact That Counts', desc: 'Measurable, verifiable outcomes over checkbox compliance. We focus on what actually moves the needle.' },
  { icon: Lightbulb, title: 'Implementation First', desc: 'Operational execution, not shelf-ready reports. Our work is designed to be acted on immediately.' },
  { icon: Users, title: 'Integrity & Independence', desc: 'Honest, evidence-based advice with no conflicts. We tell you what you need to hear, not what you want to hear.' },
  { icon: Handshake, title: 'Collaborative Partnership', desc: 'We embed within your team as co-creators, building solutions together rather than delivering prescriptions.' },
  { icon: BookOpen, title: 'Knowledge Transfer', desc: 'Building local capacity, not dependency. Every engagement leaves your team stronger and more capable.' },
];

const competitors = [
  { label: 'Big Four', weakness: 'Expensive, slow, and generalist — applying the same template everywhere regardless of context.' },
  { label: 'Global ESG Specialists', weakness: 'Western-centric frameworks that miss the nuances of African markets and institutions.' },
  { label: 'Local Consultancies', weakness: 'Limited breadth and scale — deep in one area but lacking the full-spectrum capability needed.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center bg-midnight overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[500px] h-[500px] bg-teal -top-20 -right-20 absolute" />
        <div className="gradient-blob w-[300px] h-[300px] bg-green bottom-10 -left-10 absolute" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 py-32">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-6 font-body">About Us</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-8 max-w-3xl">
              Where global expertise meets <span className="text-green-light">African reality.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/70 text-lg font-body font-light max-w-xl leading-relaxed">
              The ESG, impact, and sustainability practice of Volta Partners — purpose-built for Africa and emerging markets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission / Approach */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <FadeIn>
              <div>
                <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-3 font-body">Our Mission</p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-6">
                  Leading ESG advisory for emerging markets.
                </h2>
                <p className="text-charcoal/70 font-body leading-relaxed">
                  We bridge the gap between global ESG frameworks and local implementation — serving banks, investors, DFIs, and governments with practical, actionable solutions that drive measurable impact across Africa and beyond.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-3 font-body">Our Approach</p>
                <h2 className="text-3xl md:text-4xl font-bold text-navy font-heading mb-6">
                  Different markets need different solutions.
                </h2>
                <p className="text-charcoal/70 font-body leading-relaxed">
                  Data gaps, institutional contexts, and stakeholder dynamics in emerging markets demand localized expertise — not off-the-shelf Western playbooks. We bring the contextual understanding that makes the difference between a report and real change.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-100">
            {[
              { target: 20, suffix: '+', label: 'Years Experience' },
              { target: 23, suffix: '', label: 'Countries Served' },
              { target: 5, suffix: '', label: 'Client Segments' },
              { target: 15, suffix: '+', label: 'Frameworks' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-green font-heading font-bold text-4xl">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-charcoal/60 text-sm mt-2 font-body">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* The Gap We Fill */}
      <section className="bg-cream/50 grid-bg">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-3 font-body">The Gap We Fill</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading mb-6 max-w-lg">
              Why existing options fall short.
            </h2>
            <p className="text-charcoal/70 font-body leading-relaxed max-w-2xl mb-16">
              The ESG advisory landscape in Africa is fragmented. Big firms bring global templates without local context, while local consultancies lack the breadth to cover the full spectrum of frameworks and standards. We built Volta Impact Advisors to fill this gap.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {competitors.map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100">
                  <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center mb-4">
                    <X size={16} className="text-red-400" />
                  </div>
                  <h3 className="font-heading font-bold text-navy mb-2">{c.label}</h3>
                  <p className="text-charcoal/60 text-sm font-body leading-relaxed">{c.weakness}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <div className="bg-green/5 rounded-2xl p-8 border border-green/15 flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check size={16} className="text-green" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-green mb-1">Volta Impact Advisors</h3>
                <p className="text-charcoal/70 text-sm font-body leading-relaxed">Deep Africa expertise + international standards knowledge + full client coverage + affordable excellence.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-3 font-body">Our Values</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy font-heading mb-6 max-w-lg">
              What drives us.
            </h2>
            <p className="text-charcoal/70 font-body leading-relaxed max-w-2xl mb-16">
              Every engagement we take on is guided by these principles. They shape how we work, who we hire, and the kind of impact we strive to create.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="glass-card p-8 border border-gray-100 bg-white">
                  <v.icon size={22} className="text-green mb-4" />
                  <h3 className="font-heading font-bold text-navy text-base mb-2">{v.title}</h3>
                  <p className="text-charcoal/60 text-sm font-body leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight relative overflow-hidden !py-28">
        <div className="gradient-blob w-[500px] h-[500px] bg-green top-0 right-0 absolute" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-5">
              Join us in shaping a sustainable future.
            </h2>
            <p className="text-white/60 text-lg font-body mb-10 max-w-md mx-auto">
              Whether you are a bank, DFI, investor, or government — we are ready to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green/20">
                Start a Conversation
              </Link>
              <Link href="/services" className="border border-white/30 text-white/80 px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-white/10 transition-all">
                Explore Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
