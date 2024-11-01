import { ProductImage } from 'entities/Product/model/types/Product';

export interface SectionCategoryItem {
  id: number;
  title: string;
  pageCategory: string;
  category: string;
  isShow: boolean;
  image: {
    data: ProductImage;
  };
}

interface SectionCategoryAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  category: SectionCategoryItem[];
}

interface SectionCategoryResponseItem {
  id: number;
  attributes: SectionCategoryAttributes;
}

export interface SectionCategoryResponse {
  data?: SectionCategoryResponseItem[];
  meta?: {};
}

export interface SectionCategorySchema {
  isLoading: boolean;
  error: boolean;
  data?: SectionCategoryItem[];
}
