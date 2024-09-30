export interface Token {
  jwt: string;
}

export interface User {
  token: Token;
  id: string;
  username: string;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
