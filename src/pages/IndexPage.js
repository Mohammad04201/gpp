import React from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from '../components/layout/MainNavbar';

/**
 * صفحة الفهرس - عرض جميع الصفحات المنظمة
 * هذه الصفحة تعرض جميع الصفحات المتاحة في المشروع بشكل منظم
 */

function IndexPage() {
  const pageCategories = [
    {
      title: '🏠 الصفحات الرئيسية',
      pages: [
        { path: '/', name: 'الصفحة الرئيسية', description: 'Landing Page - الصفحة الأولى للموقع' },
        { path: '/features', name: 'المميزات', description: 'Features Page - عرض مميزات المنصة' },
        { path: '/companies', name: 'الشركات', description: 'Companies Page - صفحة للشركات' },
        { path: '/developers', name: 'المطورون', description: 'Developers Page - صفحة للمطورين' },
        { path: '/select-role', name: 'اختيار الدور', description: 'Role Selection - اختيار نوع المستخدم' }
      ]
    },
    {
      title: '🔐 المصادقة',
      pages: [
        { path: '/login/developer', name: 'تسجيل دخول المطور', description: 'Developer Login' },
        { path: '/login/company', name: 'تسجيل دخول الشركة', description: 'Company Login' },
        { path: '/register/developer', name: 'تسجيل مطور جديد', description: 'Developer Registration' },
        { path: '/register/company', name: 'تسجيل شركة جديدة', description: 'Company Registration' }
      ]
    },
    {
      title: '📊 الداشبورد',
      pages: [
        { path: '/dashboard', name: 'الداشبورد الرئيسي', description: 'Main Dashboard - صفحة التنقل الرئيسية' },
        { path: '/dashboard/developer', name: 'داشبورد المطور', description: 'Developer Dashboard' },
        { path: '/dashboard/company', name: 'داشبورد الشركة', description: 'Company Dashboard' }
      ]
    },
    {
      title: '👨‍💻 صفحات المطور',
      pages: [
        { path: '/dashboard/developer/profile', name: 'الملف الشخصي', description: 'Developer Profile - معلومات المطور' },
        { path: '/dashboard/developer/skills', name: 'المهارات', description: 'Skills Page - إدارة المهارات' },
        { path: '/dashboard/developer/projects', name: 'المشاريع', description: 'Project Management - إدارة المشاريع' }
      ]
    },
    {
      title: '🏢 صفحات الشركة',
      pages: [
        { path: '/dashboard/company/profile', name: 'الملف الشخصي', description: 'Company Profile - معلومات الشركة' }
      ]
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">📑 فهرس الصفحات</h1>
            <p className="lead text-white-50">
              جميع صفحات المشروع المنظمة حسب الفئات
            </p>
          </div>

          <div className="row g-4">
            {pageCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="col-12">
                <div className="glass-card">
                  <div className="p-4">
                    <h2 className="h4 mb-4">{category.title}</h2>
                    
                    <div className="row g-3">
                      {category.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="col-md-6 col-lg-4">
                          <Link 
                            to={page.path} 
                            className="text-decoration-none page-link-card"
                          >
                            <div className="page-card">
                              <div className="p-3">
                                <h3 className="h6 mb-2 text-primary">
                                  {page.name}
                                </h3>
                                <p className="small text-white-50 mb-0">
                                  {page.description}
                                </p>
                                <div className="mt-2">
                                  <code className="text-info small">
                                    {page.path}
                                  </code>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-3">📈 إحصائيات المشروع</h3>
                  <div className="row g-3">
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">
                          {pageCategories.reduce((acc, cat) => acc + cat.pages.length, 0)}
                        </div>
                        <div className="stat-label">إجمالي الصفحات</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">{pageCategories.length}</div>
                        <div className="stat-label">الفئات</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">3</div>
                        <div className="stat-label">صفحات مطور</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">1</div>
                        <div className="stat-label">صفحة شركة</div>
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
        .page-link-card {
          transition: all 0.3s ease;
        }
        
        .page-link-card:hover {
          transform: translateY(-2px);
        }
        
        .page-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .page-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #007bff;
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

export default IndexPage;
