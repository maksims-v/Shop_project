import { Box, NativeSelect } from '@mui/material';
import { getFetchStatus, getSortValue } from 'entities/Product';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/hook';

export interface ProductsSortingSelectorProps {}

export const ProductsSortingSelector = memo(({}: ProductsSortingSelectorProps) => {
  const sortValue = useSelector(getSortValue);
  const dispatch = useAppDispatch();

  const fetchStatus = useSelector(getFetchStatus);

  const changeSortValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(productListActions.setSortValue(event.target.value));
  };

  return (
    fetchStatus == 'resolved' && (
      <Box sx={{ minWidth: 120 }}>
        <NativeSelect defaultValue={sortValue} onChange={changeSortValue}>
          <option value={'Sort By'}>Sort By</option>
          <option value={'Latest arrivals'}>Latest arrivals</option>
          <option value={'Price asc.'}>Price asc.</option>
          <option value={'Price desc.'}>Price desc.</option>
        </NativeSelect>
      </Box>
    )
  );
});
