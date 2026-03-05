import { Link } from 'react-router-dom';

function CompanySidebarPanels() {
  return (
    <>
      <section className="glass-card mb-4" id="talent">
        <div className="p-4">
          <h3 className="h5 mb-3">Highlighted Talent</h3>
          <p className="text-white-50 small mb-3">
            Curated candidates with strong matches to your open roles.
          </p>
          <div className="card bg-dark border-0 mb-2">
            <div className="card-body small">
              <p className="mb-1 fw-semibold">Ahmed Mohamed · Full-stack</p>
              <p className="text-white-50 mb-1">Riyadh · React · Node.js</p>
              <span className="badge-soft small">95% match</span>
            </div>
          </div>
          <div className="card bg-dark border-0">
            <div className="card-body small">
              <p className="mb-1 fw-semibold">Sara Al-Fares · Product Designer</p>
              <p className="text-white-50 mb-1">Dubai · Figma · UX Research</p>
              <span className="badge-soft small">91% match</span>
            </div>
          </div>
        </div>
      </section>

      <section className="glass-card">
        <div className="p-4">
          <h3 className="h6 mb-2">Next steps</h3>
          <p className="small text-white-50 mb-3">
            Keep your pipeline healthy by scheduling interviews and giving quick feedback
            to candidates.
          </p>
          <Link to="/boost" className="btn btn-outline-light btn-sm w-100 mb-2">
            Explore Boost for companies
          </Link>
          <Link
            to="/opportunities"
            className="small text-white-50 text-decoration-none"
          >
            View all roles and analytics →
          </Link>
        </div>
      </section>
    </>
  );
}

export default CompanySidebarPanels;

