import React from 'react';
import { Stack, Chip } from '@mui/material';
import {
  getBrandFilterCheckedData,
  getCategoryFilterCheckedData,
  getSectionPageFilterData,
  getSizesCheckedData,
  getSubCategoryFilterCheckedData,
} from 'entities/Product';
import { useSelector } from 'react-redux';

export const MobileFiltersChip = () => {
  const pageCategoryChecked = useSelector(getSectionPageFilterData);
  const categoryChecked = useSelector(getCategoryFilterCheckedData);
  const subCategoryChecked = useSelector(getSubCategoryFilterCheckedData);
  const sizesChecked = useSelector(getSizesCheckedData);
  const brandsChecked = useSelector(getBrandFilterCheckedData);

  return (
    <Stack
      direction="row"
      flexWrap="wrap"
      spacing={0.2}
      sx={{
        m: '0 auto',
        mb: '10px',
        color: 'black',
        gap: '1px',
      }}>
      {pageCategoryChecked?.map((item) => <Chip key={item} label={item} size="small" />)}
      {categoryChecked?.map((item) => <Chip key={item} label={item} size="small" />)}
      {subCategoryChecked?.map((item) => <Chip key={item} label={item} size="small" />)}
      {sizesChecked?.map((item) => <Chip key={item} label={item} size="small" />)}
      {brandsChecked?.map((item) => <Chip key={item} label={item} size="small" />)}
    </Stack>
  );
};
