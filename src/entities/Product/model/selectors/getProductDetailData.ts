import { StateSchema } from 'app/providers/StoreProvider';

export const getProductDetailData = (state: StateSchema) => state?.productDetail?.data;
