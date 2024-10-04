import { Box } from '@mui/material';
import { Product } from 'entities/Product/model/types/Product';
import { useCallback, useMemo } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

export interface ProductItemProps {
  data?: Product[];
  isLoading?: boolean;
  error?: boolean;
}

export const ProductsListData = (props: ProductItemProps) => {
  const { data = [], error, isLoading } = props;

  const productsListRender = useMemo(
    () => data.map((product) => <ProductCard key={product.slug} product={product} />),
    [data],
  );

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
        }}>
        {' '}
        {productsListRender}{' '}
      </Box>
    </Box>
  );
};
