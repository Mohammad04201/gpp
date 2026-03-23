import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';

function DashboardSidebar({ currentDeveloper, menuItems, activeTab, onTabChange }) {
  const { isDarkMode } = useThemeContext();
  const getDeveloperInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'JD';
  };

  return (
    <div className={`dashboard-sidebar transition-all duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-white border-gray-200 shadow-lg'
    }`}>
      <div className={`developer-info transition-all duration-300 ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`}>
        <div className={`developer-avatar transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gradient-to-br from-teal-500 to-cyan-600' 
            : 'bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg'
        }`}>
          {currentDeveloper ? getDeveloperInitials(currentDeveloper.name) : 'JD'}
        </div>
        <h3 className={`transition-all duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>{currentDeveloper ? currentDeveloper.name : 'John Developer'}</h3>
        <p className={`transition-all duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>Developer Account</p>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item transition-all duration-300 ${
              activeTab === item.id 
                ? isDarkMode 
                  ? 'active bg-teal-600 text-white' 
                  : 'active bg-teal-500 text-white shadow-lg'
                : isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
            }`}
            onClick={() => onTabChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

export default DashboardSidebar;
