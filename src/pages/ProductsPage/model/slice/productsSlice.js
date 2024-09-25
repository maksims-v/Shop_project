import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsData } from '../services/fetchProductsData/fetchProductsData';

const initialState = {
  readonly: true,
  isLoading: false,
  data: [],
  error: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: productsActions } = productsSlice;
export const { reducer: productsReducer } = productsSlice;
