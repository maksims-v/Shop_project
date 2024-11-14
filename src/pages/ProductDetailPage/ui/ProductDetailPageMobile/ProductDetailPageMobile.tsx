import {
  Box,
  Typography,
  CardActionArea,
  CardMedia,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Button,
  Stack,
  Snackbar,
  Alert,
} from '@mui/material';
import { Slider } from 'shared/ui/Slider/Slider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DoneIcon from '@mui/icons-material/Done';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';
import { useCallback, useState } from 'react';
import { getRelatedProductsData } from 'entities/RelatedProductsSlider';
import { useSelector } from 'react-redux';
import { getProductDetailData } from 'entities/Product/model/selectors/getProductDetailData';
import { basketSliceActions } from 'entities/Basket';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { SimilarProducts } from 'features/SimilarProducts';
import { ProductsImageGallery } from 'entities/ProductDetail';

export interface ProductDetailPageMobileProps {}

export const ProductDetailPageMobile = ({}: ProductDetailPageMobileProps) => {
  const [qnty, setQnty] = useState(1);
  const [productQnty, setProductQnty] = useState(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setError] = useState(false);
  const [size, setSize] = useState(null);
  const [changeSizeColor, setChangeSizeColor] = useState('black');

  const dispatch = useAppDispatch();
  const data = useSelector(getProductDetailData);
  const relatedProductsData = useSelector(getRelatedProductsData);

  const handleAlertClose = useCallback(() => {
    setOpenSuccess(false);
    setError(false);
  }, [setOpenSuccess, setError]);

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
    <Box width="100%" m="0px auto" p="0px 7px">
      <PageBreadcrumbs />
      <Box>
        <ProductsImageGallery data={data} />

        <Box flex="1 1 45%" mb="40px">
          <Box m="20px 0 25px 0">
            <Typography sx={{ fontSize: '16px' }} variant="h2">
              {data?.attributes?.brand}
            </Typography>
            <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }} variant="h3">
              {data?.attributes?.title}
            </Typography>
            <Typography sx={{ fontSize: '28px', fontWeight: 'bold' }}>
              {data?.attributes?.price} $
            </Typography>
            <Typography
              sx={{ fontSize: '12px', pl: '5px', color: data?.attributes?.oldPrice && 'red' }}>
              {data?.attributes?.sale &&
                `Save:${
                  data?.attributes?.sale &&
                  (data?.attributes?.price - data?.attributes?.oldPrice).toFixed(2)
                }$`}
            </Typography>
            <Box sx={{ fontSize: '15px', fontWeight: 'bold', mb: '10px' }}>
              Choose color:{' '}
              <Typography component="span">{data?.attributes?.color?.color}</Typography>
            </Box>
            <Box sx={{ display: 'flex', mb: '10px' }}>
              <SimilarProducts />
            </Box>
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

            <Box maxWidth="300px">
              <ToggleButtonGroup
                sx={{
                  '& .MuiToggleButtonGroup-lastButton, & .MuiToggleButtonGroup-middleButton': {
                    borderLeft: '1px solid rgba(0, 0, 0, 0.12)', // Убираем левую границу
                    borderRadius: '4px',
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
                {data?.attributes?.size?.map((item, index) => {
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
            <Box display="flex" alignItems="center" mt="10px" minHeight="50px">
              <Box
                display="flex"
                alignItems="center"
                border="1.5px solid black"
                borderRadius="3px"
                mr="20px"
                p="2px 5px">
                <IconButton disabled={qnty === 1} onClick={() => setQnty(qnty - 1)}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx={{ p: '0 5px' }}>{qnty}</Typography>
                <IconButton onClick={() => setQnty(qnty + 1)}>
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
            <Box sx={{ pl: '10px' }}>
              {' '}
              <ReactMarkdown>{data?.attributes?.description}</ReactMarkdown>{' '}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flexWrap="wrap" gap="15px" mb="50px">
        <ReactMarkdown>{data?.attributes?.techDescription}</ReactMarkdown>
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
