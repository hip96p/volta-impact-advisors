'use client';

import Link from 'next/link';
import { Building2, TrendingUp, Landmark, Globe, GraduationCap, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const segments = [
  {
    id: 'banks',
    icon: Building2,
    title: 'Banks & Financial Institutions',
    color: 'bg-blue-50 text-blue-600',
    tagline: 'Navigate regulatory compliance and mobilize sustainable finance.',
    services: [
      'PRB Reporting & Compliance',
      'IFRS S1/S2 Implementation',
      'Green/Social/Sustainability Bond Frameworks',
      'Bond Impact Reporting',
      'Sustainable & Climate Finance Mobilization',
      'TCFD / TNFD Alignment',
      'ESG Risk Integration',
      'Climate Risk Stress Testing',
      'Taxonomy Alignment',
    ],
  },
  {
    id: 'investors',
    icon: TrendingUp,
    title: 'Investors & Asset Managers',
    color: 'bg-emerald-50 text-emerald-600',
    tagline: 'Measure impact rigorously and integrate ESG into investment processes.',
    services: [
      'Impact Report Preparation',
      'External Impact Validation',
      'IRIS+ / IMP Alignment',
      'ESG Due Diligence (PE/VC)',
      'Portfolio ESG Integration',
      'SDG Alignment & Reporting',
      'Carbon Footprint / GHG Accounting (PCAF)',
      'ESG Value Creation Advisory',
    ],
  },
  {
    id: 'governments',
    icon: Landmark,
    title: 'Governments & Public Sector',
    color: 'bg-amber-50 text-amber-600',
    tagline: 'Design sustainability programs and access climate finance.',
    services: [
      'Sustainability Program Design',
      'Program Implementation Support',
      'National Climate Strategy / NDC',
      'Green Taxonomy Development',
      'Climate Finance Readiness',
      'Just Transition Planning',
      'Carbon Market Development',
      'Green Public Procurement',
    ],
  },
  {
    id: 'dfis',
    icon: Globe,
    title: 'DFIs & Development Partners',
    color: 'bg-purple-50 text-purple-600',
    tagline: 'Conduct rigorous assessments and ensure E&S compliance.',
    services: [
      'Impact Assessment (Ex-ante & Ex-post)',
      'E&S / ESIA Due Diligence',
      'Lender-Grade E&S Impact Assessment',
      'ESAP Development',
      'Independent / Midterm Evaluation',
      'IFC Performance Standards Gap Analysis',
      'Resettlement Action Plans',
      'Gender & Social Inclusion Analysis',
      'Biodiversity Action Plans',
      'Stakeholder Engagement',
    ],
  },
  {
    id: 'cross-cutting',
    icon: GraduationCap,
    title: 'Cross-Cutting Services',
    color: 'bg-rose-50 text-rose-600',
    tagline: 'Foundational capabilities serving all client types.',
    services: [
      'ESG Training & Capacity Building',
      'Environmental Impact Assessment (EIA)',
      'Carbon Accounting & GHG Inventory',
      'Science-Based Targets (SBTi)',
      'ESG Reporting (GRI, SASB, CDP)',
      'CSR Strategy & Implementation',
      'Climate Vulnerability Assessment',
      'Supply Chain ESG Due Diligence',
      'Circular Economy Strategy',
      'Water Stewardship',
      'Net Zero Strategy & Transition Planning',
      'International Framework Implementation',
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center bg-midnight overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[500px] h-[500px] bg-green -top-20 -right-20 absolute" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 py-32">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-6 font-body">Our Services</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-8 max-w-3xl">
              Comprehensive ESG advisory.<br />
              <span className="text-green-light">Every stakeholder.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/50 text-lg font-body font-light max-w-xl leading-relaxed mb-10">
              Over 40 specialized services organized by client segment.
            </p>
          </FadeIn>

          {/* Quick nav pills */}
          <FadeIn delay={0.8}>
            <div className="flex flex-wrap gap-3">
              {segments.map((seg) => (
                <a key={seg.id} href={`#${seg.id}`} className="bg-white/10 hover:bg-green/30 text-white px-4 py-2 rounded-full text-[13px] font-body transition flex items-center gap-2">
                  <seg.icon size={14} />
                  {seg.title.split(' & ')[0]}
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Service Segments */}
      {segments.map((segment, idx) => (
        <section key={segment.id} id={segment.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-cream/50 grid-bg'}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
              {/* Left — Segment header */}
              <FadeIn>
                <div className="lg:sticky lg:top-28">
                  <div className={`w-12 h-12 rounded-xl ${segment.color} flex items-center justify-center mb-5`}>
                    <segment.icon size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-3">
                    {segment.title}
                  </h2>
                  <p className="text-charcoal/50 font-body leading-relaxed mb-6">
                    {segment.tagline}
                  </p>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-green text-sm font-medium font-body hover:gap-3 transition-all">
                    Discuss your needs <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>

              {/* Right — Service list */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {segment.services.map((service, i) => (
                    <FadeIn key={service} delay={i * 0.05}>
                      <div className="glass-card p-5 border border-gray-100 bg-white flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0 group-hover:scale-150 transition-transform" />
                        <span className="text-navy font-body text-sm font-medium">{service}</span>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-green relative overflow-hidden !py-24">
        <div className="gradient-blob w-[400px] h-[400px] bg-white/20 -top-20 -left-20 absolute" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-5">
              Need something specific?
            </h2>
            <p className="text-white/70 text-lg font-body mb-10 max-w-md mx-auto">
              We tailor our advisory to your exact challenge.
            </p>
            <Link href="/contact" className="bg-white text-green px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-white/90 transition-all hover:shadow-lg">
              Let&apos;s Talk
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
