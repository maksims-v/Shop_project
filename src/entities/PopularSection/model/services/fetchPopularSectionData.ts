import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PopularSectionResponse } from '../types/popularSection';

const qs = require('qs');

const query = qs.stringify({
  populate: {
    popularCategeory: {
      populate: { image: true },
    },
  },
});

export const fetchPopularSectionData = createAsyncThunk<
  PopularSectionResponse,
  void,
  { rejectValue: string }
>('fetchPopularSectionData', async (_, { rejectWithValue }) => {
  try {
    const response = await axios<PopularSectionResponse>(
      `${__API__}/api/section-popular-categories?${query}`,
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
