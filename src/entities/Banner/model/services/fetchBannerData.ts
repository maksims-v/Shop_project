import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BannerAttributes, BannerResponse } from '../types/banner';

export const fetchBannerData = createAsyncThunk<BannerAttributes, void, { rejectValue: string }>(
  'fetchBannerData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios<BannerResponse>(
        `http://127.0.0.1:1337/api/section-banners?populate=*`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (!response.data) {
        throw new Error('error');
      }

      return response.data.data[0].attributes;
    } catch (e) {
      return rejectWithValue('Что-то случилось ( ');
    }
  },
);
