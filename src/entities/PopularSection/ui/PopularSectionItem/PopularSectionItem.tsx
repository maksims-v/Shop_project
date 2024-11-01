import { Box, Typography, useMediaQuery } from '@mui/material';
import React, { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { PopularSectionItem as PopularItem } from '../../model/types/popularSection';

type PopularSectionItemProps = {
  itemData?: PopularItem;
};

export const PopularSectionItem = memo((props: PopularSectionItemProps) => {
  const mobileScreen = useMediaQuery('(max-width:570px)');

  const { itemData } = props;
  return (
    <Box
      sx={{
        height: '300px',
        width: mobileScreen ? '49.5%' : '270px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: mobileScreen ? 'space-around' : 'center',
        flexDirection: 'column',
        position: 'relative',
        borderRadius: '3px',
        overflow: 'hidden',
      }}>
      <AppLink to={`/${itemData?.pageCategory}/${itemData?.category}`}>
        <Box sx={{ '&:hover': { scale: '1.1', transition: '0.9s' } }}>
          <Box sx={{ '&:hover': { scale: '1.1', transition: '0.9s' } }}>
            <img
              src={`${itemData?.image?.data?.attributes?.url}`}
              alt={itemData?.title}
              style={{ objectFit: 'cover' }}
              loading="lazy"
            />
          </Box>
        </Box>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 'bold',
            fontSize: '24px',
            mb: '30px',
            color: 'white',
            position: 'absolute',
            bottom: '0px',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          {itemData?.title}
        </Typography>
      </AppLink>
    </Box>
  );
});
