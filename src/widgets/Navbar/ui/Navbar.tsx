import React from 'react';
import { Box, IconButton, InputBase, Divider } from '@mui/material';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import Logo from 'shared/assets/logo/logo_small.png';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import SearchIcon from '@mui/icons-material/Search';

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink to={'/'}>
        <img className={classNames(cls.logo, {}, [className])} src={Logo} alt="Logo" />
      </AppLink>
      <AppLink to={RoutePath.mens}>asdf</AppLink>
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
        <IconButton type="button" sx={{ p: '10px', color: '#f5b950' }} aria-label="search">
          <SearchIcon fontSize="small" />
        </IconButton>
      </Box>

      <Button size={ButtonSize.L}>ETxt</Button>
    </div>
  );
};
