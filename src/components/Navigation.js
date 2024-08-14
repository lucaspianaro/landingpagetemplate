import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as ScrollLink } from 'react-scroll';
import { useTheme } from '@mui/material/styles';
import logo from '../assets/logo4.png'; // Import your logo

export const Navigation = () => {
  const theme = useTheme(); // Access the theme defined in theme.js
  const [anchorEl, setAnchorEl] = React.useState(null);

  // Handle menu open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: theme.palette.background.paper }}>
      <Toolbar>
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Logo and brand name */}
          <ScrollLink to="header" smooth duration={500} offset={-70} style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Your Company Name" style={{ height: '50px', marginRight: '10px' }} />
            <Typography variant="h6" sx={{ display: { xs: 'none', md: 'block' }, fontFamily: 'Raleway, sans-serif', color: theme.palette.primary.main }}>
              Template by: @lucaspianaro
            </Typography>
          </ScrollLink>
        </Box>

        {/* Desktop menu */}
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <ScrollLink to="features" smooth duration={500} offset={-70}>
            <Typography variant="body2" sx={{ marginX: 2, cursor: 'pointer', color: theme.palette.primary.main }}>
              Features
            </Typography>
          </ScrollLink>
          <ScrollLink to="about" smooth duration={500} offset={-70}>
            <Typography variant="body2" sx={{ marginX: 2, cursor: 'pointer', color: theme.palette.primary.main }}>
              About
            </Typography>
          </ScrollLink>
          <ScrollLink to="services" smooth duration={500} offset={-70}>
            <Typography variant="body2" sx={{ marginX: 2, cursor: 'pointer', color: theme.palette.primary.main }}>
              Services
            </Typography>
          </ScrollLink>
          <ScrollLink to="testimonials" smooth duration={500} offset={-70}>
            <Typography variant="body2" sx={{ marginX: 2, cursor: 'pointer', color: theme.palette.primary.main }}>
              Testimonials
            </Typography>
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500} offset={-70}>
            <Typography variant="body2" sx={{ marginX: 2, cursor: 'pointer', color: theme.palette.primary.main }}>
              Contact
            </Typography>
          </ScrollLink>
        </Box>

        {/* Mobile menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{
              color: theme.palette.primary.main, // Set the icon button color to primary for better visibility
            }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <ScrollLink to="features" smooth duration={500} offset={-70} style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
                Features
              </ScrollLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ScrollLink to="about" smooth duration={500} offset={-70} style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
                About
              </ScrollLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ScrollLink to="services" smooth duration={500} offset={-70} style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
                Services
              </ScrollLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ScrollLink to="testimonials" smooth duration={500} offset={-70} style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
                Testimonials
              </ScrollLink>
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ScrollLink to="contact" smooth duration={500} offset={-70} style={{ color: theme.palette.text.primary, textDecoration: 'none' }}>
                Contact
              </ScrollLink>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
