import React, { memo, useCallback, useState } from 'react';
import { Box, IconButton, InputBase, Divider, Container, Badge } from '@mui/material';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { PersonOutline, ShoppingBagOutlined } from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/hook';
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal';
import { getUserAuthData, userActions } from 'entities/User';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getNavbarData } from '../model/selectors/getNavbarData/getNavbarData';
import { NavbarLinks } from './NavbarLinks/NavbarLinks';
import { NavbarSubLinks } from './NavbarSubLinks/NavbarSubLinks';
import { ISubLink } from '../model/types/navbar';
import { Logo } from 'shared/ui/Logo/Logo';

export const Navbar = memo(() => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const [subHeaderOpenLink, setSubHeaderOpenLink] = useState<ISubLink[]>([]);
  const [subHeaderMenuOpen, setSubHeaderMenuOpen] = useState(false);

  const openMenu = (listLink: ISubLink[]) => {
    setSubHeaderOpenLink(listLink);
    setSubHeaderMenuOpen(true);
  };

  const dispatch = useAppDispatch();
  const authData = useAppSelector(getUserAuthData);
  const data = useAppSelector(getNavbarData);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
    dispatch(loginActions.clearUserState());
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
    setIsAuthModal(false);
  }, [dispatch]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '60px',
        position: 'fixed',
        backgroundColor: '#ebebeb',
        zIndex: '99',
      }}>
      <Container maxWidth="xl" sx={{ height: '100%', width: '100%' }}>
        <Logo />
        <NavbarLinks data={data} openMenu={openMenu} />
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
              <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" color="#727272" />
              <AppLink to={`/search/`}>
                <IconButton type="button" sx={{ p: '10px', color: '#f5b950' }} aria-label="search">
                  <SearchIcon fontSize="small" />
                </IconButton>
              </AppLink>
            </Box>
            <Box>
              <AppLink to="/basket">
                <Badge
                  badgeContent={5}
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
      </Container>
      <NavbarSubLinks
        subHeaderOpenLink={subHeaderOpenLink}
        setSubHeaderMenuOpen={setSubHeaderMenuOpen}
        subHeaderMenuOpen={subHeaderMenuOpen}
      />

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </Box>
  );
});
