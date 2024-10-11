import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BrandSectionResponse, BrandSectionSchema } from '../types/brandSection';
import { fetchBrandSectionData } from '../services/fetchBrandSectiondata';

const initialState: BrandSectionSchema = {
  isLoading: true,
  error: undefined,
};

export const brandSectionSlice = createSlice({
  name: 'BrandSection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrandSectionData.pending, (state) => {})
      .addCase(
        fetchBrandSectionData.fulfilled,
        (state, action: PayloadAction<BrandSectionResponse>) => {
          state.data = action?.payload?.data ? action?.payload?.data[0]?.attributes : {};
          state.isLoading = false;
        },
      )
      .addCase(fetchBrandSectionData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: brandSectionActions } = brandSectionSlice;
export const { reducer: brandSectionReducer } = brandSectionSlice;
