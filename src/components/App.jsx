import React from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { heroData as hero, aboutData as about, projectsData as projects, contactData as contact, footerData as footer } from '../mock/data';

function App() {
  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      {/* <About /> */}
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
