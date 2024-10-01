import { StateSchema } from 'app/providers/StoreProvider';

export const getPopularSectionData = (state: StateSchema) => state.popularSection.data;
