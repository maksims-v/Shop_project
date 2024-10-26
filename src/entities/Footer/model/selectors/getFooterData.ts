import { StateSchema } from 'app/providers/StoreProvider';

export const getFooterData = (state: StateSchema) => state.footer.data;
