import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClearanceSliderResponse, ClearanceSliderSchema } from '../types/clearanceSlider';
import { fetchAllSizesData } from '../services/fetchAllSizesData';

const initialState: ClearanceSliderSchema = {
  isLoading: true,
  error: undefined,
};

export const productSizesSlice = createSlice({
  name: 'productsSizes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllSizesData.pending, (state) => {})
      .addCase(
        fetchAllSizesData.fulfilled,
        (state, action: PayloadAction<ClearanceSliderResponse>) => {
          state.data = action.payload?.data?.map((item) => item.attributes);
          state.isLoading = false;
        },
      )
      .addCase(fetchAllSizesData.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: productSizesSliceActions } = productSizesSlice;
export const { reducer: productSizesSliceReducer } = productSizesSlice;
