import type { Metadata } from 'next';
import './globals.css';
import { Navbar, Footer } from '@/components/Navigation';
import { SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} — Assam ADRE Preparation & Exam Intelligence`,
  description: SITE_CONFIG.description,
  metadataBase: new URL(SITE_CONFIG.domain),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-axom-navy text-slate-100 flex flex-col justify-between selection:bg-axom-red selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
