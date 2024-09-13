import React, { FC, useCallback } from 'react';

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
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/hook';
import { getLoginState } from 'features/AuthByUserName/model/selectors/getLoginState/getLoginState';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './LoginForm.module.scss';
import { getUserAuthData } from 'entities/User';

export interface LoginFormProps {
  className?: string;
}

export const LoginForm: FC<LoginFormProps> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { identifier, isLoading, password, error } = useAppSelector(getLoginState);
  const authData = useAppSelector(getUserAuthData);

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

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ identifier, password }));
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
