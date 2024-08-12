import React, { useState } from 'react';
import { Container, Typography, Grid, Paper, Box, Button as MuiButton } from '@mui/material';
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
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    backgroundColor: '#f4f4f9',
    minHeight: '100vh',
  },
  mainTitle: {
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 700,
    fontSize: '2.5rem',
    color: '#3f51b5',
    marginBottom: theme.spacing(2),
  },
  header: {
    marginBottom: theme.spacing(10),
    textAlign: 'center',
    color: '#3f51b5',
  },
  sectionTitle: {
    fontFamily: '"Roboto Condensed", sans-serif',
    fontWeight: 700,
    fontSize: '3rem',
    color: '#3f51b5',
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
  },
  paper: {
    padding: theme.spacing(6),
    textAlign: 'center',
    background: '#fff !important',
    color: '#333',
    borderRadius: '25px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
    '&:hover': {
      transform: 'translateY(-5px)',
      transition: 'transform 0.3s ease-in-out',
    },
  },
  section: {
    marginBottom: theme.spacing(12),
  },
  imageGrid: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(5),
  },
  frameImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '340px',
    borderRadius: '25px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
    '&:hover': {
      transform: 'scale(1.05)',
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
    backgroundColor: '#000 !important',
    color: '#fff !important',
    fontSize: '1.5rem !important',
    padding: theme.spacing(2, 6) + ' !important',
    borderRadius: '25px !important',
    boxShadow: '0 12px 24px rgba(0,0,0,0.3) !important',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'none !important',
    '&:hover': {
      backgroundColor: '#333 !important',
      transform: 'scale(1.1) !important',
      boxShadow: '0 15px 30px rgba(0,0,0,0.5) !important',
    },
  },
  appleIcon: {
    marginRight: theme.spacing(2) + ' !important',
    fontSize: '2rem !important',
  },
}));

const ContactWrapper = styled.section`
  background: #f4f4f9;
  color: #333;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ContactTitle = styled.h2`
  font-size: 3rem !important;
  margin-bottom: 2rem !important;
  font-weight: bold !important;
  font-family: 'Montserrat, sans-serif' !important;
  color: #3f51b5 !important;
`;

const ContactForm = styled.form`
  background: #ffffff !important;
  color: #333 !important;
  padding: 2rem !important;
  border-radius: 15px !important;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1) !important;
  width: 80% !important;
  max-width: 600px !important;
  display: flex !important;
  flex-direction: column !important;
  gap: 1.5rem !important;
  border: 1px solid #e0e0e0 !important;
`;

const Input = styled.input`
  padding: 1rem !important;
  border: 1px solid #e0e0e0 !important;
  border-radius: 8px !important;
  font-size: 1rem !important;
  font-family: 'Roboto, sans-serif' !important;
  background-color: #fafafa !important;
  transition: border-color 0.3s ease !important;

  &:focus {
    border-color: #3f51b5 !important;
    outline: none !important;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem !important;
  border: 1px solid #e0e0e0 !important;
  border-radius: 8px !important;
  font-size: 1rem !important;
  resize: vertical !important;
  min-height: 150px !important;
  font-family: 'Roboto, sans-serif' !important;
  background-color: #fafafa !important;
  transition: border-color 0.3s ease !important;

  &:focus {
    border-color: #3f51b5 !important;
    outline: none !important;
  }
`;

const StyledButton = styled.button`
  background: #3f51b5 !important;
  color: #fff !important;
  padding: 1rem !important;
  border: none !important;
  border-radius: 8px !important;
  font-size: 1rem !important;
  cursor: pointer !important;
  transition: background 0.3s ease !important;
  font-family: 'Roboto, sans-serif' !important;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1) !important;

  &:hover {
    background: #303f9f !important;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send('service_cajCode.com', 'template_y37465e', formData, 'i4ogx2IhAZGp85txM')
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Failed to send the message, please try again.');
        }
      );
  };

  return (
    <ContactWrapper id="contact">
      <ContactTitle>Contact Us</ContactTitle>
      <ContactForm onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <StyledButton type="submit">Send Message</StyledButton>
      </ContactForm>
    </ContactWrapper>
  );
};

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <Box id="home" my={4} className={classes.header}>
        <Fade>
          <img
            src={logo}
            alt="FratSwipe Logo"
            style={{
              maxWidth: '220px',
              margin: '0 auto',
              display: 'block',
              borderRadius: '30px',
            }}
          />
          <Typography variant="h2" className={classes.mainTitle} gutterBottom>
            Welcome to FratSwipe
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            The ultimate app for fraternity and sorority recruitment.
          </Typography>
        </Fade>
      </Box>

        

      <Box id="app-screens" my={4} className={classes.section}>
        <Typography variant="h4" gutterBottom padding={6}>
          App Screens
        </Typography>
        <Grid container spacing={3} className={classes.imageGrid}>
          <Bounce>
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
          </Bounce>
        </Grid>
      </Box>

      <Box
        id="get-started"
        my={4}
        className={classes.section}
        textAlign="center"
      >
        <Fade>
          <Typography variant="h4" gutterBottom>
            Get Started
          </Typography>
          <Typography variant="h6" paragraph>
            Download FratSwipe today and streamline your fraternity and sorority
            recruitment!
          </Typography>
          <MuiButton
            className={classes.getStartedButton}
            startIcon={<AppleIcon className={classes.appleIcon} />}
            href="https://apps.apple.com/us/app/fratswipe/id6520395751" // Link to the App Store
            target="_blank" // Open the link in a new tab
            rel="noopener noreferrer" // Security attributes for opening the link
          >
            Download on the App Store
          </MuiButton>
        </Fade>
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
            <Typography>- Andrew Delaney, Chapter President</Typography>
          </Paper>
          <Paper elevation={3} className={classes.testimonial}>
            <Typography variant="h6" gutterBottom>
              "A must-have for any fraternity or sorority."
            </Typography>
            <Typography>- Saheer Osmuld, Chapter Member</Typography>
          </Paper>
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
                  Our user-friendly interface ensures a seamless experience for
                  both admins and members.
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
                  We prioritize your privacy and security with top-notch
                  measures.
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
                  Our support team is available around the clock to assist you
                  with any issues.
                </Typography>
              </Paper>
            </Zoom>
          </Grid>
        </Grid>
      </Box>

      {/* Contact Us Section */}
      <Contact />
    </Container>
  );
};

export default LandingPage;
