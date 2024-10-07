import { StateSchema } from 'app/providers/StoreProvider';

export const getTotalProductsCount = (state: StateSchema) => state.productsList?.metaData?.total;
