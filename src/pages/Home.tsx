import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Web Development Services',
    description: 'HTML, CSS, JavaScript and more through my interactive profile.'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Build Real Projects Togeather',
    description: 'Apply your skills by building actual websites and applications.'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Lets Connect',
    description: 'Connect with me'
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { theme } = useTheme();
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  // Auto advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section with Carousel */}
      <div className="relative h-[500px] overflow-hidden">
        {carouselItems.map((item, index) => (
          <div 
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="text-center text-white px-4">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fadeIn">{item.title}</h2>
                <p className="text-xl md:text-2xl max-w-2xl mx-auto animate-fadeIn animation-delay-200">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Controls */}
        <button 
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
          onClick={prevSlide}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
          onClick={nextSlide}
        >
          <ChevronRight size={24} />
        </button>
        
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {carouselItems.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-white w-6' : 'bg-white/50'
              }`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Welcome to My Smart Profile</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              This website is designed to demonstrate various web technologies including HTML, CSS, JavaScript, 
              jQuery, Bootstrap, and AJAX functionality. Navigate through the different pages to explore
              interactive features and learn about web development.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/about" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition shadow-md hover:shadow-lg">
                Learn More
              </a>
              <a href="/contact" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition">
                Contact Us
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Students learning web development" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;