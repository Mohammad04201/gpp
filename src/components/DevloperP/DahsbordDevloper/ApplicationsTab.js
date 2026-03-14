import React, { useState, useEffect } from 'react';

function ApplicationsTab({ currentDeveloper }) {
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
    <div className="dashboard-applications">
      <h2>My Applications</h2>
      <div className="applications-filters">
        <button className="filter-btn active">All Applications ({sentApplications.length})</button>
        <button className="filter-btn">New ({sentApplications.filter(app => getApplicationStatus(app) === 'New').length})</button>
        <button className="filter-btn">Under Review ({sentApplications.filter(app => getApplicationStatus(app) === 'Under Review').length})</button>
        <button className="filter-btn">Interview ({sentApplications.filter(app => getApplicationStatus(app) === 'Interview').length})</button>
        <button className="filter-btn">Rejected ({sentApplications.filter(app => getApplicationStatus(app) === 'Rejected').length})</button>
      </div>
      
      <div className="applications-list">
        {sentApplications.map((application) => {
          const status = getApplicationStatus(application);
          const appWithResponse = getApplicationWithResponse(application);
          
          return (
            <div key={`${application.company}-${application.position}`} className="application-card">
              <div className="company-info">
                <div className="company-logo">{application.logo}</div>
                <div className="company-details">
                  <h4>{application.company}</h4>
                  <p>{application.position} • {application.type} • {application.location}</p>
                  <div className="application-status">
                    <span className={`status-badge ${getStatusColor(status)}`}>
                      {status}
                    </span>
                  </div>
                  {application.salary && (
                    <div className="salary-info">
                      <span className="text-green-400 font-medium">{application.salary}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="application-details">
                {appWithResponse.responseMessage && (
                  <div className="response-message">
                    <p className="text-gray-300 mb-2">{appWithResponse.responseMessage}</p>
                    {appWithResponse.contactPerson && (
                      <div className="contact-info text-sm text-gray-400">
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
                  <button className="btn-view">View Job</button>
                  {status === 'Interview' && (
                    <button className="btn-interview">Schedule Interview</button>
                  )}
                  {status === 'Accepted' && (
                    <button className="btn-accept-offer">Accept Offer</button>
                  )}
                  <button className="btn-withdraw">Withdraw</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {sentApplications.length === 0 && (
        <div className="text-center py-16">
          <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-400 mb-3">No applications yet</h3>
          <p className="text-gray-500 mb-6">Start applying for jobs to see them here</p>
        </div>
      )}
    </div>
  );
}

export default ApplicationsTab;
