import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SliderResponse } from '../types/slider';
import { ProductItem } from 'entities/Product/model/types/Product';
const qs = require('qs');

const query = qs.stringify({
  filters: {
    new: true,
  },
  populate: { image: true },
  pagination: {
    limit: 10,
  },
});

export const fetchSliderData = createAsyncThunk<ProductItem[], void, { rejectValue: string }>(
  'fetchSliderData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios<SliderResponse>(`${__API__}/api/products?${query}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.data) {
        throw new Error('error');
      }

      return response.data.data;
    } catch (e) {
      return rejectWithValue('Что-то случилось ( ');
    }
  },
);
