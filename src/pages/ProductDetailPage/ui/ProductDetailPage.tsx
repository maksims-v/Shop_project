import React, { useCallback, useEffect, useState } from 'react';
import { Alert, Box, Divider, Snackbar, Stack } from '@mui/material';
import { getProductDetailData } from 'entities/Product/model/selectors/getProductDetailData';
import { fetchProductDetailData } from 'entities/Product/model/services/fetchProductDetailData';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { ProductsImageGallery } from 'entities/ProductDetail';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';
import { fetchSimilarProductsData } from 'features/SimilarProducts';
import { productDetailActions } from 'entities/Product/model/slice/productDetailSlice';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { ProductDetail } from 'entities/Product';
import {
  fetchRelatedProductsSliderData,
  getRelatedProductsData,
} from 'entities/RelatedProductsSlider';
import { Slider } from 'shared/ui/Slider/Slider';
import { basketSliceActions } from 'entities/Basket';

const ProductDetailPage = () => {
  const [qnty, setQnty] = useState(1);
  const [productQnty, setProductQnty] = useState(null);
  const [size, setSize] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setError] = useState(false);
  const [changeSizeColor, setChangeSizeColor] = useState('black');

  const params = useParams<PathsParams>();
  const dispatch = useAppDispatch();
  const data = useSelector(getProductDetailData);
  const relatedProductsData = useSelector(getRelatedProductsData);

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
      dispatch(fetchRelatedProductsSliderData(params));
    }
  }, [data]);

  const sizeHandleChange = useCallback(
    (event: React.MouseEvent<HTMLElement>, newAlignment: any) => {
      setSize(newAlignment);
    },
    [setSize],
  );

  const handleSnackbarClose = useCallback(
    (event: React.SyntheticEvent, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSuccess(false);
      setError(false);
    },
    [setOpenSuccess, setError],
  );

  const handleAlertClose = useCallback(() => {
    setOpenSuccess(false);
    setError(false);
  }, [setOpenSuccess, setError]);

  const addToBag = useCallback(() => {
    if (size && productQnty !== 0) {
      dispatch(basketSliceActions.addToBasket({ data, size, qnty }));
      setOpenSuccess(true);
    } else if (!size) {
      setError(true);
      setChangeSizeColor('red');
    }
  }, [size, productQnty, dispatch, data, qnty, setOpenSuccess, setError, setChangeSizeColor]);

  return (
    <Box sx={{ width: '100%', m: '40px auto 10px auto' }}>
      <PageBreadcrumbs />
      <Box sx={{ display: 'flex', columnGap: '40px' }}>
        <Box sx={{ flex: '1 1 50%', maxWidth: '50%' }}>
          <ProductsImageGallery data={data} />
        </Box>
        <Box sx={{ flex: '1 1 50%', mb: '40px' }}>
          <ProductDetail
            data={data}
            sizeHandleChange={sizeHandleChange}
            setProductQnty={setProductQnty}
            changeSizeColor={changeSizeColor}
            size={size}
            productQnty={productQnty}
            qnty={qnty}
            setQnty={setQnty}
            addToBag={addToBag}
          />
        </Box>
        <Divider sx={{ mb: '10px' }} color="yellow" />
      </Box>
      <Slider data={relatedProductsData} section={'relatedProducts'} />
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
