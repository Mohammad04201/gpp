import MainNavbar from './navbars/MainNavbar';
import CompanyOverviewSection from '../pages/company/OverviewSection';
import CompanyOpenRolesSection from '../pages/company/OpenRolesSection';
import CompanySidebarPanels from '../pages/company/SidebarPanels';

function CompanyDashboard() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-8">
              <CompanyOverviewSection />
              <CompanyOpenRolesSection />
            </div>
            <div className="col-lg-4">
              <CompanySidebarPanels />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CompanyDashboard;

