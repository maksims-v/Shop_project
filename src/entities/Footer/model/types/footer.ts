interface Link {
  id: number;
  label: string;
  href: string;
}

export interface CategoryLinks {
  id: number;
  href: string | null;
  label: string;
  link: Link[];
}

export interface FooterAttributes {
  supportLinks: CategoryLinks[];
  aboutLinks: CategoryLinks[];
  allProductsLinks: CategoryLinks[];
  socialLinks: CategoryLinks[];
}

interface DataItem {
  id: number;
  attributes: FooterAttributes;
}

export interface DataResponse {
  data: DataItem[];
  meta: {};
}

export interface FooterSchema {
  isLoading: boolean;
  error?: string;
  data?: FooterAttributes;
}
