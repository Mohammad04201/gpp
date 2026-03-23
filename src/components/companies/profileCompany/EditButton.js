import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const EditButton = ({ onClick }) => {
  const { isDarkMode } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`fixed bottom-8 left-8 z-40 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-90 group ${
        isDarkMode 
          ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-2xl hover:shadow-blue-500/30'
          : 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 shadow-2xl hover:shadow-teal-500/30'
      }`}
      title="Edit Company Profile"
    >
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      <span className={`absolute left-full ml-3 px-3 py-1 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-800 text-white shadow-lg'
      }`}>
        Edit Profile
      </span>
    </button>
  );
};

export default EditButton;
