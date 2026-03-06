import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainNavbar from '../layout/MainNavbar';

function CompanyDashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [companyData, setCompanyData] = useState({
    name: 'شركة التقنية المتقدمة',
    logo: '/logo.png',
    description: 'شركة رائدة في تطوير الحلول التقنية المبتكرة',
    country: 'SA',
    city: 'الرياض',
    address: 'حي الملك فهد، طريق الملك فهد',
    phone: '+966 50 123 4567',
    email: 'info@advancedtech.com',
    website: 'https://advancedtech.com',
    industry: 'التقنية والمعلومات',
    employees: '51-200',
    foundedYear: '2018',
    socialMedia: {
      linkedin: 'https://linkedin.com/company/advancedtech',
      twitter: 'https://twitter.com/advancedtech',
      facebook: 'https://facebook.com/advancedtech',
      instagram: 'https://instagram.com/advancedtech'
    }
  });

  const [stats, setStats] = useState({
    openJobs: 12,
    interestedDevelopers: 48,
    profileCompletion: 85,
    views: 156,
    applicationsThisMonth: 23,
    hiredThisYear: 8
  });

  const [recentActivities, setRecentActivities] = useState([
    { id: 1, type: 'job', title: 'مطور React الخلفي', time: 'منذ ساعتين', applicants: 12 },
    { id: 2, type: 'view', title: 'مشاهدة الملف الشخصي', time: 'منذ 5 ساعات', applicant: 'أحمد محمد' },
    { id: 3, type: 'application', title: 'تقديم على وظيفة', time: 'منذ يوم', applicant: 'فهد العتيبي', position: 'مطور Full Stack' },
    { id: 4, type: 'hire', title: 'توظيف جديد', time: 'منذ 3 أيام', applicant: 'سارة أحمد', position: 'مصممة واجهات' }
  ]);

  const [openJobs, setOpenJobs] = useState([
    { id: 1, title: 'مطور React الخلفي', type: 'full-time', applicants: 12, posted: 'منذ يومين' },
    { id: 2, title: 'مطور Full Stack', type: 'full-time', applicants: 8, posted: 'منذ 3 أيام' },
    { id: 3, title: 'مصمم واجهات مستخدم', type: 'part-time', applicants: 15, posted: 'منذ أسبوع' },
    { id: 4, title: 'مهندس DevOps', type: 'full-time', applicants: 6, posted: 'منذ أسبوعين' },
    { id: 5, title: 'مطور Python', type: 'contract', applicants: 7, posted: 'منذ 3 أسابيع' }
  ]);

  const getProfileCompletionColor = (percentage) => {
    if (percentage >= 80) return 'success';
    if (percentage >= 60) return 'warning';
    return 'danger';
  };

  const getActivityIcon = (type) => {
    switch (type) {
      case 'job': return '💼';
      case 'view': return '👁️';
      case 'application': return '📄';
      case 'hire': return '✅';
      default: return '📌';
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Company Header */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="glass-card">
                <div className="p-4">
                  <div className="row align-items-center">
                    <div className="col-md-2 text-center mb-3 mb-md-0">
                      <div className="company-logo-placeholder mb-3">
                        <span className="company-logo-text">
                          {companyData.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <h1 className="h2 mb-2">{companyData.name}</h1>
                      <p className="text-primary h5 mb-3">{companyData.industry}</p>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <div className="d-flex align-items-center mb-2">
                            <span className="contact-icon">📧</span>
                            <span className="me-2">{companyData.email}</span>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="contact-icon">📱</span>
                            <span className="me-2">{companyData.phone}</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="contact-icon">📍</span>
                            <span className="me-2">{companyData.city}, {companyData.country}</span>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="d-flex align-items-center mb-2">
                            <span className="contact-icon">🌐</span>
                            <a href={companyData.website} className="text-info me-2" target="_blank" rel="noopener noreferrer">
                              {companyData.website}
                            </a>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <span className="contact-icon">👥</span>
                            <span className="me-2">{companyData.employees} موظف</span>
                          </div>
                          <div className="d-flex align-items-center">
                            <span className="contact-icon">📅</span>
                            <span className="me-2">تأسست {companyData.foundedYear}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="row g-4 mb-5">
            <div className="col-md-6">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-3">👤 الملف الشخصي</h3>
                  <p className="text-white-50 mb-4">
                    إدارة معلومات الشركة، المكدس التقني، والتفاصيل الأساسية
                  </p>
                  <button 
                    className="btn btn-primary btn-lg w-100"
                    onClick={() => navigate('/dashboard/company/profile')}
                  >
                    عرض الملف الشخصي
                  </button>
                  <button 
                    className="btn btn-outline-primary btn-lg w-100 mt-2"
                    onClick={() => navigate('/dashboard/company/edit')}
                  >
                    تعديل الملف الشخصي
                  </button>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-3">📊 الإحصائيات</h3>
                  <div className="row g-3">
                    <div className="col-6">
                      <div className="text-center">
                        <div className="stat-number">{stats.openJobs}</div>
                        <div className="stat-label">وظيفة مفتوحة</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center">
                        <div className="stat-number">{stats.interestedDevelopers}</div>
                        <div className="stat-label">مطور مهتم</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center">
                        <div className="stat-number">{stats.profileCompletion}%</div>
                        <div className="stat-label">اكتمال الملف</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center">
                        <div className="stat-number">{stats.views}</div>
                        <div className="stat-label">مشاهدة</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className="row g-4 mb-5">
            <div className="col-lg-8">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-4">📈 النشاطات الحديثة</h3>
                  <div className="activity-list">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="activity-item">
                        <div className="d-flex align-items-center">
                          <span className="activity-icon me-3">
                            {getActivityIcon(activity.type)}
                          </span>
                          <div className="flex-grow-1">
                            <h6 className="mb-1">{activity.title}</h6>
                            <small className="text-white-50">
                              {activity.time}
                              {activity.applicants && ` • ${activity.applicants} متقدم`}
                              {activity.applicant && ` • ${activity.applicant}`}
                              {activity.position && ` • ${activity.position}`}
                            </small>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-4">🚀 الخطوات التالية</h3>
                  <div className="next-steps">
                    <div className="step-item mb-3">
                      <div className="d-flex align-items-start">
                        <span className="step-icon me-3">✅</span>
                        <div>
                          <h5 className="h6 mb-1">إكمال الملف الشخصي</h5>
                          <p className="small text-white-50 mb-0">أضف معلومات الشركة والمكدس التقني</p>
                          <div className="progress mt-2" style={{ height: '4px' }}>
                            <div 
                              className={`progress-bar bg-${getProfileCompletionColor(stats.profileCompletion)}`}
                              style={{ width: `${stats.profileCompletion}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="step-item mb-3">
                      <div className="d-flex align-items-start">
                        <span className="step-icon me-3">📝</span>
                        <div>
                          <h5 className="h6 mb-1">نشر الوظائف</h5>
                          <p className="small text-white-50 mb-0">أضف وظائف جديدة لجذب المطورين</p>
                        </div>
                      </div>
                    </div>
                    <div className="step-item">
                      <div className="d-flex align-items-start">
                        <span className="step-icon me-3">🎯</span>
                        <div>
                          <h5 className="h6 mb-1">مراجعة المتقدمين</h5>
                          <p className="small text-white-50 mb-0">شاهد المطورين المهتمين بالوظائف</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Open Jobs Preview */}
          <div className="row">
            <div className="col-12">
              <div className="glass-card">
                <div className="p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <h3 className="h5 mb-0">💼 الوظائف المفتوحة</h3>
                    <button 
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => navigate('/dashboard/company/jobs')}
                    >
                      عرض الكل
                    </button>
                  </div>
                  <div className="row g-3">
                    {openJobs.slice(0, 3).map((job) => (
                      <div key={job.id} className="col-md-4">
                        <div className="job-card">
                          <div className="p-3">
                            <h6 className="mb-2">{job.title}</h6>
                            <div className="d-flex justify-content-between align-items-center mb-2">
                              <span className="badge bg-primary">{job.type}</span>
                              <small className="text-white-50">{job.posted}</small>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-info">{job.applicants} متقدم</small>
                              <button className="btn btn-sm btn-outline-primary">عرض</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .company-logo-placeholder {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .company-logo-text {
          color: white;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .activity-item {
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-icon {
          font-size: 1.5rem;
          width: 40px;
          text-align: center;
        }

        .step-item {
          padding: 0.5rem 0;
        }

        .step-icon {
          font-size: 1.5rem;
          color: #28a745;
        }

        .job-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .job-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #007bff;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #6c757d;
        }

        .contact-icon {
          font-size: 1.2rem;
          width: 25px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default CompanyDashboardPage;
