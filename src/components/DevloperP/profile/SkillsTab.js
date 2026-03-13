import React from 'react';
import { getSkillLevelText } from '../helpers';

const SkillsTab = ({ userData }) => {
  return (
    <div className="fade-in">
      <h2 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Technical Skills</h2>
      {(userData.skills?.length || 0) === 0 ? (
        <div className="text-center py-16">
          <div className="w-20 h-20 bg-gray-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-gray-700">
            <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-3">No skills added yet</h3>
          <p className="text-gray-400 mb-6">Click the edit button to add your skills</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {userData.skills.map((skill, index) => (
            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-bold text-lg">{skill.name}</span>
                <span className={`px-3 py-1 rounded-lg text-sm font-bold ${
                  skill.level === 'Expert' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white' :
                  skill.level === 'Advanced' ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white' :
                  skill.level === 'Intermediate' ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-black' :
                  'bg-gray-600 text-white'
                }`}>
                  {getSkillLevelText(skill.level)}
                </span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ${
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
