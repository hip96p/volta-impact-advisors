import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Market Watch — Volta Impact Advisors',
  description: 'Live sustainability data, climate finance trends, and curated ESG news for Africa and emerging markets.',
};

export default function MarketWatchLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
