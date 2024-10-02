import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductItem } from 'entities/Product';
const qs = require('qs');

interface Params {
  pagesection: string;
  category: string;
}

export const fetchSectionPageProductListData = createAsyncThunk<
  ProductItem[],
  Params,
  { rejectValue: string }
>('fetchSectionPageData', async (params, { rejectWithValue }) => {
  console.log(params);

  try {
    const response = await axios(`${__API__}/api/products/search?search=${''}&pmin=${
          1
        }&pmax=${9999}&brands=${[]}&sale=${
          true
        }&category=${getCategoryValue}&pageCategory=${
          params.pagesection === 'sale' ||
          params.pagesection === 'new'
          params.pagesection === 'clearance' ||
            ? 'all'
            : getPageCategoryValue
        }&subcat=${getSubCategoryValue}&size=${sizesChecked}&currentPage=${currentPage}&sorting=${sortValue}&clearance=${
          value.pageCategory === 'clearance' && true
        }&newproduct=${params.pagesection === 'new' && true}`, {
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
