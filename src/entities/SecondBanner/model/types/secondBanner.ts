import { ProductImage } from 'entities/Product/model/types/Product';

export interface SecondBannerDataAttributes {
  title: string;
  subtitle: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  locale: string;
  subcategory: string;
  pageCategory: string;
  category: string;
  textColor: string;
  textTopPosition: number;
  textPositionLeft: number;
  isShow: boolean;
  image: {
    data: ProductImage;
  };
}

export type SecondBannerData = {
  id: number;
  attributes: SecondBannerDataAttributes;
};

export interface SecondBannerResponse {
  data: SecondBannerData[];
  meta: {};
}

export interface SecondBannerSchema {
  isLoading: boolean;
  error?: boolean;
  data?: SecondBannerDataAttributes;
}
