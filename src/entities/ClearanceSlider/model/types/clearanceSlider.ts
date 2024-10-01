import { Product, ProductItem } from 'entities/Product/model/types/Product';

export interface ClearanceSliderResponse {
  data?: ProductItem[];
  meta?: {};
}

export interface ClearanceSliderSchema {
  isLoading: boolean;
  error?: boolean;
  data?: Product[];
}
