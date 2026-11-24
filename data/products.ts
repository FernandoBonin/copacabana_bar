import { CategorySlug, VENUE_MEDIA } from './categories';

export interface ProductDetailSpec {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface MenuProduct {
  slug: string;
  name: string;
  categorySlug: CategorySlug;
  badge?: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  imageAlt: string;
  priceLabel: string;
  priceNote: string;
  detailsTitle: string;
  details: ProductDetailSpec[];
  ingredients?: string[];
  featuredOnHome?: boolean;
}

export const PRODUCTS: MenuProduct[] = [
  // --- PORÇÕES (itens oficiais das telas Stitch) ---
  {
    slug: 'bolinho-de-bacalhau',
    name: 'Bolinho de Bacalhau',
    categorySlug: 'porcoes',
    badge: 'Para Compartilhar',
    shortDescription:
      'Receita tradicional carioca com bacalhau desfiado, batata, salsinha fresca e gomos de limão.',
    fullDescription:
      'Preparado na hora seguindo a tradição dos botecos cariocas: lascas generosas de bacalhau combinadas com massa leve de batata, cebola e salsinha fresca, fritas até alcançar casquinha dourada e crocante.',
    imageUrl: '/images/bolinho-bacalhau.jpg',
    imageAlt: 'Porção de Bolinho de Bacalhau servida com limão e salsinha',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte no salão',
    detailsTitle: 'Detalhes da Porção',
    details: [
      { label: 'Ideal para', value: 'Compartilhar na mesa' },
      { label: 'Acompanhamento', value: 'Gomos de limão' },
      {
        label: 'Combina com',
        value: 'Chopp gelado ou Cerveja 600ml',
        highlight: true,
      },
    ],
    ingredients: ['Bacalhau desfiado', 'Batata', 'Cebola', 'Salsinha fresca', 'Limão'],
    featuredOnHome: true,
  },
  {
    slug: 'picanha-acebolada',
    name: 'Picanha Acebolada',
    categorySlug: 'porcoes',
    badge: 'Na Chapa',
    shortDescription:
      'Tiras de picanha grelhadas na chapa com cebola dourada e farofa crocante da casa.',
    fullDescription:
      'Corte nobre fatiado em tiras suculentas, selado na chapa quente com rodelas de cebola dourada e servido na mesa acompanhado da farofa crocante da casa.',
    imageUrl: '/images/picanha-acebolada.jpg',
    imageAlt: 'Porção de Picanha Acebolada na chapa',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte no salão',
    detailsTitle: 'Detalhes da Porção',
    details: [
      { label: 'Ideal para', value: 'Compartilhar na mesa' },
      { label: 'Acompanhamento', value: 'Cebola dourada e farofa da casa' },
      {
        label: 'Combina com',
        value: 'Cerveja 600ml ou Caipirinha de Limão',
        highlight: true,
      },
    ],
    ingredients: ['Picanha', 'Cebola', 'Farofa crocante', 'Sal grosso'],
  },
  {
    slug: 'mandioca-frita',
    name: 'Mandioca Frita',
    categorySlug: 'porcoes',
    badge: 'Clássico de Boteco',
    shortDescription:
      'Palitos dourados por fora e macios por dentro, finalizados com sal grosso e ervas.',
    fullDescription:
      'Mandioca selecionada cozida até o ponto ideal e frita na hora para garantir textura crocante por fora e interior macio, finalizada com sal e ervas frescas.',
    imageUrl: '/images/mandioca-frita.jpg',
    imageAlt: 'Porção de Mandioca Frita crocante',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte no salão',
    detailsTitle: 'Detalhes da Porção',
    details: [
      { label: 'Ideal para', value: 'Compartilhar na mesa' },
      { label: 'Acompanhamento', value: 'Finalização com ervas' },
      {
        label: 'Combina com',
        value: 'Chopp claro bem gelado',
        highlight: true,
      },
    ],
    ingredients: ['Mandioca', 'Sal', 'Ervas frescas'],
  },
  {
    slug: 'pasteis-mistos',
    name: 'Pastéis Mistos',
    categorySlug: 'porcoes',
    badge: 'Para Compartilhar',
    shortDescription:
      'Massa fina e sequinha recheada com carne temperada e queijo derretido, servida com limão.',
    fullDescription:
      'Cesta com pastéis de feira preparados com massa leve e crocante, combinando recheios tradicionais de carne temperada e queijo derretido, servidos quentinhos com limão.',
    imageUrl: '/images/pasteis-mistos.jpg',
    imageAlt: 'Cesta de Pastéis Mistos de Boteco',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte no salão',
    detailsTitle: 'Detalhes da Porção',
    details: [
      { label: 'Ideal para', value: 'Compartilhar na mesa' },
      { label: 'Acompanhamento', value: 'Gomos de limão' },
      {
        label: 'Combina com',
        value: 'Chopp ou Cerveja 600ml',
        highlight: true,
      },
    ],
    ingredients: ['Massa crocante', 'Carne temperada', 'Queijo derretido', 'Limão'],
  },

  // --- LANCHES ---
  {
    slug: 'sanduiche-de-pernil-na-chapa',
    name: 'Lanche de Pernil na Chapa',
    categorySlug: 'lanches',
    badge: 'Chapa do Boteco',
    shortDescription:
      'Pernil desfiado marinado na casa, finalizado na chapa com cebola e pão francês crocante.',
    fullDescription:
      'Receita tradicional de balcão: pernil assado lentamente e desfiado, aquecido na chapa com tempero de boteco e servido no pão crocante.',
    imageUrl: '/images/lanches.jpg',
    imageAlt: 'Lanche tradicional de pernil na chapa em pão crocante',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte no salão',
    detailsTitle: 'Detalhes do Lanche',
    details: [
      { label: 'Ideal para', value: 'Pedido individual ou dividir ao meio' },
      { label: 'Pão', value: 'Francês crocante prensado na chapa' },
      {
        label: 'Combina com',
        value: 'Chopp gelado ou refrigerante',
        highlight: true,
      },
    ],
    ingredients: ['Pernil temperado', 'Cebola na chapa', 'Pão crocante'],
  },
  {
    slug: 'bauru-classico-de-boteco',
    name: 'Bauru Clássico de Boteco',
    categorySlug: 'lanches',
    badge: 'Tradição Paulista',
    shortDescription:
      'Pão crocante com fatias suculentas na chapa, queijo derretido, tomate fresco e orégano.',
    fullDescription:
      'Montado na hora sobre o pão fresco, combinando carne fatiada na chapa, queijo derretido, rodelas de tomate e toque de orégano.',
    imageUrl: '/images/lanches.jpg',
    imageAlt: 'Bauru clássico de boteco servido na tábua',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte no salão',
    detailsTitle: 'Detalhes do Lanche',
    details: [
      { label: 'Ideal para', value: 'Consumo individual no balcão ou mesa' },
      { label: 'Acompanhamento', value: 'Picles ou molho da casa no salão' },
      {
        label: 'Combina com',
        value: 'Cerveja 600ml ou suco natural',
        highlight: true,
      },
    ],
    ingredients: ['Queijo derretido', 'Tomate fresco', 'Orégano', 'Pão crocante'],
  },

  // --- CERVEJAS ---
  {
    slug: 'chopp-claro-gelado',
    name: 'Chopp Claro Gelado',
    categorySlug: 'cervejas',
    badge: 'Tirado na Hora',
    shortDescription:
      'Chopp claro tirado na pressão ideal, com colarinho cremoso e temperatura trincando.',
    fullDescription:
      'O clássico do Copacabana Bar: chopp tirado na hora com colarinho denso e cremoso para acompanhar a conversa na calçada ou na roda de samba.',
    imageUrl: VENUE_MEDIA.heroChopp.url,
    imageAlt: VENUE_MEDIA.heroChopp.alt,
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte no salão',
    detailsTitle: 'Detalhes da Bebida',
    details: [
      { label: 'Serviço', value: 'Tulipa ou caneca gelada' },
      { label: 'Destaque', value: 'Colarinho cremoso na pressão ideal' },
      {
        label: 'Combina com',
        value: 'Bolinho de Bacalhau e Pastéis Mistos',
        highlight: true,
      },
    ],
    ingredients: ['Chopp claro', 'Colarinho cremoso'],
    featuredOnHome: true,
  },
  {
    slug: 'cervejas-600ml-no-balde',
    name: 'Cervejas 600ml no Balde',
    categorySlug: 'cervejas',
    badge: 'Para a Mesa',
    shortDescription:
      'Rótulos tradicionais em garrafa de 600ml servidos no balde com gelo e copo americano.',
    fullDescription:
      'Seleção de cervejas em garrafa de 600ml mantidas em baixa temperatura, servidas à mesa com balde de gelo e copos americanos. Consulte os rótulos disponíveis com o garçom.',
    imageUrl: '/images/cervejas.jpg',
    imageAlt: 'Garrafas de cerveja 600ml e copo americano no boteco',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte rótulos no salão',
    detailsTitle: 'Detalhes da Bebida',
    details: [
      { label: 'Formato', value: 'Garrafa 600ml' },
      { label: 'Serviço', value: 'Copo americano e balde com gelo' },
      {
        label: 'Combina com',
        value: 'Picanha Acebolada e Mandioca Frita',
        highlight: true,
      },
    ],
    ingredients: ['Cerveja 600ml', 'Rótulos variados no salão'],
  },

  // --- BEBIDAS ---
  {
    slug: 'caipirinha-classica-de-limao',
    name: 'Caipirinha Clássica de Limão',
    categorySlug: 'bebidas',
    badge: 'Drink de Balcão',
    shortDescription:
      'Limão taiti macerado na hora com açúcar e cachaça selecionada, servida com bastante gelo.',
    fullDescription:
      'Preparada no balcão do bar com limão fresco cortado na hora, equilíbrio entre doçura e acidez e opção de destilado conforme disponibilidade da casa.',
    imageUrl: '/images/bebidas.jpg',
    imageAlt: 'Caipirinha clássica de limão preparada no balcão',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte no salão',
    detailsTitle: 'Detalhes da Bebida',
    details: [
      { label: 'Preparo', value: 'Macerada na hora no balcão' },
      { label: 'Opções', value: 'Cachaça, vodka ou saquê (consulte no salão)' },
      {
        label: 'Combina com',
        value: 'Feijoada de Sábado e Picanha Acebolada',
        highlight: true,
      },
    ],
    ingredients: ['Limão taiti', 'Açúcar', 'Gelo', 'Cachaça'],
  },
  {
    slug: 'sucos-naturais-e-refrigerantes',
    name: 'Sucos Naturais e Refrigerantes',
    categorySlug: 'bebidas',
    badge: 'Sem Álcool',
    shortDescription:
      'Opções refrescantes sem álcool preparadas na hora ou servidas bem geladas na mesa.',
    fullDescription:
      'Variedade de sucos de fruta naturais, água com e sem gás, tônica e refrigerantes clássicos para todos na mesa. Consulte sabores disponíveis no salão.',
    imageUrl: '/images/bebidas.jpg',
    imageAlt: 'Bebidas refrescantes e sucos naturais do Copacabana Bar',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte opções no salão',
    detailsTitle: 'Detalhes da Bebida',
    details: [
      { label: 'Categoria', value: 'Bebidas não alcoólicas' },
      { label: 'Serviço', value: 'Copo com gelo e rodela de limão opcional' },
      {
        label: 'Combina com',
        value: 'Lanches na chapa e Pastéis Mistos',
        highlight: true,
      },
    ],
    ingredients: ['Frutas da estação', 'Refrigerantes', 'Água mineral'],
  },

  // --- WHISKY ---
  {
    slug: 'dose-de-whisky-no-gelo',
    name: 'Dose de Whisky no Gelo',
    categorySlug: 'whisky',
    badge: 'Rótulos Selecionados',
    shortDescription:
      'Dose servida em copo baixo com gelo cristalino, para apreciar com calma no salão.',
    fullDescription:
      'Seleção de whiskies tradicionais servidos em dose individual, acompanhados de gelo ou água de coco conforme a preferência da mesa. Consulte rótulos no salão.',
    imageUrl: '/images/whisky.jpg',
    imageAlt: 'Dose de whisky servida com gelo cristalino',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte rótulos no salão',
    detailsTitle: 'Detalhes da Dose',
    details: [
      { label: 'Serviço', value: 'Copo baixo com gelo cristalino' },
      { label: 'Disponibilidade', value: 'Consulte carta de rótulos no salão' },
      {
        label: 'Combina com',
        value: 'Picanha Acebolada na chapa',
        highlight: true,
      },
    ],
    ingredients: ['Whisky selecionado', 'Gelo cristalino'],
  },
  {
    slug: 'garrafa-de-whisky-para-mesa',
    name: 'Garrafa de Whisky para Mesa',
    categorySlug: 'whisky',
    badge: 'Para a Mesa',
    shortDescription:
      'Garrafa selecionada servida à mesa com balde de gelo e copos baixos para o grupo.',
    fullDescription:
      'Ideal para confraternizações e noites prolongadas com os amigos no salão. Consulte rótulos e acompanhamentos disponíveis diretamente com o garçom.',
    imageUrl: '/images/whisky.jpg',
    imageAlt: 'Garrafa de whisky com copos e balde de gelo',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte rótulos no salão',
    detailsTitle: 'Detalhes do Serviço',
    details: [
      { label: 'Ideal para', value: 'Grupos e celebrações na mesa' },
      { label: 'Acompanhamento', value: 'Balde de gelo e copos baixos' },
      {
        label: 'Combina com',
        value: 'Combos de boteco e porções',
        highlight: true,
      },
    ],
    ingredients: ['Garrafa fechada', 'Balde de gelo'],
  },

  // --- COMBOS ---
  {
    slug: 'feijoada-tradicional',
    name: 'Feijoada Tradicional',
    categorySlug: 'combos',
    badge: 'Especial de Sábado',
    shortDescription:
      'Servida aos sábados em panelas de barro com couve refogada, torresmo, farofa e acompanhamentos clássicos.',
    fullDescription:
      'Tradição de sábado no Copacabana Bar: buffet servido em panelas de barro sobre toalha com ondas de Copacabana, reunindo carnes nobres selecionadas, feijão preto encorpado, couve refogada, torresmo crocante, farofa e acompanhamentos clássicos. Consulte disponibilidade no salão.',
    imageUrl: VENUE_MEDIA.feijoada.url,
    imageAlt: VENUE_MEDIA.feijoada.alt,
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte disponibilidade aos sábados',
    detailsTitle: 'Detalhes da Feijoada',
    details: [
      { label: 'Disponibilidade', value: 'Aos sábados (consulte no salão)' },
      {
        label: 'Acompanhamentos',
        value: 'Couve refogada, torresmo, farofa e arroz',
      },
      {
        label: 'Combina com',
        value: 'Caipirinha Clássica de Limão ou Chopp gelado',
        highlight: true,
      },
    ],
    ingredients: [
      'Feijão preto',
      'Carnes tradicionais',
      'Couve refogada',
      'Torresmo',
      'Farofa',
    ],
    featuredOnHome: true,
  },
  {
    slug: 'combo-roda-de-samba',
    name: 'Combo Roda de Samba',
    categorySlug: 'combos',
    badge: 'Para Compartilhar',
    shortDescription:
      'Combinação de petiscos clássicos e bebidas geladas pensada para reunir os amigos no salão.',
    fullDescription:
      'Sugestão ilustrativa para mesas em grupo: reúna porções clássicas do boteco com bebidas bem geladas para aproveitar o fim de tarde e a roda de samba. Consulte combinações vigentes diretamente com o garçom.',
    imageUrl: '/images/combos.jpg',
    imageAlt: 'Combo para compartilhar na mesa com amigos',
    priceLabel: 'R$ --,--',
    priceNote: 'Consulte combinações no salão',
    detailsTitle: 'Detalhes do Combo',
    details: [
      { label: 'Ideal para', value: 'Compartilhar entre amigos' },
      { label: 'Sugestão', value: 'Porções clássicas + cervejas ou drinks' },
      {
        label: 'Disponibilidade',
        value: 'Consulte opções atualizadas com o garçom',
        highlight: true,
      },
    ],
    ingredients: ['Porções variadas', 'Bebidas para a mesa'],
  },
];

export function getAllProducts(): MenuProduct[] {
  return PRODUCTS;
}

export function getProductsByCategory(categorySlug: CategorySlug): MenuProduct[] {
  return PRODUCTS.filter((product) => product.categorySlug === categorySlug);
}

export function getProductBySlug(slug: string): MenuProduct | undefined {
  return PRODUCTS.find((product) => product.slug === slug);
}
