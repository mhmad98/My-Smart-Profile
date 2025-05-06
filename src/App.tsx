import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Fun from './pages/Fun';
import Smart from './pages/Smart';
import { ThemeProvider } from './context/ThemeContext';
import './styles/App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app min-h-screen flex flex-col pt-16">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/fun" element={<Fun />} />
              <Route path="/smart" element={<Smart />} />
            </Routes>
          </main>
          <footer className="bg-gray-800 text-white py-4 text-center">
            <p>© 2025 Educational Portfolio. All rights reserved.</p>
          </footer>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;