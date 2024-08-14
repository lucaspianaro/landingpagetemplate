import React from 'react';
import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

export const Footer = () => {
  const theme = useTheme(); // Access the theme defined in theme.js

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main, // Use primary color from theme
        color: '#ffffff', // Set text color to white for contrast
        py: 4,
      }}
    >
      <Container>
        <Grid container justifyContent="center" spacing={4}>
          {/* Information Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ fontFamily: 'Raleway, sans-serif', mb: 1 }}
            >
              Template by: @lucaspianaro
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.875rem', color: '#ffffff' }}
            >
              We offer high-quality services with trust and professionalism. Your satisfaction is our priority.
            </Typography>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="h6"
              textAlign="center"
              sx={{ fontFamily: 'Raleway, sans-serif', mb: 1 }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton
                sx={{ color: '#ffffff' }} // Set icon color to white
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                sx={{ color: '#ffffff' }} // Set icon color to white
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                sx={{ color: '#ffffff' }} // Set icon color to white
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton
                sx={{ color: '#ffffff' }} // Set icon color to white
                aria-label="Email"
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Copyright Section */}
          <Grid item xs={12} sm={4}>
            <Typography
              variant="body2"
              textAlign="center"
              sx={{ fontFamily: 'Arial, sans-serif', fontSize: '0.875rem', color: '#ffffff' }}
            >
              &copy; {new Date().getFullYear()} Template by: @lucaspianaro. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
