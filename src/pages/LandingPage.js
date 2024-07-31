import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fade, Zoom } from 'react-reveal';
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
  },
  icon: {
    fontSize: '4rem',
    color: '#ff9a9e',
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    background: 'rgba(255, 255, 255, 0.8)',
    color: '#333',
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
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box my={4} className={classes.section}>
        <Fade>
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to FratSwipe
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            The ultimate app for fraternity and sorority recruitment.
          </Typography>
        </Fade>
      </Box>

      <Box my={4} className={classes.section}>
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

      <Box my={4} className={classes.section}>
        <Typography variant="h4" gutterBottom>
          App Screens
        </Typography>
        <Grid container spacing={3} className={classes.imageGrid}>
          <Grid item>
            <img src={frame1} alt="Frame 1" className={classes.frameImage} />
          </Grid>
          <Grid item>
            <img src={frame2} alt="Frame 2" className={classes.frameImage} />
          </Grid>
          <Grid item>
            <img src={frame3} alt="Frame 3" className={classes.frameImage} />
          </Grid>
          <Grid item>
            <img src={frame4} alt="Frame 4" className={classes.frameImage} />
          </Grid>
          <Grid item>
            <img src={frame5} alt="Frame 5" className={classes.frameImage} />
          </Grid>
          <Grid item>
            <img src={frame6} alt="Frame 6" className={classes.frameImage} />
          </Grid>
        </Grid>
      </Box>

      <Box my={4} className={classes.section}>
        <Typography variant="h4" gutterBottom>
          Testimonials
        </Typography>
        <Fade>
          <Paper elevation={3} className={classes.paper} style={{ marginBottom: '20px' }}>
            <Typography variant="h6" gutterBottom>
              "FratSwipe revolutionized our recruitment process!"
            </Typography>
            <Typography>- John Doe, Chapter President</Typography>
          </Paper>
        </Fade>
        <Fade>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              "A must-have for any fraternity or sorority."
            </Typography>
            <Typography>- Jane Smith, Chapter Member</Typography>
          </Paper>
        </Fade>
      </Box>

      <Box my={4} className={classes.section}>
        <Fade>
          <Typography variant="h4" gutterBottom>
            Get Started
          </Typography>
          <Typography variant="h6">
            Download FratSwipe today and streamline your fraternity and sorority recruitment!
          </Typography>
        </Fade>
      </Box>
    </Container>
  );
};

export default LandingPage;
