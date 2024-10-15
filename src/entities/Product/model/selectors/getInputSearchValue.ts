import { StateSchema } from 'app/providers/StoreProvider';

export const getInputSearchValue = (state: StateSchema) => state.productsList.inputSearchValue;
