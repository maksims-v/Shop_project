export interface Token {
  jwt: string;
}

export interface User {
  id?: string;
  username: string;
  email: string;
  provider?: string;
  confirmed?: boolean;
  blocked?: boolean;
  createdAt?: string;
  updatedAt?: string;
  fullName?: undefined;
  lastName?: undefined;
  city?: undefined;
  adress?: undefined;
  postCode?: undefined;
  phone?: undefined;
  country?: undefined;
}

export interface UserSchema {
  jwt?: Token;
  authData?: User;
}
