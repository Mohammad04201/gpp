import { Link } from 'react-router-dom';
import MainNavbar from './navbars/MainNavbar';

function CompaniesPage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <section className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">For Companies</h1>
            <p className="lead text-white-50 mb-4">
              Hire vetted tech talent from the Arab world. AI-powered matching,
              GitHub-verified skills, and a pipeline built for scale.
            </p>
            <Link to="/login/company" className="btn btn-primary btn-lg">
              Start Hiring
            </Link>
          </section>

          <section>
            <h2 className="h4 text-center mb-4">Why companies choose Mawhiba AI</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">VT</div>
                    <h3 className="h5 mb-2">Vetted talent</h3>
                    <p className="text-white-50 mb-0">
                      Profiles backed by real repos and skill analysis, not just
                      self-reported experience.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">FH</div>
                    <h3 className="h5 mb-2">Faster hiring</h3>
                    <p className="text-white-50 mb-0">
                      Get matched with developers who fit your stack and culture in
                      days, not weeks.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body card-body-large">
                    <div className="feature-card-icon">ME</div>
                    <h3 className="h5 mb-2">MENA focus</h3>
                    <p className="text-white-50 mb-0">
                      Access a growing pool of top developers across the Middle East and
                      North Africa.
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

export default CompaniesPage;

