import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-midnight text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-md bg-green flex items-center justify-center">
                <span className="text-white font-extrabold text-sm font-heading tracking-tight">VIA</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-white font-semibold text-base tracking-tight font-heading">Volta Impact</span>
                <span className="text-green-light text-[10px] font-medium tracking-widest uppercase">Advisors</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mt-4 max-w-xs">
              Africa and emerging markets&apos; leading ESG, impact, and sustainability advisory firm.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading">Services</h4>
            <ul className="space-y-2.5">
              <li><Link href="/services#banks" className="text-sm hover:text-green-light transition">Banks &amp; Financial Institutions</Link></li>
              <li><Link href="/services#investors" className="text-sm hover:text-green-light transition">Investors &amp; Asset Managers</Link></li>
              <li><Link href="/services#governments" className="text-sm hover:text-green-light transition">Governments &amp; Public Sector</Link></li>
              <li><Link href="/services#dfis" className="text-sm hover:text-green-light transition">DFIs &amp; Development Partners</Link></li>
              <li><Link href="/services#cross-cutting" className="text-sm hover:text-green-light transition">Cross-Cutting Services</Link></li>
            </ul>
          </div>

          {/* Frameworks */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading">Frameworks</h4>
            <ul className="space-y-2.5">
              <li><Link href="/frameworks#ifrs" className="text-sm hover:text-green-light transition">IFRS S1/S2</Link></li>
              <li><Link href="/frameworks#prb" className="text-sm hover:text-green-light transition">PRB (UNEP FI)</Link></li>
              <li><Link href="/frameworks#ifc" className="text-sm hover:text-green-light transition">IFC Performance Standards</Link></li>
              <li><Link href="/frameworks#sbti" className="text-sm hover:text-green-light transition">SBTi &amp; Net Zero</Link></li>
              <li><Link href="/frameworks#csrd" className="text-sm hover:text-green-light transition">CSRD/ESRS</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 font-heading">Get in Touch</h4>
            <ul className="space-y-2.5 text-sm">
              <li>info@voltaimpactadvisors.com</li>
              <li>Accra, Ghana</li>
              <li className="pt-2">
                <Link href="/contact" className="text-green-light hover:text-green font-medium transition">
                  Start a Conversation →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs">© {new Date().getFullYear()} Volta Impact Advisors. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <span>A Volta Partners Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
