import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BasketItem, BasketSchema } from '../types/basket';
import { removeNullValuesInProduct } from 'shared/lib/removeNullValuesInProduct/removeNullValuesInProduct';
import { ProductItem } from 'entities/Product';

interface PayloadItem {
  data: ProductItem;
  size: string;
  qnty: number;
}

const initialState: BasketSchema = {
  isLoading: true,
  error: false,
  basket: [],
  totalPrice: 0,
};

export const basketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    getBasketFromLocalStorage(state) {
      const basket = localStorage.getItem('cart');
      if (basket) {
        const parsedBasket = JSON?.parse(basket);
        state.basket = removeNullValuesInBasket(parsedBasket);
      }
      state.totalPrice = calculateTotalPrice(state.basket);
    },
    addToBasket(state, action: PayloadAction<PayloadItem>) {
      const basketFilter = state.basket?.filter(
        (item) => item.id === action.payload.data.id && item.productSize === action.payload.size,
      );

      if (!basketFilter.length) {
        const item = {
          item: action.payload.data.attributes,
          name: action.payload.data.attributes.slug,
          qnty: action.payload.qnty,
          productSize: action.payload.size,
          id: action.payload.data.id,
        };

        state.basket = [...state.basket, item];
      }

      updateBasketState(state);
    },
    increaseProduct(state, action: PayloadAction<BasketItem>) {
      state.basket = state.basket.map((product) =>
        product.id === action.payload.id && product.productSize === action.payload.productSize
          ? { ...product, qnty: (product?.qnty ?? 0) + 1 }
          : product,
      );

      updateBasketState(state);
    },
    decreaseProduct(state, action: PayloadAction<BasketItem>) {
      state.basket = state.basket.map((product) => {
        if (
          product &&
          product.id === action.payload.id &&
          product.productSize === action.payload.productSize
        ) {
          const newCount = (product?.qnty ?? 1) - 1 > 1 ? (product?.qnty ?? 1) - 1 : 1;
          return { ...product, qnty: newCount };
        } else {
          return product;
        }
      });

      updateBasketState(state);
    },
    deleteProduct(state, action: PayloadAction<BasketItem>) {
      const filterBasket = state.basket.filter((product) => product.id !== action.payload.id);
      state.basket = filterBasket;
      updateBasketState(state);
    },
    basketReset(state) {
      state.basket = [];
      updateBasketState(state);
    },
  },
});

export const { actions: basketSliceActions } = basketSlice;
export const { reducer: basketSliceReducer } = basketSlice;

const calculateTotalPrice = (basket: BasketItem[] = []) => {
  return basket.reduce((summ, item) => {
    return summ + (item?.qnty ?? 1) * (item?.item?.price ?? 0);
  }, 0);
};

const updateBasketState = (state: BasketSchema) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(state.basket ?? []));
  }
  state.totalPrice = calculateTotalPrice(state.basket ?? []);
};

function removeNullValuesInBasket(value: BasketItem[]) {
  return value
    .map((item) => ({
      ...item,
      item: item.item ? removeNullValuesInProduct(item.item) : {},
    }))
    .filter((item) => Object.keys(item.item).length > 0);
}
