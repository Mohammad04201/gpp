import React from 'react';
import { useThemeContext } from '../../contexts/ThemeContext';

function SettingsTab({ currentDeveloper }) {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={`dashboard-settings transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`}>
      <h2 className={`mb-6 transition-all duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>Developer Settings</h2>
      {currentDeveloper && (
        <div className={`settings-form transition-all duration-300 ${
          isDarkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white border-gray-200 shadow-lg'
        }`}>
          <div className="form-group">
            <label className={`block mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Full Name</label>
            <input 
              type="text" 
              defaultValue={currentDeveloper.name} 
              className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-teal-500'
              }`}
            />
          </div>
          <div className="form-group">
            <label className={`block mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Email</label>
            <input 
              type="email" 
              defaultValue={`${currentDeveloper.name.toLowerCase().replace(' ', '.')}@example.com`} 
              className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-teal-500'
              }`}
            />
          </div>
          <div className="form-group">
            <label className={`block mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Phone</label>
            <input 
              type="tel" 
              defaultValue="+966 50 123 4567" 
              className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-teal-500'
              }`}
            />
          </div>
          <div className="form-group">
            <label className={`block mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Location</label>
            <input 
              type="text" 
              defaultValue={currentDeveloper.location} 
              className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-teal-500'
              }`}
            />
          </div>
          <div className="form-group">
            <label className={`block mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Bio</label>
            <textarea 
              rows="4" 
              defaultValue={currentDeveloper.bio} 
              className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-teal-500'
              }`}
            />
          </div>
          <div className="form-group">
            <label className={`block mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>Job Preferences</label>
            <select 
              className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-teal-500'
              }`}
            >
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Freelance</option>
            </select>
          </div>
          <button 
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:from-teal-700 hover:to-cyan-700' 
                : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-lg hover:shadow-xl'
              }`}
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
}

export default SettingsTab;
