export interface Product{
  id: number;
  name: string;
  images: {
    large: string,
    medium: string,
    small: string
  };
  details: string;
  price: number;
}

export type ProductForm = Omit<Product, "number">
