import { Box, Typography, IconButton, Divider, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { Fragment, memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { BasketItem } from '../../model/types/basket';

export interface BasketCartProps {
  data?: BasketItem[];
  mediumScreen?: boolean;
  totalPrice?: number;
  deleteProduct: (item: BasketItem) => void;
  increase: (item: BasketItem) => void;
  decrease: (item: BasketItem) => void;
  cleanBasket: () => void;
}

export const BasketCart = memo((props: BasketCartProps) => {
  const {
    data = [],
    mediumScreen = false,
    totalPrice = 0,
    deleteProduct,
    decrease,
    increase,
    cleanBasket,
  } = props;

  return (
    <Box
      sx={{
        width: mediumScreen ? '40%' : '60%',
        minWidth: '350px',
        minHeight: '200px',
        bgcolor: '#edf5fc',
        p: '10px 20px 30px 10px',
        mt: '10px',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        borderRadius: '5px',
      }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '16px', textAlign: 'center', pb: '10px' }}>
        YOUR CART:
      </Typography>
      <Box sx={{ flexGrow: '1', mb: '10px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            pb: '5px',
            borderBottom: '1px solid black',
          }}>
          <Box sx={{ width: mediumScreen ? '55%' : '80%', fontWeight: 'bold' }}>Product</Box>
          <Box
            sx={{
              pl: '3px',
              width: '15%',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: !mediumScreen ? '10px' : undefined,
            }}>
            Qnty:
          </Box>
          <Box
            sx={{
              pl: !mediumScreen ? '3px' : undefined,
              width: '15%',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: !mediumScreen ? '10px' : undefined,
            }}>
            Size:
          </Box>
          <Box
            sx={{
              pl: !mediumScreen ? '3px' : undefined,
              width: '15%',
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: !mediumScreen ? '10px' : undefined,
            }}>
            Subtotal:
          </Box>
        </Box>
        {data?.map((item, index) => (
          <Fragment key={index}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                p: '5px 5px 5px 0px',
                alignItems: 'center',
              }}>
              <IconButton sx={{ p: '0px 5px 0px 0px' }} onClick={() => deleteProduct(item)}>
                <CloseIcon />
              </IconButton>

              {mediumScreen ? null : (
                <AppLink
                  to={`/${item?.item?.pageCategory}/${item?.item?.category || item?.item?.equipmentCategory}/${
                    item?.item?.clothingCategory ||
                    item?.item?.footwearCategory ||
                    item?.item?.accessoriesCategory ||
                    item?.item?.activityCategory ||
                    item?.item?.toolsGearCategory ||
                    item?.item?.lampsLanternsCategory ||
                    item?.item?.campSleepCategory ||
                    item?.item?.otherCategory ||
                    item?.item?.accessoriesCategory
                  }/${item?.item?.slug}`}>
                  <img
                    src={`${__API__}${
                      typeof item?.item?.image !== 'string' &&
                      item?.item?.image?.data[0]?.attributes?.formats?.small?.url
                    }`}
                    alt="alt"
                    width="70px"
                    height="84px"
                  />
                </AppLink>
              )}
              <Box
                sx={{
                  width: '55%',
                  fontSize: '11px',
                  ml: mediumScreen ? '0px' : '10px',
                  '&:hover': { cursor: 'pointer', color: 'black' },
                  color: '#1976d2',
                }}>
                <AppLink
                  to={`/${item?.item?.pageCategory}/${item?.item?.category || item?.item?.equipmentCategory}/${
                    item?.item?.clothingCategory ||
                    item?.item?.footwearCategory ||
                    item?.item?.accessoriesCategory ||
                    item?.item?.activityCategory ||
                    item?.item?.toolsGearCategory ||
                    item?.item?.lampsLanternsCategory ||
                    item?.item?.campSleepCategory ||
                    item?.item?.otherCategory ||
                    item?.item?.accessoriesCategory
                  }/${item?.item?.slug}`}>
                  {item?.item?.title}
                </AppLink>
              </Box>
              <Box
                sx={{
                  pl: '3px',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  display: 'flex',
                  fontSize: !mediumScreen ? '14px' : '16px',
                }}>
                <IconButton sx={{ p: '0px 5px 0px 0px' }} onClick={() => decrease(item)}>
                  <RemoveIcon fontSize={mediumScreen ? 'small' : 'medium'} />
                </IconButton>
                {item.qnty}
                <IconButton sx={{ p: '0px 0px 0px 5px' }} onClick={() => increase(item)}>
                  <AddIcon fontSize={mediumScreen ? 'small' : 'medium'} />
                </IconButton>
              </Box>
              {mediumScreen ? (
                <>
                  <Box
                    sx={{
                      width: '15%',
                      textAlign: 'center',
                      height: '100%',
                      fontWeight: mediumScreen ? 'bold' : undefined,
                    }}>
                    {item?.productSize?.toUpperCase()}
                  </Box>
                  <Box sx={{ textAlign: 'center', width: '15%', fontWeight: 'bold' }}>
                    €{((item?.item?.price ?? 1) * (item?.qnty ?? 1))?.toFixed(2)}
                  </Box>
                </>
              ) : (
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      height: '100%',
                      fontWeight: mediumScreen ? 'bold' : undefined,
                    }}>
                    {item?.productSize?.toUpperCase()}
                  </Box>
                  <Box sx={{ textAlign: 'center', fontWeight: 'bold' }}>
                    €{((item?.item?.price ?? 1) * (item?.qnty ?? 1))?.toFixed(2)}
                  </Box>
                </Box>
              )}
            </Box>
            <Divider />
          </Fragment>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
        }}>
        <Typography sx={{ fontSize: '16px', fontWeight: 'bold' }}>
          Total: €{totalPrice?.toFixed(2)}
        </Typography>
        <Button
          onClick={cleanBasket}
          sx={{ width: mediumScreen ? '120px' : '105px' }}
          variant="outlined"
          color="error"
          size="large">
          Clear
        </Button>
        <Button sx={{ width: mediumScreen ? '120px' : '105px' }} variant="outlined" size="large">
          Continue
        </Button>
      </Box>
    </Box>
  );
});
