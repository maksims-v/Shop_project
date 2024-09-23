import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { NavbarData, NavbarSchema } from '../../types/navbar';
const qs = require('qs');

const fetchQuery = qs.stringify({
  populate: {
    linkList: {
      populate: { link: '*' },
    },
  },
});

export const fetchNavbarData = createAsyncThunk<NavbarSchema, void, { rejectValue: string }>(
  'auth/login',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`http://127.0.0.1:1337/api/layout-headers?${fetchQuery}`);
      if (!response.data) {
        throw new Error('error');
      }

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('Вы ввели неверный логин или пароль');
    }
  },
);
