import { StateSchema } from 'app/providers/StoreProvider';

export const getTotalPages = (state: StateSchema) => state.productsList.metaData.pages;
