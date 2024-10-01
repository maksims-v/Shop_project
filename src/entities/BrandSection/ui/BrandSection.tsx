import React, { memo, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductCard } from 'entities/Product';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { BrandSectionTypes } from '../model/types/brandSection';
import { removeNullValuesInProduct } from 'shared/lib/removeNullValuesInProduct/removeNullValuesInProduct';
import { Product } from 'entities/Product/model/types/Product';

type BrandSectionProps = {
  data?: BrandSectionTypes;
  isLoading?: boolean;
  isError?: boolean;
};

export const BrandSection = memo((props: BrandSectionProps) => {
  const { data, isError, isLoading } = props;

  const removeIdFromData = data?.brandSection?.products?.data.map((item) => item.attributes);

  const removeNullAttributes = removeIdFromData
    ? removeIdFromData?.map((item) => removeNullValuesInProduct(item))
    : [];

  const productsRender = useMemo(
    () =>
      removeNullAttributes?.map((item: Product) => {
        return <ProductCard key={item.slug} product={item} brandSection={true} />;
      }),
    [removeNullAttributes],
  );

  return (
    productsRender.length &&
    data?.isShow && (
      <Box mb="60px">
        <Typography variant="h2" sx={{ textAlign: 'center', mb: '15px' }}>
          {data?.brandSection?.title}
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
                src={`${__API__}${data?.brandSection?.image?.data?.attributes?.url}`}
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
});
