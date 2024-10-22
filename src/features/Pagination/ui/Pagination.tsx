import { Stack, Pagination as PaginationComponent } from '@mui/material';
import { getCurrentPage, getTotalPages } from 'entities/Product';
import React from 'react';
import { useSelector } from 'react-redux';

type PaginationProps = {
  changePage: (event: React.ChangeEvent<unknown>, page: number) => void;
};

export const Pagination = (props: PaginationProps) => {
  const { changePage } = props;

  const pages = useSelector(getTotalPages);
  const currentPage = useSelector(getCurrentPage);

  return (
    <Stack spacing={2}>
      <PaginationComponent
        count={pages}
        page={currentPage}
        onChange={changePage}
        variant="outlined"
        shape="rounded"
        sx={{ m: '0 auto' }}
      />
    </Stack>
  );
};
