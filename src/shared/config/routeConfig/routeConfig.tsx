import React from 'react';
import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { CategoryPage } from 'pages/CategoryPage';
import { SubCategoryPage } from 'pages/SubCategoryPage';
import { SectionPage } from 'pages/SectionPage';
import { ProductDetailPage } from 'pages/ProductDetailPage';
import { BasketPage } from 'pages/BasketPage';
import { SearchPage } from 'pages/SearchPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = 'main',
  PROFILE = 'profile',
  PAGE_SECTION = 'pageCategory',
  CATEGORY = 'category',
  SUB_CATEGORY = 'subcategory',
  PRODUCT_DETAIL = 'productdetail',
  NOT_FOUND = 'not_found',
  BASKET = 'basket',
  SEARCH = 'search',
  // WOMEN = 'women',
  // EQUIPMENT = 'equipment',
  // SALE = 'sale',
  // CLEARANCE = 'clearance',
  // NEW = 'new',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PROFILE]: '/profile',
  [AppRoutes.PAGE_SECTION]: '/:pageCategory',
  [AppRoutes.CATEGORY]: '/:pageCategory/:category',
  [AppRoutes.SUB_CATEGORY]: '/:pageCategory/:category/:subcategory',
  [AppRoutes.PRODUCT_DETAIL]: '/:pageCategory/:category/:subcategory/:productdetail',
  [AppRoutes.BASKET]: '/basket',
  [AppRoutes.SEARCH]: '/search',
  [AppRoutes.NOT_FOUND]: '*',

  // [AppRoutes.WOMEN]: '/shop/women"s',
  // [AppRoutes.EQUIPMENT]: '/shop/equipment',
  // [AppRoutes.SALE]: '/shop/sale',
  // [AppRoutes.CLEARANCE]: '/shop/clearance',
  // [AppRoutes.NEW]: '/shop/new',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.PAGE_SECTION]: {
    path: RoutePath.pageCategory,
    element: <SectionPage />,
  },
  [AppRoutes.CATEGORY]: {
    path: RoutePath.category,
    element: <CategoryPage />,
  },
  [AppRoutes.SUB_CATEGORY]: {
    path: RoutePath.subcategory,
    element: <SubCategoryPage />,
  },
  [AppRoutes.PRODUCT_DETAIL]: {
    path: RoutePath.productdetail,
    element: <ProductDetailPage />,
  },
  [AppRoutes.BASKET]: {
    path: RoutePath.basket,
    element: <BasketPage />,
  },
  [AppRoutes.SEARCH]: {
    path: RoutePath.search,
    element: <SearchPage />,
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
