export interface NavberLinkItem {
  href: string;
  label: string;
}

export interface NavbarLinksAttributes {
  title: string;
  linkList: NavberLinkItem;
}

export interface NavbarData {
  id?: number;
  attributes?: NavbarLinksAttributes;
}

export interface NavbarSchema {
  isLoading: boolean;
  error?: string;
  data?: NavbarData;
}
