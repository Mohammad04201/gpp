import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../contexts/ThemeContext';

function DashboardHeader({ currentDeveloper }) {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={`dashboard-header transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`}>
      <h1 className={`transition-all duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>Developer Dashboard</h1>
      <div className="header-actions">
        <Link 
          to="/jobs" 
          className={`btn-find-jobs transition-all duration-300 transform hover:scale-105 ${
            isDarkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white hover:from-[#0d8383] hover:to-[#11a3a3] shadow-lg hover:shadow-xl'
          }`}
        >
          Find Jobs
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;
