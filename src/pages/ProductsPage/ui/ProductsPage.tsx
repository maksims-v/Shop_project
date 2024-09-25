import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { fetchProductsData } from '../model/services/fetchProductsData/fetchProductsData';

export interface ProductsPageProps {}

const ProductsPage = ({}: ProductsPageProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  return <div>Product</div>;
};

export default ProductsPage;
