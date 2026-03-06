import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainNavbar from '../../components/layout/MainNavbar';

function DeveloperRegister() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('كلمات المرور غير متطابقة');
      return;
    }
    // Add registration logic here
    navigate('/dashboard/developer');
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <div className="glass-card p-4 p-md-5">
                <div className="text-center mb-4">
                  <h2 className="h3 mb-3">تسجيل مطور جديد</h2>
                  <p className="text-white-50">انضم إلى منصة مهيب وابدأ رحلتك المهنية</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">الاسم الكامل</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">كلمة المرور</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">تأكيد كلمة المرور</label>
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary btn-lg">
                      إنشاء حساب
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="mb-0">
                      لديك حساب بالفعل؟{' '}
                      <Link to="/login/developer" className="text-primary">
                        سجل دخول
                      </Link>
                    </p>
                    <p className="mt-2">
                      <Link to="/select-role" className="text-white-50">
                        العودة للخيارات
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DeveloperRegister;
