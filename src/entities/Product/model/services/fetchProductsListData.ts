import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ProductListResponse } from '../types/Product';
import { StateSchema } from 'app/providers/StoreProvider';

type Paths = 'pageCategory' | 'category' | 'subcategory' | 'productdetail';

export type PathsParams = {
  [key in Paths]?: string;
};

export const fetchProductsListData = createAsyncThunk<
  ProductListResponse,
  PathsParams,
  { rejectValue: string; state: StateSchema }
>('fetchProductList', async function (value, { rejectWithValue, getState, dispatch }) {
  const {
    inputSearchValue,
    changePrice,
    brandsChecked,
    sale,
    categoryChecked,
    pageCategoryChecked,
    subCategoryChecked,
    sizesChecked,
    currentPage,
    sortValue,
  } = getState().productsList;

  const getPageCategoryValue =
    value?.pageCategory !== 'all' ? value.pageCategory : pageCategoryChecked;
  const getCategoryValue = value?.category ? value.category : categoryChecked;
  const getSubCategoryValue = value?.subcategory ? value.subcategory : subCategoryChecked;
  const saleproducts = sale ? 'Sale' : '';

  try {
    const response = await axios<ProductListResponse>(
      `${__API__}/api/products/search?search=${inputSearchValue}&pmin=${
        changePrice[0]
      }&pmax=${changePrice[1]}&brands=${brandsChecked}&sale=${
        value?.pageCategory === 'sale' ? 'Sale' : saleproducts
      }&category=${getCategoryValue}&pageCategory=${
        value?.pageCategory === 'sale' ||
        value?.pageCategory === 'clearance' ||
        value?.pageCategory === 'new'
          ? 'all'
          : getPageCategoryValue
      }&subcat=${getSubCategoryValue}&size=${sizesChecked}&currentPage=${currentPage}&sorting=${sortValue}&clearance=${
        value.pageCategory === 'clearance' && true
      }&newproduct=${value?.pageCategory === 'new' && true}`,
    );

    if (!response.data) {
      throw new Error('Server Error!');
    }

    const data = response.data;
    // dispatch(getAllSizes());

    return data;
  } catch (e) {
    return rejectWithValue('Что-то случилось ( ');
  }
});
