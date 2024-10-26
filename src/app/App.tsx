import React from 'react';
import './styles/index.scss';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { getUserInited, userActions } from 'entities/User';
import { fetchNavbarData, Navbar } from 'widgets/Navbar';
import { fetchBannerData } from 'entities/Banner';
import { fetchSliderData } from 'entities/NewArrivalsSlider';
import { useSelector } from 'react-redux';
import { fetchBrandSectionData } from 'entities/BrandSection';
import { fetchPopularSectionData } from 'entities/PopularSection';
import { fetchSecondBannerData } from 'entities/SecondBanner';
import { fetchClearanceSliderData } from 'entities/ClearanceSlider';
import { basketSliceActions } from 'entities/Basket';
import { postProducts } from 'entities/Product/model/services/postProducts';

const App = () => {
  const dispatch = useAppDispatch();

  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(basketSliceActions.getBasketFromLocalStorage());
    dispatch(userActions.initAuthData());
    dispatch(fetchNavbarData());
    dispatch(fetchSliderData());
    dispatch(fetchBannerData());
    dispatch(fetchBrandSectionData());
    dispatch(fetchPopularSectionData());
    dispatch(fetchSecondBannerData());
    dispatch(fetchClearanceSliderData());
    // dispatch(postProducts());
  }, [dispatch]);

  useEffect(() => {}, []);

  return (
    <div className="app">
      <Navbar />
      <Container maxWidth="lg">
        <div className="content-page">{inited && <AppRouter />}</div>
      </Container>
    </div>
  );
};

export default App;
