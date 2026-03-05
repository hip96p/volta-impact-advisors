import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Volta Impact Advisors',
  description: 'Learn about Volta Impact Advisors, Africa\'s leading ESG, impact, and sustainability advisory firm.',
};

const values = [
  { title: 'Context Over Templates', description: 'We adapt global ESG frameworks to local realities rather than applying one-size-fits-all Western approaches. Our solutions work because they are designed for the markets they serve.' },
  { title: 'Impact That Counts', description: 'We prioritize measurable, verifiable impact over checkbox compliance. Every engagement is designed to create real, lasting change for communities and ecosystems.' },
  { title: 'Implementation First', description: 'Reports gather dust. We focus on operational execution — building the systems, processes, and capabilities our clients need to deliver on their ESG commitments.' },
  { title: 'Integrity & Independence', description: 'We provide honest, evidence-based advice. Our independence ensures our recommendations serve our clients\' long-term interests, not short-term optics.' },
  { title: 'Knowledge Transfer', description: 'We build local capacity, not dependency. Every engagement includes knowledge transfer so our clients can sustain and build on our work.' },
  { title: 'Collaborative Partnership', description: 'We work alongside our clients as partners, not detached consultants. We embed within teams, share context, and co-create solutions.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-line" />
              <span className="text-green-light text-sm font-medium tracking-widest uppercase font-body">About Us</span>
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-bold font-heading mb-6">Where global ESG expertise meets African reality</h1>
            <p className="text-gray-400 text-lg leading-relaxed font-body">Volta Impact Advisors is the ESG, impact, and sustainability practice of Volta Partners — purpose-built to help Africa and emerging markets navigate the rapidly evolving landscape of sustainable finance, environmental compliance, and impact measurement.</p>
          </div>
        </div>
      </section>

      {/* Mission & Approach */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy font-heading mb-6">Our Mission</h2>
              <p className="text-slate font-body leading-relaxed mb-4">
                To be the leading ESG, impact, and sustainability advisory firm for Africa and emerging markets — combining deep local knowledge with international standards expertise to help our clients create measurable, lasting impact.
              </p>
              <p className="text-slate font-body leading-relaxed">
                We bridge the gap between global ESG frameworks and local implementation, serving banks, investors, DFIs, and governments with practical, actionable solutions that drive real-world outcomes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-navy font-heading mb-6">Our Approach</h2>
              <p className="text-slate font-body leading-relaxed mb-4">
                We believe that ESG and sustainability in emerging markets require a fundamentally different approach than what works in developed economies. Data gaps, institutional contexts, regulatory environments, and stakeholder dynamics demand localized expertise.
              </p>
              <p className="text-slate font-body leading-relaxed">
                Our team combines hands-on experience within DFIs, investment banks, and development organizations with deep technical knowledge of international frameworks — from IFRS S1/S2 and IFC Performance Standards to SBTi and CSRD/ESRS.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Gap We Fill */}
      <section className="bg-sand">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="accent-line" />
              <span className="text-green text-sm font-medium tracking-widest uppercase font-body">The Gap We Fill</span>
              <div className="accent-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-heading mb-4">Why existing options fall short</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="font-bold text-navy font-heading mb-3">Big Four Firms</h3>
              <p className="text-sm text-red-600 font-medium font-body mb-2">Expensive, slow, generalist approach</p>
              <p className="text-sm text-slate font-body leading-relaxed">Premium pricing limits mid-market access. Generalist teams may lack depth in Africa-specific ESG contexts. Designed for large corporates, not the diverse client base of emerging markets.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="font-bold text-navy font-heading mb-3">Global ESG Specialists</h3>
              <p className="text-sm text-red-600 font-medium font-body mb-2">Western-centric frameworks</p>
              <p className="text-sm text-slate font-body leading-relaxed">Strong capabilities in developed markets but limited Africa-specific contextualization. Western ESG frameworks are ill-suited to local contexts without significant adaptation.</p>
            </div>
            <div className="bg-white rounded-xl p-8 border border-gray-100">
              <h3 className="font-bold text-navy font-heading mb-3">Local Consultancies</h3>
              <p className="text-sm text-red-600 font-medium font-body mb-2">Limited breadth and scale</p>
              <p className="text-sm text-slate font-body leading-relaxed">Strong local knowledge but may lack the technical depth in international standards (IFRS S1/S2, IFC PS, CSRD) or the breadth to serve banks, DFIs, and governments simultaneously.</p>
            </div>
          </div>

          <div className="mt-12 bg-green/5 rounded-xl p-8 border border-green/20 text-center">
            <h3 className="font-bold text-green font-heading text-lg mb-2">Volta Impact Advisors</h3>
            <p className="text-slate font-body leading-relaxed max-w-2xl mx-auto">We combine the best of all worlds: deep Africa expertise, comprehensive international standards knowledge, full client-segment coverage, and affordable excellence. We go beyond reports to drive operational change.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="flex items-center gap-3 justify-center mb-4">
              <div className="accent-line" />
              <span className="text-green text-sm font-medium tracking-widest uppercase font-body">Our Values</span>
              <div className="accent-line" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-navy font-heading">What drives us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="service-card border border-gray-100">
                <h3 className="font-bold text-navy font-heading mb-2">{value.title}</h3>
                <p className="text-sm text-slate font-body leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy !py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-4">Join us in shaping a sustainable future</h2>
          <p className="text-gray-300 text-lg font-body mb-8">Whether you are a bank preparing for IFRS S1/S2, a DFI needing impact assessment, or a government designing climate programs — we are ready to help.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">Start a Conversation</Link>
            <Link href="/services" className="btn-outline !border-white !text-white hover:!bg-white hover:!text-navy">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
