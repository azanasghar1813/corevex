import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import OrbLoader from './components/OrbLoader';
import FloatingWhatsApp from './components/FloatingWhatsApp';

// Pages
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070e] text-white flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Signature Orb Loader & Split Screen Reveal */}
      <OrbLoader />

      {/* Auto Scroll to Top on Navigation */}
      <ScrollToTop />

      {/* Global Navbar */}
      <Navbar />

      {/* Page Routing */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<ProductDetails />} />
          <Route path="/products" element={<Solutions />} />
          <Route path="/products/:slug" element={<ProductDetails />} />
          <Route path="/work" element={<Work />} />
          <Route path="/portfolio" element={<Work />} />
          <Route path="/services" element={<Solutions />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp Chat Button */}
      <FloatingWhatsApp />
    </div>
  );
}
