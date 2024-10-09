import { Product } from 'entities/Product/model/types/Product';

export interface BasketItem {
  item?: Product;
  name?: string;
  qnty?: number;
  productSize?: string;
  id?: number;
}

export interface BasketSchema {
  isLoading?: boolean;
  error?: boolean;
  basket?: BasketItem[];
}
