import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { UseCasesPage } from './pages/UseCasesPage';
import { ContactPage } from './pages/ContactPage';

// Component to handle hash-based redirects for backward compatibility
const HashRedirectHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#contact') {
      navigate('/contact');
    } else if (hash === '#diensten') {
      // Scroll to services section on homepage
      navigate('/');
      setTimeout(() => {
        const servicesSection = document.getElementById('diensten');
        servicesSection?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [navigate]);

  return null;
};

function App() {
  return (
    <BrowserRouter basename="/enable-flow/">
      <HashRedirectHandler />
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/use-cases" element={<Layout><UseCasesPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
