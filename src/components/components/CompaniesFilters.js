function CompaniesFilters({ 
  searchTerm, 
  onSearchChange, 
  selectedIndustry, 
  onIndustryChange, 
  selectedType, 
  onTypeChange 
}) {
  const industries = ['all', 'التقنية والمعلومات', 'الخدمات الاستشارية', 'التمويل والبنوك', 'الرعاية الصحية', 'النقل والخدمات اللوجستية'];
  const jobTypes = ['all', 'full-time', 'part-time', 'contract'];

  return (
    <section className="mb-5">
      <div className="card glass-card">
        <div className="p-4">
          <div className="row g-3">
            <div className="col-md-4">
              <label className="form-label">البحث عن شركة أو وظيفة</label>
              <input
                type="text"
                className="form-control"
                placeholder="ابحث عن شركة أو وظيفة..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">المجال</label>
              <select
                className="form-select"
                value={selectedIndustry}
                onChange={(e) => onIndustryChange(e.target.value)}
              >
                {industries.map((industry, index) => (
                  <option key={index} value={industry}>
                    {industry === 'all' ? 'جميع المجالات' : industry}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-4">
              <label className="form-label">نوع الوظيفة</label>
              <select
                className="form-select"
                value={selectedType}
                onChange={(e) => onTypeChange(e.target.value)}
              >
                {jobTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type === 'all' ? 'جميع الأنواع' : getJobTypeText(type)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const getJobTypeText = (type) => {
  switch (type) {
    case 'full-time': return 'دوام كامل';
    case 'part-time': return 'دوام جزئي';
    case 'contract': return 'عقد';
    default: return type;
  }
};

export default CompaniesFilters;
