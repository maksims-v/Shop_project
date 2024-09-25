export interface Product {
  accessoriesCategory?: string | null;
  activityCategory?: string | null;
  brand?: string;
  campSleepCategory?: string | null;
  category?: string;
  clearance: boolean;
  clothingCategory?: string | null;
  description?: string;
  equipmentCategory?: string | null;
  footwearCategory?: string | null;
  id?: number;
  image?: string;
  lampsLanternsCategory?: string | null;
  locale?: string;
  new?: boolean;
  oldPrice?: number | null;
  otherCategory?: string | null;
  pageCategory?: string;
  price?: number;
  sale?: boolean;
  showOnBanner?: boolean;
  showOnCategoryBanner?: boolean;
  size?: Array<{
    id: number;
    qnty: number | null;
    size: string;
  }>;
  slug?: string;
  techDescription?: string | null;
  title?: string;
  toolsGearCategory?: string | null;
}
