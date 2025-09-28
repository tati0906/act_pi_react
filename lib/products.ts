export interface Product {
  id: string;
  name: string;
  category: "Anchetas" | "Desayunos" | "Decoraciones";
  price: number;
  img: string;
  description: string;
}

export const products: Product[] = [
  {
    "id": "A01",
    "name": "Ancheta Clásica Dulce",
    "category": "Anchetas",
    "price": 89000,
    "img": "/images/ancheta1.svg",
    "description": "Galletas, chocolates y bebida, presentación en canasta artesanal."
  },
  {
    "id": "A02",
    "name": "Ancheta Gourmet",
    "category": "Anchetas",
    "price": 149000,
    "img": "/images/ancheta2.svg",
    "description": "Quesos, frutos secos, mermelada artesanal y vino sin alcohol."
  },
  {
    "id": "A03",
    "name": "Ancheta Saludable",
    "category": "Anchetas",
    "price": 119000,
    "img": "/images/ancheta3.svg",
    "description": "Frutas frescas, granola y snacks libres de azúcar."
  },
  {
    "id": "A04",
    "name": "Ancheta Premium",
    "category": "Anchetas",
    "price": 199000,
    "img": "/images/ancheta4.svg",
    "description": "Selección premium con chocolates finos y café especial."
  },
  {
    "id": "A05",
    "name": "Ancheta Café Lover",
    "category": "Anchetas",
    "price": 129000,
    "img": "/images/ancheta5.svg",
    "description": "Café de origen, taza personalizada y galletas artesanales."
  },
  {
    "id": "A06",
    "name": "Ancheta Para Él",
    "category": "Anchetas",
    "price": 139000,
    "img": "/images/ancheta6.svg",
    "description": "Snacks salados, cerveza sin alcohol y grooming kit básico."
  },
  {
    "id": "A07",
    "name": "Ancheta Para Ella",
    "category": "Anchetas",
    "price": 139000,
    "img": "/images/ancheta7.svg",
    "description": "Chocolates, vela aromática y mascarilla facial."
  },
  {
    "id": "A08",
    "name": "Ancheta Cumpleaños",
    "category": "Anchetas",
    "price": 99000,
    "img": "/images/ancheta8.svg",
    "description": "Mini torta, vela de cumpleaños y tarjeta personalizada."
  },
  {
    "id": "D01",
    "name": "Desayuno Sorpresa Clásico",
    "category": "Desayunos",
    "price": 79000,
    "img": "/images/desayuno1.svg",
    "description": "Sandwich, jugo natural, fruta y detalle floral."
  },
  {
    "id": "D02",
    "name": "Desayuno Fit",
    "category": "Desayunos",
    "price": 89000,
    "img": "/images/desayuno2.svg",
    "description": "Yogurt griego, granola, fruta fresca y té."
  },
  {
    "id": "D03",
    "name": "Desayuno Gourmet",
    "category": "Desayunos",
    "price": 119000,
    "img": "/images/desayuno3.svg",
    "description": "Croissant, jamón serrano, queso y café especial."
  },
  {
    "id": "D04",
    "name": "Desayuno Cumpleañero",
    "category": "Desayunos",
    "price": 99000,
    "img": "/images/desayuno4.svg",
    "description": "Mini torta, globo y selección dulce."
  },
  {
    "id": "D05",
    "name": "Desayuno Romántico",
    "category": "Desayunos",
    "price": 129000,
    "img": "/images/desayuno5.svg",
    "description": "Fresas con chocolate, bebida caliente y carta."
  },
  {
    "id": "D06",
    "name": "Desayuno Infantil",
    "category": "Desayunos",
    "price": 79000,
    "img": "/images/desayuno6.svg",
    "description": "Opciones divertidas y nutritivas para peques."
  },
  {
    "id": "D07",
    "name": "Desayuno Ejecutivo",
    "category": "Desayunos",
    "price": 109000,
    "img": "/images/desayuno7.svg",
    "description": "Wrap gourmet, mix de frutos secos y café."
  },
  {
    "id": "D08",
    "name": "Desayuno Sin Gluten",
    "category": "Desayunos",
    "price": 115000,
    "img": "/images/desayuno8.svg",
    "description": "Pan y snacks sin gluten, fruta y bebida."
  },
  {
    "id": "C01",
    "name": "Decoración Cumpleaños Base",
    "category": "Decoraciones",
    "price": 249000,
    "img": "/images/deco1.svg",
    "description": "Arco de globos pequeño y banner de feliz cumpleaños."
  },
  {
    "id": "C02",
    "name": "Decoración Romántica",
    "category": "Decoraciones",
    "price": 289000,
    "img": "/images/deco2.svg",
    "description": "Pétalos, velas, globos y letrero personalizado."
  },
  {
    "id": "C03",
    "name": "Baby Shower",
    "category": "Decoraciones",
    "price": 329000,
    "img": "/images/deco3.svg",
    "description": "Mesa temática, backdrop y recordatorios."
  },
  {
    "id": "C04",
    "name": "Decoración Temática Gamer",
    "category": "Decoraciones",
    "price": 299000,
    "img": "/images/deco4.svg",
    "description": "Backdrops, globos y props gamer."
  },
  {
    "id": "C05",
    "name": "Decoración Aniversario",
    "category": "Decoraciones",
    "price": 279000,
    "img": "/images/deco5.svg",
    "description": "Setup elegante en tonos púrpura y dorado."
  },
  {
    "id": "C06",
    "name": "Navidad en Casa",
    "category": "Decoraciones",
    "price": 349000,
    "img": "/images/deco6.svg",
    "description": "Guirnaldas, centros de mesa y mini árbol."
  },
  {
    "id": "C07",
    "name": "Día del Padre",
    "category": "Decoraciones",
    "price": 269000,
    "img": "/images/deco7.svg",
    "description": "Temática masculina con detalles artesanales."
  },
  {
    "id": "C08",
    "name": "Día de la Madre",
    "category": "Decoraciones",
    "price": 289000,
    "img": "/images/deco8.svg",
    "description": "Arreglo floral, globos y detalles románticos."
  }
];
