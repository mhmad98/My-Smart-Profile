import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Smart = () => {
  const { theme, toggleTheme } = useTheme();
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('bg-white dark:bg-gray-800');
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (name) {
      setGreeting(`Hello, ${name}! Welcome to the Smart Interaction page.`);
    } else {
      setGreeting('');
    }
  }, [name]);

  const handleMouseEnter = () => {
    setBackgroundColor('bg-blue-100 dark:bg-blue-900');
  };

  const handleMouseLeave = () => {
    setBackgroundColor('bg-white dark:bg-gray-800');
  };

  const animateElement = () => {
    if (boxRef.current) {
      // Reset animation
      boxRef.current.style.animation = 'none';
      
      // Force reflow
      void boxRef.current.offsetWidth;
      
      // Start animation
      boxRef.current.style.animation = 'bounce 1s ease';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Smart Interaction</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Live Greeting Section */}
          <div className={`${backgroundColor} rounded-lg shadow-md overflow-hidden transition-all duration-300`}
               onMouseEnter={handleMouseEnter}
               onMouseLeave={handleMouseLeave}>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Live Greeting</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Type your name below to see a personalized greeting appear as you type.
              </p>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onKeyUp={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg min-h-16 flex items-center justify-center">
                {greeting ? (
                  <p className="text-gray-700 dark:text-gray-200 text-center text-lg">{greeting}</p>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-center">Your greeting will appear here.</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Animation Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Animation Demo</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Click the button to trigger an animation on the box below.
              </p>
              
              <button 
                onClick={animateElement}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-6"
              >
                Animate Box
              </button>
              
              <div className="flex justify-center">
                <div 
                  ref={boxRef}
                  className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-lg flex items-center justify-center text-white font-bold"
                >
                  Click to Bounce
                </div>
              </div>
            </div>
          </div>
          
          {/* Theme Switcher */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Theme Switcher</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Toggle between light and dark mode using the button below.
              </p>
              
              <div className="flex justify-center">
                <button 
                  onClick={toggleTheme}
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-md hover:from-blue-600 hover:to-teal-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;