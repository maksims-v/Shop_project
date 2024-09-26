import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
// import { StateSchema } from './stateSchema';
import { userReducer } from 'entities/User';
import { StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';
import { navbarReducer } from 'widgets/Navbar';
import { productsReducer } from 'pages/ProductsPage/model/slice/productsSlice';
import { sliderReducer } from 'entities/Slider/model/slice/sliderSlice';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  navbar: navbarReducer,
  products: productsReducer,
  slider: sliderReducer,
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
