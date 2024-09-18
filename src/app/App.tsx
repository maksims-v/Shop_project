import React from 'react';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
// import { authUserCookies } from 'features/AuthByUserName/model/services/loginByUsername';

import Cookies from 'js-cookie';
import { userActions } from 'entities/User';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userActions.initAuthData());
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
