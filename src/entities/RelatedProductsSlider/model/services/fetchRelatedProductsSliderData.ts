import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { RelatedProductsResponse } from '../types/relatedProductsSlider';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { getProductId } from 'entities/Product';
import { StateSchema } from 'app/providers/StoreProvider';

export const fetchRelatedProductsSliderData = createAsyncThunk<
  RelatedProductsResponse,
  PathsParams,
  { rejectValue: string; state: StateSchema }
>('fetchRelatedProductsSliderData', async (query, { rejectWithValue, getState }) => {
  try {
    const { id } = getProductId(getState());
    const response = await axios<RelatedProductsResponse>(
      `${__API__}/api/products/relatedproducts?pageCategory=${query.pageCategory}&category=${query.category}&subcat=${query.subcategory}&id=${id}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.data || !response.data.data) {
      throw new Error('error');
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('Что-то случилось ( ');
  }
});
