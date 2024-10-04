import { StateSchema } from 'app/providers/StoreProvider';

export const getSectionFilterCheckedData = (state: StateSchema) =>
  state.productsList.categoryChecked;
