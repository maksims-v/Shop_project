import {
  Typography,
  Box,
  Drawer,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Stack,
  useMediaQuery,
} from '@mui/material';
import { getPageSectionData, getTotalProductsCount } from 'entities/Product';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';

import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { MobileFiltersChip } from 'features/MobileFiltersChip/ui/MobileFiltersChip';
import { ProductPriceFilter } from 'features/ProductPriceFilter';
import { ProductsSortingSelector } from 'features/ProductsSortingSelector';
import { ProductSectionSelector } from 'features/ProductSectionSelector';
import { ProductsCategorySelector } from 'features/ProductsCategorySelector';
import { ProductsSubCategoryFilter } from 'features/ProductsSubCategoryFilter';
import { ProductsBrandsFilter } from 'features/ProductsBrandsFilter';
import { ProductSizesFilter } from 'features/ProductSizesFilter';
import { PathsParams } from 'entities/Product/model/services/fetchProductsListData';

const buttonStyles = {
  width: '150px',
  borderRadius: '3px',
  height: '30px',
  fontSize: '13px',
  color: 'black',
  borderColor: '#cecece',
  fontWeight: 'bold',
};

const disableMarginInAccordion = true;

type MobileScreenFiltersProps = {
  pageCategoryData?: string[];
  categoryPageFiltersData?: string[];
  subCategoryData?: string[];
  brandsData?: string[];
  sizesData?: string[];
};

export const MobileScreenFilters = (props: MobileScreenFiltersProps) => {
  const { pageCategoryData, categoryPageFiltersData, subCategoryData, brandsData, sizesData } =
    props;

  const pathParams = useParams<PathsParams>();
  const location = useLocation();
  const mobileScreen = useMediaQuery('(max-width:570px)');

  const [mobileSearchMenuOpen, setMobileSearchMenuOpen] = useState(false);

  const pageCategory = useSelector(getPageSectionData);

  const [resetPriceSlider, setResetPriceSlider] = useState(false);

  const dispatch = useAppDispatch();

  const clear = () => {
    dispatch(productListActions.clearAllFilters());
    // dispatch(search({ pageCategory: 'all' }));
    setResetPriceSlider(!resetPriceSlider);
  };

  const handleDrawerToggle = () => {
    setMobileSearchMenuOpen((prevState) => !prevState);
  };

  // useEffect(() => {
  //   dispatch(inputValue(newSearch));
  // }, [newSearch]);

  return (
    <>
      {/* {newSearch && (
        <Typography variant="h3" sx={{ margin: ' 0 auto' }}>
          Your search for
          <Typography component="span" sx={{ pl: '5px', fontSize: '22px', fontWeight: '600' }}>
            {newSearch}
          </Typography>{' '}
          {total} results
        </Typography>
      )} */}
      <Box sx={{ display: 'flex', justifyContent: 'space-around', mb: '17px' }}>
        <Button variant="outlined" size="large" sx={buttonStyles} onClick={handleDrawerToggle}>
          SHOW FILTERS
        </Button>
        <Button variant="outlined" size="large" sx={buttonStyles} onClick={clear}>
          CLEAR FILTERS
        </Button>
      </Box>
      <Box sx={{ m: '0 auto', width: '100%' }}>
        <ProductPriceFilter resetPriceSlider={resetPriceSlider} />
      </Box>

      <Drawer
        variant="temporary"
        open={mobileSearchMenuOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '100%',
          },
        }}>
        <Box sx={{ mb: '50px' }}>
          <Box>
            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: '16px',
                lineHeight: '60px',
                width: '100%',
              }}>
              Filters
            </Typography>
            <CloseIcon
              fontSize="large"
              onClick={handleDrawerToggle}
              sx={{ position: 'absolute', top: '17px', right: '15px' }}
            />
          </Box>
          {pageCategory.filter((item) => item !== 'all').length !== 1 && (
            <Accordion disableGutters={disableMarginInAccordion}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header">
                <Typography fontWeight="bold">GENDER</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: '0px 0px 0px 17px' }}>
                <ProductSectionSelector data={pageCategoryData} mobile={mobileScreen} />
              </AccordionDetails>
            </Accordion>
          )}

          <Accordion disableGutters={disableMarginInAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography fontWeight="bold">CATEGORIES</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: '0px 0px 0px 17px' }}>
              <ProductsCategorySelector data={categoryPageFiltersData} mobile={mobileScreen} />
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters={disableMarginInAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography fontWeight="bold">
                {pathParams.pageCategory == 'equipment' ? 'EQUIPMENT' : 'CLOTHING & SHOES'}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: '0px 0px 0px 17px' }}>
              <ProductsSubCategoryFilter data={subCategoryData} mobile={mobileScreen} />
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters={disableMarginInAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography fontWeight="bold">BRANDS</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: '0px 0px 0px 17px' }}>
              <ProductsBrandsFilter data={brandsData} mobile={mobileScreen} />
            </AccordionDetails>
          </Accordion>

          <Accordion disableGutters={disableMarginInAccordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header">
              <Typography fontWeight="bold">SIZE</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ p: '0px 0px 0px 17px' }}>
              <ProductSizesFilter data={sizesData} mobile={mobileScreen} />
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', pb: '55px' }}>
          <Button onClick={handleDrawerToggle} size="large" sx={buttonStyles} variant="outlined">
            SHOW
          </Button>
        </Box>
      </Drawer>
    </>
  );
};
