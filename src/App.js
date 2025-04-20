import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // Add this import
import Header from './components/Header';  // Changed from Navbar to Header
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';  // Added Services component
import Contact from './pages/Contact';
import NaturalRubberSBR from './pages/NaturalRubberSBR';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Header />
        <div className="content">
          <Routes basename="/my-app">
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/industrial-rubber-sheet/natural-rubber-sbr" element={<NaturalRubberSBR />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
