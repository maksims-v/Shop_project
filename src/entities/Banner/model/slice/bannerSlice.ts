import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BannerAttributes, BannerSchema } from '../types/banner';
import { fetchBannerData } from '../services/fetchBannerData';

const initialState: BannerSchema = {
  isLoading: true,
  error: undefined,
};

export const bannerSlice = createSlice({
  name: 'Banner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerData.fulfilled, (state, action: PayloadAction<BannerAttributes>) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchBannerData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: BannerActions } = bannerSlice;
export const { reducer: BannerReducer } = bannerSlice;
