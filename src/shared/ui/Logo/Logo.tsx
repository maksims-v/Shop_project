import { classNames } from 'shared/lib/classNames/classNames';
import * as cls from './Logo.module.scss';
import { Box } from '@mui/material';
import { AppLink } from '../AppLink/AppLink';
import ImageLogo from 'shared/assets/logo/logo_small.png';
import { memo } from 'react';

export interface LogoProps {
  className?: string;
}

export const Logo = memo(({ className }: LogoProps) => {
  return (
    <AppLink to={'/'}>
      <Box
        sx={{
          position: 'absolute',
          top: '52%',
          transform: 'translate(0%, -50%)',
        }}>
        <img className={classNames(cls.Logo, {}, [className])} src={ImageLogo} alt="Logo" />
      </Box>
    </AppLink>
  );
});
