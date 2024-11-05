import { ShoppingBagOutlined, PersonOutline } from '@mui/icons-material';
import { Box, IconButton, Badge, InputBase, Divider } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { unsetToken } from 'shared/lib/auth/auth';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';
import { Logo } from 'shared/ui/Logo/Logo';
import { getUserAuthData } from 'entities/User';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/hook';
import { getBasketProducts } from 'entities/Basket';
import { LoginModal } from 'features/AuthByUserName';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getNavbarData } from 'widgets/Navbar/model/selectors/getNavbarData/getNavbarData';
import { SideBar } from 'widgets/SideBar';

type MobileNavbar = {};

export const MobileNavbar = (props: MobileNavbar) => {
  const {} = props;

  const authData = useAppSelector(getUserAuthData);
  const basketProductsQnty = useAppSelector(getBasketProducts);
  const data = useAppSelector(getNavbarData);

  const dispatch = useAppDispatch();

  const [isAuthModal, setIsAuthModal] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [badgeCount, setBadgeCount] = useState(1);
  const [openSearchMenu, setOpenSearchMenu] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
    dispatch(loginActions.clearUserState());
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const logout = () => {
    unsetToken();
  };

  const toggleSearch = () => {
    setOpenSearchMenu(false);
    setSearchValue('');
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '50px',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '50',
          flexDirection: 'column',
          flex: '0 0 auto',
          backgroundColor: 'white',
          borderBottom: '1px solid black',
        }}>
        <Box
          sx={{
            position: 'absolute',
            top: '52%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
          <Logo />
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Box>
            <IconButton sx={{ color: 'black' }} onClick={() => setMobileOpen(true)}>
              <MenuIcon fontSize="large" />
            </IconButton>

            <IconButton
              onClick={() => setOpenSearchMenu(!openSearchMenu)}
              sx={{ color: 'black', p: '8px 0px' }}
              type="button"
              aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>

          <Box>
            <Box>
              <AppLink to="/basket">
                <Badge
                  badgeContent={basketProductsQnty?.length}
                  color="primary"
                  invisible={badgeCount === 0}
                  sx={{
                    '& .MuiBadge-badge': {
                      top: 6,
                      padding: '0 4px',
                      height: '14px',
                      minWidth: '13px',
                    },
                  }}>
                  <IconButton sx={{ color: 'black', p: '8px 0px' }}>
                    <ShoppingBagOutlined />
                  </IconButton>
                </Badge>
              </AppLink>
              {authData ? (
                <>
                  <Link to="/usersdashboard">
                    <IconButton sx={{ color: 'black' }}>
                      <SettingsIcon />
                    </IconButton>
                  </Link>
                  <IconButton onClick={logout} sx={{ color: 'black', p: '8px 8px 8px 0px' }}>
                    <LogoutIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton
                  onClick={() => setIsAuthModal(!isAuthModal)}
                  sx={{
                    color: 'black',
                  }}>
                  <PersonOutline />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <SideBar handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen} data={data} />
      {openSearchMenu && (
        <Box
          sx={{
            p: '2px 4px',
            position: 'fixed',
            top: 50,
            left: '50%',
            transform: 'translate( -50%)',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'white',
            zIndex: '50',
            width: '102%',
            borderBottom: '1.5px solid #727272',
          }}>
          <InputBase
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} color="#727272" orientation="vertical" />

          <AppLink to={`/search/${searchValue}`}>
            <IconButton
              onClick={toggleSearch}
              type="button"
              sx={{ p: '10px', color: '#f5b950' }}
              aria-label="search">
              <SearchIcon />
            </IconButton>
          </AppLink>
        </Box>
      )}

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </>
  );
};
