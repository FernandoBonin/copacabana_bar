import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CategoryCard } from '@/components/CategoryCard';
import { SafeMenuImage } from '@/components/SafeMenuImage';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { getAllCategories, VENUE_MEDIA } from '@/data/categories';

export const metadata: Metadata = {
  title: 'Categorias do Cardápio',
  description:
    'Explore as categorias do Copacabana Bar: Lanches, Porções, Cervejas, Bebidas, Whisky, Combos e a Feijoada Tradicional.',
};

export default function CategoriasPage() {
  const categories = getAllCategories();

  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-6 md:py-10 flex flex-col gap-8 md:gap-10">
      <div className="flex flex-col gap-2 border-b border-outline-variant pb-5 md:pb-6">
        <h1 className="font-display text-[32px] leading-[38px] lg:text-[56px] lg:leading-[62px] font-bold tracking-tight text-on-surface text-balance">
          Cardápio do Boteco
        </h1>
        <p className="font-body text-[15px] leading-[22px] md:text-[17px] md:leading-[26px] text-on-surface-variant max-w-prose text-pretty">
          Navegue pelas categorias do Copacabana Bar e descubra porções, lanches, chopp gelado, drinks e rótulos selecionados.
        </p>
      </div>

      {/* Destaque Especial: Feijoada Tradicional */}
      <section aria-label="Destaque especial">
        <Link
          href="/prato/feijoada-tradicional"
          className="group block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          <Card className="grid grid-cols-1 lg:grid-cols-12 gap-0 py-0 rounded-lg bg-surface-container-low border border-secondary ring-0 shadow-none overflow-hidden transition-transform duration-150 ease-out group-hover:-translate-y-0.5">
            <div className="relative lg:col-span-5 aspect-[16/9] lg:aspect-[16/10] bg-surface-container-high overflow-hidden">
              <SafeMenuImage
                src={VENUE_MEDIA.feijoada.url}
                alt={VENUE_MEDIA.feijoada.alt}
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
                fallbackLabel="Feijoada Tradicional"
              />
            </div>
            <div className="lg:col-span-7 p-5 sm:p-6 lg:p-8 flex flex-col justify-center gap-3">
              <Badge className="self-start h-auto px-3 py-1 rounded-full bg-secondary text-on-secondary border-0 font-label text-xs font-bold">
                Especial de Sábado
              </Badge>
              <h2 className="font-headline text-[28px] leading-[34px] lg:text-[36px] lg:leading-[42px] font-bold text-on-surface group-hover:text-primary transition-colors">
                Feijoada Tradicional
              </h2>
              <p className="font-body text-[15px] leading-[22px] md:text-[17px] md:leading-[26px] text-on-surface-variant max-w-prose text-pretty">
                Servida aos sábados em panelas de barro sobre toalha de ondas de Copacabana, com couve refogada, torresmo, farofa e acompanhamentos clássicos. Consulte disponibilidade no salão.
              </p>
              <span className="inline-flex items-center gap-1.5 font-label text-sm font-bold text-primary pt-1">
                <span>Ver detalhes do prato</span>
                <ArrowRight
                  className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </div>
          </Card>
        </Link>
      </section>

      {/* Grid das 6 categorias */}
      <section
        aria-label="Categorias do cardápio"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-stretch"
      >
        {categories.map((category) => (
          <CategoryCard
            key={category.slug}
            category={category}
            variant="detailed"
          />
        ))}
      </section>
    </div>
  );
}
