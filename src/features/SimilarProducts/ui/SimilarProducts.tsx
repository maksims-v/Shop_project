import React, { memo, useMemo } from 'react';
import { Box, CardActionArea, CardMedia } from '@mui/material';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getSimilarProductsData } from '../model/selectors/getSimilarProductsData';

type SimilarProductsProps = {
  isLoading?: boolean;
  error?: boolean;
};

export const SimilarProducts = memo((props: SimilarProductsProps) => {
  const { category, pageCategory, subcategory } = useParams<PathsParams>();

  const data = useSelector(getSimilarProductsData);

  const renderData = useMemo(
    () =>
      data?.map((item) => (
        <AppLink key={item.slug} to={`/${pageCategory}/${category}/${subcategory}/${item.slug}`}>
          <CardActionArea sx={{ p: '0 10px' }}>
            <CardMedia component="img" height="60" image={`${item.imageUrl}`} alt="Paella dish" />
          </CardActionArea>
        </AppLink>
      )),
    [data],
  );

  return <Box sx={{ display: 'flex', mb: '10px' }}>{renderData} </Box>;
});
