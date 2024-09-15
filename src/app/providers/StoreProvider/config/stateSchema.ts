import { ReducersMapObject, Action, Reducer, EnhancedStore } from '@reduxjs/toolkit';
import { UserSchema } from 'entities/User/model/types/user';
import { LoginSchema } from 'features/AuthByUserName';

export interface StateSchema {
  user: UserSchema;
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
