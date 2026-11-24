'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UtensilsCrossed, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';

const DESKTOP_NAV_ITEMS = [
  { href: '/', label: 'Início', match: (path: string) => path === '/' },
  {
    href: '/categorias',
    label: 'Categorias',
    match: (path: string) => path === '/categorias',
  },
  {
    href: '/categoria/porcoes',
    label: 'Porções',
    match: (path: string) => path.startsWith('/categoria/porcoes'),
  },
  {
    href: '/categoria/cervejas',
    label: 'Cervejas',
    match: (path: string) => path.startsWith('/categoria/cervejas'),
  },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 w-full bg-primary-container text-on-primary border-b border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-14 md:h-auto md:py-4 flex items-center justify-between gap-4 md:gap-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 md:gap-3 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary shrink-0"
        >
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-10 md:h-9 md:w-11 items-center justify-center rounded border border-on-primary-container/50 bg-primary text-on-primary shrink-0"
          >
            <Waves className="size-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-headline text-lg md:text-[22px] md:leading-7 font-bold tracking-wide text-on-primary whitespace-nowrap">
              COPACABANA BAR
            </span>
            <span className="hidden sm:block font-label text-xs font-bold tracking-wide text-on-primary-container whitespace-nowrap">
              Tatuapé · São Paulo
            </span>
          </span>
        </Link>

        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-6 lg:gap-8"
        >
          {DESKTOP_NAV_ITEMS.map((item) => {
            const isActive = item.match(pathname);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'font-label text-sm font-bold tracking-wide pb-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-primary rounded-xs',
                  isActive
                    ? 'text-on-primary border-b-2 border-on-primary'
                    : 'text-on-primary-container hover:text-on-primary border-b-2 border-transparent'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/categorias"
            aria-current={pathname === '/categorias' ? 'page' : undefined}
            className={cn(
              'md:hidden inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-label text-xs font-bold whitespace-nowrap transition-colors min-h-9',
              pathname === '/categorias'
                ? 'bg-surface text-primary'
                : 'bg-primary text-on-primary border border-on-primary-container/60 hover:bg-primary/90'
            )}
          >
            <UtensilsCrossed className="size-3.5" aria-hidden="true" />
            <span>Cardápio</span>
          </Link>

          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary text-on-primary-container border border-on-primary-container font-label text-xs font-bold tracking-wide whitespace-nowrap">
            Cardápio de Consulta
          </span>
        </div>
      </div>
    </header>
  );
}
