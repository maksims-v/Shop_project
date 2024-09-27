import React from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { userActions } from 'entities/User';
import { fetchNavbarData, Navbar } from 'widgets/Navbar';
import { Container } from '@mui/material';
import { fetchBannerData } from 'entities/Banner';
import { fetchSliderData } from 'entities/Slider';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
    dispatch(fetchNavbarData());
    dispatch(fetchSliderData());
    dispatch(fetchBannerData());
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <Container maxWidth="lg">
        <div className="content-page">
          <AppRouter />
        </div>
      </Container>
    </div>
  );
};

export default App;
