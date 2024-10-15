import { StateSchema } from 'app/providers/StoreProvider';

export const getBasketTotalPrice = (state: StateSchema) => state.basket.totalPrice;
