import { UserSchema } from 'entities/User/model/types/user';

interface LoginSchema {
  username: string;
  password: string;
  isLoading?: boolean;
  error?: string;
}

export interface StateSchema {
  user: UserSchema;
  // loginForm: LoginSchema;
}
