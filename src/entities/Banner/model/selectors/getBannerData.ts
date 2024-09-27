import { StateSchema } from 'app/providers/StoreProvider';

export const getBannerData = (state: StateSchema) => state.banner.data;
