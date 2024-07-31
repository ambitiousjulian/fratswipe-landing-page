import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

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
          <Button className={classes.button}>Home</Button>
          <Button className={classes.button}>Features</Button>
          <Button className={classes.button}>Testimonials</Button>
          <Button className={classes.button}>Get Started</Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
