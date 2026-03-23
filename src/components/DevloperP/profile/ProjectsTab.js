import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const ProjectsTab = ({ userData }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="fade-in">
      <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-200 ${
        isDarkMode 
          ? 'from-teal-400 to-cyan-400 text-white' 
          : 'from-teal-600 to-cyan-600 text-gray-800'
      }`}>Projects</h2>
      {(userData.projects?.length || 0) === 0 ? (
        <div className="text-center py-12">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 border transition-all duration-200 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-gray-100 border-gray-200 shadow-lg'
          }`}>
            <svg className={`w-8 h-8 transition-all duration-200 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className={`text-lg font-semibold mb-2 transition-all duration-200 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>No projects added yet</h3>
          <p className={`mb-4 transition-all duration-200 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Click edit button to add your projects</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userData.projects.map((project, index) => (
            <div key={index} className={`rounded-lg p-4 border transition-all duration-200 hover:scale-105 ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700 hover:border-teal-500/50' 
                : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-teal-400'
            }`}>
              <h3 className={`text-lg font-bold mb-3 transition-all duration-200 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>{project.name}</h3>
              <div className="flex flex-wrap gap-1 mb-3">
                {project.tech?.map((tech, techIndex) => (
                  <span key={techIndex} className={`px-2 py-1 rounded-lg text-xs font-medium border transition-all duration-200 ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-teal-600/30 to-cyan-600/30 text-teal-300 border-teal-500/30' 
                      : 'bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 border-teal-300'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
              <p className={`leading-relaxed text-sm transition-all duration-200 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Complete project using modern technologies and best practices. This project demonstrates expertise in various technologies and showcases ability to deliver high-quality solutions.
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsTab;
