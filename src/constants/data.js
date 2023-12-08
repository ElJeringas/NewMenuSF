import images from './images';

const wines = [
  {
    title: 'Opción Regular',
    price: '$18',
    tags: 'Pavo con albahaca,Quenelle de papa, Ensalada, Arroz Navideño , Budin de pan con Praliné de nuez, Copa de agua, Copa de Vino.',
  },
  {
    title: 'Opción San Francisco',
    price: '$24,95',
    tags: 'Pollo en salsa de albaricoque, Lomo de cerdo al romero, sufle de yuca, Verduras Thai, Arroz Navideño, Torta de Nuez y helado de vainilla, Copa de Agua, Copa de Vino tinto, Copa de Vino Blanco.',
  },
  {
    title: 'Opción Premium',
    price: '$29,60',
    tags: 'Quiche de Cangrejo, Lomo de res en salsa de hinojo, Pavo con nueces y ciruelos, Croquetas de papa, Ensalada verde, Pastel de peras caramelizadas y requeson, Copa de agua, Copa de vino, Copa de champagne.',
  },

];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Calidad de Servicio',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Comfort',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AAA Hospitalidad',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
