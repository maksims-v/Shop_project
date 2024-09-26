import { StateSchema } from 'app/providers/StoreProvider';

export const getSliderData = (state: StateSchema) => state.slider?.data;
