import React from 'react';

function DashboardSidebar({ currentDeveloper, menuItems, activeTab, onTabChange }) {
  const getDeveloperInitials = (name) => {
    return name ? name.split(' ').map(n => n[0]).join('').toUpperCase() : 'JD';
  };

  return (
    <div className="dashboard-sidebar">
      <div className="developer-info">
        <div className="developer-avatar">
          {currentDeveloper ? getDeveloperInitials(currentDeveloper.name) : 'JD'}
        </div>
        <h3>{currentDeveloper ? currentDeveloper.name : 'John Developer'}</h3>
        <p>Developer Account</p>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
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
