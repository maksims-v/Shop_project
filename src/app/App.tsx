import React from 'react';
import './styles/index.scss';
import { Container, ThemeProvider } from '@mui/material';
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
import { fetchFooterData, Footer } from 'entities/Footer';
import { theme } from './styles/theme';

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
    dispatch(fetchFooterData());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth="lg">
        <div className="content-page">{inited && <AppRouter />}</div>
      </Container>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
