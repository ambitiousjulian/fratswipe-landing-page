// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import GlobalStyle from './styles/globalStyles';
import theme from './theme'; // Ensure this is the correct path to your updated theme
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Include other routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
