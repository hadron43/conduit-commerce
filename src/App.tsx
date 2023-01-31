import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Home from './routes/Home';
import Footer from './components/Footer';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    warning: {
      main: '#FFCC00'
    },
    background: {
      default: '#000000'
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Home />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
