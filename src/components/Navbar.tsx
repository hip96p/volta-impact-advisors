'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/frameworks', label: 'Frameworks' },
  { href: '/market-watch', label: 'Market Watch' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-500 ${
              scrolled ? 'bg-green' : 'bg-white/15 border border-white/20'
            }`}>
              <span className="text-white font-extrabold text-[10px] font-heading tracking-tight">VIA</span>
            </div>
            <span className={`font-semibold text-sm tracking-tight font-heading transition-colors duration-500 ${
              scrolled ? 'text-navy' : 'text-white'
            }`}>
              Volta Impact Advisors
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[13px] font-medium transition-colors duration-300 font-body ${
                  pathname === link.href
                    ? 'text-green'
                    : scrolled ? 'text-charcoal/70 hover:text-charcoal' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="bg-green text-white px-5 py-2 rounded-full text-[13px] font-medium font-body hover:bg-green-light transition-colors">
              Get in Touch
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? <path d="M5 5l10 10M5 15L15 5" /> : <path d="M3 6h14M3 10h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-charcoal/70 hover:text-charcoal text-sm font-body"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMenuOpen(false)} className="bg-green text-white px-5 py-2.5 rounded-full text-sm font-medium text-center font-body">
                Get in Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
