import { StateSchema } from 'app/providers/StoreProvider';

export const getSubCategoryFilterCheckedData = (state: StateSchema) =>
  state.productsList.subCategoryChecked;
