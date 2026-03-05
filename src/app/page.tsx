'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Shield, Target, Lightbulb, Users } from 'lucide-react';
import FadeIn from '@/components/FadeIn';
import Counter from '@/components/Counter';
import RotatingText from '@/components/RotatingText';

const rotatingWords = [
  { word: 'sustainability', color: '#09814A' },
  { word: 'ESG', color: '#E07B53' },
  { word: 'impact', color: '#FFCA3A' },
  { word: 'CSR', color: '#C45BAA' },
  { word: 'climate action', color: '#D4A843' },
];

const segments = [
  { title: 'Banks & Financial Institutions', desc: 'You need more than a checklist — you need ESG embedded into how your bank actually operates. From PRB reporting to climate risk stress testing, we help you stay ahead of regulators, access new markets, and turn sustainability into a genuine competitive advantage.', href: '/services#banks' },
  { title: 'Investors & Asset Managers', desc: 'Your LPs and stakeholders want to see impact — not just returns. We help you build credible impact measurement frameworks, integrate ESG across your portfolio, and report with confidence so you can raise your next fund on a track record that stands up to scrutiny.', href: '/services#investors' },
  { title: 'Governments & Public Sector', desc: 'You set the rules and the direction. We help you design national climate strategies, develop green taxonomies, and build the institutional readiness to unlock international climate finance — so your ambitions translate into real programs on the ground.', href: '/services#governments' },
  { title: 'Development Finance', desc: 'Your investments need to meet the highest environmental and social standards — without slowing you down. We provide end-to-end E&S advisory, from pre-investment due diligence to independent evaluations, so you can deploy capital with confidence.', href: '/services#development-finance' },
];

const caseStudies = [
  {
    tag: 'Banking',
    title: 'PRB Reporting & Impact Analysis',
    client: 'Leading West African Bank',
    summary: 'Developed a comprehensive Principles for Responsible Banking framework, including impact analysis, target-setting, and first reporting cycle — enabling the bank to demonstrate alignment with the SDGs and Paris Agreement.',
  },
  {
    tag: 'Climate Finance',
    title: 'Sustainable Finance & Paris Alignment',
    client: 'Major Development Finance Institution',
    summary: 'Supported Paris Alignment assessment for financial intermediary investments in Sub-Saharan Africa, evaluating climate risk exposure and developing actionable transition pathways for portfolio companies.',
  },
];

const differentiators = [
  { icon: Target, title: 'Implementation Focus', desc: 'We go beyond reports to embed real operational change across your organization.' },
  { icon: Shield, title: 'Africa Expertise', desc: 'Deep local knowledge means solutions that actually work on the ground — not one size fits all.' },
  { icon: Lightbulb, title: 'Regulatory Bridge', desc: 'We translate complex global standards into practical, locally-adapted implementation plans.' },
  { icon: Users, title: 'Full Spectrum', desc: 'Banks, investors, development finance institutions, and governments — all under one roof.' },
];

