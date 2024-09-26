import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSliderData } from '../services/fetchSliderData';
import { SliderProductAttributes, SliderSchema } from '../types/slider';

const initialState: SliderSchema = {
  isLoading: false,
  error: false,
  data: [],
};

export const sliderSlice = createSlice({
  name: 'Slider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSliderData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchSliderData.fulfilled,
        (state, action: PayloadAction<SliderProductAttributes[]>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchSliderData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: sliderActions } = sliderSlice;
export const { reducer: sliderReducer } = sliderSlice;
