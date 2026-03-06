function CompanyOpenRolesSection() {
  const roles = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      type: 'Full-time',
      location: 'Riyadh, Saudi Arabia',
      posted: '2 days ago',
      applicants: 12
    },
    {
      id: 2,
      title: 'Backend Engineer',
      type: 'Full-time',
      location: 'Remote',
      posted: '5 days ago',
      applicants: 8
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      type: 'Contract',
      location: 'Dubai, UAE',
      posted: '1 week ago',
      applicants: 6
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      type: 'Part-time',
      location: 'Cairo, Egypt',
      posted: '2 weeks ago',
      applicants: 15
    }
  ];

  return (
    <section className="glass-card mb-4" id="open-roles">
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="h4 mb-0">Open Roles</h2>
          <button className="btn btn-primary btn-sm">
            + Post New Role
          </button>
        </div>
        <div className="roles-list">
          {roles.map((role) => (
            <div key={role.id} className="role-item">
              <div className="d-flex justify-content-between align-items-start">
                <div className="flex-grow-1">
                  <h4 className="h6 mb-1">{role.title}</h4>
                  <div className="role-meta">
                    <span className="badge bg-primary me-2">{role.type}</span>
                    <span className="text-info small me-3">📍 {role.location}</span>
                    <span className="text-white-50 small">🕒 {role.posted}</span>
                  </div>
                </div>
                <div className="role-stats">
                  <div className="text-center">
                    <p className="small text-white-50 mb-1">Applicants</p>
                    <p className="h5 mb-0">{role.applicants}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyOpenRolesSection;
