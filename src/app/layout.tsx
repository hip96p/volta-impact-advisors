import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Volta Impact Advisors — ESG, Impact & Sustainability Advisory',
  description: 'Africa and emerging markets\' leading ESG, impact, and sustainability advisory firm. We serve banks, investors, DFIs, and governments with practical solutions that drive measurable impact.',
  keywords: 'ESG advisory, sustainability consulting, impact assessment, IFRS S1 S2, PRB reporting, green bonds, climate finance, Africa, emerging markets, DFI, ESIA',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
