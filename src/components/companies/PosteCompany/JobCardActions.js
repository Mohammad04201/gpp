import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const JobCardActions = ({ post, setShowContactForm, setShowCompanyInfo }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="flex gap-3 p-6 pt-0">
      <button
        onClick={() => setShowContactForm(true)}
        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
          isDarkMode 
            ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-md' 
            : 'bg-teal-500 hover:bg-teal-600 text-white shadow-md'
        }`}
      >
        Apply for Job
      </button>
      <button
        onClick={() => setShowCompanyInfo(true)}
        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
          isDarkMode 
            ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-md' 
            : 'bg-teal-500 hover:bg-teal-600 text-white shadow-md'
        }`}
      >
        Company Info
      </button>
      <a 
        href="/favorites"
        className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center ${
          isDarkMode 
            ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-md' 
            : 'bg-teal-500 hover:bg-teal-600 text-white shadow-md'
        }`}
      >
        Favorites
      </a>
    </div>
  );
};

export default JobCardActions;
