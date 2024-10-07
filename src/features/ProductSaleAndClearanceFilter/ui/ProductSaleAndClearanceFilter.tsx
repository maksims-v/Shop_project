import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, Typography } from '@mui/material';
import { getSaleFilterFlag } from 'entities/Product';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/hook';

export interface ProductSaleAndClearanceFilterProps {
  isLoading?: boolean;
  sale?: boolean;
}

export const ProductSaleAndClearanceFilter = (props: ProductSaleAndClearanceFilterProps) => {
  const { isLoading, sale } = props;

  const saleFilterFlag = useSelector(getSaleFilterFlag);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    dispatch(productListActions.setSale());
  };

  return (
    <Box mb="10px">
      <Typography sx={{ mb: '2px' }} fontWeight="bold">
        Deals & Discounts
      </Typography>
      <FormControl sx={{ pl: '8px' }} component="fieldset" variant="standard">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                sx={{ p: '2px' }}
                onChange={handleChange}
                checked={saleFilterFlag}
                name="Sale"
              />
            }
            label="Sale"
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
};
