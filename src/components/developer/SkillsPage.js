import { useState } from 'react';

function DeveloperSkillsPage() {
  const [newSkill, setNewSkill] = useState('');
  const [skills, setSkills] = useState([
    { id: 1, name: 'React', level: 'متقدم' },
    { id: 2, name: 'Node.js', level: 'متوسط' },
  ]);

  const handleAdd = (event) => {
    event.preventDefault();
    if (!newSkill.trim()) return;
    setSkills((prev) => [
      ...prev,
      { id: Date.now(), name: newSkill.trim(), level: 'جديد' },
    ]);
    setNewSkill('');
  };

  const handleDelete = (id) => {
    setSkills((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <main className="flex-grow-1 py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <section className="glass-card mb-4">
                <div className="p-4">
                  <h1 className="h4 mb-3">مهاراتي التقنية</h1>
                  <p className="text-white-50 small mb-3">
                    أضف المهارات والتقنيات التي تتقنها، حتى تساعد الشركات على فهم ملفك
                    بشكل أفضل.
                  </p>
                  <form onSubmit={handleAdd} className="d-flex gap-2 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="مثال: TypeScript, Next.js, UI/UX..."
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      إضافة
                    </button>
                  </form>
                  <ul className="list-unstyled mb-0 small">
                    {skills.map((skill) => (
                      <li
                        key={skill.id}
                        className="d-flex justify-content-between align-items-center mb-2"
                      >
                        <span>
                          {skill.name}{' '}
                          <span className="text-white-50">({skill.level})</span>
                        </span>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-light"
                          onClick={() => handleDelete(skill.id)}
                        >
                          حذف
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>

            <div className="col-lg-6">
              <section className="glass-card mb-4">
                <div className="p-4">
                  <h2 className="h5 mb-3">وصف مختصر عنك</h2>
                  <p className="text-white-50 small mb-2">
                    تستطيع لاحقاً ربط هذه الصفحة مع محلّل المهارات وملفك الشخصي في
                    الـ Dashboard.
                  </p>
                  <p className="small text-white-50 mb-0">
                    هذا مجرد واجهة أمامية بدون Backend — البيانات تُخزَّن مؤقتاً فقط داخل
                    الصفحة.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DeveloperSkillsPage;

