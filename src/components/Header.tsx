import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import Image from 'mui-image';
import Switch from '@mui/material/Switch';

function Header(props: { setDarkMode: (arg0: boolean) => void; darkMode: boolean | undefined; }) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setDarkMode(event.target.checked);
  };

  return (
    <AppBar position="static" sx={{ my: 5 }} color='transparent'>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Box sx={{ maxWidth: '128px'}}>
              <Image src="/logo-nobg.png" alt="LOGO" width={'75%'} style={{ display: 'flex', marginTop: 'auto', marginBottom: 'auto'}} />
            </Box>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Switch aria-label='Dark Mode' checked={props.darkMode} onChange={handleChange} color='warning' />
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