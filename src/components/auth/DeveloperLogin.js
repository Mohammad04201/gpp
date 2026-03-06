import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainNavbar from '../../components/layout/MainNavbar';

function DeveloperLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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
    // Add login logic here
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
                  <h2 className="h3 mb-3">تسجيل دخول المطور</h2>
                  <p className="text-white-50">أهلاً بعودتك إلى منصة مهيب</p>
                </div>

                <form onSubmit={handleSubmit}>
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

                  <div className="mb-4">
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

                  <div className="d-grid mb-3">
                    <button type="submit" className="btn btn-primary btn-lg">
                      تسجيل الدخول
                    </button>
                  </div>

                  <div className="text-center">
                    <p className="mb-0">
                      ليس لديك حساب؟{' '}
                      <Link to="/register/developer" className="text-primary">
                        سجل الآن
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

export default DeveloperLogin;
