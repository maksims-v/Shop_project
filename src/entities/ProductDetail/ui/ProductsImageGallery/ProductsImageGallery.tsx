import { Box, Modal } from '@mui/material';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { memo } from 'react';
import { Product, ProductItem } from 'entities/Product/model/types/Product';

interface Images {
  original: string;
  thumbnail: string;
}

export interface ProductsImageGalleryProps {
  data?: ProductItem;
  isLoading?: boolean;
  error?: boolean;
}

export const ProductsImageGallery = memo((props: ProductsImageGalleryProps) => {
  const { data, error, isLoading } = props;

  const transformDataToImageArr =
    data?.attributes && typeof data?.attributes?.image !== 'string'
      ? data?.attributes?.image?.data?.map((item) => ({
          original: `${__API__}${item.attributes.url}`,
          thumbnail: `${__API__}${item.attributes.formats.thumbnail.url}`,
        }))
      : [];

  if (transformDataToImageArr?.length) {
    return (
      data && (
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
      )
    );
  }

  return null;
});
