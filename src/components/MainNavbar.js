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

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link p-0 text-decoration-none"
                id="devDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Developer Area
              </button>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="devDropdown">
                <li>
                  <Link className="dropdown-item" to="/dashboard/developer">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard/developer/skills">
                    Skills &amp; About
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle btn btn-link p-0 text-decoration-none"
                id="companyDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Company Area
              </button>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="companyDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="/dashboard/company">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/dashboard/company/profile">
                    Company Profile &amp; Stack
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item ms-lg-3">
              <Link className="btn btn-outline-light btn-sm" to="/select-role">
                Login
              </Link>
            </li>
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <Link className="btn btn-primary btn-sm" to="/select-role">
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;

