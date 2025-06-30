import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Testimonials from './pages/Testimonials';
import Partnerships from './pages/Partnerships';
import Contact from './pages/Contact';
import Downloads from './pages/Downloads';
import CertificateValidation from './pages/CertificateValidation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/certificate-validation" element={<CertificateValidation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;