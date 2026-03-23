import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useThemeContext';
import { getDeveloperById } from '../../DevloperP/developersData';

const DashboardApplications = () => {
  const { isDarkMode } = useTheme();
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Load applications from localStorage or use mock data
    const savedApplications = localStorage.getItem('companyApplications');
    if (savedApplications) {
      setApplications(JSON.parse(savedApplications));
    } else {
      // Mock data for demonstration
      const mockApplications = [
        {
          id: 1,
          applicantName: "Ahmed Mohammed",
          applicantId: 1,
          avatar: "Ah",
          position: "Frontend Developer",
          experience: "5 years experience",
          skills: ["React", "JavaScript", "CSS", "TypeScript"],
          status: "new",
          appliedDate: "3 hours ago",
          email: "ahmed.mohammed@email.com",
          phone: "+966 50 123 4567",
          location: "Riyadh, Saudi Arabia"
        },
        {
          id: 2,
          applicantName: "Sarah Johnson",
          applicantId: 2,
          avatar: "SJ",
          position: "Full Stack Developer",
          experience: "3 years experience",
          skills: ["Node.js", "React", "MongoDB", "Express"],
          status: "under_review",
          appliedDate: "1 day ago",
          email: "sarah.j@email.com",
          phone: "+966 55 987 6543",
          location: "Dubai, UAE"
        },
        {
          id: 3,
          applicantName: "Mohammed Ali",
          applicantId: 3,
          avatar: "MA",
          position: "Backend Developer",
          experience: "4 years experience",
          skills: ["Python", "Django", "PostgreSQL", "Docker"],
          status: "new",
          appliedDate: "2 days ago",
          email: "mohammed.ali@email.com",
          phone: "+966 56 456 7890",
          location: "Jeddah, Saudi Arabia"
        }
      ];
      setApplications(mockApplications);
      localStorage.setItem('companyApplications', JSON.stringify(mockApplications));
    }
  }, []);

  const handleApplicationAction = (applicationId, action) => {
    // Update application status
    const updatedApplications = applications.map(app => {
      if (app.id === applicationId) {
        return { ...app, status: action };
      }
      return app;
    });
    setApplications(updatedApplications);
    localStorage.setItem('companyApplications', JSON.stringify(updatedApplications));

    // If accepted or rejected, save response to developer's view
    if (action === 'accepted' || action === 'rejected') {
      const application = applications.find(app => app.id === applicationId);
      if (application) {
        saveCompanyResponse(application, action);
      }
    }
  };

  const saveCompanyResponse = (application, action) => {
    // Load existing responses
    const existingResponses = localStorage.getItem('companyApplicationResponses');
    const responses = existingResponses ? JSON.parse(existingResponses) : [];

    // Check if response already exists for this application
    const existingResponse = responses.find(r => 
      r.developerId === application.applicantId && 
      r.company === "Tech Solutions Inc." && 
      r.position === application.position
    );

    // Only add new response if it doesn't exist
    if (!existingResponse) {
      // Create new response
      const newResponse = {
        id: Date.now(), // Unique ID
        developerId: application.applicantId,
        company: "Tech Solutions Inc.", // Current company name
        logo: "TS", // Company logo
        position: application.position,
        type: "Full-time",
        location: application.location,
        status: action === 'accepted' ? 'Interview' : 'Rejected',
        responseDate: "Just now",
        salary: action === 'accepted' ? "$80,000 - $120,000" : null,
        responseMessage: action === 'accepted' 
          ? "We're impressed with your profile! We'd like to schedule an interview to discuss the opportunity further."
          : "Thank you for your interest. At this time, we've decided to move forward with other candidates whose qualifications more closely match our requirements.",
        contactPerson: "HR Manager",
        contactEmail: "hr@techsolutions.com"
      };

      // Add to responses
      responses.push(newResponse);
      localStorage.setItem('companyApplicationResponses', JSON.stringify(responses));
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'new':
        return isDarkMode ? 'bg-blue-500 text-white' : 'bg-[#11a3a3] text-white';
      case 'under_review':
        return isDarkMode ? 'bg-yellow-500 text-black' : 'bg-yellow-400 text-black';
      case 'accepted':
        return isDarkMode ? 'bg-green-500 text-white' : 'bg-green-600 text-white';
      case 'rejected':
        return isDarkMode ? 'bg-red-500 text-white' : 'bg-red-600 text-white';
      default:
        return isDarkMode ? 'bg-gray-500 text-white' : 'bg-gray-400 text-white';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'new':
        return 'New';
      case 'under_review':
        return 'Under Review';
      case 'accepted':
        return 'Accepted';
      case 'rejected':
        return 'Rejected';
      default:
        return 'Unknown';
    }
  };

  const getStatusCount = (status) => {
    return applications.filter(app => app.status === status).length;
  };

  return (
    <div className={`dashboard-applications ${isDarkMode ? '' : 'light-mode'}`}>
      <h2>Received Applications</h2>
      <div className="applications-filters">
        <button className={`filter-btn ${isDarkMode ? '' : 'light-mode'} active`}>
          All Applications ({applications.length})
        </button>
        <button className={`filter-btn ${isDarkMode ? '' : 'light-mode'}`}>
          New ({getStatusCount('new')})
        </button>
        <button className={`filter-btn ${isDarkMode ? '' : 'light-mode'}`}>
          Under Review ({getStatusCount('under_review')})
        </button>
        <button className={`filter-btn ${isDarkMode ? '' : 'light-mode'}`}>
          Accepted ({getStatusCount('accepted')})
        </button>
        <button className={`filter-btn ${isDarkMode ? '' : 'light-mode'}`}>
          Rejected ({getStatusCount('rejected')})
        </button>
      </div>
      
      <div className="applications-list">
        {applications.map((application) => (
          <div key={application.id} className={`application-card ${isDarkMode ? '' : 'light-mode'}`}>
            <div className="applicant-info">
              <div className={`applicant-avatar ${isDarkMode ? '' : 'light-mode'}`}>{application.avatar}</div>
              <div className="applicant-details">
                <h4>{application.applicantName}</h4>
                <p>{application.position} • {application.experience}</p>
                <div className="applicant-skills">
                  {application.skills.map((skill, index) => (
                    <span key={index} className={isDarkMode ? '' : 'light-mode'}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="application-details">
              <div className={`job-applied ${isDarkMode ? '' : 'light-mode'}`}>Applied: {application.appliedDate}</div>
              <div className="contact-info">
                <p>📧 {application.email}</p>
                <p>📱 {application.phone}</p>
                <p>📍 {application.location}</p>
              </div>
              <div className="application-actions">
                <Link 
                  to={`/developer/profile/${application.applicantId}`}
                  className={`btn-view ${isDarkMode ? '' : 'light-mode'}`}
                >
                  View Profile
                </Link>
                <button 
                  className={`btn-accept ${isDarkMode ? '' : 'light-mode'}`} 
                  onClick={() => handleApplicationAction(application.id, 'accepted')}
                >
                  Accept
                </button>
                <button 
                  className={`btn-reject ${isDarkMode ? '' : 'light-mode'}`} 
                  onClick={() => handleApplicationAction(application.id, 'rejected')}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardApplications;
