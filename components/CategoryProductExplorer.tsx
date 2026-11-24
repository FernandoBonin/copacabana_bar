'use client';

import Link from 'next/link';
import { ArrowLeft, Search, X } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MenuCategory } from '@/data/categories';
import { MenuProduct } from '@/data/products';
import { cn } from '@/lib/utils';

interface CategoryProductExplorerProps {
  category: MenuCategory;
  allCategories: MenuCategory[];
  products: MenuProduct[];
}

export function CategoryProductExplorer({
  category,
  allCategories,
  products,
}: CategoryProductExplorerProps) {
  const [query, setQuery] = useState('');

  const filteredProducts = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      return products;
    }

    return products.filter((product) => {
      const searchable = [
        product.name,
        product.shortDescription,
        product.fullDescription,
        ...(product.ingredients ?? []),
      ]
        .join(' ')
        .toLowerCase();
      return searchable.includes(normalized);
    });
  }, [products, query]);

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-6 md:py-10 flex flex-col gap-6 md:gap-8">
      {/* Contextual navigation back & item count */}
      <div className="flex flex-col gap-5 border-b border-outline-variant pb-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/categorias"
            className="inline-flex items-center gap-1.5 font-label text-sm font-bold text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            <span>Voltar às Categorias</span>
          </Link>
          <span className="font-label text-xs font-bold text-on-surface-variant">
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1
              ? 'item ilustrativo'
              : 'itens ilustrativos'}
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="flex flex-col gap-2">
            <h1 className="font-display text-[32px] leading-[38px] lg:text-[56px] lg:leading-[62px] font-bold tracking-tight text-on-surface text-balance">
              {category.name}
            </h1>
            <p className="font-body text-base md:text-[17px] leading-relaxed text-on-surface-variant max-w-prose">
              {category.description}
            </p>
          </div>

          <form
            role="search"
            onSubmit={handleSearchSubmit}
            className="flex items-center w-full md:w-96 rounded-md bg-surface-container-lowest border border-outline-variant px-3.5 py-1.5 gap-2 focus-within:border-primary focus-within:ring-1 focus-within:ring-primary"
          >
            <Input
              id={`search-${category.slug}`}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label={`Buscar em ${category.name}`}
              placeholder={`Buscar em ${category.name}...`}
              className="h-9 border-0 bg-transparent px-0 shadow-none font-body text-[15px] text-on-surface placeholder:text-on-surface-variant focus-visible:ring-0 focus-visible:border-0"
            />
            {query ? (
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setQuery('')}
                aria-label="Limpar busca"
                className="text-on-surface-variant hover:text-primary hover:bg-surface-container shrink-0"
              >
                <X className="size-4" aria-hidden="true" />
              </Button>
            ) : null}
            <Button
              type="submit"
              variant="ghost"
              size="icon-sm"
              aria-label="Buscar"
              className="text-primary hover:bg-surface-container shrink-0"
            >
              <Search className="size-4.5" aria-hidden="true" />
            </Button>
          </form>
        </div>

        {/* Category switcher strip */}
        <nav
          aria-label="Outras categorias"
          className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1"
        >
          {allCategories.map((item) => {
            const isActive = item.slug === category.slug;
            return (
              <Link
                key={item.slug}
                href={`/categoria/${item.slug}`}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'inline-flex items-center px-3.5 py-2 rounded-md font-label text-sm font-bold whitespace-nowrap shrink-0 transition-colors min-h-10',
                  isActive
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-low text-on-surface-variant border border-outline-variant hover:border-primary hover:text-primary'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Product grid or empty search state */}
      {filteredProducts.length > 0 ? (
        <section
          aria-label={`Lista de ${category.name}`}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch"
        >
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              layout="responsive-horizontal"
            />
          ))}
        </section>
      ) : (
        <section
          aria-live="polite"
          className="rounded-lg bg-surface-container-low border border-outline-variant p-8 text-center flex flex-col items-center gap-4"
        >
          <p className="font-headline text-2xl font-semibold text-on-surface">
            Nenhum item encontrado para &ldquo;{query}&rdquo;
          </p>
          <p className="font-body text-[15px] text-on-surface-variant max-w-md">
            Tente buscar outro nome ou ingrediente em {category.name}, ou explore todas as categorias do cardápio.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              type="button"
              onClick={() => setQuery('')}
              className="bg-primary text-on-primary hover:bg-primary-container h-10 px-4 font-label text-sm font-bold"
            >
              Limpar busca
            </Button>
            <Link
              href="/categorias"
              className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-outline-variant bg-surface-container-lowest font-label text-sm font-bold text-primary hover:border-primary"
            >
              Ver todas as categorias
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}
