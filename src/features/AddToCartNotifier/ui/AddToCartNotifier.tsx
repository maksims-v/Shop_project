import { Stack, Snackbar, Alert } from '@mui/material';
import React from 'react';

type AddToCartNotifierProps = {
  handleAlertClose: () => void;
  handleSnackbarClose: (event: React.SyntheticEvent, reason?: string) => void;
  openSuccess?: boolean;
  openError?: boolean;
};

export const AddToCartNotifier = (props: AddToCartNotifierProps) => {
  const { handleAlertClose, openSuccess, handleSnackbarClose, openError } = props;

  return (
    <>
      <Stack>
        <Snackbar open={openSuccess} autoHideDuration={2000} onClose={handleSnackbarClose}>
          <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
            The product has been placed in the cart
          </Alert>
        </Snackbar>
      </Stack>
      <Stack>
        <Snackbar open={openError} autoHideDuration={2000} onClose={handleSnackbarClose}>
          <Alert onClose={handleAlertClose} severity="error" sx={{ width: '100%' }}>
            Please choose the size.
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};
