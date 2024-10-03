import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductList, ProductsListSchema } from '../types/Product';
import { fetchProductsListData } from '../services/fetchProductsListData';

const initialState: ProductsListSchema = {
  mobile: false,
  allSizesFromApi: [],
  status: null,
  error: null,
  inputSearchValue: '',
  newSearch: true,
  pageCategory: [],
  pageCategoryChecked: [],
  sale: false,
  category: [],
  categoryChecked: [],
  subCategory: [],
  subCategoryChecked: [],
  brands: [],
  brandsChecked: [],
  sizes: [],
  sizesChecked: [],
  priceMinAndMax: [1, 9999],
  changePrice: [1, 9999],
  currentPage: 1,
  sortValue: 'Sort By',
  searchFlag: false,
};

export const productsListSlice = createSlice({
  name: 'ProductList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsListData.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchProductsListData.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = action.payload.data.attributes.sortedProducts;
        state.metaData = action.payload.meta;
        state.pageCategory = state.newSearch
          ? action.payload.meta.pageCategory
          : state.pageCategory;
        state.brands = state.newSearch ? action.payload.meta.brands : state.brands;
        state.category = state.newSearch ? action.payload.meta.category : state.category;
        state.subCategory = state.newSearch ? action.payload.meta.subCategory : state.subCategory;
        state.priceMinAndMax = state.newSearch
          ? [action.payload.meta.priceMin, action.payload.meta.priceMax]
          : state.priceMinAndMax;

        // state.sizes = state.newSearch ? action.payload.meta.sizes : state.sizes;

        state.status = 'resolved';
      })
      .addCase(fetchProductsListData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: productListActions } = productsListSlice;
export const { reducer: productListReducer } = productsListSlice;
