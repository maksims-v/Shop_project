import { Product, ProductItem } from 'entities/Product/model/types/Product';

export interface SliderResponse {
  data?: ProductItem[];
  meta?: {};
}

export interface SliderSchema {
  isLoading: boolean;
  error?: boolean;
  data?: Product[];
}
