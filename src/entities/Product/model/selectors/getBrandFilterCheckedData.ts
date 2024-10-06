import { StateSchema } from 'app/providers/StoreProvider';

export const getBrandFilterCheckedData = (state: StateSchema) => state.productsList.brandsChecked;
