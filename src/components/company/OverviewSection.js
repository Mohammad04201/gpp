function CompanyOverviewSection() {
  return (
    <section className="glass-card mb-4" id="overview">
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 mb-1">Company Dashboard</h2>
            <p className="text-white-50 mb-0">
              Monitor your hiring pipeline and stay close to top talent.
            </p>
          </div>
          <span className="badge-soft">Active roles: 4</span>
        </div>
        <div className="row text-center small">
          <div className="col-4">
            <p className="text-white-50 mb-1">Applicants</p>
            <p className="h5 mb-0">48</p>
          </div>
          <div className="col-4">
            <p className="text-white-50 mb-1">Interviews</p>
            <p className="h5 mb-0">12</p>
          </div>
          <div className="col-4">
            <p className="text-white-50 mb-1">Offers</p>
            <p className="h5 mb-0">3</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOverviewSection;

