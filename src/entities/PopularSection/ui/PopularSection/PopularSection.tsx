import React, { memo, useMemo } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { PopularSectionItem } from './../PopularSectionItem/PopularSectionItem';
import { PopularSectionItem as PopularItems } from './../../model/types/popularSection';

type PopularSectionProps = {
  data?: PopularItems[];
};

export const PopularSection = memo((props: PopularSectionProps) => {
  const { data = [] } = props;

  const mobileScreen = useMediaQuery('(max-width:570px)');

  const renderData = useMemo(
    () =>
      data.map((item) => {
        return item?.isShow && <PopularSectionItem key={item.id} itemData={item} />;
      }),
    [data],
  );

  return (
    data &&
    data?.length !== 0 && (
      <Box
        sx={{
          m: mobileScreen ? '0 auto' : '0 auto 60px auto',
          width: '100%',
          p: mobileScreen ? '0px' : '0px 5px',
        }}>
        {!mobileScreen && (
          <Typography variant="h2" sx={{ textAlign: 'center', mb: ' 15px' }}>
            Popular Categories
          </Typography>
        )}
        <Box
          mb="20px"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
          }}>
          {renderData}
        </Box>
      </Box>
    )
  );
});
