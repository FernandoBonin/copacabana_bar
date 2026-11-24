'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, LayoutGrid, UtensilsCrossed } from 'lucide-react';
import { cn } from '@/lib/utils';

const MOBILE_NAV_ITEMS = [
  {
    href: '/',
    label: 'Início',
    icon: Home,
    match: (path: string) => path === '/',
  },
  {
    href: '/categorias',
    label: 'Categorias',
    icon: LayoutGrid,
    match: (path: string) =>
      path === '/categorias' ||
      (path.startsWith('/categoria/') && !path.startsWith('/categoria/porcoes')),
  },
  {
    href: '/categoria/porcoes',
    label: 'Porções',
    icon: UtensilsCrossed,
    match: (path: string) =>
      path.startsWith('/categoria/porcoes') || path.startsWith('/prato/'),
  },
];

export function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navegação inferior"
      className="md:hidden fixed inset-x-0 bottom-0 z-30 h-14 bg-surface-container-lowest/95 backdrop-blur-xs border-t border-outline-variant"
    >
      <div className="grid h-full grid-cols-3">
        {MOBILE_NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = item.match(pathname);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 font-label text-[11px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-primary',
                isActive
                  ? 'text-primary bg-surface-container-low'
                  : 'text-on-surface-variant hover:text-primary'
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="whitespace-nowrap">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
