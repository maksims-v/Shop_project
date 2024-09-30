import { ReducersMapObject, Action, Reducer, EnhancedStore } from '@reduxjs/toolkit';
import { BannerSchema } from 'entities/Banner/model/types/banner';
import { BrandSectionSchema } from 'entities/BrandSection';
import { ProfileSchema } from 'entities/Profile/model/types/profile';
import { SliderSchema } from 'entities/Slider/model/types/slider';
import { UserSchema } from 'entities/User/model/types/user';
import { LoginSchema } from 'features/AuthByUserName';
import { NavbarSchema } from 'widgets/Navbar/model/types/navbar';

export interface StateSchema {
  user: UserSchema;
  navbar: NavbarSchema;
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
  products?: any;
  banner?: BannerSchema;
  slider?: SliderSchema;
  brandSection: BrandSectionSchema;
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
