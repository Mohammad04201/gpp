import MainNavbar from '../components/layout/MainNavbar';
import CompanyOverviewSection from '../company/OverviewSection';
import CompanyOpenRolesSection from '../company/OpenRolesSection';
import CompanySidebarPanels from '../company/SidebarPanels';

function CompanyDashboardPage() {
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

export default CompanyDashboardPage;
