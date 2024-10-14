import {
  Box,
  Typography,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Button,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ProductItem } from 'entities/Product/model/types/Product';
import { SimilarProducts } from 'features/SimilarProducts';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { ProductSizesTabs } from 'features/ProductSizesTabs';

export interface ProductDetailProps {
  data?: ProductItem;
  sizeHandleChange: (event: React.MouseEvent<HTMLElement>, newAlignment: any) => void;
  setProductQnty: any;
  productQnty?: number;
  size?: string;
  changeSizeColor?: string;
  qnty: number;
  setQnty: (value: number) => void;
  addToBag: () => void;
}

export const ProductDetail = (props: ProductDetailProps) => {
  const {
    data,
    sizeHandleChange,
    setProductQnty,
    productQnty,
    size,
    changeSizeColor = 'black',
    setQnty,
    qnty = 1,
    addToBag,
  } = props;

  return (
    <>
      <Box m="20px 0 25px 0">
        <Typography sx={{ mb: '8px', fontSize: '24px', fontWeight: 'bold' }} variant="h3">
          {data?.attributes?.title}
        </Typography>

        <Divider sx={{ mb: '10px' }} color="yellow" />

        <Typography sx={{ fontSize: '38px', fontWeight: 'bold' }}>
          {data?.attributes?.price} $
        </Typography>

        <Typography
          sx={{
            fontSize: '12px',
            pl: '5px',
            color: data?.attributes?.oldPrice ? 'red' : undefined,
          }}>
          {data?.attributes?.sale &&
            `Save:
       ${
         data?.attributes?.sale &&
         ((data?.attributes?.price ?? 0) - (data?.attributes?.oldPrice ?? 0)).toFixed(2)
       }
       $`}
        </Typography>
        <Divider sx={{ mb: '10px', mt: '10px' }} color="yellow" />
        <Box sx={{ fontSize: '15px', fontWeight: 'bold', mb: '10px' }}>
          Color:{' '}
          <Typography component="span">
            {data?.attributes?.color && data.attributes.color.color}
          </Typography>
        </Box>
        <SimilarProducts />
        <ProductSizesTabs
          setProductQnty={setProductQnty}
          sizeHandleChange={sizeHandleChange}
          data={data}
          size={size}
          productQnty={productQnty}
          changeSizeColor={changeSizeColor}
        />
        <ReactMarkdown>{data?.attributes?.description}</ReactMarkdown>
        {data?.attributes?.techDescription}
      </Box>
      <Box display="flex" alignItems="center" minHeight="50px">
        <Box
          display="flex"
          alignItems="center"
          border="1.5px solid black"
          borderRadius="3px"
          mr="20px"
          p="2px 5px">
          <IconButton disabled={qnty === 1} onClick={() => setQnty(qnty - 1)}>
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ p: '0 5px' }}>{qnty}</Typography>
          <IconButton onClick={() => setQnty(qnty + 1)}>
            <AddIcon />
          </IconButton>
        </Box>
        <Button
          onClick={addToBag}
          color="error"
          variant="outlined"
          sx={{
            minWidth: '150px',
            padding: '10px 40px',
            borderRadius: '3px',
          }}>
          ADD TO CART
        </Button>
      </Box>
    </>
  );
};
