import React, { memo, useCallback, useState } from 'react';
import { Box, Container, useMediaQuery } from '@mui/material';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks/hook';
import { LoginModal } from 'features/AuthByUserName/ui/LoginModal/LoginModal';
import { getUserAuthData, userActions } from 'entities/User';
import { loginActions } from 'features/AuthByUserName/model/slice/loginSlice';
import { getNavbarData } from '../model/selectors/getNavbarData/getNavbarData';
import { NavbarLinks } from './NavbarLinks/NavbarLinks';
import { Logo } from 'shared/ui/Logo/Logo';
import { NavbarRightPanel } from './NavbarRightPanel/NavbarRightPanel';
import { getBasketProducts } from 'entities/Basket';
import { MobileNavbar } from './MobileNavbar/MobileNavbar';

export const Navbar = memo(() => {
  const mobileScreen = useMediaQuery('(max-width:570px)');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const dispatch = useAppDispatch();
  const authData = useAppSelector(getUserAuthData);
  const data = useAppSelector(getNavbarData);

  const basketProductsQnty = useAppSelector(getBasketProducts);

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

  return mobileScreen ? (
    <MobileNavbar />
  ) : (
    <Box
      sx={{
        width: '100%',
        height: '60px',
        position: 'fixed',
        backgroundColor: '#ebebeb',
        zIndex: '99',
      }}>
      <Container maxWidth="xl" sx={{ height: '100%', width: '100%' }}>
        <Box
          sx={{
            position: 'absolute',
            top: '52%',
            transform: 'translate(0%, -50%)',
          }}>
          <Logo />
        </Box>
        <NavbarLinks data={data} />
        <NavbarRightPanel
          onShowModal={onShowModal}
          onLogout={onLogout}
          authData={authData ? true : false}
          productsQnty={basketProductsQnty?.length}
        />
      </Container>

      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
    </Box>
  );
});
