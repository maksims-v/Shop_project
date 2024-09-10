import React, { useCallback, useState } from 'react';
import { Box, IconButton, InputBase, Divider, Container, Badge, Link } from '@mui/material';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import Logo from 'shared/assets/logo/logo_small.png';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { PersonOutline, ShoppingBagOutlined } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { loginByUsername } from 'features/AuthByUserName/model/services/loginByUsername';

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuth, setIsAuth] = useState(false);

  const dispatch = useDispatch();

  const userData = {
    identifier: 'test@inbox.lv',
    password: '12345a',
  };

  const onLoginClick = () => {
    dispatch(loginByUsername(userData));
  };

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
        <AppLink to={'/'}>
          <Box
            sx={{
              position: 'absolute',
              top: '52%',
              transform: 'translate(0%, -50%)',
            }}>
            <img className={classNames(cls.logo, {}, [className])} src={Logo} alt="Logo" />
          </Box>
        </AppLink>
        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            color: 'white',
            gap: '20px',
          }}>
          <AppLink to={'/'}>
            <Box
              sx={{
                color: 'black',
                display: 'inline-block',
                position: 'relative',
                fontWeight: '600',
                '&:after': {
                  content: "''",
                  position: 'absolute',
                  width: '100%',
                  transform: 'scaleX(0)',
                  height: '2px',
                  bottom: '0',
                  left: '0',
                  backgroundColor: '#f5b950',
                  transformOrigin: 'bottom right',
                  transition: 'transform 0.25s ease-out',
                },
                '&:hover:after': {
                  transform: 'scaleX(1)',
                  transformOrigin: 'bottom left',
                },
              }}>
              MENS
            </Box>
          </AppLink>
        </Box>
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
              <Link href="/basket">
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
              </Link>

              {isAuth ? (
                <>
                  <Link href="/userdashboard">
                    <IconButton>
                      <SettingsIcon />
                    </IconButton>
                  </Link>

                  <IconButton>
                    <LogoutIcon />
                  </IconButton>
                </>
              ) : (
                <IconButton>
                  <PersonOutline onClick={onLoginClick} />
                </IconButton>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};