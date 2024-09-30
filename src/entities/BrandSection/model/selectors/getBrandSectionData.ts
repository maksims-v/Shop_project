import { StateSchema } from 'app/providers/StoreProvider';

export const getBrandSectionData = (state: StateSchema) => state?.brandSection?.data;
