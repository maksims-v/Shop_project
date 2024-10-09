import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketItem, BasketSchema } from '../types/basket';

const initialState: BasketSchema = {
  isLoading: true,
  error: false,
  basket: [],
};

export const basketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<BasketItem[]>) {
      state.basket = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.basket));
      }
    },
    basketReset(state) {
      state.basket = [];
      if (typeof window !== 'undefined') {
        localStorage.setItem('cart', JSON.stringify(state.basket));
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { actions: basketSliceActions } = basketSlice;
export const { reducer: basketSliceReducer } = basketSlice;
