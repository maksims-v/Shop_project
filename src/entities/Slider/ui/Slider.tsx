import React, { useEffect, useState } from 'react';
import { SliderProductAttributes } from '../model/types/slider';
import { Box, Typography } from '@mui/material';
import { error } from 'console';
import { ProductCard } from 'entities/Product';
import AliceCarousel from 'react-alice-carousel';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Product, ProductList, ProductSchema } from 'entities/Product/model/types/Product';
const responsive = {
  0: { items: 2 },
  500: { items: 3 },
  1152: { items: 4 },
};

type SliderProps = {
  data?: ProductList;
};

export const Slider = (props: SliderProps) => {
  const { data } = props;

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  console.log(data);

  const carouselItems = data
    ? data?.map((item, index) => <ProductCard key={item.id} product={item} />)
    : [];

  return <></>;

  // if (carouselItems)
  //   return (
  //     <Box width="100%" mb={'60px'}>
  //       <AppLink to="/newArrivals">
  //         <Typography variant="h2" sx={{ textAlign: 'center', mb: '15px' }}>
  //           New Arrivals
  //         </Typography>{' '}
  //       </AppLink>
  //       {isClient && (
  //         <AliceCarousel
  //           animationDuration={800}
  //           infinite
  //           autoPlay
  //           autoPlayInterval={3000}
  //           items={carouselItems}
  //           responsive={responsive}
  //         />
  //       )}
  //     </Box>
  //   );
};
