import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Fade, Zoom, Bounce } from 'react-reveal';
import { FaCheckCircle, FaShieldAlt, FaHeadset } from 'react-icons/fa';
import frame1 from '../assets/frame1.png';
import frame2 from '../assets/frame2.png';
import frame3 from '../assets/frame3.png';
import frame4 from '../assets/frame4.png';
import frame5 from '../assets/frame5.png';
import frame6 from '../assets/frame6.png';
import logo from '../assets/logo2.png';
import AppleIcon from '@mui/icons-material/Apple';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6), // Increased padding for better spacing
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  title: {
    fontFamily: 'Montserrat, sans-serif', // Using Montserrat for the title
    fontWeight: 700, // Bold weight for better emphasis
    fontSize: '2.5rem', // Increased font size for better visibility
    color: '#3f51b5', // Using the theme color
    marginBottom: theme.spacing(2), // Added spacing for better layout
  },
  header: {
    marginBottom: theme.spacing(10),
    textAlign: 'center',
    color: '#3f51b5',
  },
  title: {
    fontFamily: '"Roboto Condensed", sans-serif', // Bold, condensed font
    fontWeight: 700,
    fontSize: '3rem', // Larger size for impact
    color: '#3f51b5',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)', // Adding a subtle shadow for depth
  },
  paper: {
    padding: theme.spacing(6), // Increased padding inside the papers
    textAlign: 'center',
    background: '#fff !important',
    color: '#333',
    borderRadius: '25px', // Increased border radius
    boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: 'transform 0.3s ease-in-out', // Smooth transition for hover
    },
  },
  section: {
    marginBottom: theme.spacing(12), // Increased section separation
  },
  imageGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(5), // Increased gap
  },
  frameImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '340px', // Slightly increased max width
    borderRadius: '25px', // Rounded corners for images
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    '&:hover': {
      transform: 'scale(1.05)', // Subtle zoom effect on hover
    },
  },
  testimonial: {
    padding: theme.spacing(5),
    marginBottom: theme.spacing(5),
    background: '#fff',
    borderRadius: '25px',
    textAlign: 'left',
    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
  },
  getStartedButton: {
    marginTop: theme.spacing(7),
    backgroundColor: '#000', // Apple's typical branding color
    color: '#fff',
    fontSize: '4.0rem', // Larger font size
    padding: theme.spacing(2, 6), // More padding for a larger button
    borderRadius: '25px', // Rounded corners
    boxShadow: '0 12px 24px rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: '#333', // Darker on hover
      transform: 'scale(1.1)', // Slight scale on hover
      boxShadow: '0 15px 30px rgba(0,0,0,0.5)',
    },
  },
  appleIcon: {
    marginRight: theme.spacing(2), // Space between icon and text
  }
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box id="home" my={4} className={classes.header}>
        <Fade>
          <img src={logo} alt="FratSwipe Logo" style={{ maxWidth: '220px', margin: '0 auto', display: 'block', borderRadius: '30px' }}/>
          <Typography variant="h2" className={classes.title} gutterBottom>
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
        <Typography variant="h4" gutterBottom padding={6}>
          App Screens
        </Typography>
        <Grid container spacing={3} className={classes.imageGrid}>
          <Bounce>
            <Grid item><img src={frame1} alt="Frame 1" className={classes.frameImage} /></Grid>
            <Grid item><img src={frame2} alt="Frame 2" className={classes.frameImage} /></Grid>
            <Grid item><img src={frame3} alt="Frame 3" className={classes.frameImage} /></Grid>
            <Grid item><img src={frame4} alt="Frame 4" className={classes.frameImage} /></Grid>
            <Grid item><img src={frame5} alt="Frame 5" className={classes.frameImage} /></Grid>
            <Grid item><img src={frame6} alt="Frame 6" className={classes.frameImage} /></Grid>
          </Bounce>
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
          <Button className={classes.getStartedButton} startIcon={<AppleIcon className={classes.appleIcon}/>}>
            Download Now
          </Button>
        </Fade>
      </Box>
    </Container>
  );
};

export default LandingPage;
