function DevelopersStats({ developers }) {
  const availableDevelopers = developers.filter(d => d.availableForHire).length;

  return (
    <section className="mt-5">
      <div className="card glass-card">
        <div className="p-4">
          <h3 className="h5 mb-4">📊 إحصائيات المنصة</h3>
          <div className="row g-3">
            <div className="col-md-3">
              <div className="text-center">
                <div className="stat-number">{developers.length}</div>
                <div className="stat-label">مطور مسجل</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="stat-number">{availableDevelopers}</div>
                <div className="stat-label">متاح للعمل</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="stat-number">8</div>
                <div className="stat-label">دولة</div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="text-center">
                <div className="stat-number">15</div>
                <div className="stat-label">مجال تقني</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DevelopersStats;
