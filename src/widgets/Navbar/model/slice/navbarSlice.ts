import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NavbarData, NavbarSchema } from '../types/navbar';
import { fetchNavbarData } from '../services/fetchNavbarData/fetchNavbarData';

const initialState: NavbarSchema = {
  isLoading: false,
  error: undefined,
};

export const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNavbarData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchNavbarData.fulfilled, (state, action: PayloadAction<NavbarSchema>) => {
        state.isLoading = false;
        state.data = action.payload.data;
      })
      .addCase(fetchNavbarData.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { actions: navbarActions } = navbarSlice;
export const { reducer: navbarReducer } = navbarSlice;
