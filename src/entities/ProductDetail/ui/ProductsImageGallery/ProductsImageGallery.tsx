import { Box, Modal } from '@mui/material';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import { memo } from 'react';

interface Images {
  original: string;
  thumbnail: string;
}

export interface ProductsImageGalleryProps {
  data?: Images[];
  isLoading?: boolean;
  error?: boolean;
}

export const ProductsImageGallery = memo((props: ProductsImageGalleryProps) => {
  const { data, error, isLoading } = props;

  if (data?.length) {
    return (
      data && (
        <Box flex="1 1 50%">
          <Box
            sx={{
              ':hover': {
                cursor: 'pointer',
              },
            }}>
            {data && <ImageGallery showPlayButton={false} items={data} />}
          </Box>
        </Box>
      )
    );
  }

  return null;
});
