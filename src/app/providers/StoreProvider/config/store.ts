import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
// import { StateSchema } from './stateSchema';
import { userReducer, UserSchema } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { LoginSchema } from 'features/AuthByUserName/model/types/loginSchema';

interface StateSchema {
  user: UserSchema;
  loginForm: LoginSchema;
}

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  loginForm: loginReducer,
};

export const store = configureStore<StateSchema>({
  reducer: rootReducers,
  devTools: true,
});

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
