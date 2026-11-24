import type { Metadata } from 'next';
import { Crimson_Pro, Lato, Source_Code_Pro } from 'next/font/google';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { PageTransition } from '@/components/PageTransition';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import './globals.css';

const crimsonPro = Crimson_Pro({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-crimson',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-lato',
  display: 'swap',
});

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-source-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Copacabana Bar — Cardápio Digital',
    template: '%s | Copacabana Bar',
  },
  description:
    'Cardápio digital do Copacabana Bar no Tatuapé, São Paulo — porções, lanches, cervejas, bebidas, whisky e combos.',
  openGraph: {
    title: 'Copacabana Bar — Cardápio Digital',
    description:
      'Cardápio digital do Copacabana Bar no Tatuapé, São Paulo — porções, lanches, cervejas, bebidas, whisky e combos.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Copacabana Bar — Cardápio Digital',
    description:
      'Cardápio digital do Copacabana Bar no Tatuapé, São Paulo — porções, lanches, cervejas, bebidas, whisky e combos.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${crimsonPro.variable} ${lato.variable} ${sourceCodePro.variable}`}
    >
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col bg-surface text-on-surface font-body antialiased"
      >
        <SiteHeader />
        <main className="flex-1 flex flex-col">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
        <MobileBottomNav />
      </body>
    </html>
  );
}
