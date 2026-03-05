import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white/40 py-20">
      <div className="max-w-[1200px] mx-auto px-6 md:px-20 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-md bg-green flex items-center justify-center">
                <span className="text-white font-extrabold text-[10px] font-heading">VIA</span>
              </div>
              <span className="text-white font-semibold text-sm font-heading">Volta Impact</span>
            </div>
            <p className="text-[13px] leading-[1.8] max-w-[220px] text-white/50">
              ESG, Impact &amp; Sustainability Advisory for Africa &amp; Emerging Markets.
            </p>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-semibold mb-5 font-heading">Services</h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <Link href="/services#banks" className="hover:text-white transition">Banks</Link>
              <Link href="/services#investors" className="hover:text-white transition">Investors</Link>
              <Link href="/services#governments" className="hover:text-white transition">Governments</Link>
              <Link href="/services#development-finance" className="hover:text-white transition">Development Finance</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-semibold mb-5 font-heading">Company</h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <Link href="/about" className="hover:text-white transition">About</Link>
              <Link href="/market-watch" className="hover:text-white transition">Market Watch</Link>
              <Link href="/contact" className="hover:text-white transition">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="text-white text-[13px] font-semibold mb-5 font-heading">Connect</h4>
            <div className="flex flex-col gap-3 text-[13px]">
              <span>hello@voltaimpactadvisors.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-3 text-[12px]">
          <p>&copy; {new Date().getFullYear()} Volta Impact Advisors</p>
          <p>A Fluent Africa Company</p>
        </div>
      </div>
    </footer>
  );
}
