import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Snackbar,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { getProductDetailData } from 'entities/Product/model/selectors/getProductDetailData';
import { fetchProductDetailData } from 'entities/Product/model/services/fetchProductDetailData';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { ProductsImageGallery } from 'entities/ProductDetail';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

import { fetchSimilarProductsData, SimilarProducts } from 'features/SimilarProducts';
import { productDetailActions } from 'entities/Product/model/slice/productDetailSlice';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { BasketItem } from 'pages/Basket/model/types/basket';
import { basketSliceActions, getBasketProducts } from 'pages/Basket';
import { ProductDetail } from 'entities/Product';

type ProductDetailPageProps = {};

const ProductDetailPage = (props: ProductDetailPageProps) => {
  const {} = props;
  const [count, setCount] = useState(1);
  const [productQnty, setProductQnty] = useState(null);
  const [size, setSize] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setError] = useState(false);
  const [changeSizeColor, setChangeSizeColor] = useState('black');

  const params = useParams<PathsParams>();
  const dispatch = useAppDispatch();
  const data = useSelector(getProductDetailData);
  const basket = useSelector(getBasketProducts);

  useEffect(() => {
    setSize(null);
  }, [params]);

  useEffect(() => {
    !size && setProductQnty(null);
    setChangeSizeColor('black');
  }, [size]);

  useEffect(() => {
    dispatch(productListActions.clearAllFilters());
    dispatch(productDetailActions.clearData());
    dispatch(fetchProductDetailData(params.productdetail));
  }, [params]);

  useEffect(() => {
    if (data) {
      dispatch(fetchSimilarProductsData());
    }
  }, [data]);

  const sizeHandleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: any) => {
    setSize(newAlignment);
  };

  const handleSnackbarClose = (event: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenSuccess(false);
    setError(false);
  };

  const handleAlertClose = (event: React.SyntheticEvent) => {
    setOpenSuccess(false);
    setError(false);
  };

  const addToBag = () => {
    if (size && productQnty !== 0) {
      const item: BasketItem = {
        item: data.attributes,
        name: data.attributes.slug,
        qnty: count,
        productSize: size,
        id: data.id,
      };

      const product = basket.filter((item) => item.id === data.id && item.productSize === size);

      if (product.length === 0) {
        dispatch(basketSliceActions.addToBasket([...basket, item]));
      }
      setOpenSuccess(true);
    } else if (!size) {
      setError(true);
      setChangeSizeColor('red');
    }
  };
  return (
    <Box sx={{ width: '100%', m: '40px auto 10px auto' }}>
      <PageBreadcrumbs />
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box sx={{ flex: '1 1 50%' }}>
          <ProductsImageGallery data={data} />
        </Box>
        <Box flex="1 1 45%" mb="40px">
          <ProductDetail
            data={data}
            sizeHandleChange={sizeHandleChange}
            setProductQnty={setProductQnty}
          />
        </Box>
        <Divider sx={{ mb: '10px' }} color="yellow" />
      </Box>
      <Stack>
        <Snackbar open={openSuccess} autoHideDuration={2000} onClose={handleSnackbarClose}>
          <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
            The product has been placed in the cart
          </Alert>
        </Snackbar>
      </Stack>

      <Stack>
        <Snackbar open={openError} autoHideDuration={2000} onClose={handleSnackbarClose}>
          <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
            Please choose the size.
          </Alert>
        </Snackbar>
      </Stack>
    </Box>
  );
};

export default ProductDetailPage;
