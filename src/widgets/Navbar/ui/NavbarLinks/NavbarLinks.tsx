import { Box } from '@mui/material';
import { memo, useMemo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ILinkListItem, ISubLink } from 'widgets/Navbar/model/types/navbar';

export interface NavbarLinksProps {
  data?: ILinkListItem[];
  openMenu?: (value: ISubLink[]) => void;
}

export const NavbarLinks = memo(({ data, openMenu }: NavbarLinksProps) => {
  const renderNavLinks = useMemo(() => {
    return data?.map((item) => (
      <AppLink key={item.label} to={`${item.href}`}>
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
          }}
          onMouseEnter={() => openMenu(item.link)}>
          {item.label}
        </Box>
      </AppLink>
    ));
  }, [data]);

  return (
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
      {renderNavLinks}
    </Box>
  );
});
