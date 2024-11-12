import React from 'react';
import './styles/index.scss';
import { Box, Container, ThemeProvider, useMediaQuery } from '@mui/material';
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
import { fetchSectionCategoryData } from 'entities/SectionCategory';

const App = () => {
  const dispatch = useAppDispatch();
  const mobileScreen = useMediaQuery('(max-width:570px)');

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
    dispatch(fetchSectionCategoryData());
    dispatch(fetchFooterData());
  }, [dispatch]);

  useEffect(() => {}, []);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
        <Navbar />
        <Container
          sx={{ padding: mobileScreen ? '0px 5px' : '0px 16px', mb: '20px' }}
          maxWidth="lg">
          <Box sx={{ pt: mobileScreen ? '40px' : '80px' }}>{inited && <AppRouter />}</Box>
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
