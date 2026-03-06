import React, { useState } from 'react';
import { useCompanyData } from '../../DATA/profileData';
import './CompanyProfileView.css';

function CompanyProfileView() {
  const { companyData } = useCompanyData();
  const [activeTab, setActiveTab] = useState('services');

  return (
    <div className="company-profile-modern">
      {/* Background Pattern */}
      <div className="background-pattern"></div>

      <div className="container">
        {/* Header Section */}
        <div className="header-card">
          <div className="header-gradient"></div>
          <div className="header-content">
            <div className="header-layout">
              {/* Avatar */}
              <div className="avatar-container">
                <div className="avatar">
                  {companyData.companyName.split(' ').map(word => word[0]).join('').substring(0, 2)}
                </div>
                <div className="status-dot"></div>
              </div>
              
              {/* Company Info */}
              <div className="company-info">
                <h1 className="company-name">{companyData.companyName}</h1>
                <p className="company-title">Leading Technology Company in Smart Recruitment</p>
                <p className="company-description">We connect best technical talents in Arab world with leading companies through artificial intelligence and real skill analysis.</p>
              </div>
              
              {/* Action Button */}
              <button className="edit-btn" onClick={() => console.log('Edit Profile clicked')}>
                <span className="btn-content">
                  <svg className="edit-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span>Edit Profile</span>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid">
          {[
            { icon: '🏢', label: 'Established', value: companyData.established, color: 'blue' },
            { icon: '👥', label: 'Employees', value: companyData.employees, color: 'green' },
            { icon: '⭐', label: 'Rating', value: companyData.rating, color: 'yellow' },
            { icon: '📍', label: 'Location', value: companyData.location, color: 'purple' }
          ].map((stat, index) => (
            <div key={index} className="stat-card">
              <div className={`stat-icon stat-${stat.color}`}>
                {stat.icon}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="content-grid">
          {/* Left Column - Main Content */}
          <div className="content-main">
            {/* Contact Information */}
            <div className="card">
              <h3 className="card-title">
                <span className="title-icon">📧</span>
                Contact Information
              </h3>
              <div className="contact-grid">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-info">
                    <div className="contact-label">Email</div>
                    <div className="contact-value">{companyData.email}</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-info">
                    <div className="contact-label">Phone</div>
                    <div className="contact-value">{companyData.phone}</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🌐</div>
                  <div className="contact-info">
                    <div className="contact-label">Website</div>
                    <a href={companyData.website} target="_blank" rel="noopener noreferrer" className="contact-value">
                      {companyData.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs Section */}
            <div className="card tabs-card">
              <div className="tabs-nav">
                {['services', 'projects'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => {
                      setActiveTab(tab);
                      console.log(`${tab} tab clicked`);
                    }}
                    className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                  >
                    {tab === 'services' ? 'Our Services' : 'Our Projects'}
                  </button>
                ))}
              </div>

              <div className="tab-content">
                {activeTab === 'services' && (
                  <div className="services-grid">
                    {companyData.skills.map((skill, index) => (
                      <div 
                        key={index} 
                        className="service-card"
                        onClick={() => console.log(`Service ${skill.name} clicked`)}
                      >
                        <div className="service-header">
                          <h5 className="service-name">{skill.name}</h5>
                          <span className="service-level">{skill.level}</span>
                        </div>
                        <p className="service-description">{skill.description}</p>
                        <div className="service-footer">
                          <span className="service-experience">{skill.experience}</span>
                          <div className="skill-dots">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`dot ${i < skill.dots ? 'active' : ''}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div className="projects-list">
                    {companyData.projects.map((project, index) => (
                      <div 
                        key={index} 
                        className="project-card"
                        onClick={() => console.log(`Project ${project.name} clicked`)}
                      >
                        <div className="project-header">
                          <h5 className="project-name">{project.name}</h5>
                          <span className={`project-status ${project.level === 'مكتمل' ? 'completed' : 'in-progress'}`}>
                            {project.level}
                          </span>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tech">
                          {project.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="tech-tag"
                              onClick={(e) => {
                                e.stopPropagation();
                                console.log(`Tech ${tech} clicked`);
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="project-footer">
                          <span className="launch-date">
                            📅 Launch: {project.experience}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="content-sidebar">
            {/* Social Media */}
            <div className="card">
              <h3 className="card-title">
                <span className="title-icon">🔗</span>
                Social Media
              </h3>
              <div className="social-links">
                <a 
                  href={companyData.social.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  onClick={() => console.log('GitHub link clicked')}
                >
                  <span className="social-icon">💻</span>
                  <div className="social-info">
                    <div className="social-name">GitHub</div>
                    <div className="social-desc">View code repositories</div>
                  </div>
                </a>
                <a 
                  href={companyData.social.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-link"
                  onClick={() => console.log('LinkedIn link clicked')}
                >
                  <span className="social-icon">💼</span>
                  <div className="social-info">
                    <div className="social-name">LinkedIn</div>
                    <div className="social-desc">Professional network</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="card">
              <h3 className="card-title">
                <span className="title-icon">⚡</span>
                Quick Info
              </h3>
              <div className="quick-info">
                <div className="info-row">
                  <span className="info-label">Company Type</span>
                  <span className="info-value">Tech Company</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Industry</span>
                  <span className="info-value">Technology & AI</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Status</span>
                  <span className="status-badge active">Active</span>
                </div>
              </div>
            </div>

            {/* Company Message */}
            <div className="card message-card">
              <div className="message-content">
                <span className="message-icon">🏢</span>
                <div className="message-text">
                  <h4 className="message-title">Message to Partners</h4>
                  <p className="message-desc">
                    We are committed to providing best innovative technology solutions. Our partners are the foundation of our success, and we always strive to build long-term relationships based on trust and quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfileView;
