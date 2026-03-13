import React from 'react';

const ProjectsTab = ({ userData }) => {
  return (
    <div className="fade-in">
      <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Projects</h2>
      {(userData.projects?.length || 0) === 0 ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gray-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-700">
            <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">No projects added yet</h3>
          <p className="text-gray-400 mb-6">Click the edit button to add your projects</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {userData.projects.map((project, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold text-white mb-4">{project.name}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech?.map((tech, techIndex) => (
                  <span key={techIndex} className="px-2 py-1 bg-gradient-to-r from-teal-600/30 to-cyan-600/30 rounded-lg text-teal-300 text-xs font-medium border border-teal-500/30">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-300 leading-relaxed text-sm">
                Complete project using modern technologies and best practices. This project demonstrates expertise in various technologies and showcases the ability to deliver high-quality solutions.
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsTab;
