import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainNavbar from '../../components/navbars/MainNavbar';

function CompanyDashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">🏢 Company Dashboard</h1>
            <p className="lead text-white-50">
              لوحة تحكم الشركات - إدارة ملف الشركة والوظائف
            </p>
          </div>

          <div className="row g-4">
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
                        <div className="stat-number">12</div>
                        <div className="stat-label">وظيفة مفتوحة</div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="text-center">
                        <div className="stat-number">48</div>
                        <div className="stat-label">مطور مهتم</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-3">🚀 الخطوات التالية</h3>
                  <div className="row g-3">
                    <div className="col-md-4">
                      <div className="text-center">
                        <div className="step-icon mb-2">✅</div>
                        <h5 className="h6">إكمال الملف الشخصي</h5>
                        <p className="small text-white-50">أضف معلومات الشركة والمكدس التقني</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <div className="step-icon mb-2">📝</div>
                        <h5 className="h6">نشر الوظائف</h5>
                        <p className="small text-white-50">أضف وظائف جديدة لجذب المطورين</p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <div className="step-icon mb-2">🎯</div>
                        <h5 className="h6">مراجعة المتقدمين</h5>
                        <p className="small text-white-50">شاهد المطورين المهتمين بالوظائف</p>
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
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #007bff;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #6c757d;
        }
        
        .step-icon {
          font-size: 2rem;
          color: #28a745;
        }
      `}</style>
    </div>
  );
}

export default CompanyDashboardPage;
