import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { SafeMenuImage } from '@/components/SafeMenuImage';
import { MenuCategory } from '@/data/categories';
import { cn } from '@/lib/utils';

interface CategoryCardProps {
  category: MenuCategory;
  variant?: 'compact' | 'detailed' | 'mobile-horizontal';
}

export function CategoryCard({
  category,
  variant = 'detailed',
}: CategoryCardProps) {
  const href = `/categoria/${category.slug}`;

  if (variant === 'compact') {
    return (
      <Link
        href={href}
        className="group block h-full rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <Card className="h-full gap-0 py-0 rounded-lg bg-surface-container-lowest border border-outline-variant ring-0 shadow-none overflow-hidden transition-colors duration-150 group-hover:border-primary">
          <div className="relative aspect-[4/3] w-full bg-surface-container-high overflow-hidden">
            <SafeMenuImage
              src={category.imageUrl}
              alt={category.imageAlt}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 18vw"
              fallbackLabel={category.name}
            />
          </div>
          <div className="p-3.5">
            <h3 className="font-title text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
              {category.name}
            </h3>
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
      <Card
        className={cn(
          'h-full gap-0 py-0 rounded-lg bg-surface-container-lowest border border-outline-variant ring-0 shadow-none overflow-hidden transition-transform duration-150 ease-out group-hover:-translate-y-0.5',
          'flex flex-row md:flex-col'
        )}
      >
        <div className="relative w-32 sm:w-40 md:w-full aspect-auto md:aspect-[4/3] shrink-0 bg-surface-container-high overflow-hidden">
          <SafeMenuImage
            src={category.imageUrl}
            alt={category.imageAlt}
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 50vw, 33vw"
            fallbackLabel={category.name}
          />
        </div>
        <div className="p-4 md:p-6 flex-1 flex flex-col justify-between gap-2">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between gap-2">
              <h2 className="font-title text-[20px] md:text-[22px] leading-7 font-semibold text-on-surface group-hover:text-primary transition-colors">
                {category.name}
              </h2>
              <ArrowRight
                className="size-4.5 text-primary shrink-0 transition-transform duration-150 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </div>
            <p className="font-body text-[15px] leading-[22px] text-on-surface-variant text-pretty">
              {category.description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
