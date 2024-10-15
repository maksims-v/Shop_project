import { ShoppingBagOutlined, PersonOutline } from '@mui/icons-material';
import { Box, InputBase, Divider, IconButton, Badge } from '@mui/material';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { memo, useCallback, useState } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/hook';
import { productListActions } from 'entities/Product/model/slice/productsListSlice';
import { getInputSearchValue } from 'entities/Product';
import { useSelector } from 'react-redux';

export interface NavbarRightPanelProps {
  onShowModal: () => void;
  onLogout: () => void;
  authData: boolean;
  productsQnty: number;
}

export const NavbarRightPanel = memo((props: NavbarRightPanelProps) => {
  const { onLogout, onShowModal, authData, productsQnty = 0 } = props;

  const inputValue = useSelector(getInputSearchValue);

  const dispatch = useAppDispatch();

  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(productListActions.inputValue(value));
    },
    [dispatch],
  );

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          right: '0%',
          display: 'flex',
          alignItems: 'center',
          height: '60px',
        }}>
        <Box
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 200,
            height: 40,
            mr: '10px',
            border: '1px solid #727272',
            borderRadius: '5px',
          }}>
          <InputBase
            onChange={(event) => onChangeSearch(event.target.value)}
            value={inputValue}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" color="#727272" />
          <AppLink to={`/search`}>
            <IconButton type="button" sx={{ p: '10px', color: '#f5b950' }} aria-label="search">
              <SearchIcon fontSize="small" />
            </IconButton>
          </AppLink>
        </Box>
        <Box>
          <AppLink to="/basket">
            <Badge
              badgeContent={productsQnty}
              color="primary"
              sx={{
                '& .MuiBadge-badge': {
                  right: 5,
                  top: 5,
                  padding: '0 4px',
                  height: '14px',
                  minWidth: '13px',
                },
              }}>
              <IconButton>
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
          </AppLink>

          {authData ? (
            <>
              <AppLink to="/profile">
                <IconButton>
                  <SettingsIcon />
                </IconButton>
              </AppLink>

              <IconButton onClick={onLogout}>
                <LogoutIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={onShowModal}>
              <PersonOutline />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
});
