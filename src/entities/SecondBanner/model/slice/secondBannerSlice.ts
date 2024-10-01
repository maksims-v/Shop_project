import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSecondBannerData } from '../services/fetchSecondBannerData';
import { SecondBannerResponse, SecondBannerSchema } from '../types/secondBanner';

const initialState: SecondBannerSchema = {
  isLoading: true,
  error: false,
};

export const SecondBannerSlice = createSlice({
  name: 'SecondBanner',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchSecondBannerData.fulfilled,
        (state, action: PayloadAction<SecondBannerResponse>) => {
          state.isLoading = false;
          state.data = action.payload.data[0].attributes;
        },
      )
      .addCase(fetchSecondBannerData.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: secondBannerActions } = SecondBannerSlice;
export const { reducer: secondBannerReducer } = SecondBannerSlice;
