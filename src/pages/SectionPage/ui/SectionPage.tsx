import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  fetchProductsListData,
  getPageBrandsData,
  getPageCategoryData,
  getPageSubCategoryData,
  getProductsListData,
  getSectionFilterCheckedData,
} from 'entities/Product';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { ProductsListData } from 'entities/Product/ui/ProductsListData/ProductsListData';
import { ProductsBrandsFilter } from 'features/ProductsBrandsFilter';
import { ProductsCategorySelector } from 'features/ProductsCategorySelector';
import { ProductsSubCategoryFilter } from 'features/ProductsSubCategoryFilter';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

type SectionPageProps = {};

const SectionPage = (props: SectionPageProps) => {
  const {} = props;

  const dispatch = useAppDispatch();
  const pathParams = useParams<PathsParams>();
  const categoryPageFiltersData = useSelector(getPageCategoryData);
  const subCategoryData = useSelector(getPageSubCategoryData);
  const brandsData = useSelector(getPageBrandsData);
  const productsList = useSelector(getProductsListData);
  const checkedSectionData = useSelector(getSectionFilterCheckedData);

  useEffect(() => {
    dispatch(fetchProductsListData(pathParams));
  }, [pathParams, checkedSectionData]);

  return (
    <div>
      <PageBreadcrumbs />
      <Box mt="50px">
        <Box display="flex">
          <Box flex="1 1 10%">
            <Box maxWidth="195px">
              <ProductsCategorySelector data={categoryPageFiltersData} />
              <ProductsSubCategoryFilter data={subCategoryData} />
              <ProductsBrandsFilter data={brandsData} />
            </Box>
          </Box>
          <Box flex="1 1 80%">
            <Box display="flex" justifyContent="space-between" mb="20px">
              <Typography variant="h3" sx={{ fontSize: '22px', fontWeight: '600' }}>
                <Typography component="span" sx={{ pl: '5px', color: '#989c9b' }}></Typography>
              </Typography>
            </Box>

            <ProductsListData data={productsList} />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SectionPage;
