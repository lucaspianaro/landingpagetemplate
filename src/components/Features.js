import React from 'react';
import { Box, Typography, Grid, Container, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import StarIcon from '@mui/icons-material/Star';
import HelpIcon from '@mui/icons-material/Help';

// Icon components for easy access and generic usage
const iconComponents = {
  home: <HomeIcon style={{ fontSize: '3rem', color: '#fff' }} />,
  info: <InfoIcon style={{ fontSize: '3rem', color: '#fff' }} />,
  star: <StarIcon style={{ fontSize: '3rem', color: '#fff' }} />,
  help: <HelpIcon style={{ fontSize: '3rem', color: '#fff' }} />,
};

export const Features = (props) => {
  const theme = useTheme(); // Access the theme defined in theme.js

  return (
    <Box id="features" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: theme.typography.h4.fontFamily, // Use font from theme
              mb: 3,
              textTransform: 'uppercase',
              fontWeight: 800,
              color: theme.palette.primary.main,
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '60px',
                height: '4px',
                backgroundColor: theme.palette.secondary.main,
                margin: '10px auto 0',
              },
            }}
          >
            Features
          </Typography>
        </Box>
        <Grid container spacing={4} justifyContent="center">
          {props.data
            ? props.data.map((d, i) => {
                // Select the icon component based on the 'icon' property from data
                const IconComponent = iconComponents[d.icon];
                return (
                  <Grid item xs={12} sm={6} md={3} key={`${d.title}-${i}`}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 3,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-between', // Ensure space between elements
                        textAlign: 'center',
                        height: '260px', // Adjust height for better proportion
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: theme.shadows[6],
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mb: 2,
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          height: '80px',
                          width: '80px',
                          borderRadius: '50%',
                          background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                          boxShadow: theme.shadows[3],
                          transition: 'background 0.5s ease',
                        }}
                      >
                        {IconComponent || <HomeIcon style={{ fontSize: '3rem', color: '#fff' }} />}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: theme.typography.h6.fontFamily, // Use font from theme
                          mb: 1,
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                          fontSize: { xs: '1rem', md: '1.1rem' }, // Responsive font size
                        }}
                      >
                        {d.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: theme.typography.body2.fontFamily, // Use font from theme
                          color: theme.palette.text.secondary,
                          px: 2,
                          fontSize: { xs: '0.875rem', md: '1rem' }, // Responsive font size
                        }}
                      >
                        {d.text}
                      </Typography>
                    </Paper>
                  </Grid>
                );
              })
            : 'Loading...'}
        </Grid>
      </Container>
    </Box>
  );
};
