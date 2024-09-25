import { Box } from '@mui/material';
import { memo } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ISubLink } from 'widgets/Navbar/model/types/navbar';

export interface NavbarSubLinksProps {
  setSubHeaderMenuOpen: (value: boolean) => void;
  subHeaderOpenLink: ISubLink[];
  subHeaderMenuOpen: boolean;
}

export const NavbarSubLinks = memo(
  ({ subHeaderOpenLink, subHeaderMenuOpen, setSubHeaderMenuOpen }: NavbarSubLinksProps) => {
    return (
      <div>
        {subHeaderOpenLink && subHeaderOpenLink.length !== 0 && (
          <>
            <Box
              component="div"
              sx={{
                borderTop: '1px solid #aeaeae',
                borderBottom: '1px solid #aeaeae',
                position: 'fixed',
                pr: '25px',
                top: '60px',
                left: '0',
                height: '50px',
                width: '100%',
                display: subHeaderMenuOpen ? 'flex' : 'none',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'black',
                backgroundColor: '#ebebeb',
              }}
              onMouseLeave={() => setSubHeaderMenuOpen(false)}>
              <Box component="div" display="flex" gap="20px">
                {subHeaderOpenLink &&
                  subHeaderOpenLink.map((item) => {
                    return (
                      <AppLink key={item.href} to={`${item.href}`}>
                        <Box
                          sx={{
                            color: 'black',
                            fontWeight: '600',
                            position: 'relative',
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
                          }}>
                          {item.label}
                        </Box>
                      </AppLink>
                    );
                  })}
              </Box>
            </Box>
          </>
        )}
      </div>
    );
  },
);
