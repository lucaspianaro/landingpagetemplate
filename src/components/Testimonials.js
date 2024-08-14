import React from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

export const Testimonials = (props) => {
  const theme = useTheme(); // Access the theme defined in theme.js

  return (
    <Box id="testimonials" sx={{ py: 10, backgroundColor: theme.palette.background.default }}>
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
            What Our Clients Say
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {props.data
            ? props.data.map((d, i) => (
                <Grid item xs={12} md={4} key={`${d.name}-${i}`}>
                  <Box
                    sx={{
                      textAlign: 'center',
                      p: 4,
                      borderRadius: 2,
                      boxShadow: theme.shadows[4],
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: theme.shadows[6],
                      },
                      backgroundColor: '#ffffff',
                      color: theme.palette.text.primary,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: 60,
                        color: theme.palette.secondary.main,
                        mb: 2,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Georgia, serif',
                        color: theme.palette.text.secondary,
                        mb: 2,
                      }}
                    >
                      "{d.text}"
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontFamily: 'Arial, sans-serif',
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                      }}
                    >
                      - {d.name}
                    </Typography>
                  </Box>
                </Grid>
              ))
            : 'Loading...'}
        </Grid>
      </Container>
    </Box>
  );
};
