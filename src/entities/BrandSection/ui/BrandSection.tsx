import React from 'react';
import { Box, Typography } from '@mui/material';
import { error } from 'console';
import { ProductCard } from 'entities/Product';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { BrandSectionTypes } from '../model/types/brandSection';
import { removeNullValuesInProduct } from 'shared/lib/removeNullValuesInProduct/removeNullValuesInProduct';

type BrandSectionProps = {
  data?: BrandSectionTypes;
  isLoading?: boolean;
  isError?: boolean;
};

export const BrandSection = (props: BrandSectionProps) => {
  const { data, isError, isLoading } = props;

  const removeNullAttributes = data?.brandSection?.products?.data
    ? data?.brandSection?.products?.data?.map((item) => removeNullValuesInProduct(item))
    : [];

  console.log(removeNullAttributes);

  const productsRender = removeNullAttributes?.map((item) => {
    return <ProductCard product={item.attributes} brandSection={true} />;
  });

  return (
    data &&
    data?.isShow && (
      <Box mb="60px">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: '15px' }}>
          {data?.brandSection.title}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            height: '720px',
            p: '10px 0px',
            overflow: 'hidden',
          }}>
          <Box sx={{ p: '0px 0px 20px 0px', width: '50%' }}>
            <AppLink to={`search/${data?.brandSection?.brand}`}>
              <img
                alt="banner"
                style={{ width: '100%', objectFit: 'cover', height: '720px' }}
                src={`http://127.0.0.1:1337${data?.brandSection?.image?.data?.attributes?.url}`}
              />
            </AppLink>
          </Box>
          <Box
            sx={{
              height: '700px',
              display: 'flex',
              flexWrap: 'wrap',
              width: '50%',
              justifyContent: 'space-around',
              p: '0px 0px 0px 20px',
            }}>
            {productsRender}
          </Box>
        </Box>
      </Box>
    )
  );
};
