import { ShoppingBagOutlined, PersonOutline } from '@mui/icons-material';
import { Box, InputBase, Divider, IconButton, Badge } from '@mui/material';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { memo } from 'react';

export interface NavbarRightPanelProps {
  onShowModal?: () => void;
  onLogout?: () => void;
  authData: boolean;
}

export const NavbarRightPanel = memo((props: NavbarRightPanelProps) => {
  const { onLogout, onShowModal, authData } = props;

  return (
    <Box sx={{ position: 'relative' }}>
      <Box
        sx={{
          position: 'absolute',
          right: '0%',
          display: 'flex',
          alignItems: 'center',
          height: '60px',
        }}>
        <Box
          sx={{
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 200,
            height: 40,
            mr: '10px',
            border: '1px solid #727272',
            borderRadius: '5px',
          }}>
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" color="#727272" />
          <AppLink to={`/search/`}>
            <IconButton type="button" sx={{ p: '10px', color: '#f5b950' }} aria-label="search">
              <SearchIcon fontSize="small" />
            </IconButton>
          </AppLink>
        </Box>
        <Box>
          <AppLink to="/basket">
            <Badge
              badgeContent={5}
              color="primary"
              sx={{
                '& .MuiBadge-badge': {
                  right: 5,
                  top: 5,
                  padding: '0 4px',
                  height: '14px',
                  minWidth: '13px',
                },
              }}>
              <IconButton>
                <ShoppingBagOutlined />
              </IconButton>
            </Badge>
          </AppLink>

          {authData ? (
            <>
              <AppLink to="/profile">
                <IconButton>
                  <SettingsIcon />
                </IconButton>
              </AppLink>

              <IconButton onClick={onLogout}>
                <LogoutIcon />
              </IconButton>
            </>
          ) : (
            <IconButton onClick={onShowModal}>
              <PersonOutline />
            </IconButton>
          )}
        </Box>
      </Box>
    </Box>
  );
});
