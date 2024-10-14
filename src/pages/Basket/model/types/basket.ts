import { Product, ProductItem, ProductList } from 'entities/Product/model/types/Product';

export interface AddToBasketPayload {
  data: ProductItem;
  size: string;
  count: number;
}

export interface BasketItem {
  item?: Product;
  name?: string;
  qnty?: number;
  productSize?: string;
  id?: number;
}

export interface BasketSchema {
  basket: BasketItem[];
  totalPrice?: number;
  isLoading?: boolean;
  error?: boolean;
}
