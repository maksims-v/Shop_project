import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryLinks, FooterAttributes, FooterSchema } from '../types/footer';
import { fetchFooterData } from '../services/fetchFooterData';

const initialState: FooterSchema = {
  isLoading: false,
  error: undefined,
};

export const footerSlice = createSlice({
  name: 'footer',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFooterData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchFooterData.fulfilled, (state, action: PayloadAction<FooterAttributes>) => {
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFooterData.rejected, (state, action) => {
        state.isLoading = true;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: footerActions } = footerSlice;
export const { reducer: footerReducer } = footerSlice;
