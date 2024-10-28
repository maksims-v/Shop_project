import { ImageAttributes, ProductImage, ProductItem } from 'entities/Product/model/types/Product';

export interface BrandSectionItem {
  id: number;
  brand: string;
  title: string;
  image: {
    data: ProductImage;
    id: number;
  };
  items: {
    data: ProductItem[];
    id: number;
  };
}

export interface BrandSectionTypes {
  isShow?: boolean;
  brandSection?: BrandSectionItem;
}

export interface BrandSectionResponseItem {
  id: number;
  attributes: BrandSectionTypes;
}

export interface BrandSectionResponse {
  data?: BrandSectionResponseItem[];
  meta?: [];
}

export interface BrandSectionSchema {
  isLoading: boolean;
  error?: boolean;
  data?: BrandSectionTypes;
}
