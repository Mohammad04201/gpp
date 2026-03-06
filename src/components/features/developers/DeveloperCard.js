function DeveloperCard({ developer }) {
  const getAvailabilityBadge = (available) => {
    return available ? 'متاح للعمل' : 'مشغول';
  };

  const getAvailabilityColor = (available) => {
    return available ? 'success' : 'secondary';
  };

  return (
    <div className="col-lg-6">
      <div className="card developer-card glass-card">
        <div className="p-4">
          {/* Developer Header */}
          <div className="d-flex align-items-start mb-4">
            <div className="developer-avatar me-3">
              <span className="avatar-text">{developer.avatar}</span>
            </div>
            <div className="flex-grow-1">
              <h3 className="h5 mb-1">{developer.name}</h3>
              <p className="text-primary small mb-2">{developer.title}</p>
              <div className="developer-meta">
                <span className="badge bg-secondary me-2">📍 {developer.location}</span>
                <span className="badge bg-secondary me-2">📅 {developer.experience} سنوات</span>
                <span className={`badge bg-${getAvailabilityColor(developer.availableForHire)}`}>
                  {getAvailabilityBadge(developer.availableForHire)}
                </span>
              </div>
            </div>
          </div>

          {/* Developer Bio */}
          <p className="text-white-50 small mb-4">
            {developer.bio}
          </p>

          {/* Skills Section */}
          <div className="skills-section mb-4">
            <h4 className="h6 mb-3">🛠️ المهارات</h4>
            <div className="skills-list">
              {developer.skills.map((skill, index) => (
                <span key={index} className="badge bg-primary me-2">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section mb-4">
            <div className="row g-3">
              <div className="col-6">
                <div className="stat-item">
                  <div className="stat-number">{developer.projects}</div>
                  <div className="stat-label">مشروع</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-item">
                  <div className="stat-number">{developer.rating}</div>
                  <div className="stat-label">تقييم</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-item">
                  <div className="stat-number">{developer.hourlyRate}</div>
                  <div className="stat-label">ريال/ساعة</div>
                </div>
              </div>
              <div className="col-6">
                <div className="stat-item">
                  <div className="stat-number">
                    {developer.availableForHire ? '✅' : '❌'}
                  </div>
                  <div className="stat-label">متاح</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="contact-section mb-4">
            <h4 className="h6 mb-3">📞 معلومات التواصل</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">📧 البريد:</span>
                <span className="contact-value">{developer.email}</span>
              </div>
              <div className="contact-item">
                <span className="contact-label">📱 الهاتف:</span>
                <span className="contact-value">{developer.phone}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="actions-section">
            <div className="d-flex gap-2">
              <a 
                href={`https://${developer.github}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm flex-grow-1"
              >
                GitHub
              </a>
              <a 
                href={`https://${developer.linkedin}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-sm flex-grow-1"
              >
                LinkedIn
              </a>
              {developer.availableForHire && (
                <button className="btn btn-success btn-sm flex-grow-1">
                  توظيف
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperCard;
