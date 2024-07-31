import React from 'react';
import { Container, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ background: '#333', padding: '20px', marginTop: '20px', color: 'white' }}>
      <Container maxWidth="lg">
        <Typography variant="body1">
          &copy; {new Date().getFullYear()} FratSwipe. All rights reserved.
        </Typography>
        <Typography variant="body2">
          <Link href="#" color="inherit">
            Privacy Policy
          </Link>
          {' | '}
          <Link href="#" color="inherit">
            Terms of Service
          </Link>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
