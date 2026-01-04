import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import Gallery from './pages/Gallery';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import UploadGallery from './pages/admin/UploadGallery';

import ManageGallery from './pages/admin/ManageGallery';
import ManageCars from './pages/admin/ManageCars';
import AddCar from './pages/admin/AddCar';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import SellCar from './pages/SellCar';
import BuyCar from './pages/BuyCar';
import Logo from './assets/Logo.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 50,
      delay: 100,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <img
            src={Logo}
            alt="AUTOFREAKS"
            className="h-32 w-auto mx-auto animate-pulse"
          />
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0a0a0a] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#0a0a0a] to-black text-gray-100 font-sans">
        <Navbar />
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sell" element={<SellCar />} />
            <Route path="/buy" element={<BuyCar />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/admin/login" element={<Login />} />

            {/* Admin Routes */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/gallery/upload" element={<UploadGallery />} />
              <Route path="/admin/gallery/manage" element={<ManageGallery />} />
              <Route path="/admin/cars/manage" element={<ManageCars />} />
              <Route path="/admin/cars/add" element={<AddCar />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
