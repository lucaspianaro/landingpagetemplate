import React from 'react';
import { Box, Typography, Grid, Container, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const About = (props) => {
  const theme = useTheme(); // Access the theme defined in theme.js

  return (
    <Box
      id="about"
      sx={{
        py: 10,
        px: 2,
        backgroundColor: theme.palette.background.default,
        backgroundImage: `linear-gradient(to bottom right, ${theme.palette.primary.light}10, ${theme.palette.primary.dark}20)`, // Subtle gradient background
      }}
    >
      <Container>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                p: 4,
                borderRadius: 2,
                boxShadow: theme.shadows[2],
                backgroundColor: theme.palette.secondary.light,
                color: theme.palette.secondary.contrastText,
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  mb: 3,
                  fontWeight: 800,
                  color: theme.palette.primary.dark,
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                About Us
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: 'Georgia, serif',
                  mb: 4,
                  color: theme.palette.text.primary,
                  lineHeight: 1.8,
                  textAlign: 'justify',
                }}
              >
                {props.data ? props.data.paragraph : 'Loading...'}
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  mb: 2,
                  fontWeight: 700,
                  color: theme.palette.primary.main,
                  textTransform: 'uppercase',
                  textAlign: 'center',
                }}
              >
                Why Choose Us?
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <List>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <ListItem key={`${d}-${i}`} disableGutters>
                            <ListItemIcon>
                              <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={d}
                              sx={{
                                fontFamily: 'Arial, sans-serif',
                                color: theme.palette.text.secondary,
                              }}
                            />
                          </ListItem>
                        ))
                      : 'Loading...'}
                  </List>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <List>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <ListItem key={`${d}-${i}`} disableGutters>
                            <ListItemIcon>
                              <CheckCircleIcon sx={{ color: theme.palette.primary.main }} />
                            </ListItemIcon>
                            <ListItemText
                              primary={d}
                              sx={{
                                fontFamily: 'Arial, sans-serif',
                                color: theme.palette.text.secondary,
                              }}
                            />
                          </ListItem>
                        ))
                      : 'Loading...'}
                  </List>
                </Grid>
              </Grid>
              <Typography
                variant="h6"
                component="h4"
                sx={{
                  fontFamily: 'Raleway, sans-serif',
                  mt: 4,
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                  textTransform: 'uppercase',
                }}
              >
                Our Values
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: 'Georgia, serif',
                  color: theme.palette.text.primary,
                  lineHeight: 1.6,
                  mt: 2,
                  textAlign: 'justify',
                }}
              >
                • Commitment to quality and safety.<br />
                • Respect and ethics in all interactions.<br />
                • Transparency and honesty in services provided.<br />
                • Continuous innovation to better meet your needs.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
