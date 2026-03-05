import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Volta Impact Advisors',
  description: 'Get in touch with Volta Impact Advisors for ESG, impact, and sustainability advisory services.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
