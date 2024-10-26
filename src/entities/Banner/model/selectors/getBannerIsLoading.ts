import { StateSchema } from 'app/providers/StoreProvider';

export const getBannerIsLoading = (state: StateSchema) => state.banner.isLoading;
