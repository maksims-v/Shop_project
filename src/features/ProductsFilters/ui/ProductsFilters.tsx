import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { ProductSectionSelector } from 'features/ProductSectionSelector';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { fetchProductsListData } from 'entities/Product';
import { useLocation, useParams } from 'react-router-dom';

type ProductsFiltersProps = {};

export const ProductsFilters = (props: ProductsFiltersProps) => {
  const {} = props;

  return (
    <Box maxWidth="195px">
      <ProductSectionSelector data={["men's", "women's", 'all']} title={'gender'} />
    </Box>
  );
};
