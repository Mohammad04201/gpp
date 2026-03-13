import React, { useState, useEffect } from 'react';
import MainNavbar from '../components/navbars/MainNavbar';
import { developersData, getDeveloperById } from '../components/DevloperP/developersData';
import { getDeveloperInitials, formatExperience, formatNumber } from '../components/DevloperP/helpers';
import './DeveloperDashboard.css';

const DeveloperDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentDeveloper, setCurrentDeveloper] = useState(null);
  const [applications, setApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  // Load developer data on component mount
  useEffect(() => {
    // For demo purposes, we'll use the first developer (Ahmed Mohammed)
    // In a real app, this would come from authentication/user context
    const developer = getDeveloperById(1);
    setCurrentDeveloper(developer);
    
    // Mock applications data
    setApplications([
      {
        id: 1,
        company: 'TechCorp Solutions',
        position: 'Senior React Developer',
        type: 'Full-time',
        location: 'Remote',
        status: 'Under Review',
        appliedDate: '3 days ago',
        logo: 'TC'
      },
      {
        id: 2,
        company: 'Digital Agency',
        position: 'Frontend Developer',
        type: 'Contract',
        location: 'Riyadh',
        status: 'Interview',
        appliedDate: '1 week ago',
        logo: 'DA'
      }
    ]);
    
    // Mock saved jobs
    setSavedJobs([
      {
        id: 1,
        company: 'Microsoft',
        position: 'Senior Frontend Developer',
        location: 'Seattle, WA',
        salary: '$120k - $180k',
        type: 'Full-time',
        skills: ['React', 'TypeScript'],
        logo: 'MS'
      },
      {
        id: 2,
        company: 'Google',
        position: 'Full Stack Developer',
        location: 'Mountain View, CA',
        salary: '$130k - $200k',
        type: 'Full-time',
        skills: ['Node.js', 'React'],
        logo: 'GO'
      }
    ]);
  }, []);
  const menuItems = [
    { id: 'profile', name: 'My Profile', icon: '👤' },
    { id: 'applications', name: 'My Applications', icon: '📋' },
    { id: 'saved-jobs', name: 'Saved Jobs', icon: '💾' },
    { id: 'skills', name: 'Skills & Portfolio', icon: '🎯' },
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
                  <h3>{applications.length}</h3>
                  <p>Applications Sent</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">👀</div>
                <div className="stat-info">
                  <h3>{currentDeveloper ? formatNumber(currentDeveloper.stats.views) : '0'}</h3>
                  <p>Profile Views</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">📨</div>
                <div className="stat-info">
                  <h3>{applications.filter(app => app.status === 'Interview').length}</h3>
                  <p>Interviews</p>
                </div>
              </div>
              <div className="stat-card">
                <div className="stat-icon">⭐</div>
                <div className="stat-info">
                  <h3>4.9</h3>
                  <p>Profile Rating</p>
                </div>
              </div>
            </div>
            
            <div className="recent-activity">
              <h3>Recent Activity</h3>
              <div className="activity-list">
                {applications.slice(0, 3).map((app, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon">💼</div>
                    <div className="activity-details">
                      <p>Applied for "{app.position}" at {app.company}</p>
                      <span className="activity-time">{app.appliedDate}</span>
                    </div>
                  </div>
                ))}
                <div className="activity-item">
                  <div className="activity-icon">👤</div>
                  <div className="activity-details">
                    <p>Updated portfolio with new projects</p>
                    <span className="activity-time">5 hours ago</span>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon">📈</div>
                  <div className="activity-details">
                    <p>Profile views increased by 30% this week</p>
                    <span className="activity-time">1 day ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'profile':
        return (
          <div className="dashboard-profile">
            <h2>My Profile</h2>
            {currentDeveloper && (
              <div className="profile-card">
                <div className="profile-header">
                  <div className="profile-avatar">{getDeveloperInitials(currentDeveloper.name)}</div>
                  <div className="profile-info">
                    <h3>{currentDeveloper.name}</h3>
                    <p>{currentDeveloper.title} • {formatExperience(currentDeveloper.experience)} experience</p>
                    <div className="profile-skills">
                      {currentDeveloper.skills.slice(0, 4).map((skill, index) => (
                        <span key={index}>{skill.name}</span>
                      ))}
                    </div>
                  </div>
                  <button className="btn-edit-profile">Edit Profile</button>
                </div>
                <div className="profile-details">
                  <div className="detail-section">
                    <h4>About Me</h4>
                    <p>{currentDeveloper.bio}</p>
                  </div>
                  <div className="detail-section">
                    <h4>Experience</h4>
                    <div className="experience-item">
                      <h5>{currentDeveloper.title}</h5>
                      <p>{formatExperience(currentDeveloper.experience)} • {currentDeveloper.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'applications':
        return (
          <div className="dashboard-applications">
            <h2>My Applications</h2>
            <div className="applications-filters">
              <button className="filter-btn active">All Applications ({applications.length})</button>
              <button className="filter-btn">Pending ({applications.filter(app => app.status === 'Under Review').length})</button>
              <button className="filter-btn">Under Review ({applications.filter(app => app.status === 'Under Review').length})</button>
              <button className="filter-btn">Interview ({applications.filter(app => app.status === 'Interview').length})</button>
              <button className="filter-btn">Rejected (0)</button>
            </div>
            
            <div className="applications-list">
              {applications.map((app) => (
                <div key={app.id} className="application-card">
                  <div className="company-info">
                    <div className="company-logo">{app.logo}</div>
                    <div className="company-details">
                      <h4>{app.company}</h4>
                      <p>{app.position} • {app.type} • {app.location}</p>
                      <div className="application-status">
                        <span className={`status-${app.status.toLowerCase().replace(' ', '-')}`}>{app.status}</span>
                      </div>
                    </div>
                  </div>
                  <div className="application-details">
                    <div className="application-time">Applied {app.appliedDate}</div>
                    <div className="application-actions">
                      <button className="btn-view">View Job</button>
                      <button className="btn-withdraw">Withdraw</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'saved-jobs':
        return (
          <div className="dashboard-saved-jobs">
            <h2>Saved Jobs</h2>
            <div className="saved-jobs-grid">
              {savedJobs.map((job) => (
                <div key={job.id} className="job-card">
                  <div className="job-company-logo">{job.logo}</div>
                  <h4>{job.position}</h4>
                  <p>{job.company} • {job.location}</p>
                  <div className="job-details">
                    <span>{job.salary}</span>
                    <span>{job.type}</span>
                  </div>
                  <div className="job-skills">
                    {job.skills.map((skill, index) => (
                      <span key={index}>{skill}</span>
                    ))}
                  </div>
                  <div className="job-actions">
                    <button className="btn-apply-now">Apply Now</button>
                    <button className="btn-remove">Remove</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'skills':
        return (
          <div className="dashboard-skills">
            <h2>Skills & Portfolio</h2>
            {currentDeveloper && (
              <div className="skills-section">
                <div className="skills-category">
                  <h3>Technical Skills</h3>
                  <div className="skills-list">
                    {currentDeveloper.skills.map((skill, index) => (
                      <div key={index} className="skill-item">
                        <span>{skill.name}</span>
                        <div className="skill-level">
                          <div 
                            className="skill-bar" 
                            style={{
                              width: skill.level === 'Expert' ? '100%' : 
                                     skill.level === 'Advanced' ? '80%' : 
                                     skill.level === 'Intermediate' ? '60%' : '40%'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="portfolio-section">
                  <h3>Portfolio Projects</h3>
                  <div className="portfolio-grid">
                    {currentDeveloper.projects.map((project) => (
                      <div key={project.id} className="project-card">
                        <div className="project-image">🚀</div>
                        <h4>{project.name}</h4>
                        <p>Built with {project.tech.join(', ')}</p>
                        <div className="project-tech">
                          {project.tech.map((tech, index) => (
                            <span key={index}>{tech}</span>
                          ))}
                        </div>
                        <button className="btn-view-project">View Project</button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      
      case 'settings':
        return (
          <div className="dashboard-settings">
            <h2>Developer Settings</h2>
            {currentDeveloper && (
              <div className="settings-form">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" defaultValue={currentDeveloper.name} />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" defaultValue={`${currentDeveloper.name.toLowerCase().replace(' ', '.')}@example.com`} />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input type="tel" defaultValue="+966 50 123 4567" />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" defaultValue={currentDeveloper.location} />
                </div>
                <div className="form-group">
                  <label>Bio</label>
                  <textarea rows="4" defaultValue={currentDeveloper.bio} />
                </div>
                <div className="form-group">
                  <label>Job Preferences</label>
                  <select>
                    <option>Full-time</option>
                    <option>Part-time</option>
                    <option>Contract</option>
                    <option>Freelance</option>
                  </select>
                </div>
                <button className="btn-save">Save Changes</button>
              </div>
            )}
          </div>
        );
      
      default:
        return (
          <div className="dashboard-overview">
            <h2>Overview</h2>
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon">📝</div>
                <div className="stat-info">
                  <h3>24</h3>
                  <p>Applications Sent</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="developer-dashboard">
      <MainNavbar />
      
      <div className="dashboard-layout">
        {/* Sidebar */}
        <div className="dashboard-sidebar">
          <div className="developer-info">
            <div className="developer-avatar">{currentDeveloper ? getDeveloperInitials(currentDeveloper.name) : 'JD'}</div>
            <h3>{currentDeveloper ? currentDeveloper.name : 'John Developer'}</h3>
            <p>Developer Account</p>
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
            <h1>Developer Dashboard</h1>
            <div className="header-actions">
              <button className="btn-find-jobs">Find Jobs</button>
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

export default DeveloperDashboard;
