import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
// import { StateSchema } from './stateSchema';
import { userReducer } from 'entities/User';
import { StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';
import { navbarReducer } from 'widgets/Navbar';
import { BannerReducer } from 'entities/Banner';
import { sliderReducer } from 'entities/NewArrivalsSlider';
import { brandSectionReducer } from 'entities/BrandSection';
import { popularSectionReducer } from 'entities/PopularSection';
import { secondBannerReducer } from 'entities/SecondBanner';
import { clearanceSliderReducer } from 'entities/ClearanceSlider';
import { productDetailReducer, productListReducer } from 'entities/Product';
import { similarProductsReducer } from 'features/SimilarProducts';
import { relatedProductsSliderReducer } from 'entities/RelatedProductsSlider';
import { basketSliceReducer } from 'entities/Basket';
import { footerReducer } from 'entities/Footer';
import { sectionCategoryReducer } from 'entities/SectionCategory';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  navbar: navbarReducer,
  banner: BannerReducer,
  slider: sliderReducer,
  brandSection: brandSectionReducer,
  popularSection: popularSectionReducer,
  secondBanner: secondBannerReducer,
  clearanceSlider: clearanceSliderReducer,
  productsList: productListReducer,
  productDetail: productDetailReducer,
  similarProducts: similarProductsReducer,
  relatedProductsSlider: relatedProductsSliderReducer,
  basket: basketSliceReducer,
  sectionCategory: sectionCategoryReducer,
  footer: footerReducer,
};

const reducerManager = createReducerManager(rootReducers);

export const store = configureStore<StateSchema>({
  reducer: reducerManager.reduce,
  devTools: true,
});

// @ts-ignore
store.reducerManager = reducerManager;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
