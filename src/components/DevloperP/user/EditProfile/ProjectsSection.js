import React from 'react';
import { useTheme } from '../../../hooks/useThemeContext';

function ProjectsSection({ formData, onChange }) {
  const { isDarkMode } = useTheme();
  
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>
      <h3 className={`text-lg lg:text-xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        Projects
      </h3>
      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Add Projects
          </label>
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
            rows={6}
            className={`w-full px-3 lg:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
            }`}
          />
        </div>
        
        {/* Current projects display */}
        {(formData.projects || []).length > 0 && (
          <div>
            <h4 className={`text-lg font-semibold mb-3 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Current Projects
            </h4>
            <div className="space-y-2">
              {(formData.projects || []).map((project, index) => (
                <div 
                  key={index}
                  className={`p-3 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <h5 className={`font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {project.name}
                  </h5>
                  <p className={`text-sm mt-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {project.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsSection;
