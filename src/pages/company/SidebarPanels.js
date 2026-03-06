function CompanySidebarPanels() {
  return (
    <div className="sidebar-panels">
      {/* Company Stats Panel */}
      <div className="glass-card mb-4">
        <div className="p-4">
          <h4 className="h5 mb-3">Company Stats</h4>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Active Roles</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">48</div>
              <div className="stat-label">Total Applicants</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">12</div>
              <div className="stat-label">Interviews</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">8</div>
              <div className="stat-label">Hired</div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Panel */}
      <div className="glass-card mb-4">
        <div className="p-4">
          <h4 className="h5 mb-3">Recent Activity</h4>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">👤</div>
              <div className="activity-content">
                <p className="mb-1">New application for Senior Frontend Developer</p>
                <span className="text-white-50 small">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📅</div>
              <div className="activity-content">
                <p className="mb-1">Interview scheduled with Ahmed Mohammed</p>
                <span className="text-white-50 small">5 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">✅</div>
              <div className="activity-content">
                <p className="mb-1">Hired Sarah Ahmed as UI/UX Designer</p>
                <span className="text-white-50 small">1 day ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📝</div>
              <div className="activity-content">
                <p className="mb-1">Posted new role: Backend Engineer</p>
                <span className="text-white-50 small">2 days ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions Panel */}
      <div className="glass-card">
        <div className="p-4">
          <h4 className="h5 mb-3">Quick Actions</h4>
          <div className="actions-list">
            <button className="btn btn-outline-primary w-100 mb-2">
              📝 Post New Role
            </button>
            <button className="btn btn-outline-info w-100 mb-2">
              👥 View All Applicants
            </button>
            <button className="btn btn-outline-success w-100 mb-2">
              📊 View Analytics
            </button>
            <button className="btn btn-outline-warning w-100">
              ⚙️ Company Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanySidebarPanels;
