import { StateSchema } from 'app/providers/StoreProvider';

export const getFetchStatus = (state: StateSchema) => state?.productsList?.status;
