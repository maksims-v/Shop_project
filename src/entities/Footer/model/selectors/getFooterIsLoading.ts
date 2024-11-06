import { StateSchema } from 'app/providers/StoreProvider';

export const getFooterIsLoading = (state: StateSchema) => state.footer.isLoading;
