import { Box } from '@mui/material';
import {
  getPageSectionData,
  getPageCategoryData,
  getPageSubCategoryData,
  getPageBrandsData,
  getProductsListData,
  getSizesData,
  getTotalProductsCount,
  getSearchFlag,
} from 'entities/Product';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { MobileFiltersChip } from 'features/MobileFiltersChip/ui/MobileFiltersChip';
import { MobileScreenFilters } from 'features/MobileScreenFilters/ui/MobileScreenFilters';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

export interface SectionPageMobileProps {}

export const SectionPageMobile = ({}: SectionPageMobileProps) => {
  const dispatch = useAppDispatch();
  const pathParams = useParams<PathsParams>();
  const pageCategoryData = useSelector(getPageSectionData);
  const categoryPageFiltersData = useSelector(getPageCategoryData);
  const subCategoryData = useSelector(getPageSubCategoryData);
  const brandsData = useSelector(getPageBrandsData);
  const productsList = useSelector(getProductsListData);
  const sizesData = useSelector(getSizesData);
  const totalProducts = useSelector(getTotalProductsCount);
  const searchFlag = useSelector(getSearchFlag);

  return (
    <Box>
      <PageBreadcrumbs />
      <Box display="flex" alignContent="center" flexDirection="column">
        <MobileScreenFilters
          pageCategoryData={pageCategoryData}
          categoryPageFiltersData={categoryPageFiltersData}
          subCategoryData={subCategoryData}
          brandsData={brandsData}
          sizesData={sizesData}
        />
      </Box>
    </Box>
  );
};
