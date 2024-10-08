const qs = require('qs');
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SimilarProductsResponse } from '../types/similarProducts';
import { Product } from 'entities/Product/model/types/Product';

export const fetchSimilarProductsData = createAsyncThunk<
  SimilarProductsResponse,
  Product,
  { rejectValue: string }
>('fetchSimilarProductsData', async (value, { rejectWithValue }) => {
  try {
    const query = qs.stringify({
      filters: {
        $and: [{ title: { $eqi: value.title } }, { slug: { $ne: value.slug } }],
      },
      populate: { image: true, size: true },
    });

    const response = await axios<SimilarProductsResponse>(`${__API__}/api/products?${query}`, {
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
