import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './common/theme'; // Import the custom theme
import { Header } from './components/Header'; // Import Header component
import { Footer } from './components/Footer'; // Import Footer component
import { Features } from './components/Features'; // Import Features component
import { About } from './components/About'; // Import About component
import { Navigation } from './components/Navigation'; // Import Navigation component
import { Services } from './components/Services'; // Import Services component
import { Testimonials } from './components/Testimonials'; // Import Testimonials component
import { Contact } from './components/Contact'; // Import Contact component
import data from './data/data.json'; // Import data from JSON file

function App() {
  // Destructure the imported data for easy access
  const { header, features, about, services, testimonials, contact } = data;

  return (
    // Apply the custom theme to the entire application using ThemeProvider
    <ThemeProvider theme={theme}>
      {/* Navigation bar for navigating between sections */}
      <Navigation />

      {/* Header section, typically the hero section with a title and brief description */}
      <Header data={header} />

      {/* Features section to highlight key features or services */}
      <Features data={features} />

      {/* About section providing more information about the company */}
      <About data={about} />

      {/* Services section outlining the specific services offered */}
      <Services data={services} />

      {/* Testimonials section showcasing customer feedback */}
      <Testimonials data={testimonials} />

      {/* Contact section with form and contact details */}
      <Contact data={contact} />

      {/* Footer section typically containing copyright information, links, etc. */}
      <Footer />
    </ThemeProvider>
  );
}

export default App;
