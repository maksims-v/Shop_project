import { Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { getSizesCheckedData, getSizesData } from 'entities/Product';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/hook';

type ProductSizesFilterProps = {
  data?: string[];
  isLoading?: boolean;
};

export const ProductSizesFilter = memo((props: ProductSizesFilterProps) => {
  const { data, isLoading } = props;

  const dispatch = useAppDispatch();

  const [formats, setFormats] = useState<string[]>();

  const sizesChecked = useSelector(getSizesCheckedData);

  // useEffect(() => {
  //   setFormats(sizesChecked);
  // }, [sizesChecked]);

  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
    dispatch(productListActions.setSizesChecked(newFormats));
  };

  const RenderSizes = useMemo(
    () =>
      data &&
      data.map((item) => (
        <ToggleButton
          key={item}
          value={item}
          aria-label={item}
          sx={{
            color: 'black',
            ml: '0px !Important',
            m: '2px',
            height: '40px',
            lineHeight: '15px',
            fontSize: '12px',
            width: '40px',
            borderLeft: '1px solid rgba(0, 0, 0, 0.12) !Important',
          }}>
          {item}
        </ToggleButton>
      )),
    [data],
  );

  return (
    <Box sx={{ mb: '0px' }}>
      <Typography sx={{ mb: '2px' }} fontWeight="bold">
        {'SIZE'}
      </Typography>
      <ToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          pl: '0px',
        }}>
        {RenderSizes}
      </ToggleButtonGroup>
    </Box>
  );
});
