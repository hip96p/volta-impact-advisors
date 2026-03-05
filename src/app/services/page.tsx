'use client';

import Link from 'next/link';
import { Building2, TrendingUp, Landmark, Globe, GraduationCap, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const segments = [
  {
    id: 'banks',
    icon: Building2,
    title: 'Banks & Financial Institutions',
    intro: 'Financial institutions face growing pressure to align with global sustainability frameworks while remaining competitive. We help banks integrate ESG into their core operations — from regulatory compliance and risk management to green bond issuance and climate finance mobilization.',
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
    frameworks: ['PRB', 'IFRS S1/S2', 'TCFD', 'TNFD', 'EU Taxonomy', 'ICMA'],
  },
  {
    id: 'investors',
    icon: TrendingUp,
    title: 'Investors & Asset Managers',
    intro: 'Investors increasingly need to demonstrate impact alongside returns. We support asset managers and fund managers with rigorous impact measurement, ESG integration across portfolios, and alignment with leading investment frameworks.',
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
    frameworks: ['PRI', 'NZAOA', 'GRI', 'SASB', 'CDP', 'SBTi'],
  },
  {
    id: 'governments',
    icon: Landmark,
    title: 'Governments & Public Sector',
    intro: 'Governments play a critical role in creating enabling environments for sustainable development. We help public sector clients design and implement national climate strategies, develop green taxonomies, and build readiness to access international climate finance.',
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
    frameworks: ['UN Global Compact', 'EU Taxonomy', 'SBTi'],
  },
  {
    id: 'dfis',
    icon: Globe,
    title: 'DFIs & Development Partners',
    intro: 'Development finance institutions require robust environmental and social safeguards across their investment portfolios. We provide end-to-end E&S advisory — from pre-investment due diligence and IFC Performance Standards compliance to independent evaluations and resettlement planning.',
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
    frameworks: ['IFC PS', 'CSRD / ESRS'],
  },
  {
    id: 'cross-cutting',
    icon: GraduationCap,
    title: 'Cross-Cutting Services',
    intro: 'Some capabilities cut across all client segments. Whether you need to build internal ESG capacity through training, establish carbon accounting systems, or develop a net-zero transition roadmap, these foundational services support organizations at every stage of their sustainability journey.',
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
    frameworks: ['GRI', 'SASB', 'CDP', 'SBTi', 'IFRS S1/S2', 'CSRD / ESRS'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center bg-midnight overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[500px] h-[500px] bg-green -top-20 -right-20 absolute" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 py-32">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-8 font-body">Services & Frameworks</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-10 max-w-3xl">
              What we do.
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/70 text-lg font-body font-light max-w-xl leading-relaxed mb-10">
              Over 40 specialized services across 15+ international frameworks — organized by who we serve, adapted for Africa and emerging markets.
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
        <section key={segment.id} id={segment.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-cream/50'}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
              {/* Left — Segment header */}
              <FadeIn className="lg:col-span-2">
                <div className="lg:sticky lg:top-28">
                  <div className="w-12 h-12 rounded-xl bg-green/5 flex items-center justify-center mb-6">
                    <segment.icon size={24} className="text-green" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-navy font-heading mb-4">
                    {segment.title}
                  </h2>
                  <p className="text-charcoal/70 font-body leading-relaxed mb-8 text-[15px]">
                    {segment.intro}
                  </p>

                  {/* Frameworks for this segment */}
                  <div className="mb-6">
                    <p className="text-[11px] text-charcoal/40 uppercase tracking-wider font-body mb-3">Key Frameworks</p>
                    <div className="flex flex-wrap gap-2">
                      {segment.frameworks.map((fw) => (
                        <span key={fw} className="bg-green/5 text-green/80 border border-green/10 px-2.5 py-1 rounded-full text-[11px] font-medium font-body">
                          {fw}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* Right — Service list */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {segment.services.map((service, i) => (
                    <FadeIn key={service} delay={i * 0.04}>
                      <div className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white">
                        <div className="w-1.5 h-1.5 rounded-full bg-green mt-2 flex-shrink-0" />
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
      <section className="bg-midnight relative overflow-hidden !py-28">
        <div className="gradient-blob w-[500px] h-[500px] bg-green top-0 right-0 absolute" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold text-white font-heading mb-6">
              Need something specific?
            </h2>
            <p className="text-white/60 text-lg font-body mb-12 max-w-md mx-auto leading-relaxed">
              We tailor our advisory to your exact challenge.
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
