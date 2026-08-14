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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-[#F4EFE6] text-[#211915] flex flex-col justify-between selection:bg-[#9E3A26] selection:text-white font-sans antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

