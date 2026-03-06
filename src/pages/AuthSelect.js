import { Link } from 'react-router-dom';

function AuthSelect() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-app-dark">
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="glass-card p-4 p-md-5 text-white">
                <p className="text-uppercase small text-info mb-2">
                  Choose your journey
                </p>
                <h1 className="h3 mb-3">How do you want to sign in?</h1>
                <p className="text-white-50 mb-4">
                  Select whether you&apos;re a developer looking for opportunities or a
                  company building your next tech team.
                </p>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="h-100 border border-secondary rounded-4 p-4">
                      <div className="feature-card-icon">DEV</div>
                      <span className="badge-soft small d-inline-block mb-2">
                        For talents
                      </span>
                      <h2 className="h5 mb-2">I&apos;m a developer</h2>
                      <p className="text-white-50 small mb-3">
                        Build your profile, sync your GitHub, and get matched with roles
                        tailored to your skills.
                      </p>
                      <Link
                        to="/login/developer"
                        className="btn btn-primary w-100 text-nowrap"
                      >
                        Continue as developer
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100 border border-secondary rounded-4 p-4">
                      <div className="feature-card-icon">BIZ</div>
                      <span className="badge-soft small d-inline-block mb-2">
                        For companies
                      </span>
                      <h2 className="h5 mb-2">We&apos;re a company</h2>
                      <p className="text-white-50 small mb-3">
                        Publish roles, review vetted talent, and manage your AI-powered
                        pipeline.
                      </p>
                      <Link
                        to="/login/company"
                        className="btn btn-outline-light w-100 text-nowrap"
                      >
                        Continue as company
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Link to="/" className="text-white-50 small text-decoration-none">
                    ← Back to home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthSelect;

