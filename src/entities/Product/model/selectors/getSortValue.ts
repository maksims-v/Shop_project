import { StateSchema } from 'app/providers/StoreProvider';

export const getSortValue = (state: StateSchema) => state.productsList?.sortValue;
