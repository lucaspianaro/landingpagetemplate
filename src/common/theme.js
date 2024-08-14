import { createTheme } from '@mui/material/styles';

// Template theme with neutral colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#607d8b', // Main greyish-blue color
      light: '#cfd8dc', // Lighter shade of greyish-blue
      dark: '#455a64', // Darker shade of greyish-blue
      contrastText: '#ffffff', // White text for contrast
    },
    secondary: {
      main: '#b0bec5', // Light grey secondary color
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5f5f5', // Neutral light background
      paper: '#ffffff', // White for paper surfaces
    },
    text: {
      primary: '#424242', // Dark grey primary text
      secondary: '#757575', // Medium grey secondary text
    },
    info: {
      main: '#607d8b', // Greyish-blue for additional info
    },
  },
  typography: {
    fontFamily: '"Open Sans", "sans-serif"',
    h1: {
      fontFamily: '"Raleway", "sans-serif"',
      fontSize: '3rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      color: '#424242',
    },
    h2: {
      fontFamily: '"Raleway", "sans-serif"',
      fontSize: '2.25rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      color: '#424242',
    },
    h3: {
      fontFamily: '"Raleway", "sans-serif"',
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#424242',
    },
    h4: {
      fontFamily: '"Raleway", "sans-serif"',
      fontSize: '1.125rem',
      fontWeight: 600,
      color: '#424242',
    },
    h5: {
      textTransform: 'uppercase',
      fontWeight: 700,
      lineHeight: '20px',
    },
    body1: {
      fontSize: '1rem',
      color: '#757575',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.9375rem', // Approximately 15px
      color: '#757575',
    },
    button: {
      fontFamily: '"Raleway", "sans-serif"',
      textTransform: 'uppercase',
      fontWeight: 500,
      fontSize: '0.9375rem', // Approximately 15px
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#607d8b', // Solid greyish-blue
          color: '#ffffff',
          borderRadius: '25px',
          transition: 'all 0.3s linear',
          '&:hover': {
            backgroundColor: '#455a64', // Darker shade on hover
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#607d8b', // Greyish-blue link color
          fontWeight: 400,
          '&:hover': {
            textDecoration: 'none',
            color: '#455a64', // Darker shade on hover
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textRendering: 'optimizeLegibility !important',
          WebkitFontSmoothing: 'antialiased !important',
        },
      },
    },
  },
});

export default theme;
