export interface IResponse {
  data?: IDataItem[];
}

export interface IDataItem {
  id: number;
  attributes: IAttributes;
}

export interface IAttributes {
  linkList: ILinkListItem[];
}

export interface ILinkListItem {
  href: string;
  id: number;
  label: string;
  link?: ISubLink[];
}

export interface ISubLink {
  href?: string;
  id?: number;
  label?: string;
}

export interface NavbarSchema {
  isLoading: boolean;
  error?: string;
  data?: ILinkListItem[];
}
