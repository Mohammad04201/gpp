import { Link } from 'react-router-dom';

function MainNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary">
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold">
          Mawhiba AI
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/features">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companies">
                Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/developers">
                Developers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/developer">
                لوحة المطور
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard/company">
                لوحة الشركة
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link className="btn btn-outline-light btn-sm" to="/select-role">
                تسجيل الدخول
              </Link>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link className="btn btn-primary btn-sm" to="/select-role">
                ابدأ الآن
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;

