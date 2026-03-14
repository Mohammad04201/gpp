import React from 'react';

function ProjectsSection({ formData, onChange }) {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Projects</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Add Projects</label>
          <textarea
            value={(formData.projects || []).map(p => `${p.name}: ${p.description}`).join('\n')}
            onChange={(e) => {
              const lines = e.target.value.split('\n').filter(line => line.trim());
              const projects = lines.map(line => {
                const [name, ...descriptionParts] = line.split(':');
                return {
                  name: name.trim(),
                  description: descriptionParts.join(':').trim()
                };
              });
              handleChange('projects', projects);
            }}
            placeholder="Enter projects in format: Project Name: Description"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white h-32"
          />
        </div>
        {(formData.projects || []).length > 0 && (
          <div className="space-y-2">
            {(formData.projects || []).map((project, index) => (
              <div key={index} className="p-3 bg-gray-700 rounded-lg">
                <h4 className="font-semibold">{project.name}</h4>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsSection;
