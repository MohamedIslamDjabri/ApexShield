import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { MobileCTA } from '@/components/layout/MobileCTA';
import { FloatingAIButton } from '@/components/ai/FloatingAIButton';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'ApexShield Roofing | Residential Roofing & Roof Replacement',
  description:
    'Austin & Central Texas premier residential roofing contractor. 50-year non-prorated warranties, free 4K drone inspections, GAF Master Elite certified, and 24/7 emergency storm restoration.',
  openGraph: {
    title: 'ApexShield Roofing | Premier Residential Roofing & Roof Replacement',
    description:
      'Master Elite certified residential roofing, free 21-point drone inspections, and insurance restoration in Austin and Central Texas.',
    type: 'website',
    url: 'https://apexshieldroofing.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ApexShield Roofing | Premier Residential Roofing & Roof Replacement',
    description:
      'Master Elite certified residential roofing, free 21-point drone inspections, and insurance restoration in Austin and Central Texas.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen">
        <Header />
        {/* Main wrapper: header is fixed (h-20 / 80px), so top padding ensures clean layout */}
        <main className="w-full pt-20 flex-grow pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <MobileCTA />
        <FloatingAIButton />
      </body>
    </html>
  );
}
