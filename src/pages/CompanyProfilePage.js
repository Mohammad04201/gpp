import MainNavbar from '../components/layout/MainNavbar';

function CompanyProfilePage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="card glass-card">
            <div className="p-4">
              <h2 className="mb-4">ملف الشركة</h2>
              <p className="text-white-50">
                صفحة ملف الشركة قيد التطوير...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CompanyProfilePage;
