import React, { useState, useEffect } from 'react';
import { getDeveloperById } from '../developersData';
import { loadUserData, mergeUserData } from '../user/userDataManager';
import { getSkillLevelText } from '../helpers';

function SkillsTab({ currentDeveloper }) {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    if (currentDeveloper) {
      // Load user data from localStorage and merge with base data
      const mergedData = mergeUserData(currentDeveloper.id.toString(), currentDeveloper);
      setUserData(mergedData);
    }
  }, [currentDeveloper]);

  if (!userData) {
    return (
      <div className="dashboard-skills">
        <h2>Skills & Portfolio</h2>
        <div className="text-center py-8">
          <div className="loading-spinner"></div>
          <p className="mt-4 text-gray-400">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-skills">
      <h2>Skills & Portfolio</h2>
      
      {/* Skills Section - using profile component styling */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Technical Skills</h3>
        {(userData.skills?.length || 0) === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-700">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No skills added yet</h3>
            <p className="text-gray-400 text-sm">Click the edit button to add your skills</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userData.skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    skill.level === 'Expert' ? 'bg-green-500 text-white' :
                    skill.level === 'Advanced' ? 'bg-cyan-500 text-white' :
                    skill.level === 'Intermediate' ? 'bg-amber-500 text-black' :
                    'bg-gray-600 text-white'
                  }`}>
                    {getSkillLevelText(skill.level)}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`h-full rounded-full ${
                      skill.level === 'Expert' ? 'bg-green-500' :
                      skill.level === 'Advanced' ? 'bg-cyan-500' :
                      skill.level === 'Intermediate' ? 'bg-amber-500' :
                      'bg-gray-600'
                    }`}
                    style={{
                      width: skill.level === 'Expert' ? '100%' : 
                             skill.level === 'Advanced' ? '80%' : 
                             skill.level === 'Intermediate' ? '60%' : '40%'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Projects Section - using profile component styling */}
      <div>
        <h3 className="text-2xl font-bold text-white mb-4">Portfolio Projects</h3>
        {(userData.projects?.length || 0) === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-4 border border-gray-700">
              <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">No projects added yet</h3>
            <p className="text-gray-400 text-sm">Click the edit button to add your projects</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {userData.projects.map((project, index) => (
              <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-lg font-bold text-white mb-3">{project.name}</h4>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech?.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-teal-600/30 rounded text-teal-300 text-xs border border-teal-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Complete project using modern technologies and best practices.
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillsTab;
