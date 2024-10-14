import React, { memo, useEffect, useMemo, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { ProductCard } from 'entities/Product';
import AliceCarousel from 'react-alice-carousel';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Product } from 'entities/Product/model/types/Product';
import { removeNullValuesInProduct } from 'shared/lib/removeNullValuesInProduct/removeNullValuesInProduct';
import 'react-alice-carousel/lib/alice-carousel.css';

type SliderSection = 'clearance' | 'newArrivals' | 'relatedProducts';

const responsive = {
  0: { items: 2 },
  500: { items: 3 },
  1152: { items: 4 },
};

type SliderProps = {
  data?: Product[];
  isLoading?: boolean;
  isError?: boolean;
  section: SliderSection;
  title?: string;
};

export const Slider = memo((props: SliderProps) => {
  const { data, title, section } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const removeNullAttributes = data ? data.map((item) => removeNullValuesInProduct(item)) : [];

  const carouselItems = useMemo(
    () => removeNullAttributes?.map((item) => <ProductCard product={item} />),
    [removeNullAttributes],
  );

  return (
    <Box sx={{ m: '0 auto', width: '100%' }}>
      <AppLink to={`/${section}`}>
        <Typography variant="h2" sx={{ textAlign: 'center', mb: '15px' }}>
          {title}
        </Typography>{' '}
      </AppLink>
      {isClient && (
        <AliceCarousel
          animationDuration={800}
          disableDotsControls={true}
          infinite
          autoPlay
          autoPlayInterval={3000}
          items={carouselItems}
          responsive={responsive}
        />
      )}
    </Box>
  );
});
