import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const Fun = () => {
  const { theme } = useTheme();
  const [contentVisible, setContentVisible] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);
  const [quote, setQuote] = useState('');
  const [loading, setLoading] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleContent = () => {
    if (contentVisible && contentRef.current) {
      // jQuery-like slideUp animation
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.height = '0px';
          contentRef.current.style.opacity = '0';
        }
      }, 10);
      setTimeout(() => {
        setContentVisible(false);
      }, 500);
    } else {
      setContentVisible(true);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
          contentRef.current.style.opacity = '1';
        }
      }, 10);
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.height = 'auto';
        }
      }, 500);
    }
  };

  const toggleImage = () => {
    if (imageVisible) {
      // jQuery-like fadeOut animation
      const imgElement = document.getElementById('fun-image');
      if (imgElement) {
        imgElement.style.opacity = '0';
        setTimeout(() => {
          setImageVisible(false);
        }, 500);
      }
    } else {
      setImageVisible(true);
      setTimeout(() => {
        const imgElement = document.getElementById('fun-image');
        if (imgElement) {
          imgElement.style.opacity = '1';
        }
      }, 10);
    }
  };

  const loadQuote = async () => {
    setLoading(true);
    try {
      // Simulate an AJAX request
      setTimeout(() => {
        const quotes = [
          "Life is what happens when you're busy making other plans. - John Lennon",
          "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
          "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
          "The only way to do great work is to love what you do. - Steve Jobs",
          "Believe you can and you're halfway there. - Theodore Roosevelt"
        ];
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        setQuote(randomQuote);
        setLoading(false);
      }, 800);
    } catch (error) {
      console.error('Error loading quote:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Fun Page</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {/* SlideToggle Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Slide Toggle Demo</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Click the button below to toggle content with a slide animation, similar to jQuery's slideToggle().
              </p>
              
              <button 
                onClick={toggleContent}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
              >
                {contentVisible ? 'Hide Content' : 'Show Content'}
              </button>
              
              <div 
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 h-0 opacity-0"
              >
                <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Hidden Content</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    This content appears and disappears with a smooth sliding animation. In jQuery, 
                    this would be achieved with the slideToggle() method. Here, we're using CSS transitions 
                    and React state to create a similar effect.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FadeIn/FadeOut Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Fade Effect Demo</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Click the button to toggle the image with fade effects, similar to jQuery's fadeIn() and fadeOut().
              </p>
              
              <button 
                onClick={toggleImage}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
              >
                {imageVisible ? 'Hide Image' : 'Show Image'}
              </button>
              
              <div className="flex justify-center">
                {imageVisible && (
                  <img 
                    id="fun-image"
                    src="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt="Nature scene" 
                    className="rounded-lg shadow-md w-full max-w-md h-auto transition-opacity duration-500 opacity-0"
                    style={{ opacity: 0 }}
                    onLoad={(e) => (e.target as HTMLImageElement).style.opacity = '1'}
                  />
                )}
              </div>
            </div>
          </div>
          
          {/* AJAX Demo Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">AJAX Demo</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Click the button below to load a random inspirational quote using AJAX-like functionality.
              </p>
              
              <button 
                onClick={loadQuote}
                disabled={loading}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4 disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {loading ? 'Loading...' : 'Load Random Quote'}
              </button>
              
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg min-h-20 flex items-center justify-center">
                {quote ? (
                  <p className="text-gray-700 dark:text-gray-200 text-center italic">{quote}</p>
                ) : (
                  <p className="text-gray-500 dark:text-gray-400 text-center">Click the button to load a quote.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fun;