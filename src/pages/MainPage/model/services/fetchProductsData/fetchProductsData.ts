import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
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

export const fetchProductsData = createAsyncThunk(
  'productsPage/fetchProductsList',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(`http://127.0.0.1:1337/api/products?${query}`, {
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
  },
);
