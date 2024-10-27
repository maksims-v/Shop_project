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

  const isExternal =
    typeof to === 'string' && (to.startsWith('http://') || to.startsWith('https://'));

  if (isExternal) {
    return (
      <a
        href={to as string}
        className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
        {...otherProps}>
        {children}
      </a>
    );
  }

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
