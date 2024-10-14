import { StateSchema } from 'app/providers/StoreProvider';

export const getProductId = (state: StateSchema) => state?.productDetail?.data;
