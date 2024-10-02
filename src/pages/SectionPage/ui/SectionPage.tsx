import { Box, Typography } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { PageBreadcrumbs } from 'shared/ui/Breadcrumbs/Breadcrumbs';

type SectionPageProps = {};

const SectionPage = (props: SectionPageProps) => {
  const {} = props;

  const location = useLocation();

  console.log(location);

  return (
    <div>
      <PageBreadcrumbs />
      <Box mt="50px">
        <Box display="flex">
          <Box flex="1 1 10%"></Box>

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

export default SectionPage;
