export interface Product{
  id: number;
  name: string;
  images: {
    large: string,
    medium: string,
    small: string
  };
  details: string;
  price: string;
}

export type ProductForm = Omit<Product, "number">

export interface basketProduct extends Pick<Product, "name"|"price">{}
