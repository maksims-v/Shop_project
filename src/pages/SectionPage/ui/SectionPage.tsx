import { Box, Typography } from '@mui/material';
import { fetchProductsListData } from 'entities/Product';
import { ProductsFilters } from 'features/ProductsFilters';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

type SectionPageProps = {};

const SectionPage = (props: SectionPageProps) => {
  const {} = props;

  const dispatch = useAppDispatch();

  const location = useParams();

  console.log(location);
  useEffect(() => {
    // @ts-ignore
    // @ts-ignore
    dispatch(fetchProductsListData(location));
  }, []);

  return (
    <div>
      <PageBreadcrumbs />
      <Box mt="50px">
        <Box display="flex">
          <Box flex="1 1 10%"></Box>
          <ProductsFilters />
          <Box flex="1 1 80%">
            <Box display="flex" justifyContent="space-between" mb="20px">
              <Typography variant="h3" sx={{ fontSize: '22px', fontWeight: '600' }}>
                <Typography component="span" sx={{ pl: '5px', color: '#989c9b' }}></Typography>
              </Typography>
            </Box>

            {/* <ProductList /> */}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SectionPage;
