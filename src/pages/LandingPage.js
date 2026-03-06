import { Link } from 'react-router-dom';
import MainNavbar from '../components/layout/MainNavbar';

function LandingPage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Hero Section */}
          <section className="text-center mb-5">
            <h1 className="display-3 fw-bold mb-4">
              🚀 منصة التوظيف للمطورين والشركات
            </h1>
            <p className="lead text-white-50 mb-5">
              ابحث عن أفضل المطورين أو انشر وظائفك في أفضل الشركات التقنية
            </p>
            <div className="d-flex gap-3 justify-content-center">
              <Link to="/companies" className="btn btn-primary btn-lg">
                🔍 ابحث عن مطورين
              </Link>
              <Link to="/developers" className="btn btn-outline-primary btn-lg">
                💼 ابحث عن وظائف
              </Link>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-5">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card glass-card h-100">
                  <div className="p-4 text-center">
                    <div className="feature-icon mb-3">👨‍💻</div>
                    <h4>للمطورين</h4>
                    <p className="text-white-50">
                      اعرض مهاراتك وشارك مشاريعك واحصل على فرص عمل من أفضل الشركات
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card glass-card h-100">
                  <div className="p-4 text-center">
                    <div className="feature-icon mb-3">🏢</div>
                    <h4>للشركات</h4>
                    <p className="text-white-50">
                      انشر وظائفك وابحث عن أفضل المطورين لفريقك
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card glass-card h-100">
                  <div className="p-4 text-center">
                    <div className="feature-icon mb-3">🤝</div>
                    <h4>تواصل مباشر</h4>
                    <p className="text-white-50">
                      تواصل مع المطورين والشركات مباشرة بدون وسيط
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="card glass-card">
              <div className="p-5">
                <h2 className="mb-4">ابدأ الآن!</h2>
                <p className="lead text-white-50 mb-4">
                  انضم إلى آلاف المطورين والشركات التي تستخدم منصتنا
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <Link to="/register/developer" className="btn btn-success btn-lg">
                    انضم كمطور
                  </Link>
                  <Link to="/register/company" className="btn btn-info btn-lg">
                    انضم كشركة
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .feature-icon {
          font-size: 3rem;
          opacity: 0.8;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .glass-card:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </div>
  );
}

export default LandingPage;
