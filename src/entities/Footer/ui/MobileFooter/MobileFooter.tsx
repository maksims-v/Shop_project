import { Box, Container, Typography, List, ListItem } from '@mui/material';
import { FooterAttributes } from 'entities/Footer/model/types/footer';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

export interface MobileFooterProps {
  data?: FooterAttributes;
  isLoading?: boolean;
}

export const MobileFooter = (props: MobileFooterProps) => {
  const { data, isLoading } = props;

  return (
    <Box sx={{ backgroundColor: '#262624', color: 'white', p: '40px 0px', mt: 'auto' }}>
      <Container maxWidth="md" sx={{ height: '100%' }}>
        {!isLoading && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '100%',
              p: '0px 10px',
              color: 'white',
            }}>
            <Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }} variant="h3">
                  {data && data?.supportLinks[0]?.label}
                </Typography>
                <List>
                  {data?.supportLinks[0]?.link?.map((item, index) => (
                    <ListItem key={index} sx={{ p: '0px 0px 0px 0px', fontSize: '16px' }}>
                      <AppLink theme={AppLinkTheme.SECONDARY} to={item.href}>
                        {item.label}
                      </AppLink>
                    </ListItem>
                  ))}{' '}
                </List>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }} variant="h3">
                  {data && data?.aboutLinks[0]?.label}
                </Typography>
                <List>
                  {data?.aboutLinks[0]?.link?.map((item, index) => (
                    <ListItem key={index} sx={{ p: '0px 0px 0px 0px', fontSize: '16px' }}>
                      <AppLink theme={AppLinkTheme.SECONDARY} to={item.href}>
                        {item.label}
                      </AppLink>
                    </ListItem>
                  ))}{' '}
                </List>
              </Box>
            </Box>
            <Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }} variant="h3">
                  {data && data?.allProductsLinks[0]?.label}
                </Typography>
                <List>
                  {data?.allProductsLinks[0]?.link?.map((item, index) => (
                    <ListItem key={index} sx={{ p: '0px 0px 0px 0px', fontSize: '16px' }}>
                      <AppLink theme={AppLinkTheme.SECONDARY} to={item.href}>
                        {item.label}
                      </AppLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Box>
                <Typography sx={{ fontWeight: 'bold', fontSize: '18px' }} variant="h3">
                  {data && data?.socialLinks[0]?.label}
                </Typography>
                <List>
                  {data?.socialLinks[0]?.link?.map((item, index) => (
                    <ListItem key={index} sx={{ p: '0px 0px 0px 0px', fontSize: '16px' }}>
                      <AppLink theme={AppLinkTheme.SECONDARY} to={item.href}>
                        {item.label}
                      </AppLink>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </Box>
  );
};
