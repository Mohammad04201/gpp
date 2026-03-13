import React, { useState } from 'react';

function ProjectsSection({ projects, onChange }) {
  const [newProject, setNewProject] = useState({ name: '', tech: '' });

  const addProject = () => {
    if (newProject.name.trim()) {
      const techArray = newProject.tech.split(',').map(t => t.trim()).filter(Boolean);
      onChange([...projects, { name: newProject.name.trim(), tech: techArray }]);
      setNewProject({ name: '', tech: '' });
    }
  };

  const removeProject = (index) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Projects</h3>
      
      <div className="flex gap-3">
        <input
          type="text"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          placeholder="Project name..."
          className="flex-1 px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={newProject.tech}
          onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
          placeholder="Technologies (comma separated)"
          className="flex-1 px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && addProject()}
        />
        <button
          onClick={addProject}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Add +
        </button>
      </div>

      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center justify-between bg-[#1a1d23] p-3 rounded-lg">
            <div>
              <span className="text-white font-medium">{project.name}</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 bg-[#3a4750] text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => removeProject(index)}
              className="text-red-400 hover:text-red-300 px-2 py-1"
            >
              Delete
            </button>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-gray-500 text-center py-4">No projects added yet</p>
        )}
      </div>
    </div>
  );
}

export default ProjectsSection;
