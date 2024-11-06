import React from 'react';
import { Box, Container, Typography, List, ListItem, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';
import { getFooterData } from '../model/selectors/getFooterData';
import { MobileFooter } from './MobileFooter/MobileFooter';
import { getFooterIsLoading } from '../model/selectors/getFooterIsLoading';

export const Footer = () => {
  const data = useSelector(getFooterData);
  const isLoading = useSelector(getFooterIsLoading);

  const mobileScreen = useMediaQuery('(max-width:570px)');

  return mobileScreen ? (
    <MobileFooter data={data} isLoading={isLoading} />
  ) : (
    <Box
      sx={{
        minHeight: '300px',
        backgroundColor: '#262624',
        pt: '40px',
        mt: '50px',
      }}>
      <Container maxWidth="md" sx={{ height: '100%' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '100%',
            color: 'white',
          }}>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }} variant="h3">
              {data && data?.supportLinks[0]?.label}
            </Typography>
            <List>
              {data?.supportLinks[0]?.link?.map((item, index) => (
                <ListItem key={index} sx={{ p: '2px 0px' }}>
                  <Box sx={{ cursor: 'pointer' }}>{item.label}</Box>
                </ListItem>
              ))}{' '}
            </List>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }} variant="h3">
              {data && data?.aboutLinks[0]?.label}
            </Typography>
            <List>
              {data?.aboutLinks[0]?.link?.map((item, index) => (
                <ListItem key={index} sx={{ p: '2px 0px' }}>
                  <Box sx={{ cursor: 'pointer' }}>{item.label}</Box>
                </ListItem>
              ))}{' '}
            </List>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }} variant="h3">
              {data && data?.allProductsLinks[0]?.label}
            </Typography>
            <List>
              {data?.allProductsLinks[0]?.link?.map((item, index) => (
                <ListItem key={index} sx={{ p: '2px 0px' }}>
                  <Box sx={{ cursor: 'pointer' }}>{item.label}</Box>
                </ListItem>
              ))}{' '}
            </List>
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }} variant="h3">
              {data && data?.socialLinks[0]?.label}
            </Typography>
            <List>
              {data?.socialLinks[0]?.link?.map((item, index) => (
                <ListItem key={index} sx={{ p: '2px 0px' }}>
                  <Box sx={{ cursor: 'pointer' }}>{item.label}</Box>
                </ListItem>
              ))}{' '}
            </List>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
