import {
  Box,
  Typography,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  Button,
} from '@mui/material';
import { ProductItem } from 'entities/Product/model/types/Product';
import { SimilarProducts } from 'features/SimilarProducts';
import { size } from 'lodash';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DoneIcon from '@mui/icons-material/Done';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export interface ProductDetailProps {
  data?: ProductItem;
  sizeHandleChange: (event: React.MouseEvent<HTMLElement>, newAlignment: any) => void;
  setProductQnty: any;
}

export const ProductDetail = (props: ProductDetailProps) => {
  const { data, sizeHandleChange, setProductQnty } = props;

  return (
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
      <Box sx={{ fontSize: '15px', fontWeight: 'bold', mb: '10px', color: changeSizeColor }}>
        Choose size:
        <Box component="span" sx={{ pl: '3px', fontWeight: 'normal' }}>
          {' '}
          {size?.toUpperCase()}
        </Box>
        <Box component="span" sx={{ pl: '3px' }}>
          {}
          {productQnty > 0 && (
            <>
              <DoneIcon fontSize="small" sx={{ color: '#449d44', position: 'absolute' }} />
              <Box sx={{ fontWeight: 'normal', color: '#449d44', pl: '18px' }} component="span">
                {' '}
                In stock!
              </Box>
            </>
          )}
          {productQnty === 0 && (
            <Box sx={{ fontWeight: 'normal', color: 'red' }} component="span">
              {' '}
              Out of stock!
            </Box>
          )}
        </Box>
      </Box>
      <Box mb="10px" maxWidth="300px">
        <ToggleButtonGroup
          color="primary"
          value={size}
          exclusive
          onChange={sizeHandleChange}
          aria-label="Platform">
          {data?.attributes?.size?.map((item, index) => {
            return (
              <ToggleButton
                key={item.id}
                onClick={() => setProductQnty(item.qnty ? item.qnty : 0)}
                color={item.qnty === 0 ? 'error' : 'success'}
                value={item.size}>
                {item.size}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Box>
      {productQnty <= 5 ? (
        <Box
          sx={{
            display: productQnty === null ? 'none' : 'block',
            color: '#f07186',
          }}>
          Only {productQnty} units left
        </Box>
      ) : (
        <Box
          sx={{
            display: productQnty === null ? 'none' : 'block',
            color: '#5cb85b',
          }}>
          In stock {productQnty} units
        </Box>
      )}
      <ReactMarkdown>{data?.attributes?.description}</ReactMarkdown>
      {data?.attributes?.techDescription}
    </Box>

    // <Box display="flex" alignItems="center" minHeight="50px">
    //   <Box
    //     display="flex"
    //     alignItems="center"
    //     border="1.5px solid black"
    //     borderRadius="3px"
    //     mr="20px"
    //     p="2px 5px">
    //     <IconButton disabled={count === 1} onClick={() => setCount(count - 1)}>
    //       <RemoveIcon />
    //     </IconButton>
    //     <Typography sx={{ p: '0 5px' }}>{count}</Typography>
    //     <IconButton onClick={() => setCount(count + 1)}>
    //       <AddIcon />
    //     </IconButton>
    //   </Box>
    //   <Button
    //     onClick={addToBag}
    //     color="error"
    //     variant="outlined"
    //     sx={{
    //       minWidth: '150px',
    //       padding: '10px 40px',
    //       borderRadius: '3px',
    //     }}>
    //     ADD TO CART
    //   </Button>
    // </Box>
  );
};
