import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface mt-auto pb-14 md:pb-0">
      <div className="copacabana-wave-footer" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 flex flex-col gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <p className="font-title text-lg font-bold text-inverse-on-surface">
              Copacabana Bar · Tatuapé, São Paulo
            </p>
            <p className="font-body text-[15px] leading-relaxed text-outline-variant">
              Cardápio digital exclusivamente para consulta no salão. Não realiza pedidos ou entregas.
            </p>
          </div>

          <nav
            aria-label="Links do rodapé"
            className="flex flex-wrap items-center gap-5 font-label text-xs font-bold text-inverse-primary"
          >
            <Link href="/" className="hover:underline whitespace-nowrap">
              Início
            </Link>
            <Link href="/categorias" className="hover:underline whitespace-nowrap">
              Categorias
            </Link>
            <Link href="/categoria/porcoes" className="hover:underline whitespace-nowrap">
              Porções
            </Link>
            <Link href="/categoria/cervejas" className="hover:underline whitespace-nowrap">
              Cervejas
            </Link>
          </nav>
        </div>

        <div className="pt-4 border-t border-outline/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p className="font-label text-xs font-bold text-outline-variant">
            Projeto demonstrativo independente e não oficial · Valores, itens e informações do cardápio são ilustrativos e podem requerer verificação no local.
          </p>
        </div>
      </div>
    </footer>
  );
}
