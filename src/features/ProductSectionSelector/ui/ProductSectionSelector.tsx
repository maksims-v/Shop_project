import { Box, Typography, FormControl, FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { FilterCheckbox } from 'shared/ui/FilterCheckbox/FilterCheckbox';

export interface ProductSectionSelectorProps {
  data?: string[];
  title?: string;
}

export const ProductSectionSelector = (props: ProductSectionSelectorProps) => {
  const { data = ['loading'], title = '' } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);
    // dispatch(setPageCategoryChecked(event.target.name));
  };

  return (
    <Box mb="10px">
      <Typography sx={{ mb: '2px' }} fontWeight="bold">
        {title.toUpperCase()}
      </Typography>
      <FilterCheckbox data={data} handleChange={handleChange} />
    </Box>
  );
};
