import { Box, Typography, IconButton, Divider } from '@mui/material';
import { BasketItem as IBasketItem } from 'pages/Basket/model/types/basket';
import { Link } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import { AppLink } from 'shared/ui/AppLink/AppLink';

export interface BasketItemProps {
  item?: IBasketItem;
  deleteProduct?: (value: IBasketItem) => void;
  increase?: (value: IBasketItem) => void;
  decrease?: (value: IBasketItem) => void;
}

export const BasketItem = (props: BasketItemProps) => {
  const { decrease, deleteProduct, increase, item } = props;

  return (
    <Box>
      <Box
        sx={{
          p: '15px 0 15px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Box flex="1 1 40%">
          <AppLink
            to={`/${item?.item?.pageCategory}/${item?.item?.category || item?.item?.equipmentCategory}/${
              item?.item?.clothingCategory ||
              item?.item?.footwearCategory ||
              item?.item?.accessoriesCategory ||
              item?.item?.activityCategory ||
              item?.item?.toolsGearCategory ||
              item?.item?.lampsLanternsCategory ||
              item?.item?.campSleepCategory ||
              item?.item?.otherCategory ||
              item?.item?.accessoriesCategory
            }/${item?.item?.slug}`}>
            <img
              src={`${__API__}${
                typeof item?.item?.image !== 'string' &&
                item?.item?.image?.data[0]?.attributes?.formats?.small?.url
              }`}
              alt="alt"
              width="150px"
              height="164px"
            />
          </AppLink>
        </Box>
        <Box flex="1 1 60%">
          <Box
            mb="10px"
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <AppLink
              to={`/${item?.item?.pageCategory}/${item?.item?.category || item?.item?.equipmentCategory}/${
                item?.item?.clothingCategory ||
                item?.item?.footwearCategory ||
                item?.item?.accessoriesCategory ||
                item?.item?.activityCategory ||
                item?.item?.toolsGearCategory ||
                item?.item?.lampsLanternsCategory ||
                item?.item?.campSleepCategory ||
                item?.item?.otherCategory ||
                item?.item?.accessoriesCategory
              }/${item?.item?.slug}`}>
              <Typography
                sx={{
                  '&:hover': { cursor: 'pointer', color: 'black' },
                  color: '#1976d2',
                  fontWeight: 'bold',
                }}>
                {item.item.title}
              </Typography>
            </AppLink>

            <IconButton onClick={() => deleteProduct(item)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box display="flex">
            <Box display="flex" alignItems="center" border={`1.5px solid black`}>
              <IconButton onClick={() => decrease(item)}>
                <RemoveIcon fontSize="large" />
              </IconButton>
              <Typography>{item.qnty}</Typography>
              <IconButton onClick={() => increase(item)}>
                <AddIcon />
              </IconButton>
            </Box>
            <Box pl="10px" pt="5px">
              <Box pb="0px" display="flex" alignItems="center">
                <Box>Price: </Box>

                <Box display="flex" flexDirection="column" pl="5px">
                  {item.item.sale ? (
                    <>
                      <Box
                        fontWeight="bold"
                        color="red"
                        lineHeight="13px">{` €${item.item.price}`}</Box>
                      <Box
                        sx={{
                          textDecorationLine: 'line-through',
                          fontSize: '11px',
                        }}>{` €${item.item.oldPrice}`}</Box>
                    </>
                  ) : (
                    <Box fontWeight="bold">{` €${item.item.price}`}</Box>
                  )}
                </Box>
              </Box>
              <Box>
                Size:
                <Box component="span" sx={{ fontWeight: 'bold' }}>
                  {` ${item?.productSize?.toUpperCase()}`}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};
