import { StateSchema } from 'app/providers/StoreProvider';

export const getMinAndMaxPriceData = (state: StateSchema) => state.productsList.priceMinAndMax;
