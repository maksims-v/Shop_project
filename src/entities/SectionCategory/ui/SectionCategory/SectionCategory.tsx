import React, { useMemo } from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { SectionCategoryItem } from 'entities/SectionCategory/model/types/sectionCategory';
import AliceCarousel from 'react-alice-carousel';
import { AppLink } from 'shared/ui/AppLink/AppLink';

const responsive = {
  0: { items: 2 },
  500: { items: 3 },
  1152: { items: 5 },
};

type SectionCategoryProps = {
  data?: SectionCategoryItem[];
};

export const SectionCategory = (props: SectionCategoryProps) => {
  const mobileScreen = useMediaQuery('(max-width:570px)');

  const { data } = props;

  const transfromData = useMemo(
    () =>
      data?.map((item) => {
        return (
          <Box
            sx={{
              borderRadius: mobileScreen ? undefined : '50%',
              overflow: 'hidden',
              width: mobileScreen ? '99%' : '200px',
              height: mobileScreen ? '300px' : '200px',
              position: 'relative',
              p: '0 0.5px',
            }}>
            <AppLink to={`/${item.pageCategory}/${item.category}`}>
              <Box
                sx={{
                  position: 'absolute',
                  color: 'white',
                  zIndex: 99,
                  top: mobileScreen ? '90%' : '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  fontWeight: 'bold',
                  fontSize: '24px',
                  borderRadius: '50%',
                }}>
                {item.title}
              </Box>
              <Box sx={{ '&:hover': { scale: '1.3', transition: '1.5s' } }}>
                <img
                  src={`${item.image?.data?.attributes?.url}`}
                  alt={item.title}
                  style={{
                    height: mobileScreen ? '300px' : '200px',
                    width: '200px',
                    objectFit: 'cover',
                  }}
                  loading="lazy"
                />
              </Box>
            </AppLink>
          </Box>
        );
      }),
    [data],
  );

  return (
    <Box sx={{ mb: !mobileScreen && '50px' }}>
      <Typography variant="h2" sx={{ textAlign: 'center', mb: '20px' }}>
        {' '}
        Shop By Section
      </Typography>

      <AliceCarousel
        animationDuration={800}
        disableDotsControls={true}
        disableButtonsControls={true}
        infinite
        autoPlay
        autoPlayInterval={3000}
        items={transfromData}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </Box>
  );
};
