export interface Product {
  details: Detail[];
  id: string;
  title: string;
}

export interface Detail {
  cover: string;
  description: string;
  id: string;
  ingredients: string;
  name: string;
  price: number;
  productId: string;
  thumbnail: string;
}
