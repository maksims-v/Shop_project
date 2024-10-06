import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const qs = require('qs');

const query = qs.stringify({
  populate: { size: true },
});

export const fetchAllSizesData = createAsyncThunk(
  'fetchAllSizesData',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios(`${__API__}/api/sizes?${query}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.data) {
        throw new Error('error');
      }
      return response?.data;
    } catch (e) {
      return rejectWithValue('Что-то случилось ( ');
    }
  },
);
