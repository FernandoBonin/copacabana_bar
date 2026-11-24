import Link from 'next/link';
import { ArrowRight, UtensilsCrossed } from 'lucide-react';
import { CategoryCard } from '@/components/CategoryCard';
import { ProductCard } from '@/components/ProductCard';
import { SafeMenuImage } from '@/components/SafeMenuImage';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { getAllCategories, VENUE_MEDIA } from '@/data/categories';
import { getProductBySlug } from '@/data/products';

export default function HomePage() {
  const categories = getAllCategories();
  const bolinho = getProductBySlug('bolinho-de-bacalhau');
  const feijoada = getProductBySlug('feijoada-tradicional');

  return (
    <div className="flex flex-col">
      {/* Hero Full-Width (2-column desktop, stacked mobile) */}
      <section className="w-full bg-primary-container text-on-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-10">
          <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col gap-4 md:gap-6">
            <Badge className="self-start h-auto px-3 py-1 rounded-full bg-secondary text-on-secondary border-0 font-label text-xs font-bold tracking-wide">
              A alma carioca no Tatuapé
            </Badge>

            <h1 className="font-display text-[32px] leading-[38px] sm:text-[42px] sm:leading-[48px] lg:text-[56px] lg:leading-[62px] font-bold tracking-tight text-on-primary text-balance">
              Um pedacinho do Rio no Tatuapé
            </h1>

            <p className="font-body text-[15px] leading-[22px] md:text-[17px] md:leading-[26px] text-inverse-on-surface max-w-prose text-pretty">
              Chopp tirado com colarinho cremoso, roda de samba, mesas de madeira e os clássicos de boteco que transformam cada encontro em um fim de tarde carioca.
            </p>

            <div className="pt-1 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/categorias"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded bg-surface text-primary font-label text-sm font-bold transition-colors duration-150 hover:bg-surface-container focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary min-h-11 whitespace-nowrap"
              >
                <UtensilsCrossed className="size-4.5" aria-hidden="true" />
                <span>Explorar Cardápio</span>
              </Link>
              <Link
                href="/categoria/porcoes"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 md:px-6 md:py-3.5 rounded border border-on-primary-container text-on-primary font-label text-sm font-bold transition-colors duration-150 hover:bg-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary min-h-11 whitespace-nowrap"
              >
                <span>Ver Porções</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-[16/10] w-full rounded-xl overflow-hidden border border-on-primary-container bg-primary">
              <SafeMenuImage
                src={VENUE_MEDIA.heroChopp.url}
                alt={VENUE_MEDIA.heroChopp.alt}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                fallbackLabel="Copacabana Bar"
              />
            </div>
          </div>
        </div>

        <div className="copacabana-wave-hero" aria-hidden="true" />
      </section>

      {/* Destaques da Casa */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12 flex flex-col gap-6">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-headline text-[28px] leading-[34px] lg:text-[36px] lg:leading-[42px] font-bold tracking-tight text-on-surface text-balance">
              Destaques da Casa
            </h2>
            <p className="hidden md:block font-body text-[17px] leading-[26px] text-on-surface-variant">
              Sabores tradicionais do salão, do chopp gelado à feijoada servida em panelas de barro.
            </p>
          </div>
          <Link
            href="/categoria/porcoes"
            className="inline-flex items-center gap-1.5 font-label text-sm font-bold text-primary hover:underline shrink-0 whitespace-nowrap"
          >
            <span>Ver porções</span>
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {bolinho ? <ProductCard product={bolinho} layout="vertical" /> : null}

          <Link
            href="/categoria/cervejas"
            className="group block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Card className="flex flex-col h-full gap-0 py-0 rounded-lg bg-surface-container-lowest border border-outline-variant ring-0 shadow-none overflow-hidden transition-transform duration-150 ease-out group-hover:-translate-y-0.5">
              <div className="relative aspect-[4/3] w-full bg-surface-container-high overflow-hidden">
                <SafeMenuImage
                  src="/images/cervejas.jpg"
                  alt="Cervejas de garrafa 600ml e copo americano"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  fallbackLabel="Chopp & Cervejas"
                />
              </div>
              <div className="p-5 md:p-6 flex-1 flex flex-col justify-between gap-3">
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-title text-[22px] leading-7 font-semibold text-on-surface group-hover:text-primary transition-colors">
                    Chopp &amp; Cervejas 600ml
                  </h3>
                  <p className="font-body text-[15px] leading-[22px] text-on-surface-variant text-pretty">
                    Chopp bem tirado e garrafas sempre trincando para acompanhar a conversa na calçada.
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-label text-sm font-bold text-primary">
                  <span>Explorar bebidas</span>
                  <ArrowRight
                    className="size-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Card>
          </Link>

          {feijoada ? (
            <Link
              href={`/prato/${feijoada.slug}`}
              className="group block h-full md:col-span-2 lg:col-span-1 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <Card className="flex flex-col h-full gap-0 py-0 rounded-lg bg-surface-container-low border border-secondary ring-0 shadow-none overflow-hidden transition-transform duration-150 ease-out group-hover:-translate-y-0.5">
                <div className="relative aspect-[4/3] w-full bg-surface-container-high overflow-hidden">
                  <SafeMenuImage
                    src={feijoada.imageUrl}
                    alt={feijoada.imageAlt}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 33vw"
                    fallbackLabel={feijoada.name}
                  />
                </div>
                <div className="p-5 md:p-6 flex-1 flex flex-col justify-between gap-3">
                  <div className="flex flex-col gap-2">
                    <Badge className="self-start h-auto px-3 py-1 rounded-full bg-secondary text-on-secondary border-0 font-label text-xs font-bold">
                      {feijoada.badge}
                    </Badge>
                    <h3 className="font-title text-[22px] leading-7 font-semibold text-on-surface group-hover:text-primary transition-colors">
                      Feijoada em Panelas de Barro
                    </h3>
                    <p className="font-body text-[15px] leading-[22px] text-on-surface-variant text-pretty">
                      Servida aos sábados com couve, torresmo, farofa e acompanhamentos. Consulte disponibilidade no salão.
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
          ) : null}
        </div>
      </section>

      {/* Prévia das Categorias Principais */}
      <section className="w-full bg-surface-container-low border-y border-outline-variant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12 flex flex-col gap-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-headline text-[28px] leading-[34px] lg:text-[36px] lg:leading-[42px] font-bold tracking-tight text-on-surface">
              Principais Categorias
            </h2>
            <Link
              href="/categorias"
              className="inline-flex items-center gap-1.5 font-label text-sm font-bold text-primary hover:underline shrink-0 whitespace-nowrap"
            >
              <span>Ver todas</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 items-stretch">
            {categories.map((category) => (
              <CategoryCard
                key={category.slug}
                category={category}
                variant="compact"
              />
            ))}
          </div>
        </div>
      </section>

      {/* O Salão e a Calçada */}
      <section className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-8 md:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
        <div className="lg:col-span-5 flex flex-col gap-3">
          <h2 className="font-headline text-[28px] leading-[34px] lg:text-[36px] lg:leading-[42px] font-bold tracking-tight text-on-surface text-balance">
            O Salão e a Calçada
          </h2>
          <p className="font-body text-[15px] leading-[22px] md:text-[17px] md:leading-[26px] text-on-surface-variant text-pretty">
            Da fachada com toldo verde e mosaico de ondas de Copacabana ao salão de ladrilhos hidráulicos, mesas de madeira e quadros históricos nas paredes.
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-2 gap-3 md:gap-4">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-outline-variant bg-surface-container-high">
            <SafeMenuImage
              src={VENUE_MEDIA.facade.url}
              alt={VENUE_MEDIA.facade.alt}
              sizes="(max-width: 1024px) 50vw, 30vw"
              fallbackLabel="Fachada Copacabana Bar"
            />
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden border border-outline-variant bg-surface-container-high">
            <SafeMenuImage
              src={VENUE_MEDIA.interior.url}
              alt={VENUE_MEDIA.interior.alt}
              sizes="(max-width: 1024px) 50vw, 30vw"
              fallbackLabel="Salão Copacabana Bar"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
