import Link from 'next/link';
import { ArrowLeft, UtensilsCrossed } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="max-w-3xl w-full mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 flex flex-col items-center text-center gap-6">
      <div className="inline-flex size-14 items-center justify-center rounded-full bg-surface-container border border-outline-variant text-primary">
        <UtensilsCrossed className="size-6" aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-label text-xs font-bold uppercase tracking-wider text-secondary">
          Página não encontrada
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-on-surface text-balance">
          Esse item não está no cardápio
        </h1>
        <p className="font-body text-base md:text-lg text-on-surface-variant max-w-md mx-auto text-pretty">
          A categoria ou prato procurado não foi encontrado. Volte para o início ou explore as categorias disponíveis no Copacabana Bar.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded bg-primary text-on-primary font-label text-sm font-bold hover:bg-primary-container transition-colors min-h-11"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          <span>Voltar ao Início</span>
        </Link>
        <Link
          href="/categorias"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded border border-outline-variant bg-surface-container-lowest text-primary font-label text-sm font-bold hover:border-primary transition-colors min-h-11"
        >
          <UtensilsCrossed className="size-4" aria-hidden="true" />
          <span>Ver Categorias</span>
        </Link>
      </div>
    </div>
  );
}
