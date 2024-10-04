import { StateSchema } from 'app/providers/StoreProvider';

export const getPageCategoryData = (state: StateSchema) => state.productsList.category;
