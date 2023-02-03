import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, responsiveFontSizes } from '@mui/material';
import Header from './components/Header';
import Home from './routes/Home';
import Footer from './components/Footer';
import { useState } from 'react';

let darkTheme = createTheme({
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

let lightTheme = createTheme({})

darkTheme = responsiveFontSizes(darkTheme);

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Container maxWidth="lg">
        <Home />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
