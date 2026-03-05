import { useState } from 'react';

function ProjectForm({ onAddProject }) {
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    status: 'draft',
    category: 'عام'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newProject.title.trim()) return;

    const project = {
      ...newProject,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString('ar-SA')
    };

    onAddProject(project);
    setNewProject({
      title: '',
      description: '',
      status: 'draft',
      category: 'عام'
    });
  };

  return (
    <div className="glass-card">
      <div className="p-4">
        <h3 className="h5 mb-4">➕ إضافة مشروع جديد</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label small">عنوان المشروع *</label>
            <input
              type="text"
              className="form-control"
              placeholder="مثال: تطبيق ويب للتجارة الإلكترونية"
              value={newProject.title}
              onChange={(e) => setNewProject({...newProject, title: e.target.value})}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label small">وصف المشروع</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="وصف قصير للمشروع (يمكنك تخصيصه لاحقاً)"
              value={newProject.description}
              onChange={(e) => setNewProject({...newProject, description: e.target.value})}
            />
          </div>

          <div className="row g-2 mb-3">
            <div className="col-md-6">
              <label className="form-label small">الحالة</label>
              <select
                className="form-select form-select-sm"
                value={newProject.status}
                onChange={(e) => setNewProject({...newProject, status: e.target.value})}
              >
                <option value="draft">مسودة</option>
                <option value="in-progress">قيد التنفيذ</option>
                <option value="published">منشور</option>
              </select>
            </div>
            <div className="col-md-6">
              <label className="form-label small">الفئة</label>
              <select
                className="form-select form-select-sm"
                value={newProject.category}
                onChange={(e) => setNewProject({...newProject, category: e.target.value})}
              >
                <option value="عام">عام</option>
                <option value="ويب">ويب</option>
                <option value="موبايل">موبايل</option>
                <option value="سطح مكتب">سطح مكتب</option>
                <option value="ذكاء اصطناعي">ذكاء اصطناعي</option>
                <option value="ألعاب">ألعاب</option>
              </select>
            </div>
          </div>

          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary flex-fill">
              ➕ إضافة مشروع
            </button>
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={() => setNewProject({
                title: '',
                description: '',
                status: 'draft',
                category: 'عام'
              })}
            >
              مسح
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;
