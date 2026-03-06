function DevelopersFilters({ 
  searchTerm, 
  onSearchChange, 
  selectedSkills, 
  onSkillsChange, 
  selectedExperience, 
  onExperienceChange, 
  selectedAvailability, 
  onAvailabilityChange 
}) {
  const skills = ['all', 'React', 'Node.js', 'Python', 'TypeScript', 'DevOps', 'UI/UX Design'];
  const experienceLevels = ['all', '0-1', '2-3', '4-5', '6+'];
  const availability = ['all', 'available', 'busy'];

  return (
    <section className="mb-5">
      <div className="card glass-card">
        <div className="p-4">
          <div className="row g-3">
            <div className="col-md-3">
              <label className="form-label">البحث عن مطور</label>
              <input
                type="text"
                className="form-control"
                placeholder="ابحث عن مطور..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">المهارات</label>
              <select
                className="form-select"
                value={selectedSkills}
                onChange={(e) => onSkillsChange(e.target.value)}
              >
                {skills.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill === 'all' ? 'جميع المهارات' : skill}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">الخبرة</label>
              <select
                className="form-select"
                value={selectedExperience}
                onChange={(e) => onExperienceChange(e.target.value)}
              >
                {experienceLevels.map((level, index) => (
                  <option key={index} value={level}>
                    {level === 'all' ? 'جميع المستويات' : `${level} سنوات`}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label className="form-label">التوفر</label>
              <select
                className="form-select"
                value={selectedAvailability}
                onChange={(e) => onAvailabilityChange(e.target.value)}
              >
                {availability.map((status, index) => (
                  <option key={index} value={status}>
                    {status === 'all' ? 'الكل' : 
                     status === 'available' ? 'متاح للعمل' : 'مشغول'}
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

export default DevelopersFilters;
