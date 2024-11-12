import { Stack, Pagination as PaginationComponent } from '@mui/material';
import React from 'react';

type PaginationProps = {
  pages?: number;
  currentPage?: number;
  changePage?: (event: React.ChangeEvent<unknown>, page: number) => void;
};

export const Pagination = (props: PaginationProps) => {
  const { pages = 1, currentPage = 1, changePage } = props;

  return (
    <Stack spacing={2}>
      <PaginationComponent
        count={pages}
        page={currentPage}
        onChange={changePage}
        variant="outlined"
        shape="rounded"
        sx={{ display: 'flex', justifyContent: 'center' }}
      />
    </Stack>
  );
};
