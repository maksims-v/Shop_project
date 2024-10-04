import { StateSchema } from 'app/providers/StoreProvider';

export const getPageSectionData = (state: StateSchema) => state.productsList.pageCategory;
