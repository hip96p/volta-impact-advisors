'use client';

import Link from 'next/link';
import { Building2, TrendingUp, Landmark, Globe, GraduationCap } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

const segments = [
  {
    id: 'banks',
    icon: Building2,
    title: 'Banks & Financial Institutions',
    intro: 'You need more than a compliance checklist — you need ESG woven into how your bank actually operates. Whether you\'re preparing your first PRB report, navigating IFRS S1/S2, or structuring a green bond, we help you move from obligation to opportunity. Our team has delivered climate risk stress testing, sustainability reporting, and climate finance mobilization for banks across West Africa, East Africa, and beyond.',
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
    intro: 'Your LPs and stakeholders expect more than financial returns — they want to see measurable impact. We help you build the systems, processes, and reports that make your ESG story credible. From pre-investment due diligence to portfolio-level carbon accounting, we bring the rigor so you can raise your next fund on a track record that stands up to scrutiny.',
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
    intro: 'You set the direction — we help you get there. Whether you\'re designing a national climate strategy, developing a green taxonomy, or building the institutional capacity to unlock international climate finance, we bring the technical depth and the practical experience to turn your policy ambitions into programs that deliver on the ground.',
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
    intro: 'Your investments need to meet the highest environmental and social standards — without slowing down your deployment pipeline. We provide end-to-end E&S advisory, from pre-investment screening and performance standards gap analysis to resettlement planning and independent evaluations. Our team has supported DFI-financed projects across infrastructure, energy, agribusiness, and financial intermediaries.',
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
    intro: 'Some things cut across every client type. Whether you need to build internal ESG capacity through training, set up carbon accounting systems, establish science-based targets, or develop a net-zero transition roadmap — these foundational services support your organization no matter where you are in your sustainability journey.',
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
      <section className="relative bg-charcoal overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[500px] h-[500px] bg-green -top-20 -right-20 absolute" />
        <div className="via-container relative z-10" style={{ paddingTop: '150px', paddingBottom: '80px' }}>
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-8 font-body">Services & Frameworks</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-4xl md:text-6xl font-heading font-bold leading-[1.1] mb-12 max-w-3xl">
              What we do.
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/60 text-lg md:text-xl font-body font-light max-w-2xl leading-relaxed mb-12">
              We serve the most important needs of the largest sustainability stakeholders in Africa and emerging markets — from the private sector champions to ambitious public entities and the critical actors that invest in and partner with them. Addressing all the major international frameworks, adapted for Africa and emerging markets realities and needs.
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
          <div className="via-container">
            <FadeIn>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-lg bg-green/10 flex items-center justify-center">
                  <segment.icon size={24} className="text-green" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-charcoal font-heading">
                  {segment.title}
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="text-charcoal/70 font-body leading-[1.8] mb-24 max-w-3xl text-base md:text-[16px]">
                {segment.intro}
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {segment.buckets.map((bucket, i) => (
                <FadeIn key={bucket.label} delay={0.15 + i * 0.05}>
                  <div className="bg-white border border-gray-100 rounded-xl p-7">
                    <h4 className="font-heading font-bold text-charcoal text-[15px] mb-4">{bucket.label}</h4>
                    <p className="text-charcoal/60 text-sm font-body leading-relaxed">{bucket.items}</p>
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
        <div className="via-container relative z-10 text-center">
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
