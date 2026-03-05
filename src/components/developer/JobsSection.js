function DeveloperJobsSection() {
  return (
    <section className="glass-card" id="jobs">
      <div className="p-4">
        <h3 className="h5 mb-3">Recommended Jobs for You</h3>
        <p className="text-white-50 mb-3">
          These roles are based on your skills and recent activity.
        </p>
        <div className="row g-3">
          <div className="col-md-6">
            <div className="card bg-dark border-0 h-100">
              <div className="card-body">
                <h4 className="h6 mb-1">Junior Python Developer</h4>
                <p className="small text-white-50 mb-2">Careem – عمّان</p>
                <span className="badge-soft small mb-2 d-inline-block">89% match</span>
                <p className="small text-white-50 mb-2">
                  $4k – $5k / month · Full-time · Remote
                </p>
                <button className="btn btn-outline-primary btn-sm">Quick Apply</button>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card bg-dark border-0 h-100">
              <div className="card-body">
                <h4 className="h6 mb-1">React Native Engineer</h4>
                <p className="small text-white-50 mb-2">Future Apps – الرياض</p>
                <span className="badge-soft small mb-2 d-inline-block">92% match</span>
                <p className="small text-white-50 mb-2">
                  $6k – $8k / month · Hybrid
                </p>
                <button className="btn btn-outline-primary btn-sm">View details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeveloperJobsSection;

