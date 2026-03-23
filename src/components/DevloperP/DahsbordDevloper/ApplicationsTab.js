import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';

function ApplicationsTab({ currentDeveloper }) {
  const { isDarkMode } = useThemeContext();
  const [sentApplications, setSentApplications] = useState([]);
  const [companyResponses, setCompanyResponses] = useState([]);

  useEffect(() => {
    // Load developer's sent applications
    const savedApplications = localStorage.getItem('developerApplications');
    if (savedApplications) {
      const applications = JSON.parse(savedApplications);
      // Filter applications for the current developer
      const developerApplications = applications.filter(app => 
        app.developerId === currentDeveloper?.id
      );
      setSentApplications(developerApplications);
    } else {
      // Mock data for demonstration - applications developer has sent
      const mockApplications = [
        {
          id: 1,
          developerId: currentDeveloper?.id || 1,
          company: "Tech Solutions Inc.",
          logo: "TS",
          position: "Senior Frontend Developer",
          type: "Full-time",
          location: "Riyadh, Saudi Arabia",
          salary: "$120,000 - $150,000",
          status: "Under Review",
          appliedDate: "2 days ago",
          skills: ["React", "TypeScript", "Node.js"],
          description: "We are looking for an experienced Frontend Developer to join our team."
        },
        {
          id: 2,
          developerId: currentDeveloper?.id || 1,
          company: "Digital Innovations",
          logo: "DI",
          position: "Full Stack Engineer",
          type: "Full-time",
          location: "Dubai, UAE",
          salary: "$100,000 - $130,000",
          status: "New",
          appliedDate: "1 week ago",
          skills: ["JavaScript", "Python", "MongoDB"],
          description: "Join our innovative team as a Full Stack Engineer."
        },
        {
          id: 3,
          developerId: currentDeveloper?.id || 1,
          company: "Mobile First Co",
          logo: "MF",
          position: "React Native Developer",
          type: "Remote",
          location: "Jeddah, Saudi Arabia",
          salary: "$90,000 - $120,000",
          status: "Interview",
          appliedDate: "3 days ago",
          skills: ["React Native", "TypeScript", "Firebase"],
          description: "We need a talented React Native developer for mobile applications."
        }
      ];
      setSentApplications(mockApplications);
    }

    // Load company responses
    const savedResponses = localStorage.getItem('companyApplicationResponses');
    if (savedResponses) {
      const responses = JSON.parse(savedResponses);
      // Filter responses for the current developer and remove duplicates
      const developerResponses = responses
        .filter(response => response.developerId === currentDeveloper?.id)
        .filter((response, index, self) => 
          // Remove duplicates based on company and position
          index === self.findIndex((r) => 
            r.company === response.company && r.position === response.position
          )
        );
      setCompanyResponses(developerResponses);
    } else {
      setCompanyResponses([]);
    }
  }, [currentDeveloper]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Accepted':
        return 'bg-green-500 text-white';
      case 'Interview':
        return 'bg-blue-500 text-white';
      case 'Under Review':
        return 'bg-yellow-500 text-black';
      case 'Rejected':
        return 'bg-red-500 text-white';
      case 'New':
        return 'bg-blue-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  // Merge applications with responses to show complete status
  const getApplicationStatus = (application) => {
    const response = companyResponses.find(r => 
      r.company === application.company && r.position === application.position
    );
    return response ? response.status : application.status;
  };

  const getApplicationWithResponse = (application) => {
    const response = companyResponses.find(r => 
      r.company === application.company && r.position === application.position
    );
    return response || application;
  };

  return (
    <div className={`dashboard-applications transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`}>
      <h2 className={`mb-6 transition-all duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>My Applications</h2>
      <div className="applications-filters">
        <button className={`filter-btn transition-all duration-300 ${
          isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}>All Applications ({sentApplications.length})</button>
        <button className={`filter-btn transition-all duration-300 ${
          isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}>New ({sentApplications.filter(app => getApplicationStatus(app) === 'New').length})</button>
        <button className={`filter-btn transition-all duration-300 ${
          isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}>Under Review ({sentApplications.filter(app => getApplicationStatus(app) === 'Under Review').length})</button>
        <button className={`filter-btn transition-all duration-300 ${
          isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}>Interview ({sentApplications.filter(app => getApplicationStatus(app) === 'Interview').length})</button>
        <button className={`filter-btn transition-all duration-300 ${
          isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}>Rejected ({sentApplications.filter(app => getApplicationStatus(app) === 'Rejected').length})</button>
      </div>
      
      <div className="applications-list">
        {sentApplications.map((application) => {
          const status = getApplicationStatus(application);
          const appWithResponse = getApplicationWithResponse(application);
          
          return (
            <div key={`${application.company}-${application.position}`} className={`application-card transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700 hover:border-teal-500/50' 
                : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-teal-400'
            }`}>
              <div className="company-info">
                <div className={`company-logo transition-all duration-300 ${
                  isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
                }`}>{application.logo}</div>
                <div className="company-details">
                  <h4 className={`transition-all duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>{application.company}</h4>
                  <p className={`transition-all duration-300 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>{application.position} • {application.type} • {application.location}</p>
                  <div className="application-status">
                    <span className={`status-badge ${getStatusColor(status)}`}>
                      {status}
                    </span>
                  </div>
                  {application.salary && (
                    <div className="salary-info">
                      <span className={`font-medium transition-all duration-300 ${
                        isDarkMode ? 'text-green-400' : 'text-green-600'
                      }`}>{application.salary}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="application-details">
                {appWithResponse.responseMessage && (
                  <div className="response-message">
                    <p className={`mb-2 transition-all duration-300 ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    }`}>{appWithResponse.responseMessage}</p>
                    {appWithResponse.contactPerson && (
                      <div className={`contact-info text-sm transition-all duration-300 ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                        <p>Contact: {appWithResponse.contactPerson}</p>
                        <p>Email: {appWithResponse.contactEmail}</p>
                      </div>
                    )}
                  </div>
                )}
                <div className="application-time">
                  Applied {application.appliedDate}
                  {appWithResponse.responseDate && (
                    <span className="ml-2">• Response {appWithResponse.responseDate}</span>
                  )}
                </div>
                <div className="application-actions">
                  <button className={`btn-view transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}>View Job</button>
                  {status === 'Interview' && (
                    <button className={`btn-interview transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-blue-500 text-white hover:bg-blue-600 shadow-lg hover:shadow-xl'
                    }`}>Schedule Interview</button>
                  )}
                  {status === 'Accepted' && (
                    <button className={`btn-accept-offer transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-green-500 text-white hover:bg-green-600 shadow-lg hover:shadow-xl'
                    }`}>Accept Offer</button>
                  )}
                  <button className={`btn-withdraw transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-700 text-white hover:bg-gray-600' 
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}>Withdraw</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {sentApplications.length === 0 && (
        <div className="text-center py-16">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100 shadow-lg'
          }`}>
            <svg className={`w-12 h-12 transition-all duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 00-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>No applications yet</h3>
          <p className={`mb-6 transition-all duration-300 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>Start applying for jobs to see them here</p>
        </div>
      )}
    </div>
  );
}

export default ApplicationsTab;
