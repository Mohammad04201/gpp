import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const EmptyState = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="text-center py-12">
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/50' 
          : 'bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 shadow-xl'
      }`}>
        <svg className={`w-10 h-10 transition-all duration-300 ${
          isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
        </svg>
      </div>
      <h3 className={`text-xl font-semibold mb-2 transition-all duration-300 ${
        isDarkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>No matching jobs found</h3>
      <p className={`transition-all duration-300 ${
        isDarkMode ? 'text-gray-500' : 'text-gray-500'
      }`}>Try changing your search or filter criteria</p>
    </div>
  );
};

export default EmptyState;
