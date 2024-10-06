import { StateSchema } from 'app/providers/StoreProvider';

export const getCategoryFilterCheckedData = (state: StateSchema) =>
  state.productsList.categoryChecked;
