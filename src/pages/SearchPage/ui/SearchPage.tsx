import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  getPageSectionData,
  getPageCategoryData,
  getPageSubCategoryData,
  getPageBrandsData,
  getProductsListData,
  getSizesData,
  getTotalProductsCount,
  getSearchFlag,
  fetchProductsListData,
  getInputSearchValue,
} from 'entities/Product';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { ProductsListData } from 'entities/Product/ui/ProductsListData/ProductsListData';
import { ProductPriceFilter } from 'features/ProductPriceFilter';
import { ProductSaleAndClearanceFilter } from 'features/ProductSaleAndClearanceFilter';
import { ProductsBrandsFilter } from 'features/ProductsBrandsFilter';
import { ProductsCategorySelector } from 'features/ProductsCategorySelector';
import { ProductSectionSelector } from 'features/ProductSectionSelector';
import { ProductSizesFilter } from 'features/ProductSizesFilter';
import { ProductsSortingSelector } from 'features/ProductsSortingSelector';
import { ProductsSubCategoryFilter } from 'features/ProductsSubCategoryFilter';
import { useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

const SearchPage = () => {
  const dispatch = useAppDispatch();
  const pathParams = useParams();
  const pageCategoryData = useSelector(getPageSectionData);
  const categoryPageFiltersData = useSelector(getPageCategoryData);
  const subCategoryData = useSelector(getPageSubCategoryData);
  const brandsData = useSelector(getPageBrandsData);
  const productsList = useSelector(getProductsListData);
  const sizesData = useSelector(getSizesData);
  const totalProducts = useSelector(getTotalProductsCount);
  const searchFlag = useSelector(getSearchFlag);
  const params = useLocation();
  const inputValue = useSelector(getInputSearchValue);

  useEffect(() => {
    dispatch(productListActions.clearAllFilters());
  }, [pathParams]);

  console.log(pathParams);
  console.log(params);

  useEffect(() => {
    dispatch(fetchProductsListData({ pageCategory: 'all' }));
  }, [pathParams, inputValue]);

  return (
    <Box>
      <PageBreadcrumbs />
      <Box mt="50px">
        <Box display="flex">
          <Box flex="1 1 10%">
            <Box maxWidth="195px">
              <ProductPriceFilter />

              {pathParams.pageCategory === 'all' && (
                <ProductSectionSelector data={pageCategoryData} />
              )}

              <ProductSaleAndClearanceFilter />
              <ProductsCategorySelector data={categoryPageFiltersData} />
              <ProductsSubCategoryFilter data={subCategoryData} />
              <ProductsBrandsFilter data={brandsData} />
              <ProductSizesFilter data={sizesData} />
            </Box>
          </Box>
          <Box flex="1 1 80%">
            <Box display="flex" justifyContent="space-between" mb="20px">
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

export default SearchPage;
