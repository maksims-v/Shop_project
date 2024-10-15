import React, { useCallback } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { BasketCart } from '../BasketCart/BasketCart';
import { BasketItem } from '../BasketItem/BasketItem';
import { getBasketTotalPrice } from '../../model/selectors/getBasketTotalPrice';
import { BasketItem as IBasketItem } from '../../model/types/basket';
import { getBasketProducts } from '../../model/selectors/getBasketProducts';
import { basketSliceActions } from '../../model/slice/basketSlice';

export const Basket = () => {
  const mediumScreen = useMediaQuery('(min-width:900px)');
  const largeScreen = useMediaQuery('(min-width:1200px)');

  const basket = useSelector(getBasketProducts);
  const totalPrice = useSelector(getBasketTotalPrice);

  const dispatch = useAppDispatch();

  const increase = useCallback(
    (item: IBasketItem) => {
      dispatch(basketSliceActions.increaseProduct(item));
    },
    [dispatch],
  );

  const decrease = useCallback(
    (item: IBasketItem) => {
      dispatch(basketSliceActions.decreaseProduct(item));
    },
    [dispatch],
  );

  const deleteProduct = useCallback(
    (item: IBasketItem) => {
      dispatch(basketSliceActions.deleteProduct(item));
    },
    [dispatch],
  );

  const cleanBasket = useCallback(() => {
    dispatch(basketSliceActions.basketReset());
  }, [dispatch]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: largeScreen ? 'space-around' : mediumScreen ? 'space-between' : 'center',
        p: largeScreen ? '20px 0px' : '10px 20px',
        width: '100%',
      }}>
      <Box sx={{ width: '50%', minWidth: '415px', display: mediumScreen ? 'block' : 'none' }}>
        {basket?.map((item) => (
          <BasketItem
            item={item}
            key={item.id}
            deleteProduct={deleteProduct}
            increase={increase}
            decrease={decrease}
          />
        ))}
      </Box>
      <BasketCart
        data={basket}
        mediumScreen={mediumScreen}
        totalPrice={totalPrice}
        deleteProduct={deleteProduct}
        increase={increase}
        decrease={decrease}
        cleanBasket={cleanBasket}
      />
    </Box>
  );
};
