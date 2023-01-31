import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" sx={{ my: 5 }} color='transparent'>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Box sx={{ maxWidth: '128px'}}>
              <img src="/logo.png" alt="LOGO" width={'75%'} style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto'}} />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button variant='contained' color='warning' size='large' sx={{ px: 4 }}>
              Log In
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;