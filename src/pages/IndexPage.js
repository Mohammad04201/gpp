import React from 'react';
import { Link } from 'react-router-dom';
import MainNavbar from '../components/navbars/MainNavbar';

/**
 * Index Page - Display all organized pages
 * This page displays all available pages in the project in an organized manner
 */

function IndexPage() {
  const pageCategories = [
    {
      title: '🏠 Main Pages',
      pages: [
        { path: '/', name: 'Home Page', description: 'Landing Page - The first page of the site' },
        { path: '/features', name: 'Features', description: 'Features Page - Display platform features' },
        { path: '/companies', name: 'Companies', description: 'Companies Page - Page for companies' },
        { path: '/developers', name: 'Developers', description: 'Developers Page - Page for developers' },
        { path: '/select-role', name: 'Role Selection', description: 'Role Selection - Choose user type' }
      ]
    },
    {
      title: '🔐 Authentication',
      pages: [
        { path: '/login/developer', name: 'Developer Login', description: 'Developer Login' },
        { path: '/login/company', name: 'Company Login', description: 'Company Login' },
        { path: '/register/developer', name: 'Developer Registration', description: 'Developer Registration' },
        { path: '/register/company', name: 'Company Registration', description: 'Company Registration' }
      ]
    },
    {
      title: '📊 Dashboard',
      pages: [
        { path: '/dashboard', name: 'Main Dashboard', description: 'Main Dashboard - Main navigation page' },
        { path: '/dashboard/developer', name: 'Developer Dashboard', description: 'Developer Dashboard' },
        { path: '/dashboard/company', name: 'Company Dashboard', description: 'Company Dashboard' }
      ]
    },
    {
      title: '👨‍💻 Developer Pages',
      pages: [
        { path: '/dashboard/developer/profile', name: 'Profile', description: 'Developer Profile - Developer information' },
        { path: '/dashboard/developer/skills', name: 'Skills', description: 'Skills Page - Skills management' },
        { path: '/dashboard/developer/projects', name: 'Projects', description: 'Project Management - Project management' }
      ]
    },
    {
      title: '🏢 Company Pages',
      pages: [
        { path: '/dashboard/company/profile', name: 'Profile', description: 'Company Profile - Company information' }
      ]
    }
  ];

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">📑 Page Index</h1>
            <p className="lead text-white-50">
              All project pages organized by categories
            </p>
          </div>

          <div className="row g-4">
            {pageCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="col-12">
                <div className="glass-card">
                  <div className="p-4">
                    <h2 className="h4 mb-4">{category.title}</h2>
                    
                    <div className="row g-3">
                      {category.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="col-md-6 col-lg-4">
                          <Link 
                            to={page.path} 
                            className="text-decoration-none page-link-card"
                          >
                            <div className="page-card">
                              <div className="p-3">
                                <h3 className="h6 mb-2 text-primary">
                                  {page.name}
                                </h3>
                                <p className="small text-white-50 mb-0">
                                  {page.description}
                                </p>
                                <div className="mt-2">
                                  <code className="text-info small">
                                    {page.path}
                                  </code>
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="glass-card">
                <div className="p-4">
                  <h3 className="h5 mb-3">📈 Project Statistics</h3>
                  <div className="row g-3">
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">
                          {pageCategories.reduce((acc, cat) => acc + cat.pages.length, 0)}
                        </div>
                        <div className="stat-label">Total Pages</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">{pageCategories.length}</div>
                        <div className="stat-label">Categories</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">3</div>
                        <div className="stat-label">Developer Pages</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">1</div>
                        <div className="stat-label">Company Page</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .page-link-card {
          transition: all 0.3s ease;
        }
        
        .page-link-card:hover {
          transform: translateY(-2px);
        }
        
        .page-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          transition: all 0.3s ease;
          height: 100%;
        }
        
        .page-card:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: #007bff;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #007bff;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #6c757d;
        }
      `}</style>
    </div>
  );
}

export default IndexPage;
