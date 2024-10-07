import { StateSchema } from 'app/providers/StoreProvider';

export const getSaleFilterFlag = (state: StateSchema) => state.productsList?.sale;