const logos = [
  'African Development Bank', 'IFC', 'World Bank', 'British International Investment',
  'Africa Finance Corporation', 'Standard Chartered', 'Standard Bank', 'Citigroup', 'UBS',
];

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[100vh] flex items-center bg-charcoal overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[600px] h-[600px] bg-green -top-40 -right-40 absolute" />
        <div className="gradient-blob w-[400px] h-[400px] bg-teal bottom-0 -left-20 absolute" />

        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24 relative z-10 pt-36 pb-24">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-8 font-body">
              ESG &middot; Impact &middot; Sustainability
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <h1 className="text-white text-4xl md:text-6xl lg:text-[4.5rem] font-heading font-bold leading-[1.1] max-w-4xl">
              Turning{' '}
              <RotatingText words={rotatingWords} />
              <br />
              into a competitive advantage.
            </h1>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-white/70 text-lg font-body font-light max-w-xl leading-relaxed mt-12">
              Advisory for banks, investors, development finance institutions, and governments navigating ESG across Africa and emerging markets.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-wrap gap-4 mt-16">
              <Link href="/services" className="bg-green text-white px-7 py-3 rounded-md text-sm font-medium font-body hover:bg-green-light transition-all inline-flex items-center gap-2">
                Our Services <ArrowRight size={15} />
              </Link>
              <Link href="/contact" className="bg-white/10 text-white border border-white/20 px-7 py-3 rounded-md text-sm font-medium font-body hover:bg-white/20 transition-all">
                Start a Conversation
              </Link>
            </div>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-20 pt-12 border-t border-white/10">
            {[
              { target: 40, suffix: '+', label: 'Services' },
              { target: 15, suffix: '+', label: 'Frameworks' },
              { target: 23, suffix: '', label: 'Countries' },
              { target: 20, suffix: '+', label: 'Years Experience' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={1 + i * 0.1}>
                <div>
                  <div className="text-white font-heading font-bold text-4xl md:text-5xl">
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
      <section className="bg-cream-light !py-12">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24">
          <p className="text-center text-[12px] text-charcoal tracking-[0.15em] uppercase mb-6 font-body font-semibold">Our team has worked with</p>
          <div className="overflow-hidden">
            <div className="flex gap-16 items-center animate-scroll">
              {[...logos, ...logos].map((name, i) => (
                <span key={i} className="text-charcoal/40 font-heading font-bold text-sm whitespace-nowrap">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE SERVE ── */}
      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading mb-8 max-w-lg leading-tight">
              Rapidly evolving needs and expectations. One integrated practice.
            </h2>
            <p className="text-charcoal/70 font-body max-w-2xl mb-20 leading-relaxed">
              We deliver tailored advisory that bridges international sustainability standards with local African realities. Each client segment gets solutions designed for their specific regulatory, operational, and strategic context.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {segments.map((seg, i) => (
              <FadeIn key={seg.title} delay={i * 0.08}>
                <Link href={seg.href} className="block p-8 rounded-xl border border-gray-100 bg-white hover:border-green/20 hover:shadow-md hover:shadow-green/5 transition-all group">
                  <h3 className="font-heading font-bold text-charcoal text-lg mb-4 group-hover:text-green transition-colors">{seg.title}</h3>
                  <p className="text-charcoal/60 text-sm font-body leading-relaxed mb-5">{seg.desc}</p>
                  <span className="text-green text-[13px] font-medium font-body inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                    Learn more <ArrowRight size={13} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="bg-cream-light">
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Why Us</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading mb-8 leading-tight max-w-lg">
              Not another one size fits all.
            </h2>
            <p className="text-charcoal/70 font-body leading-relaxed mb-20 max-w-2xl">
              Most ESG advisory firms apply the same playbooks everywhere. We combine deep Africa expertise with international standards knowledge to deliver solutions that work on the ground — because different markets demand different approaches.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
            {differentiators.map((d, i) => (
              <FadeIn key={d.title} delay={i * 0.1}>
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-lg bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <d.icon size={20} className="text-green" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-charcoal text-base mb-3">{d.title}</h4>
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
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24">
          <FadeIn>
            <p className="text-green text-sm font-medium tracking-[0.15em] uppercase mb-4 font-body">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal font-heading mb-16 max-w-lg leading-tight">
              Impact in practice.
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((cs, i) => (
              <FadeIn key={cs.title} delay={i * 0.1}>
                <div className="border border-gray-100 rounded-xl p-8 h-full flex flex-col">
                  <span className="inline-block px-3 py-1 rounded-md text-[11px] font-medium font-body bg-green/5 text-green mb-6 self-start">
                    {cs.tag}
                  </span>
                  <h3 className="font-heading font-bold text-charcoal text-xl mb-3">{cs.title}</h3>
                  <p className="text-charcoal/50 text-[13px] font-body mb-5">{cs.client}</p>
                  <p className="text-charcoal/60 text-sm font-body leading-relaxed flex-1">{cs.summary}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── READY TO START — Contact Form ── */}
      <section className="bg-charcoal relative overflow-hidden">
        <div className="gradient-blob w-[500px] h-[500px] bg-green top-0 right-0 absolute" />
        <div className="max-w-[1200px] mx-auto px-8 sm:px-12 md:px-20 lg:px-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
                  Ready to start?
                </h2>
                <p className="text-white/60 text-lg font-body leading-relaxed max-w-md">
                  From PRB implementation to impact assessment — tell us what you need and we&apos;ll be in touch.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              {submitted ? (
                <div className="bg-white/10 rounded-xl p-8 text-center">
                  <p className="text-white font-heading font-bold text-xl mb-2">Thank you!</p>
                  <p className="text-white/60 font-body text-sm">We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-5 py-3 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-green/50 transition"
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-5 py-3 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-green/50 transition"
                  />
                  <textarea
                    placeholder="How can we help?"
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white/10 border border-white/15 rounded-lg px-5 py-3 text-white text-sm font-body placeholder:text-white/30 focus:outline-none focus:border-green/50 transition resize-none"
                  />
                  <button type="submit" className="bg-green text-white px-8 py-3 rounded-md text-sm font-medium font-body hover:bg-green-light transition-all w-full">
                    Send Message
                  </button>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
