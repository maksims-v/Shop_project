import { ReducersMapObject, Action, Reducer, EnhancedStore } from '@reduxjs/toolkit';
import { ProfileSchema } from 'entities/Profile/model/types/profile';
import { UserSchema } from 'entities/User/model/types/user';
import { LoginSchema } from 'features/AuthByUserName';
import { NavbarSchema } from 'widgets/Navbar/model/types/navbar';

export interface StateSchema {
  user: UserSchema;
  navbar: NavbarSchema;
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema | undefined, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}
