import { useState } from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from '../components/layout/MainNavbar';
import { useDevelopers } from '../hooks/useDevelopers';

function DevelopersPage() {
  const { developers, loading, error, refetch } = useDevelopers();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [selectedAvailability, setSelectedAvailability] = useState('all');

  const skills = ['all', 'React', 'Node.js', 'Python', 'TypeScript', 'DevOps', 'UI/UX Design'];
  const experienceLevels = ['all', '0-1', '2-3', '4-5', '6+'];
  const availability = ['all', 'available', 'busy'];

  const filteredDevelopers = developers.filter(developer => {
    const matchesSearch = developer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         developer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         developer.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSkills = selectedSkills === 'all' || developer.skills.some(skill => skill === selectedSkills);
    
    // Extract numeric experience from string like "5 سنوات"
    const expNum = parseInt(developer.experience);
    const matchesExperience = selectedExperience === 'all' || 
      (selectedExperience === '0-1' && expNum <= 1) ||
      (selectedExperience === '2-3' && expNum >= 2 && expNum <= 3) ||
      (selectedExperience === '4-5' && expNum >= 4 && expNum <= 5) ||
      (selectedExperience === '6+' && expNum >= 6);
      
    const matchesAvailability = selectedAvailability === 'all' || 
      (selectedAvailability === 'available' && developer.availableForHire) ||
      (selectedAvailability === 'busy' && !developer.availableForHire);
    
    return matchesSearch && matchesSkills && matchesExperience && matchesAvailability;
  });

  const getAvailabilityBadge = (available) => {
    return available ? 'متاح للعمل' : 'مشغول';
  };

  const getAvailabilityColor = (available) => {
    return available ? 'success' : 'secondary';
  };

  if (loading) {
    return (
      <div className="min-vh-100 d-flex flex-column bg-dark text-white">
        <MainNavbar />
        <main className="flex-grow-1 py-5">
          <div className="container">
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3">جاري تحميل المطورين...</p>
            </div>
          </div>
        </main>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-vh-100 d-flex flex-column bg-dark text-white">
        <MainNavbar />
        <main className="flex-grow-1 py-5">
          <div className="container">
            <div className="alert alert-danger" role="alert">
              <h4>حدث خطأ</h4>
              <p>{error}</p>
              <button className="btn btn-primary" onClick={() => refetch()}>
                إعادة المحاولة
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Header */}
          <section className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">👨‍💻 المطورون</h1>
            <p className="lead text-white-50 mb-4">
              استكشف أفضل المطورين في المنطقة وتواصل معهم مباشرة
            </p>
            <Link to="/register/developer" className="btn btn-primary btn-lg">
              انضم كمطور
            </Link>
          </section>

          {/* Filters */}
          <section className="mb-5">
            <div className="card glass-card">
              <div className="p-4">
                <div className="row g-3">
                  <div className="col-md-3">
                    <label className="form-label">البحث عن مطور</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="ابحث عن مطور..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">المهارات</label>
                    <select
                      className="form-select"
                      value={selectedSkills}
                      onChange={(e) => setSelectedSkills(e.target.value)}
                    >
                      {skills.map((skill, index) => (
                        <option key={index} value={skill}>
                          {skill === 'all' ? 'جميع المهارات' : skill}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">الخبرة</label>
                    <select
                      className="form-select"
                      value={selectedExperience}
                      onChange={(e) => setSelectedExperience(e.target.value)}
                    >
                      {experienceLevels.map((level, index) => (
                        <option key={index} value={level}>
                          {level === 'all' ? 'جميع المستويات' : `${level} سنوات`}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-3">
                    <label className="form-label">التوفر</label>
                    <select
                      className="form-select"
                      value={selectedAvailability}
                      onChange={(e) => setSelectedAvailability(e.target.value)}
                    >
                      {availability.map((status, index) => (
                        <option key={index} value={status}>
                          {status === 'all' ? 'الكل' : 
                           status === 'available' ? 'متاح للعمل' : 'مشغول'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Developers Grid */}
          <section className="mb-5">
            <div className="row g-4">
              {filteredDevelopers.map((developer) => (
                <div key={developer.id} className="col-lg-6">
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
              ))}
            </div>

            {filteredDevelopers.length === 0 && (
              <div className="text-center py-5">
                <div className="empty-state-icon mb-3">🔍</div>
                <h4 className="h5 mb-3">لم يتم العثور على مطورين</h4>
                <p className="text-white-50">
                  جرب تغيير معايير البحث أو المرشحات
                </p>
              </div>
            )}
          </section>

          {/* Stats */}
          <section className="mt-5">
            <div className="card glass-card">
              <div className="p-4">
                <h3 className="h5 mb-4">📊 إحصائيات المنصة</h3>
                <div className="row g-3">
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="stat-number">{developers.length}</div>
                      <div className="stat-label">مطور مسجل</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="stat-number">
                        {developers.filter(d => d.availableForHire).length}
                      </div>
                      <div className="stat-label">متاح للعمل</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="stat-number">8</div>
                      <div className="stat-label">دولة</div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="text-center">
                      <div className="stat-number">15</div>
                      <div className="stat-label">مجال تقني</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DevelopersPage;
