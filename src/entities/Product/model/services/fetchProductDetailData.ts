import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductDetailResponse } from '../types/Product';

const qs = require('qs');

export const fetchProductDetailData = createAsyncThunk<
  ProductDetailResponse,
  string,
  { rejectValue: string }
>('fetchProductDetailData', async (slug, { rejectWithValue }) => {
  try {
    const query = qs.stringify({
      filters: { slug: slug },
      populate: { image: true, size: true, color: true, id: true },
    });

    const response = await axios<ProductDetailResponse>(`${__API__}/api/products?${query}`, {
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
