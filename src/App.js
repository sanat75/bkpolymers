// App.js
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home.js';
import AboutUs from './pages/AboutUs.js';
import Contact from './pages/Contact.js';
import Products from './pages/Products.js';
import Capabilities from './pages/Capabilities.js';
import Clients from './pages/Clients.js';

function App() {
  return (
    <div className="app">
      <Helmet>
        {/* Default meta tags for the entire app */}
        <html lang="en" />
        <title>Your Website Name | Main Keyword</title>
        <meta name="description" content="A clear, compelling description of your website in 150-160 characters that includes your main keywords." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph tags for social sharing */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourwebsite.com/" />
        <meta property="og:title" content="Your Website Name | Main Keyword" />
        <meta property="og:description" content="A clear, compelling description of your website in 150-160 characters." />
        <meta property="og:image" content="https://www.yourwebsite.com/og-image.jpg" />
        
        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Website Name | Main Keyword" />
        <meta name="twitter:description" content="A clear, compelling description of your website in 150-160 characters." />
        <meta name="twitter:image" content="https://www.yourwebsite.com/twitter-image.jpg" />
        
        {/* Canonical URL to prevent duplicate content issues */}
        <link rel="canonical" href="https://www.yourwebsite.com/" />
      </Helmet>
      
      <Header />
      
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