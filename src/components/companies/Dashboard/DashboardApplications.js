import React from 'react';

const DashboardApplications = () => {
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
};

export default DashboardApplications;
