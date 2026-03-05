import { useState } from 'react';

function ProjectCard({ project, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProject, setEditedProject] = useState({ 
    ...project,
    projectUrl: project.projectUrl || ''
  });

  const handleSave = () => {
    onUpdate(project.id, editedProject);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedProject({ 
      ...project,
      projectUrl: project.projectUrl || ''
    });
    setIsEditing(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'draft': return 'secondary';
      case 'published': return 'success';
      case 'in-progress': return 'warning';
      default: return 'secondary';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'draft': return 'مسودة';
      case 'published': return 'منشور';
      case 'in-progress': return 'قيد التنفيذ';
      default: return 'مسودة';
    }
  };

  return (
    <div className="glass-card h-100">
      <div className="p-4">
        {/* Status Badge */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className={`badge bg-${getStatusColor(project.status)}`}>
            {getStatusText(project.status)}
          </span>
          {project.projectUrl && (
            <a 
              href={project.projectUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-sm btn-outline-info"
              title="زيارة المشروع"
            >
              🔗 زيارة
            </a>
          )}
          <div className="dropdown">
            <button 
              className="btn btn-sm btn-outline-light dropdown-toggle" 
              type="button" 
              data-bs-toggle="dropdown"
            >
              ⋮
            </button>
            <ul className="dropdown-menu dropdown-menu-dark">
              <li>
                <button 
                  className="dropdown-item" 
                  onClick={() => setIsEditing(true)}
                >
                  ✏️ تعديل
                </button>
              </li>
              <li>
                <button 
                  className="dropdown-item text-danger" 
                  onClick={() => onDelete(project.id)}
                >
                  🗑️ حذف
                </button>
              </li>
            </ul>
          </div>
        </div>

        {isEditing ? (
          <div>
            <input
              type="text"
              className="form-control form-control-sm mb-3"
              value={editedProject.title}
              onChange={(e) => setEditedProject({...editedProject, title: e.target.value})}
              placeholder="عنوان المشروع"
            />
            <textarea
              className="form-control form-control-sm mb-3"
              rows="4"
              value={editedProject.description}
              onChange={(e) => setEditedProject({...editedProject, description: e.target.value})}
              placeholder="وصف قصير للمشروع (يمكنك تخصيصه لاحقاً)"
            />
            <input
              type="url"
              className="form-control form-control-sm mb-3"
              value={editedProject.projectUrl}
              onChange={(e) => setEditedProject({...editedProject, projectUrl: e.target.value})}
              placeholder="https://example.com/project"
            />
            <select
              className="form-select form-select-sm mb-3"
              value={editedProject.status}
              onChange={(e) => setEditedProject({...editedProject, status: e.target.value})}
            >
              <option value="draft">مسودة</option>
              <option value="in-progress">قيد التنفيذ</option>
              <option value="published">منشور</option>
            </select>
            <div className="d-flex gap-2">
              <button className="btn btn-success btn-sm flex-fill" onClick={handleSave}>
                💾 حفظ
              </button>
              <button className="btn btn-secondary btn-sm flex-fill" onClick={handleCancel}>
                إلغاء
              </button>
            </div>
          </div>
        ) : (
          <div>
            <h3 className="h5 mb-3">{project.title}</h3>
            <p className="text-white-50 small mb-4">
              {project.description}
            </p>
            
            {/* Additional Project Info */}
            <div className="row g-2 mb-3">
              <div className="col-6">
                <small className="text-white-50">
                  📅 {project.createdAt || new Date().toLocaleDateString('ar-SA')}
                </small>
              </div>
              <div className="col-6 text-end">
                <small className="text-white-50">
                  🏷️ {project.category || 'عام'}
                </small>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-2">
              <button className="btn btn-outline-light btn-sm flex-fill" onClick={() => setIsEditing(true)}>
                ✏️ تعديل
              </button>
              {project.projectUrl && (
                <a 
                  href={project.projectUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm flex-fill"
                >
                  � زيارة المشروع
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
