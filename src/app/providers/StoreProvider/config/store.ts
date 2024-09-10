import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './stateSchema';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';

const rootReducers: ReducersMapObject<StateSchema> = {
  user: userReducer,
  loginForm: loginReducer,
};

export const store = configureStore<StateSchema>({
  reducer: rootReducers,
  devTools: true,
});

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
