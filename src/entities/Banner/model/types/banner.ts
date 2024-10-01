import { ProductImage } from 'entities/Product/model/types/Product';

type Localizations = {
  data: any[];
};

export type BannerAttributes = {
  title: string;
  createdAt: string;
  updatedAt: string;
  locale: string;
  category: string;
  subcategory: string;
  publishedAt: string;
  pageCategory: string;
  isShow: boolean;
  image: {
    data: ProductImage;
  };
  localizations: Localizations;
};

export type BannerData = {
  id: number;
  attributes: BannerAttributes;
};

export interface BannerResponse {
  data: BannerData[];
  meta: {};
}

export interface BannerSchema {
  isLoading: boolean;
  error?: boolean;
  data?: BannerAttributes;
}
