import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './NotFoundPage.module.scss';

export interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return <div className={classNames(cls.NotFoundPage, {}, [className])}>Страница не найдена</div>;
};
