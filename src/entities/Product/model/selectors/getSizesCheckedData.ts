import { StateSchema } from 'app/providers/StoreProvider';

export const getSizesCheckedData = (state: StateSchema) => state.productsList?.sizesChecked;
