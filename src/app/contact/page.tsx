import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Volta Impact Advisors',
  description: 'Get in touch with Volta Impact Advisors for ESG, impact, and sustainability advisory services.',
};

const serviceAreas = [
  'PRB Reporting & Compliance',
  'IFRS S1/S2 Implementation',
  'Green Bond Framework',
  'Impact Assessment',
  'E&S / ESIA Due Diligence',
  'ESG Training',
  'Carbon Accounting',
  'Independent Evaluation',
  'CSR Strategy',
  'Other',
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-midnight pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-line" />
              <span className="text-green-light text-sm font-medium tracking-widest uppercase font-body">Get in Touch</span>
            </div>
            <h1 className="text-white text-4xl lg:text-5xl font-bold font-heading mb-6">Let&apos;s start a conversation</h1>
            <p className="text-gray-400 text-lg leading-relaxed font-body">Whether you need a quick consultation or a comprehensive engagement, we are ready to help you navigate the ESG and sustainability landscape.</p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy font-body mb-2">First Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/30 focus:border-green outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy font-body mb-2">Last Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/30 focus:border-green outline-none transition" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-navy font-body mb-2">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/30 focus:border-green outline-none transition" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-navy font-body mb-2">Organization</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/30 focus:border-green outline-none transition" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy font-body mb-2">Client Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/30 focus:border-green outline-none transition text-slate">
                    <option value="">Select your organization type</option>
                    <option value="bank">Bank / Financial Institution</option>
                    <option value="investor">Investor / Asset Manager</option>
                    <option value="government">Government / Public Sector</option>
                    <option value="dfi">DFI / Development Partner</option>
                    <option value="corporate">Corporate / Private Sector</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy font-body mb-2">Service Area of Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/30 focus:border-green outline-none transition text-slate">
                    <option value="">Select a service area</option>
                    {serviceAreas.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-navy font-body mb-2">How can we help? *</label>
                  <textarea required rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/30 focus:border-green outline-none transition resize-none" placeholder="Tell us about your ESG or sustainability challenge..." />
                </div>

                <button type="submit" className="btn-primary w-full md:w-auto">Send Message</button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-sand rounded-xl p-8">
                <h3 className="font-bold text-navy font-heading mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm font-body text-slate">
                  <div>
                    <p className="font-medium text-navy mb-1">Email</p>
                    <p>info@voltaimpactadvisors.com</p>
                  </div>
                  <div>
                    <p className="font-medium text-navy mb-1">Location</p>
                    <p>Accra, Ghana</p>
                    <p className="text-xs mt-1">Serving clients across Africa and emerging markets</p>
                  </div>
                </div>
              </div>

              <div className="bg-green/5 rounded-xl p-8 border border-green/10">
                <h3 className="font-bold text-green font-heading mb-3">Quick Engagement Options</h3>
                <div className="space-y-3 text-sm font-body text-slate">
                  <div className="flex gap-2">
                    <svg className="w-4 h-4 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span><strong className="text-navy">Discovery Call:</strong> 30-minute introductory call to discuss your needs</span>
                  </div>
                  <div className="flex gap-2">
                    <svg className="w-4 h-4 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span><strong className="text-navy">Gap Assessment:</strong> Rapid assessment of your current ESG/sustainability posture</span>
                  </div>
                  <div className="flex gap-2">
                    <svg className="w-4 h-4 text-green flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span><strong className="text-navy">Full Engagement:</strong> Comprehensive advisory tailored to your requirements</span>
                  </div>
                </div>
              </div>

              <div className="bg-sand rounded-xl p-8">
                <h3 className="font-bold text-navy font-heading mb-3">A Volta Partners Company</h3>
                <p className="text-sm text-slate font-body leading-relaxed">Volta Impact Advisors is the dedicated ESG, impact, and sustainability practice of Volta Partners, an Africa-focused development finance advisory firm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
