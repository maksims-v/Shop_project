import { StateSchema } from 'app/providers/StoreProvider';

export const getSimilarProductsData = (state: StateSchema) => state.similarProducts.data;
