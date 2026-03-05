'use client';

import { Mail, MapPin, Phone, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center bg-midnight overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[400px] h-[400px] bg-green -top-20 right-20 absolute" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 py-32">
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-6 font-body">Get in Touch</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-5xl md:text-7xl font-heading font-bold leading-[1.05] mb-8 max-w-2xl">
              Let&apos;s start a <span className="text-green-light">conversation.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/50 text-lg font-body font-light max-w-xl leading-relaxed">
              From quick consultations to comprehensive engagements.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-navy font-body mb-2">First Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-navy font-body mb-2">Last Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[13px] font-medium text-navy font-body mb-2">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-navy font-body mb-2">Organization</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-navy font-body mb-2">Client Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50 text-charcoal/70">
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
                  <label className="block text-[13px] font-medium text-navy font-body mb-2">How can we help? *</label>
                  <textarea required rows={4} className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition resize-none bg-gray-50/50" placeholder="Tell us about your ESG or sustainability challenge..." />
                </div>

                <button type="submit" className="bg-green text-white px-8 py-3.5 rounded-full text-sm font-medium font-body hover:bg-green-light transition-all hover:shadow-lg hover:shadow-green/20">
                  Send Message
                </button>
              </form>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="space-y-5">
                <div className="glass-card p-6 border border-gray-100 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center">
                      <Mail size={18} className="text-green" />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-navy font-body">Email</p>
                      <p className="text-sm text-charcoal/50 font-body">info@voltaimpactadvisors.com</p>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6 border border-gray-100 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                      <MapPin size={18} className="text-teal" />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium text-navy font-body">Location</p>
                      <p className="text-sm text-charcoal/50 font-body">Accra, Ghana</p>
                    </div>
                  </div>
                  <p className="text-[12px] text-charcoal/30 font-body ml-[52px]">Serving clients across Africa and emerging markets</p>
                </div>

                <div className="bg-green/5 rounded-2xl p-6 border border-green/10">
                  <h3 className="font-heading font-bold text-green text-sm mb-4">Quick Engagement Options</h3>
                  <div className="space-y-3">
                    {[
                      { label: 'Discovery Call', desc: '30-min intro to discuss your needs' },
                      { label: 'Gap Assessment', desc: 'Rapid ESG posture assessment' },
                      { label: 'Full Engagement', desc: 'Comprehensive advisory, tailored' },
                    ].map((opt) => (
                      <div key={opt.label} className="flex items-start gap-3">
                        <ArrowRight size={12} className="text-green mt-1 flex-shrink-0" />
                        <div>
                          <span className="text-navy text-sm font-medium font-body">{opt.label}</span>
                          <span className="text-charcoal/40 text-sm font-body"> — {opt.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6 border border-gray-100 bg-white">
                  <p className="text-[12px] text-charcoal/30 font-body uppercase tracking-wider mb-2">A Volta Partners Company</p>
                  <p className="text-sm text-charcoal/50 font-body leading-relaxed">
                    The dedicated ESG, impact, and sustainability practice of Volta Partners.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
