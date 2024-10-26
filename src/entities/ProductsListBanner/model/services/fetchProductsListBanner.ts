import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';

const qs = require('qs');

function addQuery(paths: PathsParams) {
  const query = qs.stringify(
    {
      filters: {
        pageCategory: paths.pageCategory,
        showOnBanner: true,
      },
      populate: {
        image: true,
      },
    },
    {
      encodeValuesOnly: true,
    },
  );
  return query;
}

export const fetchProductsListBanner = createAsyncThunk<any, PathsParams, { rejectValue: string }>(
  'fetchProductsListBanner',
  async (arrgs, { rejectWithValue }) => {
    console.log(arrgs);
    try {
      const response = await axios(`${__API__}/api/products?${addQuery(arrgs)}`, {
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
