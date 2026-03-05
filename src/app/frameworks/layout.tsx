import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frameworks & Standards — Volta Impact Advisors',
  description: 'Expert implementation support for IFRS S1/S2, PRB, IFC Performance Standards, SBTi, CSRD/ESRS, and more.',
};

export default function FrameworksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
