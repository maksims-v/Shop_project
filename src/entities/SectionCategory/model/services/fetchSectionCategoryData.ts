import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { SectionCategoryResponse } from '../types/sectionCategory';

const qs = require('qs');

const query = qs.stringify({
  populate: {
    category: {
      populate: { image: true },
    },
  },
});

export const fetchSectionCategoryData = createAsyncThunk<
  SectionCategoryResponse,
  void,
  { rejectValue: string }
>('fetchSectionCategoryData', async (_, { rejectWithValue }) => {
  try {
    const response = await axios<SectionCategoryResponse>(
      `${__API__}/api/section-categories?${query}`,
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
