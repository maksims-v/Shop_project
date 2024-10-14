import { StateSchema } from 'app/providers/StoreProvider';

export const getRelatedProductsData = (state: StateSchema) => state.relatedProductsSlider.data;
