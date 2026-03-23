import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const DashboardSidebar = ({ activeTab, setActiveTab, menuItems }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`dashboard-sidebar ${isDarkMode ? '' : 'light-mode'}`}>
      <div className="company-info">
        <div className="company-logo">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5v10l-10-5V7z"/>
            <path d="M2 17l10 5 10-5M12 12l10-5 10 5"/>
          </svg>
        </div>
        <h3>Tech Company</h3>
        <p>Company Account</p>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
            {activeTab === item.id && (
              <span className="nav-indicator"></span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default DashboardSidebar;
