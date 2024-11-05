import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import {
  Box,
  IconButton,
  Divider,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Drawer,
  Typography,
} from '@mui/material';
import React, { memo, useState } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ILinkListItem } from 'widgets/Navbar/model/types/navbar';
import ImageLogo from 'shared/assets/logo/logo_small.png';

type SideBarProps = { data?: ILinkListItem[]; mobileOpen: boolean; handleDrawerToggle: () => void };

export const SideBar = memo((props: SideBarProps) => {
  const { data, handleDrawerToggle, mobileOpen } = props;

  const [expanded, setExpanded] = useState<boolean | string>(true);
  const disable = true;

  const handleChange =
    (panel: boolean | string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box component="nav">
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 250,
          },
        }}>
        <Box sx={{ textAlign: 'center', backgroundColor: 'white', height: '100%' }}>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ position: 'absolute', right: '0px', top: '6px', zIndex: 5 }}>
            <KeyboardArrowLeftIcon fontSize="large" />
          </IconButton>
          <AppLink to={'/'}>
            <Box sx={{}}>
              <img width={90} height={65} src={ImageLogo} alt="Logo" />
            </Box>
          </AppLink>
          <Divider color="white" />

          <Box sx={{ backgroundColor: 'white' }}>
            {data &&
              data.map((item, index) =>
                item.link.length == 0 ? (
                  <Accordion
                    key={index}
                    sx={{
                      textAlign: 'left',
                    }}
                    disableGutters={disable}
                    expanded={expanded === item.label}
                    onChange={handleChange(item.label)}>
                    <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
                      <AppLink to={item.href}>
                        <Typography
                          onClick={handleDrawerToggle}
                          sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                          {item.label}
                        </Typography>
                      </AppLink>
                    </AccordionSummary>
                  </Accordion>
                ) : (
                  <Accordion
                    key={index}
                    sx={{
                      textAlign: 'left',
                    }}
                    disableGutters={disable}
                    expanded={expanded === item.label}
                    onChange={handleChange(item.label)}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1bh-content"
                      id="panel1bh-header">
                      <Typography sx={{ width: '100%', flexShrink: 0, fontWeight: 'bold' }}>
                        {item.label}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails sx={{ p: '0px 16px' }}>
                      {item.link.map((linkItem, index) => (
                        <AppLink key={index} to={linkItem.href}>
                          <Box
                            onClick={handleDrawerToggle}
                            sx={{ fontSize: '14px', mb: '5px', pl: ' 5px' }}>
                            {linkItem.label}
                          </Box>
                        </AppLink>
                      ))}
                    </AccordionDetails>
                  </Accordion>
                ),
              )}
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
});
