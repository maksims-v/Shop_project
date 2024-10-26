import { Breadcrumbs, Box } from '@mui/material';
import React, { memo, useMemo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { useLocation } from 'react-router-dom';
import { onHoverLine } from './breadcrumbsStyles';

export const PageBreadcrumbs = memo(() => {
  const location = useLocation();
  const splitPath = location.pathname.split('/').filter(Boolean);
  let accumulatedPath = '';

  const pathRoutes = useMemo(
    () =>
      splitPath?.map((path, index) => {
        accumulatedPath += `/${path}`;
        if (index < 3) {
          return (
            <AppLink key={index} color="inherit" to={accumulatedPath}>
              <Box sx={onHoverLine}>{path.toUpperCase()}</Box>
            </AppLink>
          );
        }
      }),
    [splitPath],
  );

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: '20px', mt: '20px' }}>
      <AppLink color="inherit" to="/">
        <Box sx={onHoverLine}>HOME</Box>
      </AppLink>
      {pathRoutes}
    </Breadcrumbs>
  );
});
