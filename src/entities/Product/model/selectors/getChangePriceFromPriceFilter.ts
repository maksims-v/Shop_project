import { StateSchema } from 'app/providers/StoreProvider';

export const getChangePriceFromPriceFilter = (state: StateSchema) => state.productsList.changePrice;
