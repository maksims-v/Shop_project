import { StateSchema } from 'app/providers/StoreProvider';

export const getProductsListData = (state: StateSchema) => state.productsList?.data;
