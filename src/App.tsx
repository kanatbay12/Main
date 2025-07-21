import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Schemes from './pages/Schemes';
import Firmwares from './pages/Firmwares';
import Learning from './pages/Learning';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff9800',
    },
  },
});

const navLinks = [
  { to: '/', label: 'Главная' },
  { to: '/schemes', label: 'Схемы' },
  { to: '/firmwares', label: 'Прошивки' },
  { to: '/learning', label: 'Обучение' },
];

function Navigation() {
  const location = useLocation();
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Автоэлектроника
        </Typography>
        {navLinks.map(link => (
          <Button
            key={link.to}
            component={Link}
            to={link.to}
            color={location.pathname === link.to ? 'secondary' : 'inherit'}
            sx={{ mx: 1, fontWeight: location.pathname === link.to ? 'bold' : 'normal' }}
          >
            {link.label}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Navigation />
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/schemes" element={<Schemes />} />
            <Route path="/firmwares" element={<Firmwares />} />
            <Route path="/learning" element={<Learning />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
