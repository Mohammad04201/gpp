import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainNavbar from '../../components/layout/MainNavbar';

function CompanyRegister() {
  const [formData, setFormData] = useState({
    companyName: '',
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
    navigate('/dashboard/company');
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
                  <h2 className="h3 mb-3">تسجيل شركة جديدة</h2>
                  <p className="text-white-50">سجل شركتك في منصة مهيب وابدأ توظيف المطورين</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">اسم الشركة</label>
                    <input
                      type="text"
                      className="form-control"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">البريد الإلكتروني للشركة</label>
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
                      إنشاء حساب الشركة
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="mb-0">
                      لديك حساب بالفعل؟{' '}
                      <Link to="/login/company" className="text-primary">
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

export default CompanyRegister;
