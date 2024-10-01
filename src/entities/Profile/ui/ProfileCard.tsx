import React from 'react';
import { Profile } from '../model/types/profile';
import { Box, TextField } from '@mui/material';

export interface ProfileCardProps {
  data?: Profile;
  error?: string;
  isLoading?: boolean;
  readonly?: boolean;
  changeEmail?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeUsername?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeFullName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeLastName?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeCity?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeAdress?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changePostCode?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changePhone?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  changeCountry?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
  const {
    data,
    error,
    isLoading,
    readonly,
    changeUsername,
    changeAdress,
    changeCity,
    changeCountry,
    changeEmail,
    changeFullName,
    changeLastName,
    changePhone,
    changePostCode,
  } = props;

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        pt: '20px',
        maxWidth: '250px',
        m: '0 auto',
      }}>
      <Box
        sx={{
          display: ' flex',
          flexDirection: 'column',
          maxWidth: '250px',
          gap: '8px',
        }}>
        <TextField
          onChange={changeUsername}
          id="standard-basic"
          name="username"
          value={data?.username || ''}
          variant="outlined"
        />
        <TextField
          onChange={changeEmail}
          id="standard-basic"
          name="email"
          value={data?.email || ''}
          label={data?.email ? '' : 'Email'}
          variant="outlined"
        />
        <TextField
          onChange={changeFullName}
          value={data?.fullName || ''}
          name="fullName"
          id="standard-basic"
          label={data?.fullName ? '' : 'First Name'}
          variant="outlined"
        />
        <TextField
          onChange={changeLastName}
          id="standard-basic"
          name="lastName"
          value={data?.lastName || ''}
          label={data?.lastName ? '' : 'Last Name'}
          variant="outlined"
        />
        <TextField
          onChange={changeCountry}
          id="standard-basic"
          name="country"
          value={data?.country || ''}
          label={data?.country ? '' : 'Country'}
          variant="outlined"
        />
        <TextField
          onChange={changeCity}
          id="standard-basic"
          name="city"
          value={data?.city || ''}
          label={data?.city ? '' : 'City'}
          variant="outlined"
        />
        <TextField
          onChange={changeAdress}
          id="standard-basic"
          name="adress"
          value={data?.adress || ''}
          label={data?.adress ? '' : 'Adress'}
          variant="outlined"
        />
        <TextField
          onChange={changePostCode}
          id="standard-basic"
          name="postCode"
          value={data?.postCode || ''}
          label={data?.postCode ? '' : 'Post Code'}
          variant="outlined"
        />
        <TextField
          onChange={changePhone}
          id="standard-basic"
          name="phone"
          value={`+${data?.phone || ''}`}
          label={data?.phone ? `+${data?.phone}` : ''}
          variant="outlined"
        />
      </Box>
    </Box>
  );
};
