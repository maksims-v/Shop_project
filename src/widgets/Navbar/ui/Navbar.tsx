import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Navbar.module.scss';
import Logo from 'shared/assets/logo/logo_small.png';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink to={'/'}>
        <img className={classNames(cls.logo, {}, [className])} src={Logo} alt="Logo" />
      </AppLink>
      <AppLink to={RoutePath.mens}>MEN</AppLink>
    </div>
  );
};
