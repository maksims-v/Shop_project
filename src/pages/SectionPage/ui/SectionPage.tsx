import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import {
  fetchProductsListData,
  getBrandFilterCheckedData,
  getCategoryFilterCheckedData,
  getChangePriceFromPriceFilter,
  getPageBrandsData,
  getPageCategoryData,
  getPageSectionData,
  getPageSubCategoryData,
  getProductsListData,
  getSaleFilterFlag,
  getSearchFlag,
  getSectionPageFilterData,
  getSizesCheckedData,
  getSizesData,
  getSubCategoryFilterCheckedData,
  getTotalProductsCount,
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
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { ProductSizesFilter } from 'features/ProductSizesFilter';
import { ProductPriceFilter } from 'features/ProductPriceFilter';
import { ProductSaleAndClearanceFilter } from 'features/ProductSaleAndClearanceFilter';
import { ProductSectionSelector } from 'features/ProductSectionSelector';
import { ProductsSortingSelector } from 'features/ProductsSortingSelector';

type SectionPageProps = {};

const SectionPage = (props: SectionPageProps) => {
  const {} = props;

  const dispatch = useAppDispatch();
  const pathParams = useParams<PathsParams>();
  const pageCategoryData = useSelector(getPageSectionData);
  const categoryPageFiltersData = useSelector(getPageCategoryData);
  const subCategoryData = useSelector(getPageSubCategoryData);
  const brandsData = useSelector(getPageBrandsData);
  const productsList = useSelector(getProductsListData);
  const checkedCategoryData = useSelector(getCategoryFilterCheckedData);
  const checkedSubCategoryData = useSelector(getSubCategoryFilterCheckedData);
  const checkedBrandsData = useSelector(getBrandFilterCheckedData);
  const sizesChecked = useSelector(getSizesCheckedData);
  const sizesData = useSelector(getSizesData);
  const filterPriceChange = useSelector(getChangePriceFromPriceFilter);
  const saleFilterFlag = useSelector(getSaleFilterFlag);
  const totalProducts = useSelector(getTotalProductsCount);
  const checkedPageCategoryData = useSelector(getSectionPageFilterData);
  const searchFlag = useSelector(getSearchFlag);

  useEffect(() => {
    dispatch(productListActions.clearAllFilters());
  }, [pathParams]);

  useEffect(() => {
    dispatch(fetchProductsListData(pathParams));
  }, [
    checkedCategoryData,
    checkedSubCategoryData,
    checkedBrandsData,
    sizesChecked,
    filterPriceChange,
    saleFilterFlag,
    checkedPageCategoryData,
    searchFlag,
  ]);

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

export default SectionPage;
