import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  const [showMore, setShowMore] = useState({
    biography: false,
    hobbies: false,
    goals: false
  });

  const toggleSection = (section: keyof typeof showMore) => {
    setShowMore(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h1>
        
        <div className="grid grid-cols-1 gap-8">
          {/* Biography Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Biography</h2>
              <div className="prose max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Hello! I'm a passionate web developer with a deep interest in creating beautiful, 
                  functional websites. I specialize in front-end technologies and enjoy bringing 
                  designs to life with code.
                </p>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  showMore.biography ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    I started my journey in web development five years ago when I built my first HTML page. 
                    Since then, I've expanded my skills to include CSS, JavaScript, React, and many other 
                    technologies. I believe in continuous learning and always stay up-to-date with the 
                    latest web development trends.
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    My approach to web development focuses on creating accessible, responsive, and 
                    user-friendly experiences. I'm passionate about web performance and ensuring 
                    that websites load quickly and efficiently for all users.
                  </p>
                </div>
              </div>
              <button 
                onClick={() => toggleSection('biography')}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {showMore.biography ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
          
          {/* Hobbies Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Hobbies</h2>
              <div className="prose max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  When I'm not coding, I enjoy various activities that help me relax and stay creative.
                  Photography, hiking, and playing the guitar are some of my favorite pastimes.
                </p>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  showMore.hobbies ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                    <li>
                      <strong>Photography</strong>: I love capturing landscapes and street scenes. 
                      Photography helps me pay attention to visual details, which translates well to my design work.
                    </li>
                    <li>
                      <strong>Hiking</strong>: Exploring nature trails gives me time to think and solve 
                      problems creatively. Some of my best ideas come while on a hike!
                    </li>
                    <li>
                      <strong>Music</strong>: Playing guitar helps me understand patterns and rhythms, 
                      which surprisingly relates to coding and problem-solving.
                    </li>
                    <li>
                      <strong>Reading</strong>: I enjoy both fiction and technical books. I believe reading 
                      widely helps me communicate better in my work.
                    </li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={() => toggleSection('hobbies')}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {showMore.hobbies ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
          
          {/* Personal Goals Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Personal Goals</h2>
              <div className="prose max-w-none dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  I have several professional and personal goals I'm working toward. Continuous 
                  improvement is important to me, both in my career and personal life.
                </p>
                
                <div className={`overflow-hidden transition-all duration-500 ${
                  showMore.goals ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-200">Professional Goals</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                    <li>Master advanced React patterns and state management techniques</li>
                    <li>Contribute to open-source projects to give back to the community</li>
                    <li>Learn more about backend development to become a more well-rounded developer</li>
                    <li>Mentor junior developers and share my knowledge</li>
                  </ul>
                  
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-700 dark:text-gray-200">Personal Goals</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                    <li>Maintain a healthy work-life balance</li>
                    <li>Travel to at least one new country each year</li>
                    <li>Improve my photography skills</li>
                    <li>Run a half marathon</li>
                  </ul>
                </div>
              </div>
              <button 
                onClick={() => toggleSection('goals')}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {showMore.goals ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;