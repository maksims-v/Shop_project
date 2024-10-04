import React from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Product } from 'entities/Product/model/types/Product';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import FiberNewIcon from '@mui/icons-material/FiberNew';

export interface ProductCardProps {
  product?: Product;
  brandSection?: boolean;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product, brandSection = false } = props;

  return (
    <Card sx={{ maxWidth: 235, boxShadow: 'none' }}>
      <AppLink
        to={`${product?.pageCategory}/${product?.category || product?.equipmentCategory}/${
          product?.clothingCategory ||
          product?.footwearCategory ||
          product?.accessoriesCategory ||
          product?.activityCategory ||
          product?.toolsGearCategory ||
          product?.lampsLanternsCategory ||
          product?.campSleepCategory ||
          product?.otherCategory ||
          product?.accessoriesCategory
        }/${product?.slug}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{ p: '0px 5px', flexGrow: '1' }}
            image={`${__API__}${
              typeof product.image === 'string'
                ? product.image
                : product.image?.data?.[0]?.attributes?.formats?.small?.url
            }`}
            alt="img"
          />

          {product?.new && (
            <FiberNewIcon
              sx={{ color: '#0070d6', position: 'absolute', top: '7px', left: '7px' }}
            />
          )}

          <CardContent
            sx={{
              p: '0px 5px',
              textAlign: 'left',
              overflow: 'hidden',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: '0',
            }}>
            <Typography sx={{ fontWeight: 'bold' }}>{product?.brand}</Typography>
            <Typography
              sx={{
                lineHeight: brandSection ? '15px' : '18px',
                flex: '1 1 auto',
                overflow: brandSection ? 'hidden' : undefined,
              }}>
              {product?.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                textAlign: 'left',
              }}>
              {product?.sale ? (
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#bb3142',
                    }}>
                    {product?.price}$
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '13px',
                      textDecoration: 'line-through',
                    }}>
                    {product?.sale ? product?.oldPrice : product?.price} $
                  </Typography>
                </Box>
              ) : (
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    width: '100%',
                    pt: brandSection ? '5px' : '0px',
                  }}>
                  {product?.price} $
                </Typography>
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </AppLink>
    </Card>
  );
};
