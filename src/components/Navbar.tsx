import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-500 font-bold' : '';
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md dark:bg-gray-800 transition-colors duration-300 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
            My Smart Profile
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className={`px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/')}`}>
              Home
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/about')}`}>
              About
            </Link>
            <Link to="/contact" className={`px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/contact')}`}>
              Contact
            </Link>
            <Link to="/portfolio" className={`px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/portfolio')}`}>
              Portfolio
            </Link>
            <Link to="/fun" className={`px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/fun')}`}>
              Fun
            </Link>
            <Link to="/smart" className={`px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/smart')}`}>
              Smart
            </Link>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? 
                <Sun size={20} className="text-yellow-400" /> : 
                <Moon size={20} className="text-gray-600" />
              }
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleTheme}
              className="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? 
                <Sun size={20} className="text-yellow-400" /> : 
                <Moon size={20} className="text-gray-600" />
              }
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-500 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-gray-800 shadow-lg">
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/')}`}
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/about')}`}
            onClick={closeMenu}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/contact')}`}
            onClick={closeMenu}
          >
            Contact
          </Link>
          <Link 
            to="/portfolio" 
            className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/portfolio')}`}
            onClick={closeMenu}
          >
            Portfolio
          </Link>
          <Link 
            to="/fun" 
            className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/fun')}`}
            onClick={closeMenu}
          >
            Fun
          </Link>
          <Link 
            to="/smart" 
            className={`block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 ${isActive('/smart')}`}
            onClick={closeMenu}
          >
            Smart
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;