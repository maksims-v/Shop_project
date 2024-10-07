import { Box } from '@mui/material';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { FilterCheckbox } from 'shared/ui/FilterCheckbox/FilterCheckbox';

export interface ProductsCategorySelectorProps {
  data?: string[];
  isLoading?: boolean;
}

export const ProductsCategorySelector = memo((props: ProductsCategorySelectorProps) => {
  const { data = [], isLoading } = props;

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(productListActions.setCategoryChecked(event.target.name));
  };

  return (
    <Box mb="10px">
      <FilterCheckbox data={data} handleChange={handleChange} title={'CLOTHING & SHOES'} />
    </Box>
  );
});
