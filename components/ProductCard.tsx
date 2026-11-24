import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SafeMenuImage } from '@/components/SafeMenuImage';
import { MenuProduct } from '@/data/products';

interface ProductCardProps {
  product: MenuProduct;
  layout?: 'vertical' | 'responsive-horizontal';
}

export function ProductCard({
  product,
  layout = 'responsive-horizontal',
}: ProductCardProps) {
  const href = `/prato/${product.slug}`;

  if (layout === 'vertical') {
    return (
      <Link
        href={href}
        className="group block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Card className="flex flex-col h-full gap-0 py-0 rounded-lg bg-surface-container-lowest border border-outline-variant ring-0 shadow-none overflow-hidden transition-transform duration-150 ease-out group-hover:-translate-y-0.5">
          <div className="relative aspect-[4/3] w-full bg-surface-container-high overflow-hidden">
            <SafeMenuImage
              src={product.imageUrl}
              alt={product.imageAlt}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              fallbackLabel={product.name}
            />
          </div>
          <div className="p-5 md:p-6 flex-1 flex flex-col justify-between gap-3">
            <div className="flex flex-col gap-1.5">
              <h3 className="font-title text-[22px] leading-7 font-semibold text-on-surface group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="font-body text-[15px] leading-[22px] text-on-surface-variant text-pretty">
                {product.shortDescription}
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 font-label text-sm font-bold text-primary">
              <span>Ver detalhes</span>
              <ArrowRight
                className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </Card>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <Card className="flex flex-col sm:flex-row h-full gap-0 py-0 rounded-lg bg-surface-container-lowest border border-outline-variant ring-0 shadow-none overflow-hidden transition-transform duration-150 ease-out group-hover:-translate-y-0.5">
        <div className="relative w-full sm:w-56 aspect-[16/10] sm:aspect-auto shrink-0 bg-surface-container-high overflow-hidden">
          <SafeMenuImage
            src={product.imageUrl}
            alt={product.imageAlt}
            sizes="(max-width: 640px) 100vw, 224px"
            fallbackLabel={product.name}
          />
        </div>
        <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between gap-3">
          <div className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-title text-[22px] leading-7 font-semibold text-on-surface group-hover:text-primary transition-colors">
                {product.name}
              </h2>
              <span className="font-mono text-[15px] leading-5 font-semibold text-primary tabular-nums shrink-0 pt-0.5">
                {product.priceLabel}
              </span>
            </div>
            <p className="font-body text-[15px] leading-[22px] text-on-surface-variant text-pretty">
              {product.shortDescription}
            </p>
          </div>
          <div className="pt-3 border-t border-outline-variant flex items-center justify-between gap-2">
            <span className="font-label text-xs font-bold text-on-surface-variant">
              Valor ilustrativo · {product.priceNote}
            </span>
            <span className="inline-flex items-center gap-1 font-label text-sm font-bold text-primary shrink-0">
              <span>Detalhes</span>
              <ArrowRight
                className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
