import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSchema, User } from '../types/user';
import { unsetToken } from 'shared/lib/auth/auth';
import Cookies from 'js-cookie';

const initialState: UserSchema = {
  _inited: false,
};

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
        const id = Cookies.get('id');
        const username = Cookies.get('username');

        if (!state.authData) {
          state.authData = {
            token: { jwt: '' },
            id: '',
            username: '',
          };
        }

        state.authData.token = { jwt };
        state.authData.id = id;
        state.authData.username = username;
      }
      state._inited = true;
    },
    logout: (state) => {
      unsetToken();
      state.authData = undefined;
    },
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
