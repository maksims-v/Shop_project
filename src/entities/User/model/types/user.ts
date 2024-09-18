export interface Token {
  jwt: string;
}

export interface User {
  token: Token;
  id: string;
  email: string;
}

export interface UserSchema {
  authData?: User;
}
