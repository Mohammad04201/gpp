function DeveloperOverviewSection() {
  return (
    <section className="glass-card mb-4" id="overview">
      <div className="p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <h2 className="h4 mb-1">Developer Dashboard</h2>
            <p className="text-white-50 mb-0">
              Boost your profile and explore opportunities curated for you.
            </p>
          </div>
          <span className="badge-soft">Profile strength: 82%</span>
        </div>
        <div className="progress" style={{ height: '6px' }}>
          <div
            className="progress-bar bg-primary"
            role="progressbar"
            style={{ width: '82%' }}
          />
        </div>
      </div>
    </section>
  );
}

export default DeveloperOverviewSection;

