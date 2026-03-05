import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — Volta Impact Advisors',
  description: 'Comprehensive ESG, impact, and sustainability advisory services for Africa and emerging markets.',
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
