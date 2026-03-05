import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Frameworks & Standards — Volta Impact Advisors',
  description: 'Expert implementation support for IFRS S1/S2, PRB, IFC Performance Standards, SBTi, CSRD/ESRS, and other international ESG frameworks.',
};

const frameworks = [
  {
    id: 'ifrs',
    name: 'IFRS S1/S2',
    fullName: 'IFRS Sustainability Disclosure Standards',
    status: '36 jurisdictions adopting; first reports due 2025',
    demand: 'Very High',
    description: 'The International Sustainability Standards Board (ISSB) has issued IFRS S1 (General Requirements) and IFRS S2 (Climate-related Disclosures) as the global baseline for sustainability reporting. These standards require entities to disclose sustainability-related risks and opportunities that could affect their prospects.',
    services: ['Gap analysis against S1/S2 requirements', 'Implementation roadmap design', 'Disclosure template development', 'Climate scenario analysis (S2)', 'Data collection system design', 'Board and management training', 'Assurance readiness assessment'],
    relevance: 'Critical for African banks and listed companies as jurisdictions adopt ISSB standards. First-mover advantage for early implementers.',
  },
  {
    id: 'csrd',
    name: 'CSRD / ESRS',
    fullName: 'Corporate Sustainability Reporting Directive / European Sustainability Reporting Standards',
    status: '50,000 companies affected; phased implementation 2024-2028',
    demand: 'Very High',
    description: 'The EU\'s most comprehensive ESG reporting mandate requires detailed sustainability reporting across environmental, social, and governance topics. ESRS provides the reporting standards, including double materiality assessment, value chain reporting, and mandatory external assurance.',
    services: ['Double materiality assessment', 'ESRS gap analysis', 'Reporting system implementation', 'Value chain data collection', 'Assurance preparation', 'Training and capacity building'],
    relevance: 'Relevant for African companies with EU operations, EU-listed entities, or those in EU supply chains. Growing extraterritorial reach.',
  },
  {
    id: 'prb',
    name: 'PRB (UNEP FI)',
    fullName: 'Principles for Responsible Banking',
    status: '350+ signatory banks covering 50% of global banking assets',
    demand: 'High',
    description: 'The UNEP Finance Initiative\'s Principles for Responsible Banking provide a framework for banks to align their business strategy with the SDGs and the Paris Agreement. Signatories must conduct impact analysis, set targets, and report publicly on progress.',
    services: ['PRB self-assessment preparation', 'Portfolio impact analysis', 'Target setting and validation', 'Governance framework design', 'Annual reporting support', 'Peer benchmarking'],
    relevance: 'Essential for African and emerging market banks joining the PRB. Growing number of signatories in Africa need compliance support.',
  },
  {
    id: 'ifc',
    name: 'IFC Performance Standards',
    fullName: 'IFC Performance Standards on Environmental and Social Sustainability',
    status: 'Foundational for all DFI-funded projects worldwide',
    demand: 'Steady',
    description: 'The eight IFC Performance Standards define responsibilities for managing environmental and social risks. They cover: PS1 (Assessment and Management), PS2 (Labor), PS3 (Resource Efficiency), PS4 (Community Health), PS5 (Land Acquisition), PS6 (Biodiversity), PS7 (Indigenous Peoples), PS8 (Cultural Heritage).',
    services: ['PS 1-8 gap analysis', 'ESIA preparation to IFC standards', 'ESAP development', 'E&S Management System design', 'Compliance monitoring', 'Corrective action planning', 'Stakeholder engagement design'],
    relevance: 'Core requirement for all DFI-funded projects in Africa. Non-negotiable for IFC, AfDB, BII, and other development finance engagements.',
  },
  {
    id: 'tcfd',
    name: 'TCFD / TNFD',
    fullName: 'Task Force on Climate-related / Nature-related Financial Disclosures',
    status: 'TCFD embedded in IFRS S2; TNFD: 500+ adopters within 14 months',
    demand: 'Growing',
    description: 'TCFD provides a framework for climate-related financial disclosure across governance, strategy, risk management, and metrics. TNFD extends this to nature-related risks and opportunities, covering biodiversity, ecosystems, and natural capital dependencies.',
    services: ['TCFD/TNFD gap analysis', 'Governance framework design', 'Climate/nature scenario analysis', 'Risk and opportunity assessment', 'Metrics and targets development', 'Disclosure report preparation'],
    relevance: 'TCFD now embedded in IFRS S2. TNFD is the emerging frontier — Botswana was first to issue national TNFD guidance. Early-mover opportunity.',
  },
  {
    id: 'sbti',
    name: 'SBTi',
    fullName: 'Science Based Targets initiative',
    status: 'Over 7,000 companies committed globally',
    demand: 'High',
    description: 'SBTi provides a clear pathway to reduce emissions in line with the Paris Agreement goals. Companies set near-term and long-term (net-zero) targets validated against climate science, covering Scope 1, 2, and 3 emissions.',
    services: ['Baseline GHG inventory', 'Target setting and submission', 'Validation support', 'Decarbonization roadmap', 'Scope 3 value chain analysis', 'Annual progress reporting'],
    relevance: 'Growing demand from African corporates and financial institutions seeking credible climate commitments. Required by many international investors.',
  },
  {
    id: 'taxonomy',
    name: 'EU Taxonomy',
    fullName: 'EU Taxonomy for Sustainable Activities',
    status: 'Classification system for sustainable activities',
    demand: 'High',
    description: 'The EU Taxonomy provides a classification system defining which economic activities qualify as environmentally sustainable. Companies must report the proportion of their turnover, CapEx, and OpEx aligned with the taxonomy.',
    services: ['Taxonomy eligibility screening', 'Alignment assessment', 'Technical screening criteria analysis', 'Do No Significant Harm assessment', 'Reporting template development', 'National taxonomy development'],
    relevance: 'Directly relevant for EU-exposed companies. National taxonomy development opportunity in African markets.',
  },
  {
    id: 'gri',
    name: 'GRI / SASB / CDP',
    fullName: 'Global Reporting Initiative, SASB, CDP',
    status: 'GRI: 10,000+ reporters; CDP: 24,000+ disclosers',
    demand: 'Steady',
    description: 'GRI provides the most widely used sustainability reporting standards globally. SASB offers industry-specific standards focused on financial materiality. CDP runs the global environmental disclosure system for climate change, water security, and forests.',
    services: ['GRI report preparation', 'SASB materiality assessment', 'CDP questionnaire response', 'Data management system design', 'Stakeholder engagement', 'External assurance coordination'],
    relevance: 'Foundational reporting frameworks. Many African companies use GRI as their primary sustainability reporting standard.',
  },
  {
    id: 'ungc',
    name: 'UN Global Compact',
    fullName: 'United Nations Global Compact',
    status: '20,000+ participants in 160+ countries',
    demand: 'Moderate',
    description: 'The world\'s largest corporate sustainability initiative, the UN Global Compact asks companies to align strategies and operations with Ten Principles on human rights, labor, environment, and anti-corruption, and to advance societal goals through the SDGs.',
    services: ['Communication on Progress (CoP) preparation', 'Principle integration assessment', 'SDG action planning', 'Stakeholder engagement strategy', 'Annual reporting support'],
    relevance: 'Strong presence in Africa with many local networks. Important signaling mechanism for corporate commitment to sustainability.',
  },
  {
    id: 'pri',
    name: 'PRI',
    fullName: 'Principles for Responsible Investment',
    status: '5,000+ signatories representing $120+ trillion AUM',
    demand: 'High',
    description: 'The UN-supported PRI is the world\'s leading proponent of responsible investment. Signatories commit to incorporating ESG issues into investment analysis and ownership practices, and to reporting on their activities.',
    services: ['PRI reporting framework preparation', 'ESG integration strategy', 'Active ownership policy development', 'Stewardship and engagement planning', 'Annual assessment support'],
    relevance: 'Essential for African asset managers and institutional investors seeking international credibility and LP confidence.',
  },
  {
    id: 'nzaoa',
    name: 'Net-Zero Asset Owners Alliance',
    fullName: 'UN-convened Net-Zero Asset Owners Alliance',
    status: '90+ institutional investors with $11+ trillion AUM',
    demand: 'Growing',
    description: 'The NZAOA commits institutional investors to transitioning their portfolios to net-zero GHG emissions by 2050. Members set intermediate targets every five years across sub-portfolio, engagement, and financing categories.',
    services: ['Net-zero target setting', 'Portfolio decarbonization strategy', 'Engagement and escalation framework', 'Climate solution financing strategy', 'Progress reporting and disclosure'],
    relevance: 'Emerging opportunity for African pension funds and sovereign wealth funds seeking net-zero alignment.',
  },
  {
    id: 'icma',
    name: 'ICMA Principles',
    fullName: 'ICMA Green Bond, Social Bond, and Sustainability Bond Principles',
    status: 'Market standard for $4+ trillion in labeled bonds',
    demand: 'High',
    description: 'The International Capital Market Association publishes voluntary process guidelines for issuing green, social, sustainability, and sustainability-linked bonds. These principles cover use of proceeds, project evaluation, management, and reporting.',
    services: ['Bond framework development', 'Second-party opinion coordination', 'Use of proceeds criteria design', 'Impact reporting methodology', 'Annual investor reporting', 'Framework updates and maintenance'],
    relevance: 'Essential for African issuers accessing sustainable bond markets. Growing green bond issuance across the continent.',
  },
];

