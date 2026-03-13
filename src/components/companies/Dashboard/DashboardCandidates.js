import React from 'react';

const DashboardCandidates = () => {
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
};

export default DashboardCandidates;
