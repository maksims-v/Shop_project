import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BrandSectionResponse } from '../types/brandSection';

const qs = require('qs');
const query = qs.stringify({
  populate: {
    brandSection: {
      populate: { image: true, items: { populate: { image: true } } },
    },
  },
});

export const fetchBrandSectionData = createAsyncThunk<
  BrandSectionResponse,
  void,
  { rejectValue: string }
>('fetchBrandSectionData', async (_, { rejectWithValue }) => {
  try {
    const response = await axios<BrandSectionResponse>(`${__API__}/api/section-brands?${query}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.data) {
      throw new Error('error');
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то случилось ( ');
  }
});
