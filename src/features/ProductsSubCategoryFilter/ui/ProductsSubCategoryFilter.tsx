import { Box } from '@mui/material';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { memo } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { FilterCheckbox } from 'shared/ui/FilterCheckbox/FilterCheckbox';

export interface ProductsSubCategoryFilterProps {
  data?: string[];
  isLoading?: boolean;
}

export const ProductsSubCategoryFilter = memo((props: ProductsSubCategoryFilterProps) => {
  const { data = [], isLoading } = props;

  const dispatch = useAppDispatch();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(productListActions.setSubCategoryChecked(event.target.name));
  };
  return (
    <Box mb="10px">
      <FilterCheckbox data={data} handleChange={handleChange} title={'category'} />
    </Box>
  );
});
