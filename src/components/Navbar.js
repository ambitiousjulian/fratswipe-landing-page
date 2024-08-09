import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link as ScrollLink } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: 'linear-gradient(to bottom, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb)',
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: '#fff',
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
            <Button className={classes.button}>Home</Button>
          </ScrollLink>
          <ScrollLink to="features" smooth={true} duration={500}>
            <Button className={classes.button}>Features</Button>
          </ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            <Button className={classes.button}>Testimonials</Button>
          </ScrollLink>
          <ScrollLink to="get-started" smooth={true} duration={500}>
            <Button className={classes.button}>Get Started</Button>
          </ScrollLink>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
