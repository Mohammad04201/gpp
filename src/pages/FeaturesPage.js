import { Link } from 'react-router-dom';
import MainNavbar from '../components/layout/MainNavbar';

function FeaturesPage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Header */}
          <section className="text-center mb-5">
            <h1 className="display-4 fw-bold mb-4">
              🌟 مميزات المنصة
            </h1>
            <p className="lead text-white-50">
              اكتشف كل ما تقدمه منصتنا للمطورين والشركات
            </p>
          </section>

          {/* Features Grid */}
          <section className="mb-5">
            <div className="row g-4">
              {/* Developer Features */}
              <div className="col-lg-6">
                <div className="card glass-card">
                  <div className="p-4">
                    <h3 className="mb-4">👨‍💻 مميزات للمطورين</h3>
                    <div className="features-list">
                      <div className="feature-item mb-3">
                        <h5>📄 ملف شخصي احترافي</h5>
                        <p className="text-white-50">
                          أنشئ ملفاً شخصياً يعرض مهاراتك ومشاريعك وخبراتك
                        </p>
                      </div>
                      <div className="feature-item mb-3">
                        <h5>🚀 إدارة المشاريع</h5>
                        <p className="text-white-50">
                          اعرض مشاريعك السابقة والحالية مع التقنيات المستخدمة
                        </p>
                      </div>
                      <div className="feature-item mb-3">
                        <h5>🛠️ عرض المهارات</h5>
                        <p className="text-white-50">
                          قائمة مهاراتك التقنية مع مستوى الخبرة لكل مهارة
                        </p>
                      </div>
                      <div className="feature-item">
                        <h5>💼 فرص عمل</h5>
                        <p className="text-white-50">
                          احصل على فرص عمل من أفضل الشركات التقنية
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Features */}
              <div className="col-lg-6">
                <div className="card glass-card">
                  <div className="p-4">
                    <h3 className="mb-4">🏢 مميزات للشركات</h3>
                    <div className="features-list">
                      <div className="feature-item mb-3">
                        <h5>👥 البحث عن المطورين</h5>
                        <p className="text-white-50">
                          ابحث عن المطورين حسب المهارات والخبرة والموقع
                        </p>
                      </div>
                      <div className="feature-item mb-3">
                        <h5>📊 إدارة الوظائف</h5>
                        <p className="text-white-50">
                          انشر وظائفك وادعم طلبات التقديم بسهولة
                        </p>
                      </div>
                      <div className="feature-item mb-3">
                        <h5>🎯 فلترة متقدمة</h5>
                        <p className="text-white-50">
                          فلترة المطورين حسب المعايير التي تحتاجها
                        </p>
                      </div>
                      <div className="feature-item">
                        <h5>📈 لوحة تحكم</h5>
                        <p className="text-white-50">
                          تتبع أداء وظائفك وإحصائيات التوظيف
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="card glass-card">
              <div className="p-5">
                <h2 className="mb-4">جاهز للبدء؟</h2>
                <p className="lead text-white-50 mb-4">
                  انضم الآن واستفد من جميع هذه المميزات
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <Link to="/register/developer" className="btn btn-primary btn-lg">
                    ابدأ كمطور
                  </Link>
                  <Link to="/register/company" className="btn btn-success btn-lg">
                    ابدأ كشركة
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <style jsx>{`
        .features-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .feature-item h5 {
          color: #007bff;
          margin-bottom: 0.5rem;
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

export default FeaturesPage;
