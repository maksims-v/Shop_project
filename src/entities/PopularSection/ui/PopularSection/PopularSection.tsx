import React, { memo, useMemo } from 'react';
import { Box, Typography } from '@mui/material';
import { PopularSectionItem } from './../PopularSectionItem/PopularSectionItem';
import { PopularSectionItem as PopularItems } from './../../model/types/popularSection';

type PopularSectionProps = {
  data?: PopularItems[];
};

export const PopularSection = memo((props: PopularSectionProps) => {
  const { data = [] } = props;

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
      <Box sx={{ m: '0 auto 60px auto', width: '100%', p: '0px 5px' }}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: ' 15px' }}>
          Popular Categories
        </Typography>

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
