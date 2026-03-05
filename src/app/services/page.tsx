'use client';

import Link from 'next/link';
import { Building2, TrendingUp, Landmark, Globe, GraduationCap } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const segments = [
  {
    id: 'banks',
    icon: Building2,
    title: 'Banks & Financial Institutions',
    intro: 'Financial institutions face growing pressure to align with global sustainability frameworks while remaining competitive. We help banks integrate ESG into their core operations — from regulatory alignment and risk management to green bond issuance and climate finance mobilization. Our team has delivered PRB reporting, IFRS S1/S2 implementation, and climate risk stress testing for banks across West Africa, East Africa, and beyond.',
    buckets: [
      { label: 'Regulatory & Reporting', items: 'PRB Implementation, IFRS S1/S2 Implementation, TCFD/TNFD Alignment, Taxonomy Alignment' },
      { label: 'Sustainable Finance', items: 'Green/Social/Sustainability Bond Frameworks, Bond Impact Reporting, Climate Finance Mobilization' },
      { label: 'Risk & Integration', items: 'ESG Risk Integration, Climate Risk Stress Testing' },
    ],
    frameworks: ['PRB', 'IFRS S1/S2', 'TCFD', 'TNFD', 'EU Taxonomy', 'ICMA'],
  },
  {
    id: 'investors',
    icon: TrendingUp,
    title: 'Investors & Asset Managers',
    intro: 'Investors increasingly need to demonstrate impact alongside returns. We support asset managers and fund managers with rigorous impact measurement, ESG integration across portfolios, and alignment with leading investment frameworks. Whether you are preparing your first impact report or embedding ESG into every stage of your investment process, we bring the expertise to make it credible and actionable.',
    buckets: [
      { label: 'Impact & Reporting', items: 'Impact Report Preparation, External Impact Validation, SDG Alignment & Reporting' },
      { label: 'Integration & Due Diligence', items: 'ESG Due Diligence (PE/VC), Portfolio ESG Integration, ESG Value Creation Advisory' },
      { label: 'Climate & Carbon', items: 'Carbon Footprint / GHG Accounting (PCAF), IRIS+ / IMP Alignment' },
    ],
    frameworks: ['PRI', 'NZAOA', 'GRI', 'SASB', 'CDP', 'SBTi'],
  },
  {
    id: 'governments',
    icon: Landmark,
    title: 'Governments & Public Sector',
    intro: 'Governments play a critical role in creating enabling environments for sustainable development. We help public sector clients design and implement national climate strategies, develop green taxonomies, and build the institutional readiness required to access international climate finance. Our work spans program design, just transition planning, and carbon market development across multiple African jurisdictions.',
    buckets: [
      { label: 'Strategy & Planning', items: 'National Climate Strategy / NDC, Sustainability Program Design, Just Transition Planning' },
      { label: 'Market & Regulatory', items: 'Green Taxonomy Development, Carbon Market Development, Green Public Procurement' },
      { label: 'Implementation', items: 'Program Implementation Support, Climate Finance Readiness' },
    ],
    frameworks: ['UN Global Compact', 'EU Taxonomy', 'SBTi'],
  },
  {
    id: 'development-finance',
    icon: Globe,
    title: 'Development Finance Institutions',
    intro: 'Development finance institutions require robust environmental and social safeguards across their investment portfolios. We provide end-to-end E&S advisory — from pre-investment due diligence and performance standards implementation to independent evaluations and resettlement planning. Our team has supported DFI-financed projects across infrastructure, energy, agribusiness, and financial intermediaries.',
    buckets: [
      { label: 'Assessment & Due Diligence', items: 'Impact Assessment (Ex-ante & Ex-post), E&S / ESIA Due Diligence, Lender-Grade E&S Assessment' },
      { label: 'Standards & Planning', items: 'Performance Standards Gap Analysis, ESAP Development, Resettlement Action Plans, Biodiversity Action Plans' },
      { label: 'Social & Evaluation', items: 'Gender & Social Inclusion Analysis, Stakeholder Engagement, Independent / Midterm Evaluation' },
    ],
    frameworks: ['IFC PS', 'CSRD / ESRS'],
  },
  {
    id: 'cross-cutting',
    icon: GraduationCap,
    title: 'Cross-Cutting Services',
    intro: 'Some capabilities cut across all client segments. Whether you need to build internal ESG capacity through training, establish carbon accounting systems, set science-based targets, or develop a net-zero transition roadmap, these foundational services support organizations at every stage of their sustainability journey.',
    buckets: [
      { label: 'Training & Capacity', items: 'ESG Training & Capacity Building, International Framework Implementation' },
      { label: 'Climate & Carbon', items: 'Carbon Accounting & GHG Inventory, Science-Based Targets (SBTi), Net Zero Strategy, Climate Vulnerability Assessment' },
      { label: 'Reporting & Strategy', items: 'ESG Reporting (GRI, SASB, CDP), CSR Strategy, Environmental Impact Assessment (EIA)' },
      { label: 'Supply Chain & Circular', items: 'Supply Chain ESG Due Diligence, Circular Economy Strategy, Water Stewardship' },
    ],
    frameworks: ['GRI', 'SASB', 'CDP', 'SBTi', 'IFRS S1/S2', 'CSRD / ESRS'],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-charcoal overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[500px] h-[500px] bg-green -top-20 -right-20 absolute" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative z-10 pt-36 pb-24">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-8 font-body">Services & Frameworks</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-4xl md:text-6xl font-heading font-bold leading-[1.1] mb-10 max-w-3xl">
              What we do.
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/60 text-lg font-body font-light max-w-xl leading-relaxed mb-10">
              Over 40 specialized services across 15+ international frameworks — organized by who we serve, adapted for Africa and emerging markets.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-wrap gap-3">
              {segments.map((seg) => (
                <a key={seg.id} href={`#${seg.id}`} className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-[13px] font-body transition flex items-center gap-2">
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
        <section key={segment.id} id={segment.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-cream-light'}>
          <div className="max-w-[1200px] mx-auto px-6 md:px-16">
            <FadeIn>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center">
                  <segment.icon size={24} className="text-green" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-heading">
                  {segment.title}
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-charcoal/70 font-body leading-relaxed mb-14 max-w-3xl text-[15px]">
                {segment.intro}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {segment.buckets.map((bucket, i) => (
                <FadeIn key={bucket.label} delay={0.15 + i * 0.05}>
                  <div className="bg-white border border-gray-100 rounded-xl p-6">
                    <h4 className="font-heading font-bold text-charcoal text-sm mb-3">{bucket.label}</h4>
                    <p className="text-charcoal/60 text-[13px] font-body leading-relaxed">{bucket.items}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-[11px] text-charcoal/40 uppercase tracking-wider font-body mr-2">Key Frameworks:</span>
                {segment.frameworks.map((fw) => (
                  <span key={fw} className="bg-green/5 text-green/80 border border-green/10 px-2.5 py-1 rounded-md text-[11px] font-medium font-body">
                    {fw}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-charcoal relative overflow-hidden">
        <div className="gradient-blob w-[500px] h-[500px] bg-green top-0 right-0 absolute" />
        <div className="max-w-[1200px] mx-auto px-6 md:px-16 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-heading mb-6">
              Need something specific?
            </h2>
            <p className="text-white/50 text-lg font-body mb-12 max-w-md mx-auto leading-relaxed">
              We tailor our advisory to your exact challenge.
            </p>
            <Link href="/contact" className="bg-green text-white px-8 py-3.5 rounded-md text-sm font-medium font-body hover:bg-green-light transition-all inline-block">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
