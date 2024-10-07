import { StateSchema } from 'app/providers/StoreProvider';

export const getSectionPageFilterData = (state: StateSchema) =>
  state.productsList.pageCategoryChecked;
