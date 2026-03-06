import { useState } from 'react';
import MainNavbar from '../layout/MainNavbar';
import ProjectCard from './ProjectCard';
import AddProjectModal from './AddProjectModal';

function ProjectManagementPage() {
  const [projects, setProjects] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [filter, setFilter] = useState('all');

  const handleAddProject = (newProject) => {
    setProjects(prev => [newProject, ...prev]);
    setIsModalOpen(false);
  };

  const handleUpdateProject = (id, updatedProject) => {
    setProjects(prev => 
      prev.map(project => 
        project.id === id ? { ...project, ...updatedProject } : project
      )
    );
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('هل أنت متأكد من حذف هذا المشروع؟')) {
      setProjects(prev => prev.filter(project => project.id !== id));
    }
  };

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    return project.status === filter;
  });

  const getStatusCount = (status) => {
    return projects.filter(project => project.status === status).length;
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-4">
        <div className="container">
          {/* Page Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <h1 className="h3 mb-2">📁 إدارة المشاريع</h1>
                  <p className="text-white-50 mb-0">
                    أنشئ وأدر مشاريعك بطريقة منظمة وسهلة
                  </p>
                </div>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  ➕ إضافة مشروع جديد
                </button>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="btn-group w-100" role="group">
                <button
                  className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                  onClick={() => setFilter('all')}
                >
                  📋 الكل ({projects.length})
                </button>
                <button
                  className={`btn ${filter === 'draft' ? 'btn-secondary' : 'btn-outline-secondary'}`}
                  onClick={() => setFilter('draft')}
                >
                  📝 مسودة ({getStatusCount('draft')})
                </button>
                <button
                  className={`btn ${filter === 'in-progress' ? 'btn-warning' : 'btn-outline-warning'}`}
                  onClick={() => setFilter('in-progress')}
                >
                  ⚡ قيد التنفيذ ({getStatusCount('in-progress')})
                </button>
                <button
                  className={`btn ${filter === 'published' ? 'btn-success' : 'btn-outline-success'}`}
                  onClick={() => setFilter('published')}
                >
                  ✅ منشور ({getStatusCount('published')})
                </button>
              </div>
            </div>
          </div>

          <div className="row g-4">
            {/* Projects Grid */}
            <div className="col-12">
              {filteredProjects.length === 0 ? (
                <div className="text-center py-5">
                  <div className="empty-state-icon mb-3">📭</div>
                  <h4 className="h5 mb-3">لا توجد مشاريع حالياً</h4>
                  <p className="text-white-50 mb-4">
                    ابدأ بإضافة مشروع جديد بالضغط على زر "إضافة مشروع جديد"
                  </p>
                  <button 
                    className="btn btn-primary btn-lg"
                    onClick={() => setIsModalOpen(true)}
                  >
                    ➕ إضافة أول مشروع
                  </button>
                </div>
              ) : (
                <div className="row g-4">
                  {filteredProjects.map((project) => (
                    <div key={project.id} className="col-md-6 col-lg-4">
                      <ProjectCard
                        project={project}
                        onUpdate={handleUpdateProject}
                        onDelete={handleDeleteProject}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="glass-card">
                <div className="p-4">
                  <h4 className="h5 mb-3">📊 إحصائيات سريعة</h4>
                  <div className="row g-3">
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">{projects.length}</div>
                        <div className="stat-label">إجمالي المشاريع</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">{getStatusCount('published')}</div>
                        <div className="stat-label">مشاريع منشورة</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">{getStatusCount('in-progress')}</div>
                        <div className="stat-label">قيد التنفيذ</div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="text-center">
                        <div className="stat-number">{getStatusCount('draft')}</div>
                        <div className="stat-label">مسودات</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        {/* Add Project Modal */}
        <AddProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAddProject={handleAddProject}
        />
        </div>
      </main>

      <style jsx>{`
        .empty-state-icon {
          font-size: 3rem;
          opacity: 0.5;
        }
        
        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #007bff;
        }
        
        .stat-label {
          font-size: 0.9rem;
          color: #6c757d;
        }
      `}</style>
    </div>
  );
}

export default ProjectManagementPage;
