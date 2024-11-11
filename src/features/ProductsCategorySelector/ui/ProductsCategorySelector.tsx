import { Box } from '@mui/material';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { memo, useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { FilterCheckbox } from 'shared/ui/FilterCheckbox/FilterCheckbox';

export interface ProductsCategorySelectorProps {
  data?: string[];
  isLoading?: boolean;
  mobile?: boolean;
}

export const ProductsCategorySelector = memo((props: ProductsCategorySelectorProps) => {
  const { data = [], isLoading, mobile } = props;

  const dispatch = useAppDispatch();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(productListActions.setCategoryChecked(event.target.name));
    },
    [dispatch],
  );

  return (
    <Box mb="10px">
      <FilterCheckbox
        data={data}
        handleChange={handleChange}
        mobile={mobile}
        title={'CLOTHING & SHOES'}
      />
    </Box>
  );
});
