import Link from 'next/link';

const stats = [
  { value: '40+', label: 'ESG & Sustainability Services' },
  { value: '15+', label: 'International Frameworks' },
  { value: '20+', label: 'Years Combined Experience' },
  { value: '23', label: 'Countries Across Africa' },
];

const clientSegments = [
  {
    icon: '🏦',
    title: 'Banks & Financial Institutions',
    description: 'PRB reporting, IFRS S1/S2 implementation, green bond frameworks, sustainable finance mobilization, ESG risk integration, and climate stress testing.',
    href: '/services#banks',
  },
  {
    icon: '📊',
    title: 'Investors & Asset Managers',
    description: 'Impact report preparation with external validation, ESG due diligence, IRIS+ alignment, portfolio carbon footprinting, and ESG value creation advisory.',
    href: '/services#investors',
  },
  {
    icon: '🏛️',
    title: 'Governments & Public Sector',
    description: 'Sustainability program design and implementation, national climate strategies, green taxonomy development, just transition planning, and carbon market design.',
    href: '/services#governments',
  },
  {
    icon: '🌍',
    title: 'DFIs & Development Partners',
    description: 'Impact assessment, E&S/ESIA due diligence, ESAP development, independent evaluation, IFC Performance Standards compliance, and biodiversity action plans.',
    href: '/services#dfis',
  },
  {
    icon: '🎓',
    title: 'Cross-Cutting Services',
    description: 'ESG training, environmental impact assessments, carbon accounting, SBTi targets, CSR strategy, net zero planning, and international framework implementation.',
    href: '/services#cross-cutting',
  },
];

const frameworks = [
  'IFRS S1/S2', 'CSRD/ESRS', 'PRB (UNEP FI)', 'IFC Performance Standards',
  'TCFD/TNFD', 'SBTi', 'EU Taxonomy', 'GRI/SASB/CDP',
  'UN Global Compact', 'PRI', 'Net-Zero Asset Owners Alliance', 'ICMA Principles',
];

const trustedBy = [
  'African Development Bank', 'IFC', 'World Bank', 'British International Investment',
  'Africa Finance Corporation', 'Standard Chartered', 'Standard Bank',
  'Simon-Kucher & Partners', 'Citigroup', 'UBS',
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-midnight pt-32 pb-24 lg:pt-44 lg:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='60' height='60'><path d='M30 0v60M0 30h60' stroke='white' stroke-width='0.5'/></svg>")` }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="accent-line" />
              <span className="text-green-light text-sm font-medium tracking-widest uppercase font-body">ESG, Impact &amp; Sustainability Advisory</span>
            </div>
            <h1 className="text-white text-4xl lg:text-6xl leading-tight mb-6 font-heading font-bold">
              Bridging global ESG standards<br className="hidden lg:block" /> with local impact.
            </h1>
            <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl font-body">
              We help banks, investors, DFIs, and governments navigate ESG compliance, measure impact, mobilize sustainable finance, and drive measurable change across Africa and emerging markets.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="btn-primary">Our Services</Link>
              <Link href="/contact" className="btn-outline !border-green-light !text-green-light hover:!bg-green-light hover:!text-white">Start a Conversation</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-10 border-t border-gray-800">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-green-light font-heading font-bold text-4xl lg:text-5xl">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1 font-body">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="bg-cream !py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-sm text-slate font-medium tracking-widest uppercase mb-8 font-body">Our team has worked with and within</p>
          <div className="overflow-hidden">
            <div className="flex gap-12 items-center animate-scroll">
              {[...trustedBy, ...trustedBy].map((name, i) => (
                <span key={i} className="text-navy font-bold text-sm whitespace-nowrap opacity-40 hover:opacity-80 transition font-heading">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="accent-line" />
              <span className="text-green text-sm font-medium tracking-widest uppercase font-body">Who We Serve</span>
              <div className="accent-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-heading mb-4">Tailored advisory across every stakeholder</h2>
            <p className="text-slate font-body leading-relaxed">From regulatory compliance to impact measurement, we deliver practical solutions that bridge international standards with local realities.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientSegments.map((segment) => (
              <Link key={segment.title} href={segment.href} className="feature-card border border-gray-100 group">
                <div className="text-3xl mb-4">{segment.icon}</div>
                <h3 className="text-lg font-bold text-navy font-heading mb-2 group-hover:text-green transition">{segment.title}</h3>
                <p className="text-sm text-slate font-body leading-relaxed">{segment.description}</p>
                <div className="mt-4 text-green text-sm font-medium font-body">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VIA */}
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="accent-line" />
                <span className="text-green text-sm font-medium tracking-widest uppercase font-body">Why Volta Impact Advisors</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-navy font-heading mb-6">Where global frameworks meet African reality</h2>
              <p className="text-slate font-body leading-relaxed mb-8">We are not another consulting firm applying Western templates to African contexts. We combine deep local knowledge with international standards expertise to deliver solutions that actually work on the ground.</p>
              <div className="space-y-4">
                {[
                  { title: 'Africa & Emerging Markets Depth', desc: 'Contextual expertise that global firms cannot replicate' },
                  { title: 'Full Client Spectrum', desc: 'We serve banks, investors, DFIs, and governments — not just one segment' },
                  { title: 'Implementation Focus', desc: 'We go beyond reports to drive operational change and real outcomes' },
                  { title: 'Regulatory Bridge', desc: 'We translate between IFRS, IFC PS, PRB, SBTi, and local requirements' },
                  { title: 'Affordable Excellence', desc: 'Premium quality at accessible price points for mid-market clients' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="w-6 h-6 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-green" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy font-heading text-sm">{item.title}</h4>
                      <p className="text-slate text-sm font-body">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-navy font-heading mb-6">Frameworks We Support</h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((fw) => (
                  <span key={fw} className="bg-green/10 text-green px-3 py-1.5 rounded-full text-xs font-medium font-body">{fw}</span>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link href="/frameworks" className="text-green font-medium text-sm font-body hover:text-green-light transition">Explore our framework expertise →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green !py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-4">Ready to navigate the ESG landscape?</h2>
          <p className="text-white/80 text-lg font-body mb-8 max-w-2xl mx-auto">Whether you need PRB compliance support, impact assessment, or a complete ESG strategy — let&apos;s start with a conversation.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-white">Get in Touch</Link>
            <Link href="/services" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-green">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
