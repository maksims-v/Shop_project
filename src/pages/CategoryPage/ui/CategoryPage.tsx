import { Box, Typography } from '@mui/material';
import { fetchProductsListData, getPageCategoryData, getPageSectionData } from 'entities/Product';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';
import { ProductsCategorySelector } from 'features/ProductsCategorySelector';
import { ProductSectionSelector } from 'features/ProductSectionSelector';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

type CategoryPageProps = {};

const CategoryPage = (props: CategoryPageProps) => {
  const {} = props;

  const dispatch = useAppDispatch();
  const pathParams = useParams<PathsParams>();
  const sectionPageFiltersData = useSelector(getPageSectionData);
  const categoryPageFiltersData = useSelector(getPageCategoryData);

  useEffect(() => {
    dispatch(fetchProductsListData(pathParams));
  }, [pathParams]);

  return (
    <div>
      <PageBreadcrumbs />
      <Box mt="50px">
        <Box display="flex">
          <Box flex="1 1 10%">
            <Box maxWidth="195px">
              <ProductSectionSelector data={sectionPageFiltersData} />
              <ProductsCategorySelector data={categoryPageFiltersData} />
            </Box>
          </Box>
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

export default CategoryPage;
