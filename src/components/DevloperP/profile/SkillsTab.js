import React from 'react';
import { getSkillLevelText } from '../helpers';
import { useTheme } from '../../hooks/useThemeContext';

const SkillsTab = ({ userData }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className="fade-in">
      <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r bg-clip-text text-transparent transition-all duration-200 ${
        isDarkMode 
          ? 'from-teal-400 to-cyan-400 text-white' 
          : 'from-teal-600 to-cyan-600 text-gray-800'
      }`}>Technical Skills</h2>
      {(userData.skills?.length || 0) === 0 ? (
        <div className="text-center py-12">
          <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 border transition-all duration-200 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700' 
              : 'bg-gray-100 border-gray-200 shadow-lg'
          }`}>
            <svg className={`w-8 h-8 transition-all duration-200 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className={`text-lg font-semibold mb-2 transition-all duration-200 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>No skills added yet</h3>
          <p className={`mb-4 transition-all duration-200 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Click edit button to add your skills</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {userData.skills.map((skill, index) => (
            <div key={index} className={`rounded-lg p-4 border transition-all duration-200 hover:scale-105 ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700 hover:border-teal-500/50' 
                : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-teal-400'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <span className={`font-bold text-base transition-all duration-200 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>{skill.name}</span>
                <span className={`px-2 py-1 rounded-lg text-sm font-bold transition-all duration-200 ${
                  skill.level === 'Expert' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
                  skill.level === 'Advanced' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' :
                  skill.level === 'Intermediate' ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black' :
                  'bg-gray-600 text-white'
                }`}>
                  {getSkillLevelText(skill.level)}
                </span>
              </div>
              <div className={`w-full rounded-full h-2 overflow-hidden transition-all duration-200 ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${
                    skill.level === 'Expert' ? 'bg-gradient-to-r from-green-500 to-emerald-600' :
                    skill.level === 'Advanced' ? 'bg-gradient-to-r from-cyan-500 to-blue-600' :
                    skill.level === 'Intermediate' ? 'bg-gradient-to-r from-amber-500 to-orange-600' :
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
  );
};

export default SkillsTab;
