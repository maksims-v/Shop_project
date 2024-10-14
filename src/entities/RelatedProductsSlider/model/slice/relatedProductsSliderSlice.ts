import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRelatedProductsSliderData } from '../services/fetchRelatedProductsSliderData';
import { RelatedProductsResponse, RelatedProductsShema } from '../types/relatedProductsSlider';

const initialState: RelatedProductsShema = {
  isLoading: true,
  error: undefined,
  data: [],
};

export const relatedProductsSliderSlice = createSlice({
  name: 'relatedProductsSlider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedProductsSliderData.pending, (state) => {})
      .addCase(
        fetchRelatedProductsSliderData.fulfilled,
        (state, action: PayloadAction<RelatedProductsResponse>) => {
          state.data = action.payload.data.attributes.sortedProducts;
          state.isLoading = false;
        },
      )
      .addCase(fetchRelatedProductsSliderData.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: relatedProductsSliderActions } = relatedProductsSliderSlice;
export const { reducer: relatedProductsSliderReducer } = relatedProductsSliderSlice;
