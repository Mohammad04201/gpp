import MainNavbar from '../components/layout/MainNavbar';

function DeveloperProfilePage() {
  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          <div className="card glass-card">
            <div className="p-4">
              <h2 className="mb-4">ملف المطور الشخصي</h2>
              <p className="text-white-50">
                صفحة الملف الشخصي للمطور قيد التطوير...
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DeveloperProfilePage;
