function JobFilters({ 
  searchTerm, 
  onSearchChange, 
  selectedIndustry, 
  onIndustryChange, 
  selectedType, 
  onTypeChange 
}) {
  const industries = [
    { value: 'all', label: 'جميع المجالات' },
    { value: 'التقنية والمعلومات', label: 'التقنية والمعلومات' },
    { value: 'الخدمات الاستشارية', label: 'الخدمات الاستشارية' },
    { value: 'التمويل والبنوك', label: 'التمويل والبنوك' },
    { value: 'الرعاية الصحية', label: 'الرعاية الصحية' },
    { value: 'النقل والخدمات اللوجستية', label: 'النقل والخدمات اللوجستية' }
  ];

  const jobTypes = [
    { value: 'all', label: 'جميع الأنواع' },
    { value: 'full-time', label: 'دوام كامل' },
    { value: 'part-time', label: 'دوام جزئي' },
    { value: 'contract', label: 'عقد' }
  ];

  return (
    <div className="job-filters">
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
              <option key={index} value={industry.value}>
                {industry.label}
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
              <option key={index} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default JobFilters;
