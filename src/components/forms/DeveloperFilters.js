function DeveloperFilters({ 
  searchTerm, 
  onSearchChange, 
  selectedSkills, 
  onSkillsChange, 
  selectedExperience, 
  onExperienceChange, 
  selectedAvailability, 
  onAvailabilityChange 
}) {
  const skills = [
    { value: 'all', label: 'جميع المهارات' },
    { value: 'React', label: 'React' },
    { value: 'Node.js', label: 'Node.js' },
    { value: 'Python', label: 'Python' },
    { value: 'TypeScript', label: 'TypeScript' },
    { value: 'DevOps', label: 'DevOps' },
    { value: 'UI/UX Design', label: 'UI/UX Design' }
  ];

  const experienceLevels = [
    { value: 'all', label: 'جميع المستويات' },
    { value: '0-1', label: '0-1 سنوات' },
    { value: '2-3', label: '2-3 سنوات' },
    { value: '4-5', label: '4-5 سنوات' },
    { value: '6+', label: '6+ سنوات' }
  ];

  const availability = [
    { value: 'all', label: 'الكل' },
    { value: 'available', label: 'متاح للعمل' },
    { value: 'busy', label: 'مشغول' }
  ];

  return (
    <div className="developer-filters">
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
              <option key={index} value={skill.value}>
                {skill.label}
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
              <option key={index} value={level.value}>
                {level.label}
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
              <option key={index} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default DeveloperFilters;
