import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
// import { StateSchema } from './stateSchema';
import { userReducer } from 'entities/User';
import { StateSchema } from './stateSchema';
import { createReducerManager } from './reducerManager';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
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
