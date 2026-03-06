import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function DashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeFolder, setActiveFolder] = useState('developer');

  const folders = [
    {
      id: 'developer',
      name: 'المطور',
      icon: '👨‍💻',
      pages: [
        { name: 'الملف الشخصي', path: '/dashboard/developer/profile', icon: '👤' },
        { name: 'المهارات', path: '/dashboard/developer/skills', icon: '🎯' },
        { name: 'المشاريع', path: '/dashboard/developer/projects', icon: '📁' }
      ]
    },
    {
      id: 'company',
      name: 'الشركة',
      icon: '🏢',
      pages: [
        { name: 'الملف الشخصي', path: '/dashboard/company/profile', icon: '👤' }
      ]
    }
  ];

  // تحديد الفولدر النشط بناءً على المسار الحالي أو حالة خاصة
  useEffect(() => {
    const path = location.pathname;
    if (path.includes('/company')) {
      setActiveFolder('company');
    } else if (path.includes('/developer')) {
      setActiveFolder('developer');
    } else if (path === '/dashboard') {
      // عند الدخول المباشر لـ /dashboard، نحافظ على آخر فولدر تم اختياره
      // أو نرجع للمطور كافتراضي
      setActiveFolder('developer');
    }
  }, [location.pathname]);

  const handlePageClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Content */}
          <div className="glass-card">
            <div className="p-4">
              <h2 className="h4 mb-4">
                {folders.find(f => f.id === activeFolder)?.icon} {' '}
                {folders.find(f => f.id === activeFolder)?.name} - الصفحات
              </h2>
              
              <div className="row g-3">
                {folders.find(f => f.id === activeFolder)?.pages.map(page => (
                  <div key={page.path} className="col-md-6">
                    <div 
                      className="folder-page-card"
                      onClick={() => handlePageClick(page.path)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="p-3">
                        <div className="d-flex align-items-center">
                          <span className="page-icon me-3">{page.icon}</span>
                          <div>
                            <h5 className="h6 mb-1">{page.name}</h5>
                            <small className="text-white-50">
                              {page.path}
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .folder-page-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
        }
        
        .folder-page-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }
        
        .page-icon {
          font-size: 1.5rem;
        }
        
        .list-group-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          transition: all 0.3s ease;
        }
        
        .list-group-item:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .list-group-item.active {
          background: #007bff;
          border-color: #007bff;
        }
      `}</style>
    </div>
  );
}

export default DashboardPage;
