import React from 'react';
import './styles/index.scss';
import { Container } from '@mui/material';
import { useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { getUserInited, userActions } from 'entities/User';
import { fetchNavbarData, Navbar } from 'widgets/Navbar';
import { fetchBannerData } from 'entities/Banner';
import { fetchSliderData } from 'entities/Slider';
import { useSelector } from 'react-redux';
import { fetchBrandSectionData } from 'entities/BrandSection';

const App = () => {
  const dispatch = useAppDispatch();

  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
    dispatch(fetchNavbarData());
    dispatch(fetchSliderData());
    dispatch(fetchBannerData());
    dispatch(fetchBrandSectionData());
  }, [dispatch]);

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
