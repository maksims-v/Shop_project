export interface ImageFormat {
  url: string;
  name: string;
  path: string | null;
}

export interface ImageData {
  id: number;
  attributes: {
    alternativeText: string | null;
    formats: {
      large?: ImageFormat;
      medium?: ImageFormat;
      small?: ImageFormat;
      thumbnail?: ImageFormat;
    };
    url: string;
  };
}

export interface SliderProductAttributes {
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
    data: ImageData[];
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

export interface SliderSchema {
  isLoading: boolean;
  error?: boolean;
  data?: SliderProductAttributes[];
}
