import { ProductItem } from 'entities/Product/model/types/Product';

export interface SimilarProduct {
  slug: string;
  imageUrl: string;
  title: string;
}

export interface SimilarProductsResponse {
  data?: ProductItem[];
  meta?: {};
}

export interface SimilarProductsSchema {
  data?: SimilarProduct[];
  isLoading?: boolean;
  error?: boolean;
}
[];
