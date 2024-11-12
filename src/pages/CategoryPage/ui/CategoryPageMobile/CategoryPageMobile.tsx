import { Box, CircularProgress, Typography } from '@mui/material';
import {
  getProductsListIsLoading,
  getTotalProductsCount,
  getPageSectionData,
  getPageCategoryData,
  getPageSubCategoryData,
  getPageBrandsData,
  getProductsListData,
  getSizesData,
} from 'entities/Product';
import { ProductsListData } from 'entities/Product/ui/ProductsListData/ProductsListData';
import { MobileFiltersChip } from 'features/MobileFiltersChip';
import { MobileScreenFilters } from 'features/MobileScreenFilters';
import { ProductsSortingSelector } from 'features/ProductsSortingSelector';
import { useSelector } from 'react-redux';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

export interface CategoryPageMobileProps {}

export const CategoryPageMobile = ({}: CategoryPageMobileProps) => {
  const isLoading = useSelector(getProductsListIsLoading);

  const total = useSelector(getTotalProductsCount);
  const pageCategoryData = useSelector(getPageSectionData);
  const categoryPageFiltersData = useSelector(getPageCategoryData);
  const subCategoryData = useSelector(getPageSubCategoryData);
  const brandsData = useSelector(getPageBrandsData);
  const productsList = useSelector(getProductsListData);
  const sizesData = useSelector(getSizesData);

  return (
    <Box>
      <PageBreadcrumbs />
      <Box sx={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}>
        <MobileFiltersChip />

        <MobileScreenFilters
          pageCategoryData={pageCategoryData}
          categoryPageFiltersData={categoryPageFiltersData}
          subCategoryData={subCategoryData}
          brandsData={brandsData}
          sizesData={sizesData}
        />
        {isLoading ? (
          <CircularProgress size="3rem" sx={{ margin: '0 auto' }} />
        ) : (
          <>
            {' '}
            <Box sx={{ pl: '10px', mb: '17px', display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ pt: '10px' }}>
                <Typography sx={{ fontWeight: 'bold' }} component="span">
                  {total}
                </Typography>
                <Typography component="span"> products</Typography>
              </Box>
              <ProductsSortingSelector />
            </Box>
            <ProductsListData data={productsList} />
          </>
        )}
      </Box>
    </Box>
  );
};
