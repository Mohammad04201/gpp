import MainNavbar from '../components/layout/MainNavbar';

function ProjectManagementPage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="card glass-card">
            <div className="p-4">
              <h2 className="mb-4">إدارة المشاريع</h2>
              <p className="text-white-50">
                صفحة إدارة المشاريع قيد التطوير...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProjectManagementPage;
