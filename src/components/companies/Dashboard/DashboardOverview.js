import React from 'react';

const DashboardOverview = () => {
  return (
    <div className="dashboard-overview">
      <h2>Overview</h2>
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📝</div>
          <div className="stat-info">
            <h3>12</h3>
            <p>Posted Jobs</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">👀</div>
          <div className="stat-info">
            <h3>1,234</h3>
            <p>Views</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">📨</div>
          <div className="stat-info">
            <h3>89</h3>
            <p>Applications</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">⭐</div>
          <div className="stat-info">
            <h3>4.8</h3>
            <p>Company Rating</p>
          </div>
        </div>
      </div>
      
      <div className="recent-activity">
        <h3>Recent Activity</h3>
        <div className="activity-list">
          <div className="activity-item">
            <div className="activity-icon">💼</div>
            <div className="activity-details">
              <p>Posted "Frontend Developer" job</p>
              <span className="activity-time">2 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">👤</div>
            <div className="activity-details">
              <p>Ahmed Mohammed applied for "Backend Developer"</p>
              <span className="activity-time">5 hours ago</span>
            </div>
          </div>
          <div className="activity-item">
            <div className="activity-icon">📈</div>
            <div className="activity-details">
              <p>25% increase in job views this week</p>
              <span className="activity-time">1 day ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
