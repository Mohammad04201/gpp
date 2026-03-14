import React from 'react';
import { Link } from 'react-router-dom';

function DashboardHeader({ currentDeveloper }) {
  return (
    <div className="dashboard-header">
      <h1>Developer Dashboard</h1>
      <div className="header-actions">
        <Link to="/jobs" className="btn-find-jobs">
          Find Jobs
        </Link>
      </div>
    </div>
  );
}

export default DashboardHeader;
