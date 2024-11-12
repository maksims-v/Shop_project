import { Box, useMediaQuery } from '@mui/material';
import { Product } from 'entities/Product/model/types/Product';
import { memo, useMemo } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import { removeNullValuesInProduct } from 'shared/lib/removeNullValuesInProduct/removeNullValuesInProduct';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { Pagination } from 'features/Pagination';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { useSelector } from 'react-redux';
import { getCurrentPage } from 'entities/Product/model/selectors/pagination/getCurrentPage';
import { getTotalPages } from 'entities/Product/model/selectors/pagination/getTotalPages';

export interface ProductItemProps {
  data?: Product[];
  isLoading?: boolean;
  error?: boolean;
}

export const ProductsListData = memo((props: ProductItemProps) => {
  const { data = [], error, isLoading } = props;

  const mobileScreen = useMediaQuery('(max-width:570px)');

  const dispatch = useAppDispatch();
  const currentPage = useSelector(getCurrentPage);
  const pages = useSelector(getTotalPages);
  const removeNullAttributes = data.map((item) => removeNullValuesInProduct(item));

  const productsListRender = useMemo(
    () =>
      removeNullAttributes.map((product: Product) => (
        <ProductCard key={product.slug} product={product} />
      )),
    [data],
  );

  const changePage = (event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(productListActions.setCurrentPage(page));
  };

  return (
    <Box sx={{ m: '0 auto', width: '100%' }}>
      <Box
        sx={{
          mt: '20px',
          mb: '20px',
          display: 'grid',
          columnGap: '5',
          rowGap: '40px',
          gridTemplateColumns: mobileScreen
            ? 'repeat(auto-fill, minmax(180px, 1fr))'
            : 'repeat(auto-fill, 235px)',
        }}>
        {productsListRender}
      </Box>

      <Pagination pages={pages} currentPage={currentPage} changePage={changePage} />
    </Box>
  );
});
