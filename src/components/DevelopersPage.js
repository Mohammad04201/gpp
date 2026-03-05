import { Link } from 'react-router-dom';
import MainNavbar from './MainNavbar';

function DevelopersPage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <section className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">For Developers</h1>
            <p className="lead text-white-50 mb-4">
              Get matched with top companies in MENA. Connect your GitHub, build your
              profile, and receive relevant opportunities in real time.
            </p>
            <Link to="/login/developer" className="btn btn-primary btn-lg">
              Join as Developer
            </Link>
          </section>

          <section>
            <h2 className="h4 text-center mb-4">Why developers choose Mawhiba AI</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">GH</div>
                    <h3 className="h5 mb-2">GitHub-powered profile</h3>
                    <p className="text-white-50 mb-0">
                      Your real work speaks. We analyze your repos so companies see your
                      actual skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">RM</div>
                    <h3 className="h5 mb-2">Relevant matches only</h3>
                    <p className="text-white-50 mb-0">
                      AI surfaces jobs that fit your stack and goals — no spam, no
                      noise.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">MN</div>
                    <h3 className="h5 mb-2">MENA opportunities</h3>
                    <p className="text-white-50 mb-0">
                      Companies hiring in the Arab world are looking for talent like
                      you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DevelopersPage;

