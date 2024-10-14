import React from 'react';
import { Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import { ProductItem } from 'entities/Product';

type ProductSizesTabsProps = {
  data: ProductItem;
  productQnty?: number;
  changeSizeColor?: string;
  size?: string;
  sizeHandleChange: (event: React.MouseEvent<HTMLElement>, newAlignment: any) => void;
  setProductQnty: (value: number) => number;
};

export const ProductSizesTabs = (props: ProductSizesTabsProps) => {
  const {
    data,
    changeSizeColor = 'black',
    productQnty,
    size,
    sizeHandleChange,
    setProductQnty,
  } = props;
  return (
    <>
      <Box sx={{ fontSize: '15px', fontWeight: 'bold', mb: '10px', color: changeSizeColor }}>
        Choose size:
        <Box component="span" sx={{ pl: '3px', fontWeight: 'normal' }}>
          {size && size?.toUpperCase()}
        </Box>
        <Box component="span" sx={{ pl: '3px' }}>
          {productQnty > 0 && (
            <>
              <DoneIcon fontSize="small" sx={{ color: '#449d44', position: 'absolute' }} />
              <Box sx={{ fontWeight: 'normal', color: '#449d44', pl: '18px' }} component="span">
                In stock!
              </Box>
            </>
          )}
          {productQnty === 0 && (
            <Box sx={{ fontWeight: 'normal', color: 'red' }} component="span"></Box>
          )}
        </Box>
      </Box>
      <Box mb="10px" maxWidth="300px">
        <ToggleButtonGroup
          color="primary"
          value={size}
          exclusive
          onChange={sizeHandleChange}
          aria-label="Platform">
          {data?.attributes?.size?.map((item) => {
            return (
              <ToggleButton
                key={item.id}
                onClick={() => setProductQnty(item.qnty ? item.qnty : 0)}
                color={item.qnty === null ? 'error' : 'success'}
                value={item.size}>
                {item.size}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>
      {size && productQnty < 5 && (
        <Box
          sx={{
            display: productQnty === null ? 'none' : 'block',
            color: '#f07186',
          }}>
          Only {productQnty} units left
        </Box>
      )}
      {size && productQnty >= 5 && (
        <Box
          sx={{
            display: productQnty === null ? 'none' : 'block',
            color: '#5cb85b',
          }}>
          In stock {productQnty} units
        </Box>
      )}
    </>
  );
};
