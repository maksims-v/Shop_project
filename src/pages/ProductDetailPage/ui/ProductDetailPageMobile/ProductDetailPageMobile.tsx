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
  CircularProgress,
} from '@mui/material';
import { Slider } from 'shared/ui/Slider/Slider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DoneIcon from '@mui/icons-material/Done';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';
import { useCallback, useEffect, useState } from 'react';
import { getRelatedProductsData } from 'entities/RelatedProductsSlider';
import { useSelector } from 'react-redux';
import { getProductDetailData } from 'entities/Product/model/selectors/getProductDetailData';
import { basketSliceActions } from 'entities/Basket';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { SimilarProducts } from 'features/SimilarProducts';
import { ProductsImageGallery } from 'entities/ProductDetail';
import { SizeSelector } from 'features/SizeSelector';
import { getProductsListIsLoading } from 'entities/Product';

export interface ProductDetailPageMobileProps {}

export const ProductDetailPageMobile = ({}: ProductDetailPageMobileProps) => {
  const [qnty, setQnty] = useState(1);
  const [productQnty, setProductQnty] = useState<number | null>(null);
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setError] = useState(false);
  const [size, setSize] = useState(null);
  const [changeSizeColor, setChangeSizeColor] = useState('black');

  const dispatch = useAppDispatch();
  const data = useSelector(getProductDetailData);
  const relatedProductsData = useSelector(getRelatedProductsData);
  const isLoading = useSelector(getProductsListIsLoading);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [data]);

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
      {!data ? (
        <CircularProgress size="3rem" sx={{ textAlign: 'center' }} />
      ) : (
        <>
          <Box>
            <ProductsImageGallery data={data} />

            <Box flex="1 1 45%" mb="40px">
              <Box m="20px 0 25px 0">
                <Typography sx={{ fontSize: '16px', fontWeight: 'bold', mb: '10px' }} variant="h2">
                  Brand: <Typography component="span">{data?.attributes?.brand}</Typography>
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
                  Color: <Typography component="span">{data?.attributes?.color?.color}</Typography>
                </Box>
                <Box sx={{ display: 'flex', mb: '10px' }}>
                  <SimilarProducts />
                </Box>
                <SizeSelector
                  data={data?.attributes?.size}
                  sizeHandleChange={sizeHandleChange}
                  changeSizeColor={changeSizeColor}
                  setProductQnty={setProductQnty}
                  productQnty={productQnty}
                  size={size}
                />

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
              </Box>
            </Box>
          </Box>

          <Box sx={{ pl: '10px' }}>
            <Typography sx={{ fontWeight: 'bold' }}>Description</Typography> <br />
            <ReactMarkdown>{data?.attributes?.description}</ReactMarkdown> <br />
          </Box>
          {data?.attributes?.techDescription && (
            <Box display="flex" flexWrap="wrap" gap="15px" mb="50px">
              <Typography sx={{ fontWeight: 'bold' }}>Properties</Typography> <br />
              <ReactMarkdown>{data?.attributes?.techDescription}</ReactMarkdown>
            </Box>
          )}
          <Slider data={relatedProductsData} section={'relatedProducts'} />
        </>
      )}

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
