export type CategorySlug =
  | 'porcoes'
  | 'lanches'
  | 'cervejas'
  | 'bebidas'
  | 'whisky'
  | 'combos';

export interface MenuCategory {
  slug: CategorySlug;
  name: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  featuredOnHomeOrder: number;
}

export const VENUE_MEDIA = {
  heroChopp: {
    url: '/images/hero-chopp.jpg',
    alt: 'Dois chopps bem gelados com colarinho cremoso em mesa de madeira do Copacabana Bar',
  },
  feijoada: {
    url: '/images/feijoada.jpg',
    alt: 'Buffet tradicional de feijoada do Copacabana Bar com panelas de barro e toalha de ondas',
  },
  facade: {
    url: '/images/fachada.jpg',
    alt: 'Fachada do Copacabana Bar no Tatuapé com toldo verde e calçadão em ondas',
  },
  interior: {
    url: '/images/salao.jpg',
    alt: 'Salão interno com mesas de madeira, ladrilho hidráulico e quadros clássicos',
  },
} as const;

export const CATEGORIES: MenuCategory[] = [
  {
    slug: 'lanches',
    name: 'Lanches',
    shortDescription: 'Sanduíches no pão crocante preparados na chapa do boteco.',
    description:
      'Sanduíches preparados na chapa com pão crocante e recheios tradicionais de boteco.',
    imageUrl: '/images/lanches.jpg',
    imageAlt: 'Lanches artesanais na chapa do Copacabana Bar',
    featuredOnHomeOrder: 1,
  },
  {
    slug: 'porcoes',
    name: 'Porções',
    shortDescription: 'Bolinhos, carnes na chapa e petiscos para dividir na mesa.',
    description:
      'Clássicos de boteco preparados na hora para compartilhar na mesa com chopp gelado.',
    imageUrl: '/images/bolinho-bacalhau.jpg',
    imageAlt: 'Porções para compartilhar na mesa do boteco',
    featuredOnHomeOrder: 2,
  },
  {
    slug: 'cervejas',
    name: 'Cervejas',
    shortDescription: 'Chopp tirado na hora e garrafas 600ml bem geladas.',
    description:
      'Chopp tirado na pressão ideal e garrafas 600ml trincando no balde.',
    imageUrl: '/images/cervejas.jpg',
    imageAlt: 'Cervejas 600ml e chopp gelado em copo americano',
    featuredOnHomeOrder: 3,
  },
  {
    slug: 'bebidas',
    name: 'Bebidas',
    shortDescription: 'Caipirinhas clássicas, drinks de balcão, sucos e sem álcool.',
    description:
      'Caipirinhas clássicas de limão, drinks de balcão, sucos naturais e refrigerantes.',
    imageUrl: '/images/bebidas.jpg',
    imageAlt: 'Caipirinhas clássicas e bebidas refrescantes',
    featuredOnHomeOrder: 4,
  },
  {
    slug: 'whisky',
    name: 'Whisky',
    shortDescription: 'Rótulos selecionados servidos em dose ou garrafa no gelo.',
    description:
      'Rótulos selecionados servidos em dose ou garrafa com gelo cristalino.',
    imageUrl: '/images/whisky.jpg',
    imageAlt: 'Doses e garrafas de whisky servidas com gelo',
    featuredOnHomeOrder: 5,
  },
  {
    slug: 'combos',
    name: 'Combos',
    shortDescription: 'Combinações pensadas para reunir os amigos no fim de tarde.',
    description:
      'Combinações pensadas para reunir os amigos no fim de tarde ou na roda de samba.',
    imageUrl: '/images/combos.jpg',
    imageAlt: 'Combos para compartilhar na mesa com os amigos',
    featuredOnHomeOrder: 6,
  },
];

export function getAllCategories(): MenuCategory[] {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: string): MenuCategory | undefined {
  return CATEGORIES.find((category) => category.slug === slug);
}
