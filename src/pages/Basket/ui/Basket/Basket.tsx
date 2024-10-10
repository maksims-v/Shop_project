import React, { useEffect } from 'react';
import { useMediaQuery, Box } from '@mui/material';

import { useAppDispatch } from 'shared/lib/hooks/hook';
import { basketSliceActions } from '../../model/slice/basketSlice';
import { useSelector } from 'react-redux';
import { getBasketProducts } from '../../model/selectors/getbasketProducts';
import { BasketItem as IBasketItem } from '../../model/types/basket';
import { BasketItem } from '../BasketItem/BasketItem';
import { getBasketTotalPrice } from 'pages/Basket/model/selectors/getBasketTotalPrice';
import { BasketCart } from '../BasketCart/BasketCart';

type BasketProps = {};

const Basket = (props: BasketProps) => {
  const {} = props;
  const mediumScreen = useMediaQuery('(min-width:900px)');
  const largeScreen = useMediaQuery('(min-width:1200px)');

  const basket = useSelector(getBasketProducts);
  const totalPrice = useSelector(getBasketTotalPrice);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(basketSliceActions.getBasketFromLocalStorage());
  }, []);

  const increase = (item: IBasketItem) => {
    dispatch(basketSliceActions.increaseProduct(item));
  };

  const decrease = (item: IBasketItem) => {
    dispatch(basketSliceActions.decreaseProduct(item));
  };

  const deleteProduct = (item: IBasketItem) => {
    dispatch(basketSliceActions.deleteProduct(item));
  };

  const cleanBasket = () => {
    dispatch(basketSliceActions.basketReset());
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: largeScreen ? 'space-around' : mediumScreen ? 'space-between' : 'center',
        p: largeScreen ? '20px 0px' : '10px 20px',
        width: '100%',
      }}>
      <Box sx={{ width: '50%', minWidth: '415px', display: mediumScreen ? 'block' : 'none' }}>
        {basket.map((item) => (
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

export default Basket;
