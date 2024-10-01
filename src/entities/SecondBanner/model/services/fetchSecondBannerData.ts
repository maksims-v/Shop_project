import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SecondBannerResponse } from '../types/secondBanner';

export const fetchSecondBannerData = createAsyncThunk<
  SecondBannerResponse,
  void,
  { rejectValue: string }
>('SecondBanner', async (_, { rejectWithValue }) => {
  try {
    const response = await axios<SecondBannerResponse>(
      `${__API__}/api/second-section-banners?populate=*`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.data) {
      throw new Error('error');
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то случилось ( ');
  }
});