export default function FrameworksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-line" />
              <span className="text-green-light text-sm font-medium tracking-widest uppercase font-body">Frameworks &amp; Standards</span>
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-bold font-heading mb-6">Expert implementation across 15+ international frameworks</h1>
            <p className="text-gray-400 text-lg leading-relaxed font-body">We help clients navigate the complex and evolving landscape of ESG and sustainability frameworks — translating global requirements into practical, locally-adapted implementation plans.</p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-2 mt-10">
            {frameworks.map((fw) => (
              <a key={fw.id} href={`#${fw.id}`} className="bg-white/10 text-white px-3 py-1.5 rounded-lg text-xs font-body hover:bg-green/30 transition">
                {fw.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks */}
      {frameworks.map((fw, idx) => (
        <section key={fw.id} id={fw.id} className={idx % 2 === 0 ? 'bg-white !py-16' : 'bg-sand !py-16'}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-2xl font-bold text-navy font-heading">{fw.name}</h2>
                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium font-body ${
                    fw.demand === 'Very High' ? 'bg-green/10 text-green' :
                    fw.demand === 'High' ? 'bg-teal/10 text-teal' :
                    fw.demand === 'Growing' ? 'bg-sunglow/20 text-amber-700' :
                    'bg-gray-100 text-gray-600'
                  }`}>
                    {fw.demand} demand
                  </span>
                </div>
                <p className="text-xs text-slate font-body mb-4">{fw.fullName}</p>
                <p className="text-sm text-slate font-body leading-relaxed mb-4">{fw.description}</p>
                <p className="text-xs text-gray-400 font-body mb-6">{fw.status}</p>

                <div className="bg-green/5 rounded-lg p-4 border border-green/10">
                  <h4 className="text-xs font-bold text-green font-heading mb-1 uppercase tracking-wider">Africa &amp; EM Relevance</h4>
                  <p className="text-sm text-slate font-body">{fw.relevance}</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
                <h3 className="text-sm font-bold text-navy font-heading mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {fw.services.map((s) => (
                    <li key={s} className="flex gap-2 text-sm text-slate font-body">
                      <svg className="w-4 h-4 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                      {s}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link href="/contact" className="text-green font-medium text-sm font-body hover:text-green-light transition">
                    Discuss {fw.name} →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-navy !py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-4">Working with a framework not listed?</h2>
          <p className="text-gray-300 text-lg font-body mb-8">We have experience across the full spectrum of ESG and sustainability frameworks. Let us know what you need.</p>
          <Link href="/contact" className="btn-primary">Get Expert Guidance</Link>
        </div>
      </section>
    </>
  );
}
