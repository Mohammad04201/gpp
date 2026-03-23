import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const QuickStats = ({ userData }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`rounded-xl border shadow-lg transition-all duration-200 ${
      isDarkMode 
        ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700' 
        : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
    }`}>
      <div className={`p-4 border-b transition-all duration-200 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border-gray-700' 
          : 'bg-gradient-to-r from-teal-50 to-cyan-50 border-gray-200'
      }`}>
        <h3 className={`text-lg font-bold mb-2 transition-all duration-200 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>Quick Stats</h3>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 gap-3">
          <div className={`rounded-lg p-3 border text-center transition-all duration-200 hover:scale-105 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700 hover:border-teal-500/50' 
              : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-teal-400'
          }`}>
            <div className={`text-xl font-bold transition-all duration-200 ${
              isDarkMode ? 'text-teal-400' : 'text-teal-600'
            }`}>{userData.stats?.views || 0}</div>
            <div className={`text-xs mt-1 transition-all duration-200 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Views</div>
          </div>
          <div className={`rounded-lg p-3 border text-center transition-all duration-200 hover:scale-105 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700 hover:border-green-500/50' 
              : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-green-400'
          }`}>
            <div className={`text-xl font-bold transition-all duration-200 ${
              isDarkMode ? 'text-green-400' : 'text-green-600'
            }`}>{userData.stats?.likes || 0}</div>
            <div className={`text-xs mt-1 transition-all duration-200 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Likes</div>
          </div>
          <div className={`rounded-lg p-3 border text-center transition-all duration-200 hover:scale-105 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700 hover:border-purple-500/50' 
              : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-purple-400'
          }`}>
            <div className={`text-xl font-bold transition-all duration-200 ${
              isDarkMode ? 'text-purple-400' : 'text-purple-600'
            }`}>{userData.stats?.connections || 0}</div>
            <div className={`text-xs mt-1 transition-all duration-200 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Connections</div>
          </div>
          <div className={`rounded-lg p-3 border text-center transition-all duration-200 hover:scale-105 ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50' 
              : 'bg-white border-gray-200 shadow-lg hover:shadow-xl hover:border-cyan-400'
          }`}>
            <div className={`text-xl font-bold transition-all duration-200 ${
              isDarkMode ? 'text-cyan-400' : 'text-cyan-600'
            }`}>{userData.projects?.length || 0}</div>
            <div className={`text-xs mt-1 transition-all duration-200 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
