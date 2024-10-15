import { Box, Typography, Slider } from '@mui/material';
import { getMinAndMaxPriceData, getSearchInputValue } from 'entities/Product';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { useState, useEffect, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { useDebounce } from 'use-debounce';

export interface ProductPriceFilterProps {
  resetPriceSlider?: boolean;
}

export const ProductPriceFilter = memo((props: ProductPriceFilterProps) => {
  const { resetPriceSlider } = props;
  const params = useParams<PathsParams>();

  const [value, setValue] = useState<[number, number]>([1, 9999]);
  const [debouncedValue] = useDebounce(value, 800);

  const dispatch = useAppDispatch();

  const priceMinAndMax = useSelector(getMinAndMaxPriceData);
  const inputSearchValue = useSelector(getSearchInputValue);

  const handleChange = useCallback(
    (event: Event, newValue: [number, number]) => {
      setValue(newValue);
    },
    [setValue],
  );

  useEffect(() => {
    setValue([1, 9999]);
  }, [inputSearchValue, resetPriceSlider, params]);

  useEffect(() => {
    if (debouncedValue[1] !== 9999) {
      dispatch(productListActions.setChangePrice(debouncedValue));
    }
  }, [debouncedValue]);

  return (
    <Box sx={{ width: '85%', textAlign: 'center', mb: '10px' }}>
      <Typography textAlign="left" fontWeight="bold" mb="15px">
        PRICE
      </Typography>
      {
        <Slider
          sx={{
            width: '90%',
            mt: '-10px',
          }}
          value={value}
          valueLabelDisplay="auto"
          onChange={handleChange}
          min={priceMinAndMax && Number(priceMinAndMax[0])}
          max={priceMinAndMax && Number(priceMinAndMax[1])}
        />
      }

      <Box m={'-10px 0 0 0'} width={'100%'} display="flex" justifyContent="space-between">
        <Typography>{priceMinAndMax[0]}</Typography>
        <Typography>{priceMinAndMax[1]}</Typography>
      </Box>
    </Box>
  );
});
