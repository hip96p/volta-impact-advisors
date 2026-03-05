import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services — Volta Impact Advisors',
  description: 'Comprehensive ESG, impact, and sustainability advisory services for banks, investors, governments, and DFIs across Africa and emerging markets.',
};

interface Service {
  name: string;
  description: string;
  deliverables: string;
}

interface ServiceSegment {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  services: Service[];
}

const segments: ServiceSegment[] = [
  {
    id: 'banks',
    icon: '🏦',
    title: 'Banks & Financial Institutions',
    subtitle: 'Navigate regulatory compliance, mobilize sustainable finance, and embed ESG across your operations.',
    services: [
      { name: 'PRB Reporting & Compliance', description: 'Comply with UNEP FI Principles for Responsible Banking — impact analysis, target setting, and governance frameworks.', deliverables: 'PRB Self-Assessment, Impact Analysis Report, Target Setting Framework' },
      { name: 'IFRS S1/S2 Implementation', description: 'Guide banks through adoption of IFRS Sustainability Disclosure Standards for climate and sustainability reporting.', deliverables: 'Gap Analysis, Implementation Roadmap, Disclosure Templates, Training' },
      { name: 'Green/Social/Sustainability Bond Framework', description: 'Develop frameworks for labeled bond issuances aligned with ICMA Green Bond Principles.', deliverables: 'Bond Framework, Use of Proceeds Criteria, Reporting Templates' },
      { name: 'Bond Impact Reporting', description: 'Prepare annual impact reports for outstanding green, social, and sustainability bonds.', deliverables: 'Impact Report, KPI Dashboard, Verification Support' },
      { name: 'Sustainable/Climate Finance Mobilization', description: 'Help banks structure and raise climate and sustainable finance products.', deliverables: 'Product Design, Pipeline Assessment, Investor Materials' },
      { name: 'TCFD/TNFD Alignment', description: 'Implement climate and nature-related financial disclosure frameworks.', deliverables: 'TCFD/TNFD Report, Scenario Analysis, Risk Assessment' },
      { name: 'ESG Risk Integration', description: 'Embed ESG risk factors into credit risk assessment and lending decisions.', deliverables: 'ESG Scoring Methodology, Policy Frameworks, Training' },
      { name: 'Climate Risk Stress Testing', description: 'Conduct climate scenario analysis and transition risk assessments for banking portfolios.', deliverables: 'Stress Test Results, Scenario Narratives, Board Report' },
      { name: 'Taxonomy Alignment', description: 'Assess portfolio alignment with EU Taxonomy or national green taxonomies.', deliverables: 'Taxonomy Assessment Report, Alignment Methodology' },
    ],
  },
  {
    id: 'investors',
    icon: '📊',
    title: 'Investors & Asset Managers',
    subtitle: 'Measure impact rigorously, integrate ESG into investment processes, and demonstrate results to stakeholders.',
    services: [
      { name: 'Impact Report Preparation', description: 'Develop comprehensive impact reports with external validation for fund reporting.', deliverables: 'Impact Report, Data Collection Framework, Visualization Dashboard' },
      { name: 'External Impact Validation', description: 'Independent third-party validation of impact claims and measurement methodologies.', deliverables: 'Validation Report, Methodology Review, Improvement Recommendations' },
      { name: 'IRIS+ / IMP Alignment', description: 'Align impact measurement with GIIN IRIS+ metrics and Impact Management Project dimensions.', deliverables: 'Metrics Framework, Data Collection Tools, Reporting Templates' },
      { name: 'ESG Due Diligence (PE/VC)', description: 'Pre-investment ESG screening and due diligence for private equity and venture capital.', deliverables: 'DD Report, Risk Matrix, ESAP, Value Creation Plan' },
      { name: 'Portfolio ESG Integration', description: 'Embed ESG factors across investment processes from screening to exit.', deliverables: 'ESG Policy, Integration Framework, Monitoring Tools' },
      { name: 'SDG Alignment & Reporting', description: 'Map portfolio impact to UN Sustainable Development Goals.', deliverables: 'SDG Mapping Report, Contribution Analysis' },
      { name: 'Carbon Footprint / GHG Accounting', description: 'Portfolio-level carbon footprinting and financed emissions calculation (PCAF methodology).', deliverables: 'Carbon Footprint Report, PCAF Methodology, Reduction Roadmap' },
      { name: 'ESG Value Creation Advisory', description: 'Post-investment ESG improvement to drive valuation uplift and exit readiness.', deliverables: '100-Day ESG Plan, KPI Dashboard, Exit Readiness Assessment' },
    ],
  },
  {
    id: 'governments',
    icon: '🏛️',
    title: 'Governments & Public Sector',
    subtitle: 'Design and implement sustainability programs, access climate finance, and build institutional capacity.',
    services: [
      { name: 'Sustainability Program Design', description: 'Design national and sub-national sustainability, climate, or impact programs.', deliverables: 'Program Design Document, Theory of Change, M&E Framework' },
      { name: 'Program Implementation Support', description: 'Provide technical assistance for program rollout and management.', deliverables: 'Implementation Manual, Capacity Building Plan, Progress Reports' },
      { name: 'National Climate Strategy / NDC', description: 'Support development of Nationally Determined Contributions and climate strategies.', deliverables: 'NDC Document, Sector Roadmaps, MRV Framework' },
      { name: 'Green Taxonomy Development', description: 'Help design national sustainable finance taxonomies.', deliverables: 'Taxonomy Document, Sector Criteria, Implementation Guidance' },
      { name: 'Climate Finance Readiness', description: 'Build institutional capacity to access and deploy climate finance from GCF, GEF, and others.', deliverables: 'Readiness Assessment, Action Plan, Training Program' },
      { name: 'Just Transition Planning', description: 'Design programs for equitable transition from fossil fuels with community and worker protection.', deliverables: 'Just Transition Framework, Stakeholder Plan, Worker Programs' },
      { name: 'Carbon Market Development', description: 'Support design of voluntary or compliance carbon market mechanisms.', deliverables: 'Market Design Document, Regulatory Framework, MRV System' },
      { name: 'Green Public Procurement', description: 'Develop sustainable procurement policies and guidelines.', deliverables: 'Policy Framework, Criteria Catalogue, Training Materials' },
    ],
  },
  {
    id: 'dfis',
    icon: '🌍',
    title: 'DFIs & Development Partners',
    subtitle: 'Conduct rigorous impact assessments, ensure E&S compliance, and evaluate program effectiveness.',
    services: [
      { name: 'Impact Assessment', description: 'Conduct ex-ante and ex-post impact assessments for DFI-funded projects and programs.', deliverables: 'Impact Assessment Report, Theory of Change, Results Framework' },
      { name: 'E&S / ESIA Due Diligence', description: 'Environmental and Social Impact Assessment aligned with IFC Performance Standards.', deliverables: 'ESIA Report, Stakeholder Engagement Plan, Mitigation Measures' },
      { name: 'Lender-Grade E&S Impact Assessment', description: 'Comprehensive environmental and social assessments meeting IFI lending standards and requirements.', deliverables: 'Full ESIA, E&S Categorization, Compliance Certificate' },
      { name: 'ESAP Development', description: 'Prepare Environmental and Social Action Plans with timelines, costs, and KPIs.', deliverables: 'ESAP Document, Implementation Timeline, Monitoring Framework' },
      { name: 'Independent / Midterm Evaluation', description: 'Conduct independent evaluations of ongoing or completed DFI projects.', deliverables: 'Evaluation Report, Lessons Learned, Recommendations' },
      { name: 'IFC Performance Standards Gap Analysis', description: 'Assess client alignment with IFC PS 1-8 and identify gaps.', deliverables: 'Gap Analysis Report, Compliance Roadmap, Priority Actions' },
      { name: 'Resettlement Action Plans', description: 'Develop RAPs for infrastructure projects with livelihood restoration.', deliverables: 'RAP Document, Livelihood Plan, Compensation Framework' },
      { name: 'Gender & Social Inclusion Analysis', description: 'Conduct GESI assessments for development projects.', deliverables: 'GESI Report, Action Plan, Monitoring Indicators' },
      { name: 'Biodiversity Action Plans', description: 'Develop biodiversity management plans for critical habitat projects.', deliverables: 'BAP Document, Offset Strategy, Monitoring Protocol' },
      { name: 'Stakeholder Engagement', description: 'Design and implement stakeholder engagement and grievance mechanisms.', deliverables: 'SEP Document, Grievance Mechanism, Community Plan' },
    ],
  },
  {
    id: 'cross-cutting',
    icon: '🎓',
    title: 'Cross-Cutting Services',
    subtitle: 'Foundational capabilities that serve all client types — from training to carbon accounting to CSR strategy.',
    services: [
      { name: 'ESG Training & Capacity Building', description: 'Bespoke training programs on ESG topics for boards, management, and staff.', deliverables: 'Training Curriculum, Workshop Materials, Certification' },
      { name: 'Environmental Impact Assessment', description: 'Full EIA/ESIA for infrastructure, energy, mining, and industrial projects.', deliverables: 'EIA Report, EMP, Permit Support' },
      { name: 'Carbon Accounting & GHG Inventory', description: 'Scope 1, 2, 3 emissions calculation and reporting.', deliverables: 'GHG Inventory Report, Reduction Roadmap, SBTi Alignment' },
      { name: 'Science-Based Targets (SBTi)', description: 'Set and validate science-based emission reduction targets.', deliverables: 'Target Documentation, Validation Support, Action Plan' },
      { name: 'ESG Reporting & Disclosure', description: 'Prepare GRI, SASB, CDP, and integrated sustainability reports.', deliverables: 'Sustainability Report, Data Management, Assurance Support' },
      { name: 'CSR Strategy & Implementation', description: 'Design and implement corporate social responsibility strategies aligned with business objectives and SDGs.', deliverables: 'CSR Strategy, Program Design, Impact Report, Stakeholder Map' },
      { name: 'Climate Vulnerability Assessment', description: 'Assess physical and transition climate risks for assets and operations.', deliverables: 'Risk Assessment, Adaptation Plan, Resilience Strategy' },
      { name: 'Supply Chain ESG Due Diligence', description: 'Assess ESG risks and compliance across value chains.', deliverables: 'Supply Chain Assessment, Corrective Plans, Monitoring' },
      { name: 'Circular Economy Strategy', description: 'Develop strategies for waste reduction, resource efficiency, and circularity.', deliverables: 'Circular Economy Roadmap, Material Flow Analysis' },
      { name: 'Water Stewardship', description: 'Assess water risks and develop water management strategies.', deliverables: 'Water Risk Assessment, Stewardship Plan, CDP Water' },
      { name: 'Net Zero Strategy & Transition Planning', description: 'Develop credible net zero pathways with interim targets and governance.', deliverables: 'Net Zero Roadmap, Transition Plan, Governance Framework' },
      { name: 'International Framework Implementation', description: 'Support adoption of NZAOA, UN Global Compact, PRI, SBTi, CSRD/ESRS, and other global standards.', deliverables: 'Gap Assessment, Implementation Plan, Reporting Templates' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-line" />
              <span className="text-green-light text-sm font-medium tracking-widest uppercase font-body">Our Services</span>
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-bold font-heading mb-6">Comprehensive ESG advisory for every stakeholder</h1>
            <p className="text-gray-400 text-lg leading-relaxed font-body">Over 40 specialized services organized by client segment — from regulatory compliance and impact measurement to sustainable finance and capacity building.</p>
          </div>

          {/* Quick nav */}
          <div className="flex flex-wrap gap-3 mt-10">
            {segments.map((seg) => (
              <a key={seg.id} href={`#${seg.id}`} className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-body hover:bg-green/30 transition">
                {seg.icon} {seg.title.split(' & ')[0]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Service segments */}
      {segments.map((segment, idx) => (
        <section key={segment.id} id={segment.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-sand'}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{segment.icon}</span>
                <h2 className="text-2xl lg:text-3xl font-bold text-navy font-heading">{segment.title}</h2>
              </div>
              <p className="text-slate font-body text-lg max-w-3xl">{segment.subtitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {segment.services.map((service) => (
                <div key={service.name} className="service-card border border-gray-100">
                  <h3 className="font-bold text-navy font-heading mb-2 text-sm">{service.name}</h3>
                  <p className="text-sm text-slate font-body leading-relaxed mb-3">{service.description}</p>
                  <div className="text-xs text-green font-medium font-body">
                    <span className="text-gray-400">Deliverables:</span> {service.deliverables}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-green !py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white font-heading mb-4">Need a service not listed here?</h2>
          <p className="text-white/80 text-lg font-body mb-8">We tailor our advisory to your specific needs. Tell us about your challenge and we will design a solution.</p>
          <Link href="/contact" className="btn-white">Let&apos;s Talk</Link>
        </div>
      </section>
    </>
  );
}
