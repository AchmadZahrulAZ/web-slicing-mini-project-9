import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BookBanner from './components/BookBanner';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import BlogList from './pages/BlogList';
import ContactUs from './pages/ContactUs';
import Homepage from './pages/Homepage';
import OurWorks from './pages/OurWorks';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-works" element={<OurWorks />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <BookBanner />
        <Footer />
      </Router>
    </div>
  );
}

export default App;