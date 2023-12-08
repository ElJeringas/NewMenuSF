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
    title: 'Vino Tinto',
    price: '$20',
    tags: 'Botella',
  },
  {
    title: "Champagne",
    price: '$16',
    tags: 'Botella',
  },
  {
    title: 'Vino Blanco',
    price: '$18',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Vino Hervido',
    price: '$11',
    tags: 'Vino | Frutos rojos | Especias',
  },
  {
    title: 'Mineral',
    price: '$2',
    tags: 'Gin | Con Gas | Sin Gas ',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Calidad de Servicio',
    subtitle: 'Servicio y personal de alta calidad.',
  },
  {
    imgUrl: images.award01,
    title: 'Comfort',
    subtitle: 'ERspacio amplio, Ambiente calido.',
  },
  {
    imgUrl: images.award05,
    title: 'AAA Hospitalidad',
    subtitle: 'Habitaciones y comedores de lujo.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef',
    subtitle: 'Platos exclusivos, ingredientes siempre frescos.',
  },
];

export default { wines, cocktails, awards };
