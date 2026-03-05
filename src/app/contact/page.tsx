'use client';

import { Mail } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-charcoal overflow-hidden !pt-0 !pb-0">
        <div className="gradient-blob w-[400px] h-[400px] bg-green -top-20 right-20 absolute" />
        <div className="via-container relative z-10" style={{ paddingTop: '120px', paddingBottom: '70px' }}>
          <FadeIn delay={0.2}>
            <p className="text-green-light text-sm font-medium tracking-[0.2em] uppercase mb-8 font-body">Get in Touch</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <h1 className="text-white text-4xl md:text-6xl font-heading font-bold leading-[1.1] mb-10 max-w-2xl">
              Let&apos;s start a conversation.
            </h1>
          </FadeIn>
          <FadeIn delay={0.6}>
            <p className="text-white/60 text-lg font-body font-light max-w-xl leading-relaxed">
              Tell us about your ESG or sustainability challenge and we will get back to you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white">
        <div className="via-container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-20">
            {/* Form */}
            <FadeIn className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-medium text-charcoal font-body mb-2">First Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-charcoal font-body mb-2">Last Name *</label>
                    <input type="text" required className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[13px] font-medium text-charcoal font-body mb-2">Email *</label>
                    <input type="email" required className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-charcoal font-body mb-2">Organization</label>
                    <input type="text" className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-charcoal font-body mb-2">Client Type</label>
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition bg-gray-50/50 text-charcoal/70">
                    <option value="">Select your organization type</option>
                    <option value="bank">Bank / Financial Institution</option>
                    <option value="investor">Investor / Asset Manager</option>
                    <option value="government">Government / Public Sector</option>
                    <option value="dfi">Development Finance Institution</option>
                    <option value="corporate">Corporate / Private Sector</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-charcoal font-body mb-2">How can we help? *</label>
                  <textarea required rows={5} className="w-full px-4 py-3 border border-gray-200 rounded-lg font-body text-sm focus:ring-2 focus:ring-green/20 focus:border-green outline-none transition resize-none bg-gray-50/50" placeholder="Tell us about your ESG or sustainability challenge..." />
                </div>

                <button type="submit" className="bg-green text-white px-8 py-3.5 rounded-md text-sm font-medium font-body hover:bg-green-light transition-all">
                  Send Message
                </button>
              </form>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail size={18} className="text-green" />
                    <p className="text-[13px] font-medium text-charcoal font-body">Email us directly</p>
                  </div>
                  <p className="text-charcoal/70 text-sm font-body ml-[30px]">hello@voltaimpactadvisors.com</p>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <p className="text-[12px] text-charcoal/40 font-body uppercase tracking-wider mb-4">Serving clients across</p>
                  <p className="text-charcoal/70 text-sm font-body leading-relaxed">
                    23+ countries across Africa and emerging markets — from South Africa and Nigeria to Kenya, Ghana, Ethiopia, and beyond.
                  </p>
                </div>

                <div className="border-t border-gray-100 pt-8">
                  <p className="text-[12px] text-charcoal/40 font-body uppercase tracking-wider mb-2">A Fluent Africa Company</p>
                  <p className="text-charcoal/60 text-sm font-body leading-relaxed">
                    The dedicated ESG, impact, and sustainability advisory practice of Volta Partners.
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
