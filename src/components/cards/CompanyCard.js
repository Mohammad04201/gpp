import { Link } from 'react-router-dom';

function CompanyCard({ company }) {
  const getJobTypeColor = (type) => {
    switch (type) {
      case 'full-time': return 'success';
      case 'part-time': return 'warning';
      case 'contract': return 'info';
      default: return 'secondary';
    }
  };

  const getJobTypeText = (type) => {
    switch (type) {
      case 'full-time': return 'دوام كامل';
      case 'part-time': return 'دوام جزئي';
      case 'contract': return 'عقد';
      default: return type;
    }
  };

  return (
    <div className="card company-card glass-card">
      <div className="p-4">
        {/* Company Header */}
        <div className="d-flex align-items-start mb-4">
          <div className="company-logo me-3">
            <span className="company-logo-text">{company.logo}</span>
          </div>
          <div className="flex-grow-1">
            <h3 className="h5 mb-1">{company.name}</h3>
            <p className="text-primary small mb-2">{company.industry}</p>
            <div className="company-meta">
              <span className="badge bg-secondary me-2">📍 {company.location}</span>
              <span className="badge bg-secondary me-2">👥 {company.size}</span>
              <span className="badge bg-secondary">📅 {company.founded}</span>
            </div>
          </div>
        </div>

        {/* Company Description */}
        <p className="text-white-50 small mb-4">
          {company.description}
        </p>

        {/* Jobs Section */}
        <div className="jobs-section">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h4 className="h6 mb-0">
              💼 الوظائف المفتوحة ({company.openJobs})
            </h4>
            <a 
              href={company.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-outline-primary btn-sm"
            >
              زيارة الموقع
            </a>
          </div>

          <div className="jobs-list">
            {company.jobs.map((job) => (
              <div key={job.id} className="job-item">
                <div className="d-flex justify-content-between align-items-start">
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{job.title}</h6>
                    <div className="job-meta">
                      <span className={`badge bg-${getJobTypeColor(job.type)} me-2`}>
                        {getJobTypeText(job.type)}
                      </span>
                      <span className="text-info small me-3">
                        💰 {job.salary}
                      </span>
                      <span className="text-white-50 small">
                        🕒 {job.posted}
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-primary btn-sm">
                    تقديم
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyCard;
