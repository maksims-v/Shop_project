import { Box } from '@mui/material';

export interface ProductItemProps {}

export const ProductItem = ({}: ProductItemProps) => {
  return (
    <Box m="0 auto" width="100%">
      <Box
        sx={{
          mt: '20px',
          mb: '20px',
          display: 'grid',
          columnGap: '5',
          rowGap: '40px',
          gridTemplateColumns: 'repeat(auto-fill, 235px)',
        }}></Box>
    </Box>
  );
};
