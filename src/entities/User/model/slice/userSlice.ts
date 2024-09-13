import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/user';
import { unsetToken } from 'shared/lib/auth/auth';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    logout: (state) => {
      unsetToken();
      state.authData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
