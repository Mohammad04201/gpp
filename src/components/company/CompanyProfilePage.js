import { useState } from 'react';

function CompanyProfilePage() {
  const [about, setAbout] = useState(
    'Mawhiba AI helps companies across MENA hire vetted technical talent with AI-powered matching.'
  );
  const [stack, setStack] = useState(['React', 'Node.js', 'PostgreSQL']);

  const [newTech, setNewTech] = useState('');

  const handleAddTech = (event) => {
    event.preventDefault();
    if (!newTech.trim()) return;
    setStack((prev) => [...prev, newTech.trim()]);
    setNewTech('');
  };

  const handleDeleteTech = (name) => {
    setStack((prev) => prev.filter((t) => t !== name));
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <main className="flex-grow-1 py-4">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <section className="glass-card mb-4">
                <div className="p-4">
                  <h1 className="h4 mb-3">عن الشركة</h1>
                  <p className="text-white-50 small mb-3">
                    عدّل الرسالة التعريفية لشركتك ليراها المرشّحون على لوحة التحكم وفي
                    الفرص.
                  </p>
                  <textarea
                    className="form-control mb-3"
                    rows={5}
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                  <p className="small text-white-50 mb-0">
                    هذه البيانات تجريبية في الواجهة فقط ولن تُرسَل إلى أي خادم.
                  </p>
                </div>
              </section>
            </div>

            <div className="col-lg-5">
              <section className="glass-card mb-4">
                <div className="p-4">
                  <h2 className="h5 mb-3">التقنيات المستخدمة (Tech Stack)</h2>
                  <form onSubmit={handleAddTech} className="d-flex gap-2 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="مثال: Kubernetes, Django..."
                      value={newTech}
                      onChange={(e) => setNewTech(e.target.value)}
                    />
                    <button className="btn btn-primary" type="submit">
                      إضافة
                    </button>
                  </form>
                  <ul className="list-unstyled small mb-0">
                    {stack.map((tech) => (
                      <li
                        key={tech}
                        className="d-flex justify-content-between align-items-center mb-2"
                      >
                        <span>{tech}</span>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-light"
                          onClick={() => handleDeleteTech(tech)}
                        >
                          حذف
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CompanyProfilePage;

