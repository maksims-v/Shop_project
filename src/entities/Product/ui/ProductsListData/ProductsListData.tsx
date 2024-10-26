import { Box } from '@mui/material';
import { Product } from 'entities/Product/model/types/Product';
import { memo, useMemo } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { removeNullValuesInProduct } from 'shared/lib/removeNullValuesInProduct/removeNullValuesInProduct';
import { Pagination } from 'features/Pagination';

export interface ProductItemProps {
  data?: Product[];
  isLoading?: boolean;
  error?: boolean;
}

export const ProductsListData = memo((props: ProductItemProps) => {
  const { data = [], error, isLoading } = props;

  const removeNullAttributes = data.map((item) => removeNullValuesInProduct(item));

  const productsListRender = useMemo(
    () =>
      removeNullAttributes.map((product: Product) => (
        <ProductCard key={product.slug} product={product} />
      )),
    [data],
  );

  return (
    <Box sx={{ m: '0 auto', width: '100%' }}>
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
      {/* <Pagination changePage={changePage} currentPage={} pages={} /> */}
    </Box>
  );
});
