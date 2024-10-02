import { ReducersMapObject, Action, Reducer, EnhancedStore } from '@reduxjs/toolkit';
import { BannerSchema } from 'entities/Banner/model/types/banner';
import { BrandSectionSchema } from 'entities/BrandSection';
import { ClearanceSliderSchema } from 'entities/ClearanceSlider';
import { PopularSectionSchema } from 'entities/PopularSection';
import { ProfileSchema } from 'entities/Profile/model/types/profile';
import { SecondBannerSchema } from 'entities/SecondBanner';
import { SliderSchema } from 'entities/NewArrivalsSlider/model/types/slider';
import { UserSchema } from 'entities/User/model/types/user';
import { LoginSchema } from 'features/AuthByUserName';
import { NavbarSchema } from 'widgets/Navbar/model/types/navbar';

export interface StateSchema {
  user: UserSchema;
  navbar: NavbarSchema;
  profile?: ProfileSchema;
  loginForm?: LoginSchema;
  banner?: BannerSchema;
  slider?: SliderSchema;
  brandSection?: BrandSectionSchema;
  popularSection?: PopularSectionSchema;
  secondBanner?: SecondBannerSchema;
  clearanceSlider: ClearanceSliderSchema;
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
