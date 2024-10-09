import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Divider,
  IconButton,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';
import { count } from 'console';
import { getProductDetailData } from 'entities/Product/model/selectors/getProductDetailData';
import { fetchProductDetailData } from 'entities/Product/model/services/fetchProductDetailData';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { ProductsImageGallery } from 'entities/ProductDetail';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DoneIcon from '@mui/icons-material/Done';

import {
  fetchSimilarProductsData,
  getSimilarProductsData,
  SimilarProducts,
} from 'features/SimilarProducts';
import { productDetailActions } from 'entities/Product/model/slice/productDetailSlice';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { BasketItem } from 'pages/Basket/model/types/basket';
import { basketSliceActions, getBasketProducts } from 'pages/Basket';

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

  const addToBag = () => {
    if (size && productQnty !== 0) {
      const item: BasketItem = {
        item: data.attributes,
        name: data.attributes.slug,
        qnty: count,
        productSize: size,
        id: data.id,
      };

      const product = basket
        .filter((item) => item.id === data.id)
        .filter((item) => item.productSize === size);

      if (product.length === 0) {
        dispatch(basketSliceActions.addToBasket([...basket, item]));
      }
      setOpenSuccess(true);
    } else if (!size) {
      setError(true);
      setChangeSizeColor('red');
    }
  };

  const transformDataToImageArr =
    data?.attributes && typeof data?.attributes?.image !== 'string'
      ? data?.attributes?.image?.data?.map((item) => ({
          original: `${__API__}${item.attributes.url}`,
          thumbnail: `${__API__}${item.attributes.formats.thumbnail.url}`,
        }))
      : [];

  return (
    <Box sx={{ width: '100%', m: '40px auto 10px auto' }}>
      <PageBreadcrumbs />
      <Box display="flex" flexWrap="wrap" columnGap="40px">
        <Box sx={{ flex: '1 1 50%' }}>
          <ProductsImageGallery data={transformDataToImageArr} />
        </Box>
        <Box flex="1 1 45%" mb="40px">
          <Box m="20px 0 25px 0">
            <Typography sx={{ mb: '8px', fontSize: '24px', fontWeight: 'bold' }} variant="h3">
              {data?.attributes?.title}
            </Typography>

            <Divider sx={{ mb: '10px' }} color="yellow" />

            <Typography sx={{ fontSize: '38px', fontWeight: 'bold' }}>
              {data?.attributes?.price} $
            </Typography>

            <Typography
              sx={{
                fontSize: '12px',
                pl: '5px',
                color: data?.attributes?.oldPrice && 'red',
              }}>
              {data?.attributes?.sale &&
                `Save:
              ${
                data?.attributes?.sale &&
                (data?.attributes?.price - data?.attributes?.oldPrice).toFixed(2)
              }
              $`}
            </Typography>
            <Divider sx={{ mb: '10px', mt: '10px' }} color="yellow" />
            <Box sx={{ fontSize: '15px', fontWeight: 'bold', mb: '10px' }}>
              Color:{' '}
              <Typography component="span">
                {data?.attributes?.color && data.attributes.color.color}
              </Typography>
            </Box>
            <SimilarProducts />
            <Box sx={{ fontSize: '15px', fontWeight: 'bold', mb: '10px', color: changeSizeColor }}>
              Choose size:
              <Box component="span" sx={{ pl: '3px', fontWeight: 'normal' }}>
                {' '}
                {size?.toUpperCase()}
              </Box>
              <Box component="span" sx={{ pl: '3px' }}>
                {}
                {productQnty > 0 && (
                  <>
                    <DoneIcon fontSize="small" sx={{ color: '#449d44', position: 'absolute' }} />
                    <Box
                      sx={{ fontWeight: 'normal', color: '#449d44', pl: '18px' }}
                      component="span">
                      {' '}
                      In stock!
                    </Box>
                  </>
                )}
                {productQnty === 0 && (
                  <Box sx={{ fontWeight: 'normal', color: 'red' }} component="span">
                    {' '}
                    Out of stock!
                  </Box>
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
                {data?.attributes?.size?.map((item, index) => {
                  return (
                    <ToggleButton
                      key={item.id}
                      onClick={() => setProductQnty(item.qnty ? item.qnty : 0)}
                      color={item.qnty === 0 ? 'error' : 'success'}
                      value={item.size}>
                      {item.size}
                    </ToggleButton>
                  );
                })}
              </ToggleButtonGroup>
            </Box>
          </Box>

          <Divider sx={{ mb: '10px' }} color="yellow" />
          <Box display="flex" alignItems="center" minHeight="50px">
            <Box
              display="flex"
              alignItems="center"
              border="1.5px solid black"
              borderRadius="3px"
              mr="20px"
              p="2px 5px">
              <IconButton disabled={count === 1} onClick={() => setCount(count - 1)}>
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ p: '0 5px' }}>{count}</Typography>
              <IconButton onClick={() => setCount(count + 1)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              onClick={addToBag}
              color="error"
              variant="outlined"
              sx={{
                minWidth: '150px',
                padding: '10px 40px',
                borderRadius: '3px',
              }}>
              ADD TO CART
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
