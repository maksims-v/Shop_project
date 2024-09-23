import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { setToken } from 'shared/lib/auth/auth';

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
