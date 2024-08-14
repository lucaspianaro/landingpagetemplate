import React, { useState } from 'react';
import { Box, Typography, Grid, Container, TextField, Button, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import emailjs from 'emailjs-com';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const initialState = {
  name: '',
  email: '',
  message: '',
};

export const Contact = (props) => {
  const theme = useTheme(); // Access the theme defined in theme.js
  const [{ name, email, message }, setState] = useState(initialState);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Clear form state
  const clearState = () => setState({ ...initialState });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        e.target,
        'YOUR_USER_ID' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          clearState();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 6 }}>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  mb: 3,
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  color: theme.palette.primary.main,
                }}
              >
                Get in Touch
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Georgia, serif',
                  mb: 4,
                  color: theme.palette.text.primary,
                }}
              >
                Fill out the form below to send a message, and we will get back to you as soon as possible.
              </Typography>
            </Box>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Name"
                    fullWidth
                    variant="outlined"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    fullWidth
                    variant="outlined"
                    name="email"
                    type="email"
                    value={email}
                    onChange={handleChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    fullWidth
                    variant="outlined"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ pl: { md: 4 } }}>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  mb: 3,
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                }}
              >
                Contact Information
              </Typography>
              <List>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <LocationOnIcon sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={props.data ? props.data.address : 'Loading...'}
                    sx={{
                      fontFamily: 'Arial, sans-serif',
                      color: theme.palette.text.primary,
                    }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <PhoneIcon sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={props.data ? props.data.phone : 'Loading...'}
                    sx={{
                      fontFamily: 'Arial, sans-serif',
                      color: theme.palette.text.primary,
                    }}
                  />
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <EmailIcon sx={{ color: theme.palette.primary.main }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={props.data ? props.data.email : 'Loading...'}
                    sx={{
                      fontFamily: 'Arial, sans-serif',
                      color: theme.palette.text.primary,
                    }}
                  />
                </ListItem>
              </List>
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                <IconButton
                  href={props.data ? props.data.facebook : '/'}
                  sx={{ color: theme.palette.primary.main }}
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  href={props.data ? props.data.instagram : '/'}
                  sx={{ color: theme.palette.primary.main }}
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton
                  href={props.data ? props.data.whatsapp : '/'}
                  sx={{ color: theme.palette.primary.main }}
                  aria-label="WhatsApp"
                >
                  <WhatsAppIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
