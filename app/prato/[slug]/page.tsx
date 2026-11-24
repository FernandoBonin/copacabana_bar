import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { SafeMenuImage } from '@/components/SafeMenuImage';
import { Badge } from '@/components/ui/badge';
import { getCategoryBySlug } from '@/data/categories';
import {
  getAllProducts,
  getProductBySlug,
  getProductsByCategory,
} from '@/data/products';
import { cn } from '@/lib/utils';

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProducts().map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: 'Item não encontrado',
    };
  }

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const category = getCategoryBySlug(product.categorySlug);
  const categoryName = category?.name ?? 'Cardápio';
  const backHref = category ? `/categoria/${category.slug}` : '/categorias';
  const relatedProducts = getProductsByCategory(product.categorySlug).filter(
    (item) => item.slug !== product.slug
  );

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-5 md:py-10 flex flex-col gap-6 md:gap-10">
      {/* Back navigation */}
      <div>
        <Link
          href={backHref}
          className="inline-flex items-center gap-1.5 font-label text-sm font-bold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>Voltar para {categoryName}</span>
        </Link>
      </div>

      {/* 12-column desktop split: photo left, details right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
        <div className="lg:col-span-6">
          <div className="relative aspect-[4/3] w-full rounded-xl bg-surface-container-high overflow-hidden border border-outline-variant">
            <SafeMenuImage
              src={product.imageUrl}
              alt={product.imageAlt}
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              fallbackLabel={product.name}
            />
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-5 md:gap-6">
          <div className="flex flex-col gap-2.5">
            {product.badge ? (
              <Badge className="self-start h-auto px-3 py-1 rounded-full bg-secondary text-on-secondary border-0 font-label text-xs font-bold">
                {product.badge}
              </Badge>
            ) : null}
            <h1 className="font-display text-[32px] leading-[38px] lg:text-[56px] lg:leading-[62px] font-bold tracking-tight text-on-surface text-balance">
              {product.name}
            </h1>
          </div>

          {/* Illustrative price box */}
          <div className="rounded-lg bg-surface-container-low border border-outline-variant p-4 sm:p-5 flex items-center justify-between gap-4 sm:gap-6">
            <div className="flex flex-col min-w-0">
              <span className="font-label text-xs font-bold text-on-surface-variant">
                Valor ilustrativo
              </span>
              <span className="font-mono text-[22px] md:text-[28px] leading-[34px] font-semibold text-primary tabular-nums">
                {product.priceLabel}
              </span>
            </div>
            <span className="font-body text-[15px] text-on-surface-variant text-right">
              {product.priceNote}
            </span>
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <h2 className="font-headline text-[22px] leading-7 font-semibold text-on-surface">
              Sobre o prato
            </h2>
            <p className="font-body text-[17px] leading-[26px] text-on-surface-variant max-w-prose text-pretty">
              {product.fullDescription}
            </p>
          </div>

          {/* Details specification card */}
          <div className="rounded-lg bg-surface-container border border-outline-variant p-4 sm:p-5 flex flex-col gap-3">
            <h2 className="font-headline text-lg font-bold text-on-surface">
              {product.detailsTitle}
            </h2>
            <dl className="grid grid-cols-1 gap-3">
              {product.details.map((row, index) => {
                const isLast = index === product.details.length - 1;
                return (
                  <div
                    key={row.label}
                    className={cn(
                      'flex items-center justify-between gap-4',
                      !isLast && 'pb-2 border-b border-outline-variant'
                    )}
                  >
                    <dt className="font-label text-sm font-bold text-on-surface-variant">
                      {row.label}
                    </dt>
                    <dd
                      className={cn(
                        'font-body text-[15px] text-right',
                        row.highlight ? 'text-primary font-bold' : 'text-on-surface'
                      )}
                    >
                      {row.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>

          <p className="font-label text-xs font-bold text-on-surface-variant text-center lg:text-left">
            Cardápio exclusivo para consulta · Faça seu pedido diretamente ao garçom.
          </p>
        </div>
      </div>

      {/* Related items from the same category */}
      {relatedProducts.length > 0 ? (
        <section
          aria-label={`Mais opções em ${categoryName}`}
          className="pt-4 border-t border-outline-variant flex flex-col gap-5"
        >
          <h2 className="font-headline text-2xl font-bold text-on-surface">
            Mais em {categoryName}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {relatedProducts.slice(0, 2).map((related) => (
              <ProductCard
                key={related.slug}
                product={related}
                layout="responsive-horizontal"
              />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
