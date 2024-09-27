export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  size: number;
  url: string;
  width: number;
  height: number;
}

export interface ImageAttributes {
  alternativeText: string | null;
  caption: string | null;
  createdAt: string; // ISO date string
  ext: string;
  formats: {
    large?: ImageFormat;
    medium?: ImageFormat;
    small?: ImageFormat;
    thumbnail?: ImageFormat;
  };
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: any | null; // Replace 'any' with the actual type if known
  size: number;
  updatedAt: string; // ISO date string
  url: string;
  width: number;
}

export interface ProductImage {
  id: number;
  attributes: ImageAttributes;
}

export interface Product {
  accessoriesCategory?: string | null;
  activityCategory?: string | null;
  brand?: string;
  campSleepCategory?: string | null;
  category?: string;
  clearance?: boolean;
  clothingCategory?: string | null;
  createdAt?: string; // ISO date string
  description?: string;
  equipmentCategory?: string | null;
  footwearCategory?: string | null;
  image?: {
    data: ProductImage[];
  };
  lampsLanternsCategory?: string | null;
  locale?: string;
  new?: boolean;
  oldPrice?: number | null;
  otherCategory?: string | null;
  pageCategory?: string;
  price?: number;
  publishedAt?: string; // ISO date string
  sale?: boolean;
  showOnBanner?: boolean | null;
  showOnCategoryBanner?: boolean;
  slug?: string;
  techDescription?: string;
  title?: string;
  toolsGearCategory?: string | null;
}

export interface ProductList {
  id?: number;
  attributes?: Product;
}

export interface ProductSchema {
  id?: number;
  attributes?: Product[];
}
