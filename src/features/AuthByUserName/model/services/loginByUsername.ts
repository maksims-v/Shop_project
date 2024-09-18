import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Token, User, userActions } from 'entities/User';
import { setToken } from 'shared/lib/auth/auth';
import Cookies from 'js-cookie';

export interface LoginByUsernameProps {
  identifier: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  { rejectValue: string }
>('auth/login', async (credentials, thunkAPI) => {
  try {
    const response = await axios.post(
      'http://127.0.0.1:1337/api/auth/local',
      {
        identifier: credentials.identifier,
        password: credentials.password,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    if (!response.data) {
      throw new Error('error');
    }

    setToken(response.data);
    thunkAPI.dispatch(userActions.setAuthData(response.data.jwt));

    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
  }
});

// export const authUserCookies = createAsyncThunk<User, Token, { rejectValue: string }>(
//   'auth/loginByCookies',
//   async (token, thunkAPI) => {
//     try {
//       const response = await axios('http://127.0.0.1:1337/api/users/me', {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token.jwt}`,
//         },
//       });
//       if (!response.data) {
//         throw new Error('error');
//       }
//       thunkAPI.dispatch(userActions.setAuthData(response.data));

//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
//     }
//   },
// );

// export const authUserCookie = createAsyncThunk(
//   'auth/getUserFromLocalCookie',
//   async function (jwt, { rejectWithValue }) {
//     try {
//       const response = await fetch(`${process.env.API_URL}/api/users/me`, {
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${jwt}`,
//         },
//       });
//       if (!response.ok) {
//         throw new Error('Server Error!');
//       }

//       const data = response.json();

//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );
