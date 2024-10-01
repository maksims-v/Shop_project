import { StateSchema } from 'app/providers/StoreProvider';

export const getSecondBannerData = (state: StateSchema) => state.secondBanner.data;
