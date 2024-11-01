import { Box, Typography, Button, Skeleton, useMediaQuery } from '@mui/material';
import React, { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { BannerAttributes } from '../model/types/banner';

type BannerProps = {
  isLoading?: boolean;
  data?: BannerAttributes;
};

export const Banner = memo((props: BannerProps) => {
  const { data, isLoading } = props;

  const mobileScreen = useMediaQuery('(max-width:570px)');

  if (isLoading) return <Skeleton width={'100%'} height={'500px'} />;

  if (!data) return null;

  return (
    <Box sx={{ mb: mobileScreen ? '0px' : '50px', width: '100%', position: 'relative' }}>
      <AppLink to={`/${data?.pageCategory}/${data?.category}/${data?.subcategory}`}>
        <Typography
          variant="h2"
          sx={{
            color: 'white',
            position: 'absolute',
            left: '50%',
            top: mobileScreen ? '30%' : '40%',
            width: '90%',
            m: '0 auto',
            textAlign: 'center',
            transform: 'translate(-50%, -50%)',
            fontWeight: 'bold',
          }}>
          {data?.title}
        </Typography>

        <Button
          size="large"
          variant="contained"
          sx={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            color: 'black',
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'white',
              borderColor: '#0062cc',
              boxShadow: 'none',
            },
          }}>
          SHOP HERE
        </Button>
        <img
          alt="banner"
          style={{
            width: '100%',
            objectFit: 'cover',
            height: mobileScreen ? '300px' : 'auto',
          }}
          src={`${data?.image?.data?.attributes?.url}`}
        />
      </AppLink>
    </Box>
  );
});
