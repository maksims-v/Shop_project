import { StateSchema } from 'app/providers/StoreProvider';

export const getNavbarData = (state: StateSchema) => state.navbar.data;
