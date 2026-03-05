import { useState } from 'react';
import MainNavbar from './MainNavbar';

function DeveloperDashboard() {
  const [profileCompletion] = useState(70);

  const [skills, setSkills] = useState([
    { id: 1, name: 'React', level: 'متقدم', years: 3 },
    { id: 2, name: 'Bootstrap', level: 'متوسط', years: 2 },
    { id: 3, name: 'Dart', level: 'مبتدئ', years: 1 },
  ]);

  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Mawhiba Dev Portal',
      description: 'Landing page للمنصة مع دعم عربي وداشبورد بسيط.',
      label: 'Web / GitHub',
    },
    {
      id: 2,
      title: 'Job Matcher UI',
      description: 'واجهة لتصفية الفرص وعرض نسبة المطابقة.',
      label: 'Web / Prototype',
    },
    {
      id: 3,
      title: 'Skills Analyzer',
      description: 'مكوّن يحلل المهارات ويعرض درجة تقديرية لكل مهارة.',
      label: 'App / Front-end',
    },
  ]);

  const handleAddProject = () => {
    setProjects((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: 'New project',
        description: 'وصف قصير لمشروع جديد (تستطيع تخصيصه لاحقاً).',
        label: 'Draft',
      },
    ]);
  };

  const handleAddSkill = () => {
    setSkills((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: 'New skill',
        level: 'جديد',
        years: 0,
      },
    ]);
  };

  const handleDeleteSkill = (id) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-4">
        <div className="container">
          {/* 1. Developer Profile Section */}
          <section className="glass-card mb-4">
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div>
                  <h2 className="h5 mb-1">Skills</h2>
                  <p className="small text-white-50 mb-2">
                    لمحة سريعة عن أهم مهاراتك وروابط ملفاتك الشخصية.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <span className="badge-soft small">React</span>
                    <span className="badge-soft small">Bootstrap</span>
                    <span className="badge-soft small">Dart</span>
                  </div>
                </div>
                <div
                  className="rounded-circle border border-secondary d-flex align-items-center justify-content-center"
                  style={{ width: 64, height: 64 }}
                >
                  <span className="fw-semibold">DV</span>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between small mb-1">
                  <span className="text-white-50">Profile completion</span>
                  <span className="fw-semibold">{profileCompletion}%</span>
                </div>
                <div className="progress" style={{ height: '8px' }}>
                  <div
                    className="progress-bar bg-primary"
                    role="progressbar"
                    style={{ width: `${profileCompletion}%` }}
                  />
                </div>
              </div>
              <div className="d-flex gap-2">
                <button type="button" className="btn btn-primary btn-sm">
                  GitHub
                </button>
                <button type="button" className="btn btn-outline-light btn-sm">
                  LinkedIn
                </button>
              </div>
            </div>
          </section>

          {/* 2. Projects Section */}
          <section className="glass-card mb-4">
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h5 mb-0">Projects</h3>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={handleAddProject}
                >
                  + Add project
                </button>
              </div>
              <div className="row g-3">
                {projects.map((project) => (
                  <div key={project.id} className="col-md-4">
                    <div className="card bg-dark border-0 h-100">
                      <div className="card-body card-body-large">
                        <h4 className="h6 mb-2">{project.title}</h4>
                        <p className="small text-white-50 mb-3">
                          {project.description}
                        </p>
                        <span className="badge-soft small">{project.label}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. Skills List Section */}
          <section className="glass-card">
            <div className="p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="h5 mb-0">Skills</h3>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm"
                  onClick={handleAddSkill}
                >
                  + Add skill
                </button>
              </div>
              <div className="row g-3">
                {skills.map((skill) => (
                  <div key={skill.id} className="col-md-4">
                    <div className="card bg-dark border-0 h-100">
                      <div className="card-body card-body-large">
                        <div className="d-flex align-items-center mb-2">
                          <div className="feature-card-icon me-2">
                            {skill.name.charAt(0).toUpperCase()}
                          </div>
                          <div>
                            <div className="small fw-semibold">{skill.name}</div>
                            <div className="small text-white-50">
                              {skill.level} · {skill.years} yrs
                            </div>
                          </div>
                        </div>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-light"
                          onClick={() => handleDeleteSkill(skill.id)}
                        >
                          حذف المهارة
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default DeveloperDashboard;

