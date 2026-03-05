import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About — Volta Impact Advisors',
  description: 'Africa\'s leading ESG, impact, and sustainability advisory firm.',
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
