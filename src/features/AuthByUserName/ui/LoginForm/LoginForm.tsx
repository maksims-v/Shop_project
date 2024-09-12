import React, { FC } from 'react';

import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from '@mui/material';
import { AppLink } from 'shared/ui/AppLink/AppLink';

export interface LoginFormProps {
  isOpen: boolean;
}

export const LoginForm: FC<LoginFormProps> = ({ isOpen }) => {
  return (
    <Box>
      <div aria-labelledby="responsive-dialog-title">
        <DialogTitle id="responsive-dialog-title">{'Adventure Rewards Members'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            If you have an online or in-store account with us, please log in below. If you've joined
            our adventure rewards membership in-store and not logged in online before, please use
            the forget password link to set a password.
          </DialogContentText>
        </DialogContent>
        <Box sx={{ margin: '0 auto', gap: '15px', display: 'flex' }}>
          <TextField
            id="outlined-basic"
            label="Email"
            name="identifier"
            variant="outlined"
            sx={{ width: '100%' }}
          />
          <TextField
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
          <Button autoFocus>Login</Button>
        </DialogActions>
      </div>
    </Box>
  );
};
