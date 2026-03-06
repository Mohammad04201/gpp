import { Link } from 'react-router-dom';
import MainNavbar from '../components/layout/MainNavbar';

function RoleSelection() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Header */}
          <section className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-4">
              🎯 اختر دورك
            </h1>
            <p className="lead text-white-50">
              هل أنت مطور تبحث عن فرص عمل أم شركة تبحث عن مطورين؟
            </p>
          </section>

          {/* Role Cards */}
          <section className="mb-5">
            <div className="row g-4 justify-content-center">
              {/* Developer Card */}
              <div className="col-md-5">
                <div className="card role-card glass-card h-100">
                  <div className="p-5 text-center">
                    <div className="role-icon mb-4">👨‍💻</div>
                    <h3 className="mb-4">مطور</h3>
                    <p className="text-white-50 mb-4">
                      أنشئ ملفاً شخصياً، اعرض مهاراتك، شارك مشاريعك، واحصل على فرص عمل من أفضل الشركات
                    </p>
                    <div className="features-list mb-4">
                      <div className="feature-item">
                        <span>✓ ملف شخصي احترافي</span>
                      </div>
                      <div className="feature-item">
                        <span>✓ إدارة المشاريع</span>
                      </div>
                      <div className="feature-item">
                        <span>✓ عرض المهارات</span>
                      </div>
                      <div className="feature-item">
                        <span>✓ فرص عمل مخصصة</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <Link to="/login/developer" className="btn btn-outline-primary">
                        تسجيل الدخول
                      </Link>
                      <Link to="/register/developer" className="btn btn-primary">
                        إنشاء حساب جديد
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Card */}
              <div className="col-md-5">
                <div className="card role-card glass-card h-100">
                  <div className="p-5 text-center">
                    <div className="role-icon mb-4">🏢</div>
                    <h3 className="mb-4">شركة</h3>
                    <p className="text-white-50 mb-4">
                      انشر وظائفك، ابحث عن أفضل المطورين، وادعم عملية التوظيف بسهولة
                    </p>
                    <div className="features-list mb-4">
                      <div className="feature-item">
                        <span>✓ البحث عن المطورين</span>
                      </div>
                      <div className="feature-item">
                        <span>✓ إدارة الوظائف</span>
                      </div>
                      <div className="feature-item">
                        <span>✓ فلترة متقدمة</span>
                      </div>
                      <div className="feature-item">
                        <span>✓ لوحة تحكم</span>
                      </div>
                    </div>
                    <div className="d-grid gap-2">
                      <Link to="/login/company" className="btn btn-outline-success">
                        تسجيل الدخول
                      </Link>
                      <Link to="/register/company" className="btn btn-success">
                        إنشاء حساب جديد
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <section className="text-center">
            <Link to="/" className="btn btn-outline-secondary">
              ← العودة للصفحة الرئيسية
            </Link>
          </section>
        </div>
      </main>

      <style jsx>{`
        .role-icon {
          font-size: 4rem;
          opacity: 0.8;
          margin-bottom: 1rem;
        }
        
        .role-card {
          transition: all 0.3s ease;
        }
        
        .role-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
        }
        
        .features-list {
          text-align: right;
        }
        
        .feature-item {
          margin-bottom: 0.5rem;
          color: #28a745;
          font-weight: 500;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
        }
        
        .d-grid {
          display: grid;
          gap: 0.5rem;
        }
        
        @media (max-width: 768px) {
          .features-list {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}

export default RoleSelection;
