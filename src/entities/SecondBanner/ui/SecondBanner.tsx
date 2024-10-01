import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import React, { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { SecondBannerDataAttributes } from '../model/types/secondBanner';

type SecondBannerProps = {
  data?: SecondBannerDataAttributes;
};

export const SecondBanner = memo((props: SecondBannerProps) => {
  const { data } = props;

  const largeScreen = useMediaQuery('(min-width:1200px)');
  if (!data) return null;

  return (
    data?.isShow && (
      <Box
        sx={{
          mb: '60px',
          maxHeight: '450px',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
          p: '0px 5px',
        }}>
        <AppLink to={`/${data?.pageCategory}/${data?.category}/${data?.subcategory}`}>
          <Box
            sx={{
              width: 'auto',
              position: 'absolute',
              left: `${data.textPositionLeft}%`,
              top: `${data?.textTopPosition}%`,
              color: data?.textColor,
              display: 'flex',
              flexDirection: 'column',
              flexWrap: 'wrap',
            }}>
            <Typography variant="h2" sx={{ fontSize: largeScreen ? '36px' : '6vw' }}>
              {data?.title}
            </Typography>
            <Typography variant="h3" sx={{ fontSize: largeScreen ? '26px' : '4vw' }}>
              {data?.subtitle}
            </Typography>
          </Box>
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
            style={{ height: '450px', objectFit: 'cover', width: '100%' }}
            src={`${__API__}${data?.image?.data?.attributes?.url}`}
          />
        </AppLink>
      </Box>
    )
  );
});
