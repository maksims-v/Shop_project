import { Box } from '@mui/material';
import { FilterCheckbox } from 'shared/ui/FilterCheckbox/FilterCheckbox';

export interface ProductSectionSelectorProps {
  data?: string[];
  isLoading?: boolean;
}

export const ProductSectionSelector = (props: ProductSectionSelectorProps) => {
  const { data = [], isLoading } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    // dispatch(setPageCategoryChecked(event.target.name));
  };

  return (
    <Box mb="10px">
      <FilterCheckbox data={data} handleChange={handleChange} title={'gender'} />
    </Box>
  );
};