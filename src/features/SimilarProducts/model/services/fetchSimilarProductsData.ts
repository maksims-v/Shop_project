const qs = require('qs');
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SimilarProductsResponse } from '../types/similarProducts';
import { Product } from 'entities/Product/model/types/Product';
import { StateSchema } from 'app/providers/StoreProvider';

export const fetchSimilarProductsData = createAsyncThunk<
  SimilarProductsResponse,
  void,
  { rejectValue: string; state: StateSchema }
>('fetchSimilarProductsData', async (_, { rejectWithValue, getState }) => {
  try {
    const { title, slug } = getState().productDetail.data.attributes;

    const query = qs.stringify({
      filters: {
        $and: [{ title: { $eqi: title } }, { slug: { $ne: slug } }],
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
