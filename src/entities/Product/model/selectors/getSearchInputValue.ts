import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchInputValue = (state: StateSchema) => state?.productsList?.inputSearchValue;
