import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC, memo } from 'react';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props) => {
  const { to, theme = 'primary', className, children, ...otherProps } = props;

  return (
    <Link
      to={to}
      relative="path"
      className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
      {...otherProps}>
      {children}
    </Link>
  );
});
