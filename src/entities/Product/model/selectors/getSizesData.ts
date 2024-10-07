import { StateSchema } from 'app/providers/StoreProvider';

export const getSizesData = (state: StateSchema) => state.productsList?.sizes;
