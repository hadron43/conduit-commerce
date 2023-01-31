import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import { IconButton } from '@mui/material';
import Image from 'mui-image';

function Footer() {
  return (
    <Container maxWidth="lg">
      <hr />
      <Toolbar disableGutters sx={{ my: 5 }}>
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
          <Box sx={{ maxWidth: '150px' }}>
            <Image src="/logo-nobg.png" alt="LOGO" width={'85%'} style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto' }} />
          </Box>
        </Box>

        <Box sx={{ flexGrow: 0 }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <FacebookIcon fontSize='large' />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <LinkedInIcon fontSize='large' />
          </IconButton>
          <IconButton
            size="large"
            aria-label="show more"
            aria-haspopup="true"
            color="inherit"
          >
            <InstagramIcon fontSize='large' />
          </IconButton>
        </Box>
      </Toolbar>
    </Container>
  );
}
export default Footer;