import React from 'react';

const DashboardAnalytics = () => {
  return (
    <div className="dashboard-analytics">
      <h2>Analytics & Statistics</h2>
      <div className="analytics-grid">
        <div className="chart-container">
          <h3>Job Growth</h3>
          <div className="chart-placeholder">
            📈 Job growth chart
          </div>
        </div>
        <div className="chart-container">
          <h3>Applicant Sources</h3>
          <div className="chart-placeholder">
            📊 Applicant sources chart
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardAnalytics;
