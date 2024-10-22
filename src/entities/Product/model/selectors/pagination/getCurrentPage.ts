import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentPage = (state: StateSchema) => state.productsList.currentPage;
