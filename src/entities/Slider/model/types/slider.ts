import { Product, ProductList } from 'entities/Product/model/types/Product';

export interface SliderResponse {
  data?: ProductList[];
  meta?: [];
}

export interface SliderSchema {
  isLoading: boolean;
  error?: boolean;
  data?: Product[];
}
