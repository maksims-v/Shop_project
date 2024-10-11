import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPopularSectionData } from '../services/fetchPopularSectionData';
import { PopularSectionSchema, PopularSectionResponse } from '../types/popularSection';

const initialState: PopularSectionSchema = {
  data: [],
  isLoading: true,
  error: undefined,
};

export const popularSectionSlice = createSlice({
  name: 'PopularSection',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopularSectionData.pending, (state) => {})
      .addCase(
        fetchPopularSectionData.fulfilled,
        (state, action: PayloadAction<PopularSectionResponse>) => {
          state.data = action.payload.data?.length
            ? action.payload?.data[0]?.attributes?.popularCategeory
            : [];
          state.isLoading = false;
        },
      )
      .addCase(fetchPopularSectionData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: popularSectionActions } = popularSectionSlice;
export const { reducer: popularSectionReducer } = popularSectionSlice;
