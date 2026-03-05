import { useState } from 'react';
import MainNavbar from '../components/MainNavbar';

function DashboardPage() {
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

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-4">📂 المجلدات</h3>
                  <div className="list-group">
                    {folders.map(folder => (
                      <button
                        key={folder.id}
                        className={`list-group-item list-group-item-action ${
                          activeFolder === folder.id ? 'active' : ''
                        }`}
                        onClick={() => setActiveFolder(folder.id)}
                      >
                        <span className="me-2">{folder.icon}</span>
                        {folder.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="col-md-9">
              <div className="glass-card">
                <div className="p-4">
                  <h2 className="h4 mb-4">
                    {folders.find(f => f.id === activeFolder)?.icon} {' '}
                    {folders.find(f => f.id === activeFolder)?.name} - الصفحات
                  </h2>
                  
                  <div className="row g-3">
                    {folders.find(f => f.id === activeFolder)?.pages.map(page => (
                      <div key={page.path} className="col-md-6">
                        <a 
                          href={page.path}
                          className="text-decoration-none"
                        >
                          <div className="folder-page-card">
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
                        </a>
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
