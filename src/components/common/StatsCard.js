function StatsCard({ title, stats, children }) {
  return (
    <div className="stats-card">
      <div className="card glass-card">
        <div className="p-4">
          <h3 className="h5 mb-4">{title}</h3>
          <div className="row g-3">
            {stats.map((stat, index) => (
              <div key={index} className="col-md-3">
                <div className="text-center">
                  <div className="stat-number">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
          {children && (
            <div className="mt-4">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StatsCard;
