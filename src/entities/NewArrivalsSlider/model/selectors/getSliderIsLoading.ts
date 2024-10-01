import { StateSchema } from 'app/providers/StoreProvider';

export const getSliderIsLoading = (state: StateSchema) => state.slider.isLoading;
