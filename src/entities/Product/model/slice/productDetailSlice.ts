import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProductDetailData } from '../services/fetchProductDetailData';
import { ProductDetailResponse, ProductDetailSchema } from '../types/Product';

const initialState: ProductDetailSchema = {
  isLoading: true,
  error: undefined,
};

export const productDetailSlice = createSlice({
  name: 'ProductDetail',
  initialState,
  reducers: {
    clearData(state) {
      state.data = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductDetailData.pending, (state) => {})
      .addCase(
        fetchProductDetailData.fulfilled,
        (state, action: PayloadAction<ProductDetailResponse>) => {
          state.data = action.payload?.data[0];
          state.isLoading = false;
        },
      )
      .addCase(fetchProductDetailData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: productDetailActions } = productDetailSlice;
export const { reducer: productDetailReducer } = productDetailSlice;
