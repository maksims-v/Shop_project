import { StateSchema } from 'app/providers/StoreProvider';

export const getBasketProducts = (state: StateSchema) => state.basket.basket;
