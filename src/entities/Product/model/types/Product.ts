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
  createdAt?: string;
  description?: string;
  equipmentCategory?: string | null;
  footwearCategory?: string | null;
  image?:
    | { data: ProductImage[] } // Либо объект с массивом ProductImage
    | string;
  lampsLanternsCategory?: string | null;
  locale?: string;
  new?: boolean;
  oldPrice?: number | null;
  otherCategory?: string | null;
  pageCategory?: string;
  price?: number;
  publishedAt?: string;
  sale?: boolean;
  showOnBanner?: boolean | null;
  showOnCategoryBanner?: boolean;
  slug?: string;
  techDescription?: string;
  title?: string;
  toolsGearCategory?: string | null;
  size?: Size;
  color?: Color;
}

export interface ProductItem {
  id?: number;
  attributes?: Product;
}

export interface ProductSchema {
  id?: number;
  attributes?: Product[];
}

interface Color {
  id: number;
  color: string;
}

export interface ProductList {
  mobile: boolean;
  error: boolean;
  isLoading: boolean;
  sale: boolean;
  searchFlag: boolean;
  newSearch: boolean;
  status: null;
  sortValue: 'Sort By';
  data: [];
  metaData: [];
  inputSearchValue: '';
  pageCategory: [];
  pageCategoryChecked: [];
  category: [];
  categoryChecked: [];
  subCategory: [];
  subCategoryChecked: [];
  brands: [];
  brandsChecked: [];
  sizes: [];
  sizesChecked: [];
  priceMinAndMax: [1, 9999];
  changePrice: [1, 9999];
  allSizesFromApi: [];
  currentPage: 1;
}

interface Size {
  id: number;
  size: string;
  qnty: number | null;
}

interface ProductsListAttributes {
  sortedProducts: Product[];
}

interface ProductsListData {
  attributes: ProductsListAttributes;
}

interface ProductsListMeta {
  priceMin?: number;
  priceMax?: number;
  total?: number;
  pages?: number;
  category?: string[];
  pageCategory?: string[];
  subCategory?: string[];
  brands?: string[];
  sizes?: string[];
}

export interface ProductsListSchema {
  isLoading?: boolean;
  mobile?: boolean;
  error?: boolean;
  searchFlag?: boolean;
  sale?: boolean;
  allSizesFromApi?: string[];
  status?: 'loading' | 'resolved' | 'rejected' | null; // статус загрузки
  data?: Product[]; // сюда можно добавить точную типизацию для данных товаров
  metaData?: ProductsListMeta | null; // объект мета-данных или null
  inputSearchValue?: string; // строка для поиска
  newSearch?: boolean; // флаг нового поиска
  pageCategory?: string[]; // категории страницы
  pageCategoryChecked?: string[]; // выбранные категории страницы
  category?: string[]; // категории
  categoryChecked?: string[]; // выбранные категории
  subCategory?: string[]; // подкатегории
  subCategoryChecked?: string[]; // выбранные подкатегории
  brands?: string[]; // бренды
  brandsChecked?: string[]; // выбранные бренды
  sizes?: string[]; // доступные размеры
  sizesChecked?: string[]; // выбранные размеры
  priceMinAndMax?: [number, number]; // минимальная и максимальная цена
  changePrice?: [number, number]; // измененная цена
  currentPage?: number; // текущая страница
  sortValue?: string; // выбранное значение сортировки
  price?: string | number;
}

export interface ProductListResponse {
  data?: ProductsListData;
  meta?: ProductsListMeta | null;
}

export interface ProductDetailResponse {
  data?: ProductItem[];
  meta: {};
}

export interface ProductDetailSchema {
  data?: ProductItem;
  isLoading?: boolean;
  error?: boolean;
}
