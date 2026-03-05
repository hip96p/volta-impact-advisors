import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services & Frameworks — Volta Impact Advisors',
  description: 'Redirecting to Services page.',
};

export default function FrameworksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
