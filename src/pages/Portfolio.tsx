import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const Portfolio = () => {
  const { theme } = useTheme();
  const [projects, setProjects] = useState<Project[]>([
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Node.js', 'MongoDB', 'CSS'],
      link: '#'
    },
    {
      id: 2,
      title: 'Weather Application',
      description: 'A weather app that shows current conditions and forecasts using data from a weather API.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration'],
      link: '#'
    },
    {
      id: 3,
      title: 'Blog Platform',
      description: 'A blog platform with article creation, comments, and user authentication.',
      image: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      technologies: ['React', 'Express', 'MySQL', 'Tailwind CSS'],
      link: '#'
    }
  ]);

  const [activeProject, setActiveProject] = useState<number | null>(null);

  const updateProject = (id: number) => {
    setProjects(prev => prev.map(project => {
      if (project.id === id) {
        // Cycle through a set of alternative descriptions
        const newDescriptions = [
          'A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.',
          'An award-winning online store featuring real-time inventory updates and personalized recommendations.',
          'A modern e-commerce solution with secure payment processing and detailed analytics dashboard.',
          'A user-friendly shopping platform optimized for conversion and featuring a streamlined checkout flow.'
        ];
        
        const currentIndex = newDescriptions.indexOf(project.description);
        const nextIndex = (currentIndex + 1) % newDescriptions.length;
        
        return {
          ...project,
          description: newDescriptions[nextIndex]
        };
      }
      return project;
    }));
    
    // Set active project for animation
    setActiveProject(id);
    setTimeout(() => {
      setActiveProject(null);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">My Portfolio</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div 
              key={project.id}
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
                activeProject === project.id ? 'transform scale-105' : ''
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2 text-gray-800 dark:text-white">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 h-24 overflow-y-auto">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  
                  <button
                    onClick={() => updateProject(project.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    View Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;