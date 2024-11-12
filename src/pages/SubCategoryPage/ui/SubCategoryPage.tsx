import React, { useEffect } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import {
  getPageBrandsData,
  getProductsListData,
  getSizesData,
  fetchProductsListData,
  getSearchFlag,
  getTotalProductsCount,
} from 'entities/Product';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { ProductsListData } from 'entities/Product/ui/ProductsListData/ProductsListData';
import { ProductPriceFilter } from 'features/ProductPriceFilter';
import { ProductSaleAndClearanceFilter } from 'features/ProductSaleAndClearanceFilter';
import { ProductsBrandsFilter } from 'features/ProductsBrandsFilter';
import { ProductSizesFilter } from 'features/ProductSizesFilter';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';
import { ProductsSortingSelector } from 'features/ProductsSortingSelector';
import { SubCategoryPageMobile } from './SubCategoryPageMobile/SubCategoryPageMobile';

const SubCategoryPage = () => {
  const mobileScreen = useMediaQuery('(max-width:570px)');

  const dispatch = useAppDispatch();
  const pathParams = useParams<PathsParams>();
  const brandsData = useSelector(getPageBrandsData);
  const productsList = useSelector(getProductsListData);
  const sizesData = useSelector(getSizesData);
  const searchFlag = useSelector(getSearchFlag);
  const totalProducts = useSelector(getTotalProductsCount);

  useEffect(() => {
    dispatch(productListActions.clearAllFilters());
  }, [pathParams]);

  useEffect(() => {
    dispatch(fetchProductsListData(pathParams));
  }, [searchFlag, pathParams]);

  return mobileScreen ? (
    <SubCategoryPageMobile />
  ) : (
    <Box>
      <PageBreadcrumbs />
      <Box sx={{ mt: '50px' }}>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ flex: '1 1 10%' }}>
            <Box sx={{ maxWidth: '195px' }}>
              <ProductPriceFilter />
              <ProductSaleAndClearanceFilter />
              <ProductsBrandsFilter data={brandsData} />
              <ProductSizesFilter data={sizesData} />
            </Box>
          </Box>
          <Box sx={{ flex: '1 1 80%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '20px' }}>
              <Typography variant="h3" sx={{ fontSize: '22px', fontWeight: '600' }}>
                {pathParams?.pageCategory?.toUpperCase()}
                <Typography component="span" sx={{ pl: '5px', color: '#989c9b' }}>
                  ({totalProducts} products)
                </Typography>
              </Typography>
              <ProductsSortingSelector />
            </Box>
            <ProductsListData data={productsList} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SubCategoryPage;
