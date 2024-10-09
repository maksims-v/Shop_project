import { useMediaQuery, Box, Typography, IconButton, Divider, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import React, { Fragment, useEffect, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { basketSliceActions } from '../../model/slice/basketSlice';
import { useSelector } from 'react-redux';
import { getBasketProducts } from '../../model/selectors/getbasketProducts';
import { BasketItem as IBasketItem } from '../../model/types/basket';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { BasketItem } from '../BasketItem/BasketItem';

type BasketProps = {};

const Basket = (props: BasketProps) => {
  const {} = props;
  const [totalPrice, setTotalPrice] = useState<number>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const basket = localStorage.getItem('cart');
    if (basket) dispatch(basketSliceActions.addToBasket(JSON.parse(basket)));
  }, []);

  const basket = useSelector(getBasketProducts);

  const largeScreen = useMediaQuery('(min-width:1200px)');
  const mediumScreen = useMediaQuery('(min-width:900px)');

  useEffect(() => {
    setTotalPrice(
      basket.reduce(function (summ, item) {
        const summItem = item.qnty * item.item.price;
        return summ + summItem;
      }, 0),
    );
  }, [basket]);

  const increase = (item: IBasketItem) => {
    dispatch(
      basketSliceActions.addToBasket(
        basket.map((product) => {
          if (product.id === item.id && product.productSize === item.productSize) {
            return {
              ...product,
              qnty: product.qnty + 1,
            };
          }
          return product;
        }),
      ),
    );
  };

  const decrease = (item: IBasketItem) => {
    dispatch(
      basketSliceActions.addToBasket(
        basket.map((product) => {
          if (product.id === item.id && product.productSize === item.productSize) {
            const newCount = product.qnty - 1 > 1 ? product.qnty - 1 : 1;

            return {
              ...product,
              qnty: newCount,
            };
          }
          return product;
        }),
      ),
    );
  };

  const deleteProduct = (item: IBasketItem) => {
    dispatch(basketSliceActions.addToBasket(basket.filter((product) => product !== item)));
  };

  const cleanBasket = () => {
    dispatch(basketSliceActions.basketReset());
  };

  return (
    <Box
      display="flex"
      justifyContent={largeScreen ? 'space-around' : mediumScreen ? 'space-between' : 'center'}
      p={largeScreen ? '20px 0px' : '10px 20px'}
      width="100%">
      <Box width="50%" minWidth="415px" display={mediumScreen ? 'block' : 'none'}>
        {basket.map((item, index) => (
          <BasketItem
            item={item}
            key={index}
            deleteProduct={deleteProduct}
            increase={increase}
            decrease={decrease}
          />
        ))}
      </Box>
      <Box
        width={mediumScreen ? '40%' : '60%'}
        minWidth="350px"
        minHeight="200px"
        bgcolor="#edf5fc"
        p="10px 20px 30px 10px"
        mt="10px"
        display="flex"
        flexDirection="column"
        textAlign="left"
        borderRadius="5px">
        <Typography fontWeight="bold" fontSize="16px" textAlign="center" pb="10px">
          YOUR CART:
        </Typography>
        <Box flexGrow="1" mb="10px">
          <Box
            display="flex"
            justifyContent="space-between"
            pb="5px"
            borderBottom="1px solid black">
            <Box width={mediumScreen ? '55%' : '80%'} fontWeight="bold">
              Product
            </Box>
            <Box
              pl="3px"
              width="15%"
              textAlign="center"
              fontWeight="bold"
              fontSize={!mediumScreen && '10px'}>
              Qnty:
            </Box>
            <Box
              pl={!mediumScreen && '3px'}
              width="15%"
              textAlign="center"
              fontWeight="bold"
              fontSize={!mediumScreen && '10px'}>
              Size:
            </Box>
            <Box
              pl={!mediumScreen && '3px'}
              width="15%"
              textAlign="center"
              fontWeight="bold"
              fontSize={!mediumScreen && '10px'}>
              Subtotal:
            </Box>
          </Box>
          {basket.map((item, index) => (
            <Fragment key={index}>
              <Box
                display="flex"
                justifyContent="space-between"
                p="5px 5px 5px 0px"
                alignItems="center">
                <IconButton sx={{ p: '0px 5px 0px 0px' }} onClick={() => deleteProduct(item)}>
                  <CloseIcon />
                </IconButton>

                {mediumScreen ? null : (
                  <AppLink
                    to={`/shop/${item?.item?.pageCategory}/${
                      (item?.item?.category !== 'null' && item?.item?.category) ||
                      (item?.item?.equipmentCategory !== 'null' && item?.item?.equipmentCategory)
                    }/${
                      (item?.item?.campSleepCategory !== 'null' && item?.item?.campSleepCategory) ||
                      (item?.item?.lampsLanternsCategory !== 'null' &&
                        item?.item?.lampsLanternsCategory) ||
                      (item?.item?.toolsGearCategory !== 'null' && item?.item?.toolsGearCategory) ||
                      (item?.item?.footwearCategory !== 'null' && item?.item?.footwearCategory) ||
                      (item?.item?.clothingCategory !== 'null' && item?.item?.clothingCategory) ||
                      (item?.item?.otherCategory !== 'null' && item?.item?.otherCategory) ||
                      (item?.item?.activityCategory !== 'null' && item?.item?.activityCategory) ||
                      (item?.item?.accessoriesCategory !== 'null' &&
                        item?.item?.accessoriesCategory)
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
                  width="55%"
                  fontSize="11px"
                  ml={mediumScreen ? '0px' : '10px'}
                  sx={{ '&:hover': { cursor: 'pointer', color: 'black' }, color: '#1976d2' }}>
                  <AppLink
                    to={`/${item?.item?.pageCategory}/${
                      (item?.item?.category !== 'null' && item?.item?.category) ||
                      (item?.item?.equipmentCategory !== 'null' && item?.item?.equipmentCategory)
                    }/${
                      (item?.item?.campSleepCategory !== 'null' && item?.item?.campSleepCategory) ||
                      (item?.item?.lampsLanternsCategory !== 'null' &&
                        item?.item?.lampsLanternsCategory) ||
                      (item?.item?.toolsGearCategory !== 'null' && item?.item?.toolsGearCategory) ||
                      (item?.item?.footwearCategory !== 'null' && item?.item?.footwearCategory) ||
                      (item?.item?.clothingCategory !== 'null' && item?.item?.clothingCategory) ||
                      (item?.item?.otherCategory !== 'null' && item?.item?.otherCategory) ||
                      (item?.item?.activityCategory !== 'null' && item?.item?.activityCategory) ||
                      (item?.item?.accessoriesCategory !== 'null' &&
                        item?.item?.accessoriesCategory)
                    }/${item?.item?.slug}`}>
                    {item?.item?.title}
                  </AppLink>
                </Box>
                <Box
                  pl="3px"
                  textAlign="center"
                  fontWeight="bold"
                  display="flex"
                  fontSize={!mediumScreen && '14px'}>
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
                      width="15%"
                      textAlign="center"
                      height="100%"
                      fontWeight={mediumScreen && 'bold'}>
                      {item?.productSize?.toUpperCase()}
                    </Box>
                    <Box textAlign="center" width="15%" fontWeight="bold">
                      €{(item?.item?.price * item?.qnty)?.toFixed(2)}
                    </Box>
                  </>
                ) : (
                  <Box display="flex" flexDirection="column" width="30%">
                    <Box textAlign="center" height="100%" fontWeight={mediumScreen && 'bold'}>
                      {item?.productSize?.toUpperCase()}
                    </Box>
                    <Box textAlign="center" fontWeight="bold">
                      €{(item?.item?.price * item?.qnty)?.toFixed(2)}
                    </Box>
                  </Box>
                )}
              </Box>
              <Divider />
            </Fragment>
          ))}
        </Box>
        <Box display="flex" justifyContent="space-between" width="100%" alignItems="center">
          <Typography fontSize="16px" fontWeight="bold">
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
    </Box>
  );
};

export default Basket;
