import React from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { userActions } from 'entities/User';
import { fetchNavbarData } from 'widgets/Navbar';

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
