import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductList, ProductListResponse, ProductsListSchema } from '../types/Product';
import { fetchProductsListData } from '../services/fetchProductsListData';

const initialState: ProductsListSchema = {
  mobile: false,
  status: null,
  error: null,
  newSearch: true,
  sale: false,
  data: [],
  metaData: {},
  inputSearchValue: '',
  pageCategory: [],
  pageCategoryChecked: [],
  category: [],
  categoryChecked: [],
  subCategory: [],
  subCategoryChecked: [],
  brands: [],
  brandsChecked: [],
  allSizesFromApi: [],
  sizes: [],
  sizesChecked: [],
  priceMinAndMax: [1, 9999],
  changePrice: [1, 9999],
  currentPage: 1,
  sortValue: 'Sort By',
  searchFlag: false,
  price: '',
};

export const productsListSlice = createSlice({
  name: 'ProductList',
  initialState,
  reducers: {
    setMobile(state, action) {
      state.mobile = action.payload;
    },
    inputValue(state, action) {
      state.inputSearchValue = action.payload;
      state.newSearch = true;
    },
    setSale(state) {
      state.sale = !state.sale;
      updateSearchState(state);
    },
    setPageCategoryChecked(state, action) {
      state.pageCategoryChecked = toggleItemInArray(state.pageCategoryChecked, action.payload);
      updateSearchState(state);
    },

    setCategoryChecked(state, action) {
      state.categoryChecked = toggleItemInArray(state.categoryChecked, action.payload);
      updateSearchState(state);
    },

    setSubCategoryChecked(state, action) {
      state.subCategoryChecked = toggleItemInArray(state.subCategoryChecked, action.payload);
      updateSearchState(state);
    },

    setBrandsChecked(state, action) {
      state.brandsChecked = toggleItemInArray(state.brandsChecked, action.payload);
      updateSearchState(state);
    },
    setSizesChecked(state, action) {
      state.sizesChecked = action.payload;
      updateSearchState(state);
    },
    setSortValue(state, action) {
      state.sortValue = action.payload;
      updateSearchState(state);
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
      state.newSearch = false;
      state.searchFlag = !state.searchFlag;
    },
    setChangePrice(state, action) {
      if (
        state.changePrice[1] !== action.payload[1] ||
        state.changePrice[0] !== action.payload[0]
      ) {
        state.changePrice = action.payload;
      }
      updateSearchState(state);
    },
    clearAllFilters(state) {
      state.status = null;
      state.error = null;
      state.data = [];
      state.metaData = {};
      state.inputSearchValue = '';
      state.newSearch = true;
      state.pageCategory = [];
      state.pageCategoryChecked = [];
      state.sale = false;
      state.category = [];
      state.categoryChecked = [];
      state.subCategory = [];
      state.subCategoryChecked = [];
      state.brands = [];
      state.brandsChecked = [];
      state.sizes = [];
      state.sizesChecked = [];
      state.price = '';
      state.priceMinAndMax = [1, 9999];
      state.changePrice = [1, 9999];
      state.currentPage = 1;
      state.sortValue = 'Sort By';
      state.searchFlag = !state.searchFlag;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsListData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchProductsListData.fulfilled,
        (state, action: PayloadAction<ProductListResponse>) => {
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

          state.sizes = state.newSearch ? action.payload.meta.sizes : state.sizes;

          state.status = 'resolved';
          state.isLoading = false;
        },
      )
      .addCase(fetchProductsListData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

const toggleItemInArray = <T>(array: T[], item: T): T[] => {
  return array.includes(item) ? array.filter((i) => i !== item) : [...array, item];
};

const updateSearchState = (state: ProductsListSchema) => {
  state.currentPage = 1;
  state.searchFlag = !state.searchFlag;
  state.newSearch = false;
};

// Action creators are generated for each case reducer function
export const { actions: productListActions } = productsListSlice;
export const { reducer: productListReducer } = productsListSlice;
