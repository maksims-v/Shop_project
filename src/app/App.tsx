import React from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { authUserCookies } from 'features/AuthByUserName/model/services/loginByUsername';
import Cookies from 'js-cookie';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const jwt = Cookies.get('jwt');

    if (jwt) {
      dispatch(authUserCookies(jwt));
    }
  }, [dispatch]);

  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
