import { StateSchema } from 'app/providers/StoreProvider';

export const getPageBrandsData = (state: StateSchema) => state.productsList.brands;
