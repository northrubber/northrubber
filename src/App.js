import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NaturalRubberSBR from './pages/NaturalRubberSBR';
import useAppleDesignIntegration from './hooks/useAppleDesignIntegration';
import './utils/appleDesignSystem.js';
import './App.css';

function App() {
  // Initialize Apple-inspired design integration
  useAppleDesignIntegration();

  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industrial-rubber-sheet/natural-rubber-sbr" element={<NaturalRubberSBR />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
