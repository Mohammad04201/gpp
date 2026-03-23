import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const ResumeLevel = ({ userData }) => {
  const { isDarkMode } = useTheme();
  
  // Calculate statistics
  const skillLevelPercent = Math.min((userData.skills?.length || 0) * 10, 100);
  const projectLevelPercent = Math.min((userData.projects?.length || 0) * 20, 100);
  const experienceLevelPercent = Math.min((userData.experience || 0) * 10, 100);

  return (
    <div className={`rounded-lg p-4 border transition-all duration-200 hover:scale-105 ${
      isDarkMode 
        ? 'bg-gray-800/50 border-gray-700 hover:border-teal-500/50' 
        : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-teal-400'
    }`}>
      <h3 className={`text-base font-semibold mb-3 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-200 ${
        isDarkMode 
          ? 'from-teal-400 to-cyan-400 text-white' 
          : 'from-teal-600 to-cyan-600 text-gray-800'
      }`}>Resume Level</h3>
      <div className="space-y-3">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm transition-all duration-200 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Technical Skills</span>
            <span className={`text-sm font-bold transition-all duration-200 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{skillLevelPercent}%</span>
          </div>
          <div className={`w-full h-2 rounded-full overflow-hidden transition-all duration-200 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-300 ease-out"
              style={{ width: `${skillLevelPercent}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm transition-all duration-200 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Projects</span>
            <span className={`text-sm font-bold transition-all duration-200 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{projectLevelPercent}%</span>
          </div>
          <div className={`w-full h-2 rounded-full overflow-hidden transition-all duration-200 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-300 ease-out"
              style={{ width: `${projectLevelPercent}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className={`text-sm transition-all duration-200 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>Experience</span>
            <span className={`text-sm font-bold transition-all duration-200 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>{experienceLevelPercent}%</span>
          </div>
          <div className={`w-full h-2 rounded-full overflow-hidden transition-all duration-200 ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
          }`}>
            <div 
              className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-300 ease-out"
              style={{ width: `${experienceLevelPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLevel;
