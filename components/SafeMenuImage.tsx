'use client';

import Image from 'next/image';
import { UtensilsCrossed } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface SafeMenuImageProps {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  fallbackLabel?: string;
}

export function SafeMenuImage({
  src,
  alt,
  sizes,
  priority = false,
  className,
  fallbackLabel,
}: SafeMenuImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          'flex h-full w-full flex-col items-center justify-center gap-2 bg-surface-container-high px-4 text-center text-on-surface-variant',
          className
        )}
      >
        <UtensilsCrossed className="size-7 text-primary/70" aria-hidden="true" />
        {fallbackLabel ? (
          <span className="font-title text-sm font-semibold text-on-surface">
            {fallbackLabel}
          </span>
        ) : null}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={cn('object-cover', className)}
    />
  );
}
