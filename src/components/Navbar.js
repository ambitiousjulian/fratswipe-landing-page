import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as ScrollLink } from 'react-scroll';

// Update your useStyles in Navbar component
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#283593', // Ensuring a solid dark blue background
  },
  title: {
    color: '#fff',
    flexGrow: 1,
  },
  button2: {
    color: '#fff !important', // Using !important to override any other styles
    fontWeight: 'bold',
    cursor: 'pointer',
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FratSwipe
          </Typography>
          <ScrollLink to="home" smooth={true} duration={500}>
            <Button className={classes.button2}>Home</Button>
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500}>
            <Button className={classes.button2}>Features</Button>
          </ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            <Button className={classes.button2}>Testimonials</Button>
          </ScrollLink>
          <ScrollLink to="get-started" smooth={true} duration={500}>
            <Button className={classes.button2}>Get Started</Button>
          </ScrollLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
