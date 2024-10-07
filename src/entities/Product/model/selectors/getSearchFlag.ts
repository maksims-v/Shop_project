import { StateSchema } from 'app/providers/StoreProvider';

export const getSearchFlag = (state: StateSchema) => state.productsList?.searchFlag;
