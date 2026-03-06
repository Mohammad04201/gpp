import { useState } from 'react';
import './ModalStyles.css';

function AddProjectModal({ isOpen, onClose, onAddProject }) {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    status: 'draft',
    category: 'عام',
    projectUrl: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!projectData.title.trim()) return;

    const project = {
      ...projectData,
      id: Date.now(),
      createdAt: new Date().toLocaleDateString('ar-SA')
    };

    onAddProject(project);
    setProjectData({
      title: '',
      description: '',
      status: 'draft',
      category: 'عام',
      projectUrl: ''
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="glass-card">
          <div className="p-4">
            {/* Modal Header */}
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="h4 mb-0">✨ إضافة مشروع جديد</h3>
              <button 
                className="btn btn-sm btn-outline-light" 
                onClick={onClose}
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="form-label">📝 عنوان المشروع *</label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="مثال: تطبيق ويب للتجارة الإلكترونية"
                  value={projectData.title}
                  onChange={(e) => setProjectData({...projectData, title: e.target.value})}
                  required
                  autoFocus
                />
              </div>

              <div className="mb-4">
                <label className="form-label">📄 وصف المشروع</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="اكتب وصفاً مفصلاً لمشروعك هنا..."
                  value={projectData.description}
                  onChange={(e) => setProjectData({...projectData, description: e.target.value})}
                />
              </div>

              <div className="mb-4">
                <label className="form-label">🔗 رابط المشروع (اختياري)</label>
                <input
                  type="url"
                  className="form-control form-control-lg"
                  placeholder="https://example.com/project"
                  value={projectData.projectUrl}
                  onChange={(e) => setProjectData({...projectData, projectUrl: e.target.value})}
                />
                <small className="text-white-50 mt-1 d-block">
                  أضف رابط المشروع للمعاينة المباشرة
                </small>
              </div>

              <div className="row g-3 mb-4">
                <div className="col-md-6">
                  <label className="form-label">🏷️ الحالة</label>
                  <select
                    className="form-select"
                    value={projectData.status}
                    onChange={(e) => setProjectData({...projectData, status: e.target.value})}
                  >
                    <option value="draft">📝 مسودة</option>
                    <option value="in-progress">⚡ قيد التنفيذ</option>
                    <option value="published">✅ منشور</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">📂 الفئة</label>
                  <select
                    className="form-select"
                    value={projectData.category}
                    onChange={(e) => setProjectData({...projectData, category: e.target.value})}
                  >
                    <option value="عام">🌐 عام</option>
                    <option value="ويب">🌍 ويب</option>
                    <option value="موبايل">📱 موبايل</option>
                    <option value="سطح مكتب">💻 سطح مكتب</option>
                    <option value="ذكاء اصطناعي">🤖 ذكاء اصطناعي</option>
                    <option value="ألعاب">🎮 ألعاب</option>
                  </select>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-primary btn-lg flex-fill">
                  ➕ إضافة المشروع
                </button>
                <button 
                  type="button" 
                  className="btn btn-secondary btn-lg flex-fill"
                  onClick={onClose}
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProjectModal;
