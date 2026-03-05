function CompanyOpenRolesSection() {
  return (
    <section className="glass-card" id="jobs">
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3 className="h5 mb-0">Open Roles</h3>
          <button className="btn btn-primary btn-sm">Post new job</button>
        </div>
        <p className="text-white-50 mb-3">
          Overview of your active positions and how they are performing.
        </p>
        <div className="card bg-dark border-0 mb-2">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h4 className="h6 mb-1">Senior React Engineer</h4>
              <p className="small text-white-50 mb-0">
                Remote · $7k – $10k · 23 applicants
              </p>
            </div>
            <span className="badge-soft small">High priority</span>
          </div>
        </div>
        <div className="card bg-dark border-0">
          <div className="card-body d-flex justify-content-between align-items-center">
            <div>
              <h4 className="h6 mb-1">Product Designer (Arabic UX)</h4>
              <p className="small text-white-50 mb-0">Riyadh · $4k – $6k · 14 applicants</p>
            </div>
            <span className="badge-soft small">Good fit</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyOpenRolesSection;

