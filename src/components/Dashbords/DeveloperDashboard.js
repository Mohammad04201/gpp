import { useState } from 'react';

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
    <div className="min-vh-100 bg-[#20232A] text-white p-6">
      {/* Developer Section */}
      <section className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Developer</h1>
        <div className="bg-[#282C34] rounded-lg p-6 border border-[#3a4750]">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h2 className="text-xl font-semibold mb-2">Skills</h2>
              <p className="text-gray-400 mb-4">
                لمحة سريعة عن أهم مهاراتك وروابط ملفاتك الشخصية.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-[#3a4750] text-white rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-[#3a4750] text-white rounded-full text-sm">Bootstrap</span>
                <span className="px-3 py-1 bg-[#3a4750] text-white rounded-full text-sm">Dart</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-[#3a4750] rounded-full flex items-center justify-center border-2 border-[#282C34]">
              <span className="text-xl font-bold">DV</span>
            </div>
          </div>
          
          {/* Profile Completion */}
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Profile completion</span>
              <span className="font-semibold">{profileCompletion}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${profileCompletion}%` }}
              ></div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex gap-3">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              GitHub
            </button>
            <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              LinkedIn
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-8">
        <div className="bg-[#282C34] rounded-lg p-6 border border-[#3a4750]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">صفحة إدارة المشاريع</h2>
            <button
              onClick={handleAddProject}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              + إضافة مشروع جديد
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div key={project.id} className="bg-[#1a1d23] rounded-lg p-4 border border-[#3a4750] hover:border-blue-500 transition-colors">
                <h3 className="font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <span className="inline-block px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs">
                  {project.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section>
        <div className="bg-[#282C34] rounded-lg p-6 border border-[#3a4750]">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">صفحة إدارة المهارات</h2>
            <button
              onClick={handleAddSkill}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              + إضافة مهارة جديدة
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div key={skill.id} className="bg-[#1a1d23] rounded-lg p-4 border border-[#3a4750] hover:border-blue-500 transition-colors">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-[#3a4750] rounded-lg flex items-center justify-center ml-3">
                    <span className="font-bold">{skill.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{skill.name}</div>
                    <div className="text-gray-400 text-sm">
                      {skill.level} · {skill.years} yrs
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleDeleteSkill(skill.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors text-sm"
                >
                  حذف المهارة
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DeveloperDashboard;

