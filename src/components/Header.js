import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import logo from '../assets/logo1.png'; // Import the logo image

export const Header = (props) => {
  const theme = useTheme(); // Access the theme defined in theme.js

  // Function to scroll smoothly to a section of the page
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header id="header" style={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          background: theme.palette.primary.main, // Use primary color from theme
          color: theme.palette.primary.contrastText, // Text color from theme
          minHeight: '100vh', // Full viewport height
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '20px',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            opacity: 0.2, // Set opacity to make icons less intrusive
            zIndex: 0,
          }}
        >
          {/* Generic icons for a variety of applications */}
          <AnimatedIcon icon={<HomeIcon />} top="10%" left="15%" delay="0s" size="12rem" />
          <AnimatedIcon icon={<InfoIcon />} top="30%" left="75%" delay="1s" size="14rem" />
          <AnimatedIcon icon={<StarIcon />} top="60%" left="45%" delay="2s" size="11rem" />
          <AnimatedIcon icon={<HelpIcon />} top="50%" left="10%" delay="1.5s" size="13rem" />
          <AnimatedIcon icon={<AccountCircleIcon />} top="75%" left="85%" delay="2.5s" size="12rem" />
          <AnimatedIcon icon={<SettingsIcon />} top="20%" left="35%" delay="3s" size="14rem" />
          <AnimatedIcon icon={<BuildIcon />} top="80%" left="25%" delay="3.5s" size="13rem" />
          <AnimatedIcon icon={<CheckCircleIcon />} top="40%" left="55%" delay="4s" size="12rem" />
        </Box>
        <Container>
          <img
            src={logo}
            alt="Your Company Logo"
            style={{
              maxWidth: '60%', // Adjust max width for responsiveness
              height: 'auto',
              marginBottom: '20px',
              boxShadow: theme.shadows[4], // Use shadow from theme
              borderRadius: theme.shape.borderRadius, // Use border radius from theme
            }}
          />
          <Typography
            variant="body1"
            sx={{
              fontFamily: theme.typography.body1.fontFamily,
              fontSize: { xs: '1rem', md: '1.25rem' }, // Responsive font size
              mb: 4,
              color: theme.palette.background.paper,
              textShadow: '1px 1px 3px rgba(0, 0, 0, 0.6)', // Optional text shadow for readability
            }}
          >
            Template by: @lucaspianaro
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'center', mt: 2 }}>
            <Button
              onClick={() => scrollToSection('features')}
              variant="contained"
              color="secondary"
              size="large"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1rem',
                borderRadius: theme.shape.borderRadius, // Use border radius from theme
                background: theme.palette.primary.light, // Use lighter primary color
                transition: 'background-color 0.3s ease',
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark, // Use darker primary color on hover
                },
              }}
            >
              Learn More
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              variant="outlined"
              size="large"
              sx={{
                px: 4,
                py: 2,
                fontSize: '1rem',
                borderRadius: theme.shape.borderRadius, // Use border radius from theme
                color: theme.palette.primary.contrastText, // Text color from theme
                borderColor: theme.palette.primary.contrastText, // Border color from theme
                transition: 'border-color 0.3s ease, color 0.3s ease',
                '&:hover': {
                  borderColor: theme.palette.primary.light, // Use lighter primary color on hover
                  color: theme.palette.primary.light, // Use lighter primary color on hover
                },
              }}
            >
              Contact
            </Button>
          </Box>
        </Container>
      </Box>
    </header>
  );
};

// Component for animated icons
// Generic icons that can be used in various projects
const AnimatedIcon = ({ icon, top, left, delay, size }) => (
  <Box
    sx={{
      position: 'absolute',
      top: top,
      left: left,
      fontSize: size,
      animation: `float 12s ease-in-out ${delay} infinite`,
      color: '#ffffff', // Default color for icons, can be modified
      '@keyframes float': {
        '0%': {
          transform: 'translatey(0px)',
        },
        '50%': {
          transform: 'translatey(-25px)', // Subtle movement for smoothness
        },
        '100%': {
          transform: 'translatey(0px)',
        },
      },
    }}
  >
    {icon}
  </Box>
);
