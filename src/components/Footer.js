import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import eula from '../assets/eula.pdf';
import privacyPolicy from '../assets/privacyPolicy.pdf';

const Footer = () => {
  return (
    <footer style={{ background: '#333', padding: '20px', marginTop: '20px', color: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} FratSwipe. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href={privacyPolicy} color="inherit" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
          {' | '}
          <Link href={eula} color="inherit" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
