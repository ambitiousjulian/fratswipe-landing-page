import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
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
  menuButton: {
    display: 'none', // Hide the menu button by default
    [theme.breakpoints.down('sm')]: {
      display: 'block', // Show the menu button on small screens
    },
    color: '#fff',
  },
  navButtons: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'none', // Hide nav buttons on small screens
    },
  },
  list: {
    width: 250,
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { label: 'Home', to: 'home' },
    { label: 'Features', to: 'features' },
    { label: 'Testimonials', to: 'testimonials' },
    { label: 'Get Started', to: 'get-started' },
  ];

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            FratSwipe
          </Typography>
          <div className={classes.navButtons}>
            {menuItems.map((item) => (
              <ScrollLink key={item.to} to={item.to} smooth={true} duration={500}>
                <Button className={classes.button2}>{item.label}</Button>
              </ScrollLink>
            ))}
          </div>
          <IconButton
            edge="end"
            className={classes.menuButton}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item.to}>
                <ScrollLink to={item.to} smooth={true} duration={500}>
                  <ListItemText primary={item.label} />
                </ScrollLink>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </AppBar>
  );
};

export default Navbar;
