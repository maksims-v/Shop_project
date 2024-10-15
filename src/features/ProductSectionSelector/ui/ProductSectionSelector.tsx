import { Box } from '@mui/material';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { FilterCheckbox } from 'shared/ui/FilterCheckbox/FilterCheckbox';

export interface ProductSectionSelectorProps {
  data?: string[];
  isLoading?: boolean;
}

export const ProductSectionSelector = memo((props: ProductSectionSelectorProps) => {
  const { data = [], isLoading } = props;
  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(productListActions.setPageCategoryChecked(event.target.name));
    },
    [dispatch],
  );

  return (
    <Box mb="10px">
      <FilterCheckbox data={data} handleChange={handleChange} title={'gender'} />
    </Box>
  );
});
