'use client';

import Link from 'next/link';
import { Target, Shield, Lightbulb, Users, Handshake, BookOpen } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Counter from '@/components/Counter';

const values = [
  { icon: Target, title: 'Context Over Templates', desc: 'We adapt global frameworks to local realities — because what works in London rarely works in Lagos without translation.' },
  { icon: Shield, title: 'Impact That Counts', desc: 'Measurable, verifiable outcomes over checkbox compliance. We focus on what actually moves the needle.' },
  { icon: Lightbulb, title: 'Implementation First', desc: 'Operational execution, not shelf-ready reports. Our work is designed to be acted on immediately.' },
  { icon: Users, title: 'Integrity & Independence', desc: 'Honest, evidence-based advice with no conflicts. We tell you what you need to hear.' },
  { icon: Handshake, title: 'Collaborative Partnership', desc: 'We embed within your team as co-creators, building solutions together rather than delivering prescriptions.' },
  { icon: BookOpen, title: 'Knowledge Transfer', desc: 'Building local capacity, not dependency. Every engagement leaves your team stronger.' },
];

const team = [
  {
    name: 'David Gavi',
    role: 'Founder & Managing Partner',
    bio: 'Over 20 years of experience in ESG advisory, sustainable finance, and impact assessment across Africa and emerging markets. Previously held senior roles at leading DFIs and advisory firms. Specializes in PRB compliance, IFC Performance Standards, and climate finance strategy.',
    initials: 'DG',
  },
  {
    name: 'Dolapo Fasawe',
    role: 'Partner, Strategy & Operations',
    bio: 'Extensive experience in strategy consulting and operations across West Africa. Specializes in ESG integration for financial institutions, corporate sustainability strategy, and organizational transformation.',
    initials: 'DF',
  },
  {
    name: 'Tobi Adesanya',
    role: 'Partner, Renewable Energy & Climate',
    bio: 'Deep expertise in renewable energy project development, climate finance, and energy transition across Sub-Saharan Africa. Focuses on carbon markets, clean energy investment, and just transition planning.',
    initials: 'TA',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-charcoal overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[500px] h-[500px] bg-teal -top-20 -right-20 absolute" />
        <div className="gradient-blob w-[300px] h-[300px] bg-green bottom-10 -left-10 absolute" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 py-32">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-8 font-body">About Us</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-4xl md:text-6xl font-heading font-bold leading-[1.1] mb-10 max-w-3xl">
              Where global expertise meets African reality.
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/60 text-lg font-body font-light max-w-xl leading-relaxed">
              The ESG, impact, and sustainability practice of Volta Partners — purpose-built for Africa and emerging markets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission / Approach */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <FadeIn>
              <div>
                <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Our Mission</p>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-heading mb-6">
                  Leading ESG advisory for emerging markets.
                </h2>
                <p className="text-charcoal/70 font-body leading-relaxed">
                  We bridge the gap between global ESG frameworks and local implementation — serving banks, investors, development finance institutions, and governments with practical, actionable solutions that drive measurable impact across Africa and beyond.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Our Approach</p>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-heading mb-6">
                  Different markets need different solutions.
                </h2>
                <p className="text-charcoal/70 font-body leading-relaxed">
                  Data gaps, institutional contexts, and stakeholder dynamics in emerging markets demand localized expertise — not off-the-shelf Western playbooks. We bring the contextual understanding that makes the difference between a report and real change.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 pt-12 border-t border-gray-100">
            {[
              { target: 20, suffix: '+', label: 'Years Experience' },
              { target: 23, suffix: '', label: 'Countries Served' },
              { target: 4, suffix: '', label: 'Client Segments' },
              { target: 15, suffix: '+', label: 'Frameworks' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-green font-heading font-bold text-4xl">
                    <Counter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <div className="text-charcoal/50 text-sm mt-2 font-body">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-cream-light">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading mb-6 leading-tight max-w-lg">
              The people behind the practice.
            </h2>
            <p className="text-charcoal/70 font-body leading-relaxed max-w-2xl mb-16">
              Our leadership brings decades of hands-on experience across ESG advisory, sustainable finance, renewable energy, and impact assessment in Africa and emerging markets.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-gray-100">
                  <div className="w-14 h-14 rounded-lg bg-charcoal flex items-center justify-center mb-6">
                    <span className="text-green-light font-heading font-bold text-base">{member.initials}</span>
                  </div>
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-1">{member.name}</h3>
                  <p className="text-green text-[13px] font-medium font-body mb-4">{member.role}</p>
                  <p className="text-charcoal/60 text-sm font-body leading-relaxed">{member.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading mb-6 max-w-lg leading-tight">
              What drives us.
            </h2>
            <p className="text-charcoal/70 font-body leading-relaxed max-w-2xl mb-16">
              Every engagement we take on is guided by these principles. They shape how we work, who we hire, and the kind of impact we strive to create.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <v.icon size={20} className="text-green" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-charcoal text-base mb-2">{v.title}</h3>
                    <p className="text-charcoal/60 text-sm font-body leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal relative overflow-hidden">
        <div className="gradient-blob w-[500px] h-[500px] bg-green top-0 right-0 absolute" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Join us in shaping a sustainable future.
            </h2>
            <p className="text-white/50 text-lg font-body mb-12 max-w-md mx-auto leading-relaxed">
              Whether you are a bank, investor, development finance institution, or government — we are ready to help.
            </p>
            <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded-md text-sm font-medium font-body hover:bg-green-light transition-all inline-block">
              Start a Conversation
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
