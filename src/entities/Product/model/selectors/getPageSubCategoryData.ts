import { StateSchema } from 'app/providers/StoreProvider';

export const getPageSubCategoryData = (state: StateSchema) => state.productsList.subCategory;
