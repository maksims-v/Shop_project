import { ProductImage } from 'entities/Product/model/types/Product';

export interface PopularSectionItem {
  id: number;
  title: string;
  pageCategory: string;
  category: string;
  isShow: boolean;
  image?: {
    data: ProductImage;
  };
}

export interface PopularSectionAttributes {
  createdAt: string;
  locale: string;
  popularCategeory: PopularSectionItem[];
  publishedAt: string;
  updatedAt: string;
}

export interface PopularSectionResponseItem {
  id: number;
  attributes: PopularSectionAttributes;
}

export interface PopularSectionResponse {
  data?: PopularSectionResponseItem[];
  meta?: {};
}

export interface PopularSectionSchema {
  isLoading: boolean;
  error?: boolean;
  data?: PopularSectionItem[];
}
