import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import Contact from './pages/Contact.js';
import Products from './pages/Products.js';
import Capabilities from './pages/Capabilities.js';
import Clients from './pages/Clients.js';
import ScrollToTop from "./ScrollToTop";






function App() {
 
  return (
    <div className="app">
      <Helmet>
        {/* Default meta tags for the entire app */}
        <html lang="en" />
        <title>BK Polymers | Polymer Packaging</title>
        <meta name="description" content="BK Polymers delivers premium polymer packaging solutions, including LDPE, HDPE rolls, poly bags, heat shrink films, and flame-retardant materials." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta property="og:title" content="BK Polymers | Polymer Packaging" />
        <meta property="og:description" content="BK Polymers delivers premium polymer packaging solutions, including LDPE, HDPE rolls, poly bags, heat shrink films, and flame-retardant materials."
 />
        <meta property="og:image" content="https://www.bkpolymers.in/og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BK Polymers | Main Keyword" />
        <meta name="twitter:description" content="A clear, compelling description of your website in 150-160 characters." />
        <meta name="twitter:image" content="https://www.bkpolymers.in/twitter-image.jpg" />
        
        {/* Canonical URL to prevent duplicate content issues */}
        <link rel="canonical" href="https://www.bkpolymers.in/" />
      </Helmet>
      
     
      
      <Header />

      <ScrollToTop />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;