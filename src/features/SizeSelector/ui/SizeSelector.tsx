import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';
import React from 'react';
import DoneIcon from '@mui/icons-material/Done';
import { Size } from 'entities/Product/model/types/Product';

type SizeSelectorProps = {
  data?: Size[];
  sizeHandleChange: (event: React.MouseEvent<HTMLElement>, newAlignment: any) => void;
  setProductQnty: (qnty: number | null) => void;
  changeSizeColor?: string;
  productQnty?: number;
  size?: string;
};

export const SizeSelector = (props: SizeSelectorProps) => {
  const {
    data = [],
    sizeHandleChange,
    setProductQnty,
    changeSizeColor,
    productQnty = null,
    size = 'ONE SIZE',
  } = props;

  return (
    <>
      <Box sx={{ fontSize: '15px', fontWeight: 'bold', mb: '10px', color: changeSizeColor }}>
        Choose size:
        <Box component="span" sx={{ pl: '3px', fontWeight: 'normal' }}>
          {size?.toUpperCase()}
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
            <Box sx={{ fontWeight: 'normal', color: 'red' }} component="span">
              Out of stock!
            </Box>
          )}
        </Box>
      </Box>

      <Box maxWidth="300px">
        <ToggleButtonGroup
          sx={{
            '& .MuiToggleButtonGroup-firstButton': {
              borderRadius: '4px',
            },

            '& .MuiToggleButtonGroup-lastButton, & .MuiToggleButtonGroup-middleButton': {
              borderLeft: '1px solid rgba(0, 0, 0, 0.12)',
              borderRadius: '4px',
              marginLeft: '0px',
            },
            display: 'flex',
            flexWrap: 'wrap',
            gap: '3px',
          }}
          color="primary"
          value={size}
          exclusive
          onChange={sizeHandleChange}
          aria-label="Platform">
          {data?.map((item, index) => {
            return (
              <ToggleButton
                sx={{
                  minWidth: '40px',
                  height: '50px',
                  borderRadius: '4px',
                }}
                key={index}
                onClick={() => setProductQnty(item.qnty ? item.qnty : 0)}
                color={item.qnty === 0 ? 'error' : 'success'}
                value={item.size}>
                {item.size}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>
      {productQnty <= 5 ? (
        <Box
          sx={{
            display: productQnty === null ? 'none' : 'block',
            color: '#f07186',
          }}>
          Only {productQnty} units left
        </Box>
      ) : (
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
