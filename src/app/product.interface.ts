export interface Product{
  id: number;
  type: number; //1 - all, 2 - board, 3 - card, 4 - other
  name: string;
  details: string;
  price: number;
}
