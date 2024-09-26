import React from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { userActions } from 'entities/User';
import { fetchNavbarData, Navbar } from 'widgets/Navbar';
import { fetchProductsData } from 'pages/ProductsPage/model/services/fetchProductsData/fetchProductsData';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
    dispatch(fetchNavbarData());
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <div className="content-page">
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
