import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchClearanceSliderData } from '../services/fetchClearanceSliderData';
import { ClearanceSliderResponse, ClearanceSliderSchema } from '../types/clearanceSlider';

const initialState: ClearanceSliderSchema = {
  isLoading: true,
  error: undefined,
};

export const clearanceSliderSlice = createSlice({
  name: 'ClearanceSlider',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchClearanceSliderData.pending, (state) => {})
      .addCase(
        fetchClearanceSliderData.fulfilled,
        (state, action: PayloadAction<ClearanceSliderResponse>) => {
          state.data = action.payload?.data?.map((item) => item.attributes ?? {});
          state.isLoading = false;
        },
      )
      .addCase(fetchClearanceSliderData.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: clearanceSliderActions } = clearanceSliderSlice;
export const { reducer: clearanceSliderReducer } = clearanceSliderSlice;
