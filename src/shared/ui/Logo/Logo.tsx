import { AppLink } from '../AppLink/AppLink';
import ImageLogo from 'shared/assets/logo/logo_small.png';
import { memo } from 'react';

export interface LogoProps {
  className?: string;
}

export const Logo = memo(({ className }: LogoProps) => {
  return (
    <AppLink to={'/'}>
      <img width={90} height={65} src={ImageLogo} alt="Logo" />
    </AppLink>
  );
});
