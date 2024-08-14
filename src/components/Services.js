import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import BuildIcon from '@mui/icons-material/Build';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import HandymanIcon from '@mui/icons-material/Handyman';
import SettingsIcon from '@mui/icons-material/Settings'; // Icon for installation

// Dictionary of icons for easy access
const iconComponents = {
  build: <BuildIcon style={{ fontSize: '4rem', color: '#ffffff' }} />,
  electrical: <ElectricalServicesIcon style={{ fontSize: '4rem', color: '#ffffff' }} />,
  plumbing: <PlumbingIcon style={{ fontSize: '4rem', color: '#ffffff' }} />,
  handyman: <HandymanIcon style={{ fontSize: '4rem', color: '#ffffff' }} />,
  settings: <SettingsIcon style={{ fontSize: '4rem', color: '#ffffff' }} />, // Icon for installation
};

export const Services = (props) => {
  const theme = useTheme(); // Access the theme defined in theme.js

  return (
    <Box id="services" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
      <Container>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              fontFamily: 'Raleway, sans-serif',
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
            Our Services
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'Georgia, serif',
              color: theme.palette.text.secondary,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            We offer a wide range of services to meet your repair and maintenance needs.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {props.data
            ? props.data.map((d, i) => {
                const IconComponent = iconComponents[d.icon]; // Get icon component based on key
                return (
                  <Grid item xs={12} sm={6} md={4} key={`${d.name}-${i}`}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 4,
                        borderRadius: 3,
                        boxShadow: theme.shadows[4],
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          boxShadow: theme.shadows[6],
                        },
                        backgroundColor: '#ffffff',
                        color: theme.palette.primary.contrastText,
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          mb: 2,
                          height: '80px',
                          width: '80px',
                          margin: '0 auto',
                          borderRadius: '50%',
                          background: `linear-gradient(to bottom right, ${theme.palette.primary.main}, ${theme.palette.secondary.light})`,
                        }}
                      >
                        {IconComponent || <BuildIcon style={{ fontSize: '4rem', color: '#ffffff' }} />}
                      </Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'Arial, sans-serif',
                          mb: 1,
                          fontWeight: 700,
                          color: theme.palette.text.primary,
                        }}
                      >
                        {d.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Georgia, serif',
                          color: theme.palette.text.secondary,
                          px: 2,
                        }}
                      >
                        {d.text}
                      </Typography>
                    </Box>
                  </Grid>
                );
              })
            : 'Loading...'}
        </Grid>
      </Container>
    </Box>
  );
};
