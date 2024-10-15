import { Box } from '@mui/material';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { FilterCheckbox } from 'shared/ui/FilterCheckbox/FilterCheckbox';

export interface ProductsBrandsFilterProps {
  data?: string[];
  isLoading?: boolean;
}

export const ProductsBrandsFilter = memo((props: ProductsBrandsFilterProps) => {
  const { data = [], isLoading } = props;

  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(productListActions.setBrandsChecked(event.target.name));
    },
    [dispatch],
  );
  return (
    <Box mb="10px">
      <FilterCheckbox data={data} handleChange={handleChange} title={'BRAND'} />
    </Box>
  );
});
