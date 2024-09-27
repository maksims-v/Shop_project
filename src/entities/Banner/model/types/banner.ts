type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
};

type ImageAttributes = {
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    small: ImageFormat;
    large: ImageFormat;
    medium: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
};

type ImageData = {
  id: number;
  attributes: ImageAttributes;
};

type Image = {
  data: ImageData;
};

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
  image: Image;
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
