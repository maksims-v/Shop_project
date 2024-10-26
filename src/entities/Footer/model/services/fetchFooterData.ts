import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CategoryLinks, DataResponse, FooterAttributes } from '../types/footer';

export const fetchFooterData = createAsyncThunk<FooterAttributes, void, { rejectValue: string }>(
  'footer/fetchData',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<DataResponse>(`${__API__}/api/layout-footers`);
      if (!response.data) {
        throw new Error('error');
      }

      return response.data?.data[0]?.attributes;
    } catch (e) {
      return thunkAPI.rejectWithValue('Error');
    }
  },
);
