import { Link, useNavigate } from 'react-router-dom';

function CompanyRegister() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard/company');
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-app-dark">
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
                <h1 className="h3 mb-2">Create company account</h1>
                <p className="text-white-50 mb-4">
                  Set up your hiring space to start posting roles and discovering talent.
                </p>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="company-name" className="form-label">
                      Company name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="company-name"
                      placeholder="Your company"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company-size" className="form-label">
                      Company size
                    </label>
                    <select id="company-size" className="form-select">
                      <option>1–10</option>
                      <option>11–50</option>
                      <option>51–200</option>
                      <option>200+</option>
                    </select>
                  </div>
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
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="company-password" className="form-label">
                      Password Confirm
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="company-password"
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    Create company account
                  </button>
                  <p className="text-center text-white-50 small mb-0">
                    Demo only – this will not create a real account or store data.
                  </p>
                </form>
              </div>
            </div>
            <p className="text-center text-white-50 small mt-3">
              Already partnering with us?{' '}
              <Link to="/login/company" className="text-decoration-none text-primary">
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

export default CompanyRegister;

