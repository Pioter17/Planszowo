export interface Product{
  id: number;
  name: string;
  image: string;
  details: string;
  price: number;
}

export type ProductForm = Omit<Product, "number">
