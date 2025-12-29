import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarDetails from './pages/CarDetails';
import Gallery from './pages/Gallery';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import UploadGallery from './pages/admin/UploadGallery';
import ManageGallery from './pages/admin/ManageGallery';
import ProtectedRoute from './components/ProtectedRoute';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import SellCar from './pages/SellCar';
import BuyCar from './pages/BuyCar';

function App() {
  return (
    <Router>
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
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
