import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SectionCategoryResponse, SectionCategorySchema } from '../types/sectionCategory';
import { fetchSectionCategoryData } from '../services/fetchSectionCategoryData';

const initialState: SectionCategorySchema = {
  data: [],
  isLoading: true,
  error: undefined,
};

export const sectionCategorySlice = createSlice({
  name: 'SectionCategory',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectionCategoryData.pending, (state) => {})
      .addCase(
        fetchSectionCategoryData.fulfilled,
        (state, action: PayloadAction<SectionCategoryResponse>) => {
          state.data = action.payload?.data[0]?.attributes?.category;
        },
      )
      .addCase(fetchSectionCategoryData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: sectionCategoryActions } = sectionCategorySlice;
export const { reducer: sectionCategoryReducer } = sectionCategorySlice;
