import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { MensPage } from 'pages/MensPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  MENS = 'mens',
  PROFILE = 'profile',
  NOT_FOUND = 'not_found',

  // WOMEN = 'women',
  // EQUIPMENT = 'equipment',
  // SALE = 'sale',
  // CLEARANCE = 'clearance',
  // NEW = 'new',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.MENS]: '/mens',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.NOT_FOUND]: '*',

  // [AppRoutes.WOMEN]: '/shop/women"s',
  // [AppRoutes.EQUIPMENT]: '/shop/equipment',
  // [AppRoutes.SALE]: '/shop/sale',
  // [AppRoutes.CLEARANCE]: '/shop/clearance',
  // [AppRoutes.NEW]: '/shop/new',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.MENS]: {
    path: RoutePath.mens,
    element: <MensPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
  // [AppRoutes.ABOUT]: {
  //   path: RoutePath.about,
  //   element: <AboutPage />,
  // },
  // [AppRoutes.ABOUT]: {
  //   path: RoutePath.about,
  //   element: <AboutPage />,
  // },
  // [AppRoutes.ABOUT]: {
  //   path: RoutePath.about,
  //   element: <AboutPage />,
  // },
  // [AppRoutes.ABOUT]: {
  //   path: RoutePath.about,
  //   element: <AboutPage />,
  // },
};
