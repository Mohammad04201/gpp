import { Link, useNavigate } from 'react-router-dom';
import MainNavbar from '../MainNavbar';

function CompanyLogin() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard/company');
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-app-dark">
      <MainNavbar />
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-5">
            <div className="glass-card text-white">
              <div className="p-4 p-md-5">
                <Link
                  to="/select-role"
                  className="btn btn-link text-decoration-none p-0 mb-3 text-white-50"
                >
                  ← Back
                </Link>
                <h1 className="h3 mb-2">Company login</h1>
                <p className="text-white-50 mb-4">
                  Sign in to manage your hiring pipeline, roles, and team.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="company-email" className="form-label">
                      Work email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="company-email"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company-password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="company-password"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="company-remember"
                      />
                      <label
                        className="form-check-label small text-white-50"
                        htmlFor="company-remember"
                      >
                        Remember me
                      </label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-link btn-sm p-0 text-white-50"
                    >
                      Forgot password?
                    </button>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    Sign in
                  </button>
                  <p className="text-center text-white-50 small mb-0">
                    This is a prototype login – no real authentication is connected yet.
                  </p>
                </form>
              </div>
            </div>
            <p className="text-center text-white-50 small mt-3">
              New to Mawhiba AI?{' '}
              <Link
                to="/register/company"
                className="text-decoration-none text-primary"
              >
                Create a company account
              </Link>
            </p>
            <p className="text-center text-white-50 small">
              Not a company?{' '}
              <Link
                to="/login/developer"
                className="text-decoration-none text-primary"
              >
                Switch to developer login
              </Link>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyLogin;

