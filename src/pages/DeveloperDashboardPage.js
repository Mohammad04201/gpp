import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainNavbar from '../components/navbars/MainNavbar';

function DeveloperDashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const pages = [
    { name: 'الملف الشخصي', path: '/dashboard/developer/profile', icon: '👤', description: 'إدارة معلوماتك الشخصية وبيانات الاتصال' },
    { name: 'المهارات', path: '/dashboard/developer/skills', icon: '🎯', description: 'عرض وتحديث مهاراتك التقنية والخبرات' },
    { name: 'المشاريع', path: '/dashboard/developer/projects', icon: '📁', description: 'إدارة مشاريعك وأعمالك السابقة' }
  ];

  const handlePageClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">👨‍💻 Developer Dashboard</h1>
            <p className="lead text-white-50">
              لوحة تحكم المطورين - إدارة ملفك الشخصي والمشاريع والمهارات
            </p>
          </div>

          <div className="row g-4">
            {pages.map((page, index) => (
              <div key={page.path} className="col-md-4">
                <div 
                  className="dashboard-page-card h-100"
                  onClick={() => handlePageClick(page.path)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="p-4">
                    <div className="text-center mb-3">
                      <div className="page-icon-large mb-3">{page.icon}</div>
                      <h3 className="h5 mb-3">{page.name}</h3>
                      <p className="text-white-50 small mb-4">
                        {page.description}
                      </p>
                    </div>
                    <div className="text-center">
                      <button className="btn btn-outline-light btn-sm">
                        الدخول إلى الصفحة
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-3">📊 إحصائيات سريعة</h3>
                  <div className="row g-3">
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">12</div>
                        <div className="stat-label">مشروع</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">8</div>
                        <div className="stat-label">مهارة</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">95%</div>
                        <div className="stat-label">اكتمال الملف</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">24</div>
                        <div className="stat-label">مشاهدة</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .dashboard-page-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .dashboard-page-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-5px);
          border-color: #007bff;
        }
        
        .page-icon-large {
          font-size: 3rem;
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
      `}</style>
    </div>
  );
}

export default DeveloperDashboardPage;
