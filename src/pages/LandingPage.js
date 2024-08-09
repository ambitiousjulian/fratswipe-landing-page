import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fade, Zoom, Bounce } from 'react-reveal';
import { FaCheckCircle, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import frame1 from '../assets/frame1.png'; // Replace with the actual paths to your images
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';
import frame4 from '../assets/frame4.png';
import frame5 from '../assets/frame5.png';
import frame6 from '../assets/frame6.png';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
    background: 'linear-gradient(135deg, #ff9a9e, #c2e9fb)',
    minHeight: '100vh',
  },
  header: {
    marginBottom: theme.spacing(6),
    textAlign: 'center',
    color: '#fff',
  },
  icon: {
    fontSize: '4rem',
    color: '#ff9a9e',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#333',
    borderRadius: '12px',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-10px)',
    },
  },
  section: {
    marginBottom: theme.spacing(6),
  },
  imageGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(3),
  },
  frameImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '300px', // Adjust based on your design
    borderRadius: '8px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  testimonial: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '12px',
    textAlign: 'left',
    boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
  },
  getStartedButton: {
    marginTop: theme.spacing(4),
    background: '#ff9a9e',
    color: '#fff',
    fontSize: '1.2rem',
    padding: theme.spacing(1.5, 3),
    borderRadius: '8px',
    transition: 'background 0.3s',
    '&:hover': {
      background: '#feb47b',
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box id="home" my={4} className={classes.header}>
        <Fade>
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to FratSwipe
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            The ultimate app for fraternity and sorority recruitment.
          </Typography>
        </Fade>
      </Box>

      <Box id="features" my={4} className={classes.section}>
        <Typography variant="h4" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Zoom>
              <Paper elevation={3} className={classes.paper}>
                <FaCheckCircle className={classes.icon} />
                <Typography variant="h5" gutterBottom>
                  Easy to Use
                </Typography>
                <Typography>
                  Our user-friendly interface ensures a seamless experience for both admins and members.
                </Typography>
              </Paper>
            </Zoom>
          </Grid>
          <Grid item xs={12} md={4}>
            <Zoom>
              <Paper elevation={3} className={classes.paper}>
                <FaShieldAlt className={classes.icon} />
                <Typography variant="h5" gutterBottom>
                  Secure
                </Typography>
                <Typography>
                  We prioritize your privacy and security with top-notch measures.
                </Typography>
              </Paper>
            </Zoom>
          </Grid>
          <Grid item xs={12} md={4}>
            <Zoom>
              <Paper elevation={3} className={classes.paper}>
                <FaHeadset className={classes.icon} />
                <Typography variant="h5" gutterBottom>
                  24/7 Support
                </Typography>
                <Typography>
                  Our support team is available around the clock to assist you with any issues.
                </Typography>
              </Paper>
            </Zoom>
          </Grid>
        </Grid>
      </Box>

      <Box id="app-screens" my={4} className={classes.section}>
        <Typography variant="h4" gutterBottom>
          App Screens
        </Typography>
        <Grid container spacing={3} className={classes.imageGrid}>
          <Grid item>
            <Bounce>
              <img src={frame1} alt="Frame 1" className={classes.frameImage} />
            </Bounce>
          </Grid>
          <Grid item>
            <Bounce>
              <img src={frame2} alt="Frame 2" className={classes.frameImage} />
            </Bounce>
          </Grid>
          <Grid item>
            <Bounce>
              <img src={frame3} alt="Frame 3" className={classes.frameImage} />
            </Bounce>
          </Grid>
          <Grid item>
            <Bounce>
              <img src={frame4} alt="Frame 4" className={classes.frameImage} />
            </Bounce>
          </Grid>
          <Grid item>
            <Bounce>
              <img src={frame5} alt="Frame 5" className={classes.frameImage} />
            </Bounce>
          </Grid>
          <Grid item>
            <Bounce>
              <img src={frame6} alt="Frame 6" className={classes.frameImage} />
            </Bounce>
          </Grid>
        </Grid>
      </Box>

      <Box id="testimonials" my={4} className={classes.section}>
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
        <Fade>
          <Paper elevation={3} className={classes.testimonial}>
            <Typography variant="h6" gutterBottom>
              "FratSwipe revolutionized our recruitment process!"
            </Typography>
            <Typography>- John Doe, Chapter President</Typography>
          </Paper>
        </Fade>
        <Fade>
          <Paper elevation={3} className={classes.testimonial}>
            <Typography variant="h6" gutterBottom>
              "A must-have for any fraternity or sorority."
            </Typography>
            <Typography>- Jane Smith, Chapter Member</Typography>
          </Paper>
        </Fade>
      </Box>

      <Box id="get-started" my={4} className={classes.section} textAlign="center">
        <Fade>
          <Typography variant="h4" gutterBottom>
            Get Started
          </Typography>
          <Typography variant="h6" paragraph>
            Download FratSwipe today and streamline your fraternity and sorority recruitment!
          </Typography>
          <Button className={classes.getStartedButton}>Download Now</Button>
        </Fade>
      </Box>
    </Container>
  );
};

export default LandingPage;
