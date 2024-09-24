// Основной тип ответа
export interface IResponse {
  data?: IDataItem[];
}

// Тип данных внутри массива "data"
export interface IDataItem {
  id: number;
  attributes: IAttributes;
}

// Тип для атрибутов
export interface IAttributes {
  linkList: ILinkListItem[];
}

// Тип для каждого элемента в linkList
export interface ILinkListItem {
  href: string;
  id: number;
  label: string;
  link?: ISubLink[]; // Вложенные ссылки, необязательное поле
}

// Тип для подкатегорий внутри "link"
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
