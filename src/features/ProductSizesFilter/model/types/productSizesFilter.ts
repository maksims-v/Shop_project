interface ProductSize {
  id: number;
  size: string;
  qnty: number | null;
}

// Типизация для атрибутов продукта
interface ProductAttributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  size: ProductSize[];
}

// Типизация для продукта, содержащего атрибуты
interface ProductData {
  id: number;
  attributes: ProductAttributes;
}

interface ProductSizeResponse {
  data?: ProductData;
  meta?: {};
}

export interface ProductSizes {
  size: ProductSize[];
  isLoading: boolean;
  error: boolean;
}
