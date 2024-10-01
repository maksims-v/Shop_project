import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSliderData } from '../services/fetchSliderData';
import { SliderSchema } from '../types/slider';
import { ProductItem } from 'entities/Product/model/types/Product';

const initialState: SliderSchema = {
  isLoading: true,
  error: undefined,
};

export const sliderSlice = createSlice({
  name: 'Slider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderData.pending, (state) => {})
      .addCase(fetchSliderData.fulfilled, (state, action: PayloadAction<ProductItem[]>) => {
        state.data = action.payload.map((item) => item.attributes);
        state.isLoading = false;
      })
      .addCase(fetchSliderData.rejected, (state) => {
        state.isLoading = true;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: sliderActions } = sliderSlice;
export const { reducer: sliderReducer } = sliderSlice;
