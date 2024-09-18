import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/user';
import { unsetToken } from 'shared/lib/auth/auth';
import Cookies from 'js-cookie';

const initialState: UserSchema = {};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state) => {
      const jwt = Cookies.get('jwt');
      if (jwt) {
        state.authData = JSON.parse(jwt);
      }
    },
    logout: (state) => {
      unsetToken();
      state.authData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
