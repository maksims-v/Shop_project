import { Product } from 'entities/Product/model/types/Product';

interface Attributes {
  sortedProducts: Product[];
}

export interface RelatedProductsResponse {
  data: {
    attributes: Attributes;
  };
  meta: {};
}

export interface RelatedProductsShema {
  isLoading?: boolean;
  error?: boolean;
  data: Product[];
}
