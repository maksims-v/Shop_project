import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Profile } from '../../types/profile';
import { StateSchema } from 'app/providers/StoreProvider';

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  { rejectValue: string; state: StateSchema }
>('auth/fetchProfileData', async (_, { rejectWithValue }) => {
  try {
    const jwt = Cookies.get('jwt');

    const response = await axios('http://127.0.0.1:1337/api/users/me', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    });

    if (!response.data) {
      throw new Error('error');
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('Вы ввели неверный логин или пароль');
  }
});
