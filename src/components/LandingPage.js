import { Link } from 'react-router-dom';
import MainNavbar from './MainNavbar';

function LandingPage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />

      <main className="flex-grow-1 bg-dark text-white" id="home">
        <section className="py-5 py-lg-6">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <p className="text-uppercase small text-info mb-2">
                  For the future of tech recruitment
                </p>
                <h1 className="display-5 fw-bold mb-3">
                  Connecting the Best Tech Talent in the Arab World
                </h1>
                <p className="lead text-white-50 mb-4">
                  A smart platform that uses AI to connect global companies with top
                  developers across the Middle East and North Africa.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/login/company" className="btn btn-primary btn-lg">
                    I&apos;m a Company
                  </Link>
                  <Link to="/login/developer" className="btn btn-outline-light btn-lg">
                    I&apos;m a Developer
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card bg-transparent border-0">
                  <div className="card-body p-0">
                    <div className="ratio ratio-16x9 bg-secondary rounded-4 shadow-lg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-gradient" id="features">
          <div className="container">
            <h2 className="h3 text-center mb-3">Why Choose Mawhiba AI?</h2>
            <p className="text-center text-white-50 mb-5">
              We don&apos;t just provide a platform — we build a smart bridge between
              ambition and opportunity.
            </p>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body">
                    <h3 className="h5 mb-2">AI-Powered Matching</h3>
                    <p className="text-white-50 mb-0">
                      Advanced algorithms go beyond keywords to analyze real skills and
                      programming abilities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body">
                    <h3 className="h5 mb-2">GitHub Sync</h3>
                    <p className="text-white-50 mb-0">
                      Automatic analysis of your repositories and projects to build a
                      realistic profile that reflects your skills.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card border-0 shadow-sm h-100 bg-dark text-white">
                  <div className="card-body">
                    <h3 className="h5 mb-2">Real-Time Notifications</h3>
                    <p className="text-white-50 mb-0">
                      Stay updated with the latest opportunities that match your skills
                      and experience in the market.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-5 bg-dark" id="developers">
          <div className="container text-center">
            <h2 className="h3 mb-3">Are You Ready for the Future of Tech Hiring?</h2>
            <p className="text-white-50 mb-4">
              Join thousands of companies and developers on Mawhiba AI today and start
              your journey to success.
            </p>
            <Link to="/select-role" className="btn btn-primary btn-lg">
              Start for Free
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-top border-secondary py-4 bg-dark">
        <div className="container">
          <div className="row gy-3 align-items-center">
            <div className="col-md-4">
              <h6 className="mb-1">Mawhiba AI</h6>
              <p className="text-white-50 small mb-0">
                Connecting the best tech talent in the Arab World with global
                opportunities.
              </p>
            </div>
            <div className="col-md-4">
              <h6 className="mb-1">Quick Links</h6>
              <div className="d-flex flex-wrap gap-3 small">
                <a href="#terms" className="text-white-50 text-decoration-none">
                  Terms &amp; Conditions
                </a>
                <a href="#privacy" className="text-white-50 text-decoration-none">
                  Privacy Policy
                </a>
                <Link to="/dashboard/developer" className="text-white-50 text-decoration-none">
                  Developer Dashboard
                </Link>
                <Link to="/dashboard/company" className="text-white-50 text-decoration-none">
                  Company Dashboard
                </Link>
              </div>
            </div>
            <div className="col-md-4 text-md-end">
              <h6 className="mb-1">Follow Us</h6>
              <p className="text-white-50 small mb-2">
                Stay connected with us on social media for updates and opportunities.
              </p>
              <div className="d-flex justify-content-md-end gap-3 small">
                <a href="#x" className="text-white-50 text-decoration-none">
                  X
                </a>
                <a href="#github" className="text-white-50 text-decoration-none">
                  GitHub
                </a>
                <a href="#linkedin" className="text-white-50 text-decoration-none">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3 small text-white-50">
            <span>© {new Date().getFullYear()} Mawhiba AI. All rights reserved.</span>
            <span>Made with ♥ for the Arab tech community.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;

