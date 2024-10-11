import React, { FC, useCallback, useEffect } from 'react';

import {
  Box,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { loginActions, loginReducer } from 'features/AuthByUserName/model/slice/loginSlice';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './LoginForm.module.scss';
import { ReduxStoreWithManager } from 'app/providers/StoreProvider/config/stateSchema';
import { getLoginError } from 'features/AuthByUserName/model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from 'features/AuthByUserName/model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginPassword } from 'features/AuthByUserName/model/selectors/getLoginPassword/getLoginPassword';
import { getLoginUsername } from 'features/AuthByUserName/model/selectors/getLoginUserName/getLoginUserName';
import { useSelector, useStore } from 'react-redux';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { onSuccess, className } = props;

  const dispatch = useAppDispatch();
  const identifier = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);

  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    store.reducerManager.add('loginForm', loginReducer);
    dispatch({ type: '@init' });
    return () => {
      store.reducerManager.remove('loginForm');
      dispatch({ type: '@destroy' });
    };
  }, []);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ identifier, password }));

    if (result?.meta?.requestStatus === 'fulfilled') {
      onSuccess();
    }
  }, [dispatch, identifier, password]);

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <DialogTitle id="responsive-dialog-title">{'Adventure Rewards Members'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          If you have an online or in-store account with us, please log in below. If you've joined
          our adventure rewards membership in-store and not logged in online before, please use the
          forget password link to set a password.
        </DialogContentText>
      </DialogContent>
      {error && (
        <Box sx={{ margin: '0 auto', color: 'red', pt: '-5px', pb: '5px' }}>
          Вы ввели неверный логин или пароль
        </Box>
      )}

      <Box sx={{ margin: '0 auto', gap: '15px', display: 'flex', p: '0px 5px' }}>
        <TextField
          value={identifier}
          onChange={(e) => onChangeUsername(e.target.value)}
          id="outlined-basic"
          label="Email"
          name="identifier"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <TextField
          value={password}
          onChange={(e) => onChangePassword(e.target.value)}
          id="outlined-basic"
          name="password"
          label="Password"
          variant="outlined"
          type="text"
          sx={{ width: '100%' }}
        />
      </Box>

      <DialogActions>
        <AppLink to="/register">
          <Button autoFocus>Create an account</Button>
        </AppLink>
        <Button autoFocus onClick={onLoginClick} disabled={isLoading}>
          Login
        </Button>
      </DialogActions>
    </div>
  );
};

export default LoginForm;
