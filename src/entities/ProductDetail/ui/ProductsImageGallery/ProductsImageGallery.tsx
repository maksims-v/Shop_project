import { Box } from '@mui/material';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { memo, useMemo } from 'react';
import { ProductItem } from 'entities/Product/model/types/Product';

export interface ProductsImageGalleryProps {
  data?: ProductItem;
  isLoading?: boolean;
  error?: boolean;
}

export const ProductsImageGallery = memo((props: ProductsImageGalleryProps) => {
  const { data, error, isLoading } = props;

  const transformDataToImageArr = useMemo(() => {
    return data?.attributes && typeof data?.attributes?.image !== 'string'
      ? data?.attributes?.image?.data?.map((item) => ({
          original: `${__API__}${item?.attributes?.url}`,
          thumbnail: `${__API__}${item?.attributes?.formats?.thumbnail?.url}`,
        }))
      : [];
  }, [data]);

  if (transformDataToImageArr?.length) {
    return (
      <Box flex="1 1 50%">
        <Box
          sx={{
            ':hover': {
              cursor: 'pointer',
            },
          }}>
          {data && <ImageGallery showPlayButton={false} items={transformDataToImageArr} />}
        </Box>
      </Box>
    );
  }

  return null;
});
