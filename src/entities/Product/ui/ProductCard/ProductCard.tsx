import { Card, CardActionArea, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { Product, ProductList, ProductSchema } from 'entities/Product/model/types/Product';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import FiberNewIcon from '@mui/icons-material/FiberNew';

export interface ProductCardProps {
  product?: ProductList;
  isLoading?: boolean;
}

export const ProductCard = (props: ProductCardProps) => {
  const { product, isLoading } = props;

  console.log(product);

  return (
    <Card sx={{ maxWidth: 235, boxShadow: 'none' }}>
      <AppLink to={`/shop/`}>
        <CardActionArea>
          {/* <CardMedia
            component="img"
            sx={{ p: '0px 5px' }}
            image={`http://127.0.0.1:1337${product.image.data[0].attributes.formats.small.url}`}
            alt="img"
          /> */}

          {product && (
            <FiberNewIcon
              sx={{ color: '#0070d6', position: 'absolute', top: '7px', left: '7px' }}
            />
          )}

          <CardContent
            sx={{
              p: '0px 5px',
              textAlign: 'left',
              overflow: 'hidden',
              height: '100px',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Typography sx={{ fontWeight: 'bold' }}>{product?.brand}</Typography>
            <Typography sx={{ lineHeight: '15px', flex: '1 1 auto', overflow: 'hidden' }}>
              {product?.title}
            </Typography>
            <Box
              sx={{
                display: 'flex',
                textAlign: 'left',
              }}>
              {product?.sale ? (
                <Box display="flex">
                  <Typography
                    sx={{
                      fontSize: '20px',
                      fontWeight: 'bold',
                      color: '#bb3142',
                    }}>
                    {product?.price}$
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '13px',
                      pt: '9px',
                      textDecoration: 'line-through',
                    }}>
                    {product?.sale ? product?.oldPrice : product?.price} $
                  </Typography>
                </Box>
              ) : (
                <Typography
                  sx={{
                    fontWeight: 'bold',
                    fontSize: '20px',
                    width: '100%',
                  }}>
                  {product?.price} $
                </Typography>
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </AppLink>
    </Card>
  );
};
