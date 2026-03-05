import { Link, useNavigate } from 'react-router-dom';
import MainNavbar from '../MainNavbar';

function DeveloperRegister() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard/developer');
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
                <h1 className="h3 mb-2">Create developer account</h1>
                <p className="text-white-50 mb-4">
                  Tell us a bit about you so we can start matching you with the right
                  roles.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="dev-name" className="form-label">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dev-name"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dev-email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="dev-email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dev-role" className="form-label">
                      Main role
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="dev-role"
                      placeholder="مثال: Front-end React, UI/UX Designer..."
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="dev-password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="dev-password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    Create account
                  </button>
                  <p className="text-center text-white-50 small mb-0">
                    This form is for demo purposes only – no real account will be
                    created.
                  </p>
                </form>
              </div>
            </div>
            <p className="text-center text-white-50 small mt-3">
              Already have an account?{' '}
              <Link to="/login/developer" className="text-decoration-none text-primary">
                Log in
              </Link>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperRegister;

