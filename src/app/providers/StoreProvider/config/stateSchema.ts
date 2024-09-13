import { UserSchema } from 'entities/User/model/types/user';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
  user: UserSchema;
  loginForm?: LoginSchema;
}
