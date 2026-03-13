import React, { useState } from 'react';
import MainNavbar from '../components/navbars/MainNavbar';
import MyJob from '../components/myAcount/myJob';
import './CompanyDashboard.css';

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  const menuItems = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'jobs', name: 'My Jobs', icon: '💼' },
    { id: 'applications', name: 'Applications', icon: '📋' },
    { id: 'candidates', name: 'Candidates', icon: '👥' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
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
      
      case 'jobs':
        return <MyJob />;
      
      case 'applications':
        return (
          <div className="dashboard-applications">
            <h2>Received Applications</h2>
            <div className="applications-filters">
              <button className="filter-btn active">All Applications (89)</button>
              <button className="filter-btn">New (23)</button>
              <button className="filter-btn">Under Review (45)</button>
              <button className="filter-btn">Accepted (12)</button>
              <button className="filter-btn">Rejected (9)</button>
            </div>
            
            <div className="applications-list">
              {[1, 2, 3].map((item) => (
                <div key={item} className="application-card">
                  <div className="applicant-info">
                    <div className="applicant-avatar">Ah</div>
                    <div className="applicant-details">
                      <h4>Ahmed Mohammed</h4>
                      <p>Frontend Developer • 5 years experience</p>
                      <div className="applicant-skills">
                        <span>React</span>
                        <span>JavaScript</span>
                        <span>CSS</span>
                      </div>
                    </div>
                  </div>
                  <div className="application-details">
                    <div className="job-applied">Applied for: Frontend Developer</div>
                    <div className="application-time">3 hours ago</div>
                    <div className="application-actions">
                      <button className="btn-view">View Profile</button>
                      <button className="btn-accept">Accept</button>
                      <button className="btn-reject">Reject</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'candidates':
        return (
          <div className="dashboard-candidates">
            <h2>Saved Candidates</h2>
            <div className="candidates-grid">
              {[1, 2, 3, 4].map((candidate) => (
                <div key={candidate} className="candidate-card">
                  <div className="candidate-avatar">S</div>
                  <h4>Sara Ahmed</h4>
                  <p>UI Designer</p>
                  <div className="candidate-skills">
                    <span>Figma</span>
                    <span>UI/UX</span>
                  </div>
                  <button className="btn-contact">Contact</button>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'analytics':
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
      
      case 'settings':
        return (
          <div className="dashboard-settings">
            <h2>Company Settings</h2>
            <div className="settings-form">
              <div className="form-group">
                <label>Company Name</label>
                <input type="text" defaultValue="Advanced Tech Company" />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea rows="4" defaultValue="Leading technology company..." />
              </div>
              <div className="form-group">
                <label>Website</label>
                <input type="url" defaultValue="https://company.com" />
              </div>
              <div className="form-group">
                <label>Company Size</label>
                <select>
                  <option>50-100 employees</option>
                  <option>100-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
              <button className="btn-save">Save Changes</button>
            </div>
          </div>
        );
      
      default:
        return <MyJob />;
    }
  };

  return (
    <div className="company-dashboard">
      <MainNavbar />
      
      <div className="dashboard-layout">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <div className="company-info">
            <div className="company-logo">🏢</div>
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
              </button>
            ))}
          </nav>
        </div>
        
        {/* Main Content */}
        <div className="dashboard-main">
          <div className="dashboard-header">
            <h1>Company Dashboard</h1>
            <div className="header-actions">
              <button className="btn-post-job">Post New Job</button>
            </div>
          </div>
          
          <div className="dashboard-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
