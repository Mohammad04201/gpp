function CompaniesStats({ companies }) {
  const totalJobs = companies.reduce((total, company) => total + company.openJobs, 0);

  return (
    <section className="mt-5">
      <div className="card glass-card">
        <div className="p-4">
          <h3 className="h5 mb-4">📊 إحصائيات المنصة</h3>
          <div className="row g-3">
            <div className="col-md-3">
              <div className="text-center">
                <div className="stat-number">{companies.length}</div>
                <div className="stat-label">شركة مسجلة</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="stat-number">{totalJobs}</div>
                <div className="stat-label">وظيفة مفتوحة</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="stat-number">12</div>
                <div className="stat-label">دولة</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="stat-number">6</div>
                <div className="stat-label">مجال</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompaniesStats;
