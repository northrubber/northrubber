import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import FeaturedProjects from './pages/FeaturedProjects';
import Testimonials from './pages/Testimonials';
import CallToAction from './pages/CallToAction';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Header />
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="services">
            <Services />
          </section>
          <section id="featured-projects">
            <FeaturedProjects />
          </section>
          <section id="testimonials">
            <Testimonials />
          </section>
          <section id="cta">
            <CallToAction />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
