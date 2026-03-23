import React from 'react';
import { useTheme } from '../../../hooks/useThemeContext';

function EditProfileHeader({ completion, onSave, onCancel }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`p-4 lg:p-6 border-b flex items-center justify-between ${
      isDarkMode 
        ? 'border-[#3a4750] bg-[#1a1d23]' 
        : 'border-gray-200 bg-gray-50'
    }`}>
      <div>
        <h2 className={`text-xl lg:text-2xl font-bold ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          Edit Profile
        </h2>
        <div className="flex items-center gap-2 mt-1">
          <span className={`text-sm ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Completion:
          </span>
          <div className={`w-20 lg:w-24 rounded-full h-2 ${
            isDarkMode ? 'bg-[#3a4750]' : 'bg-gray-300'
          }`}>
            <div 
              className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
              style={{ width: `${completion}%` }}
            ></div>
          </div>
          <span className={`text-sm font-bold ${
            isDarkMode ? 'text-green-400' : 'text-green-600'
          }`}>
            {completion}%
          </span>
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-3">
        <button 
          onClick={onSave}
          className={`px-4 lg:px-6 py-2 rounded-lg font-medium transition-colors ${
            isDarkMode 
              ? 'bg-green-500 hover:bg-green-600 text-white' 
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          <span className="hidden sm:inline">Save ✓</span>
          <span className="sm:hidden">✓</span>
        </button>
        <button 
          onClick={onCancel}
          className={`px-4 lg:px-6 py-2 rounded-lg font-medium transition-colors ${
            isDarkMode 
              ? 'bg-gray-600 hover:bg-gray-700 text-white' 
              : 'bg-gray-500 hover:bg-gray-600 text-white'
          }`}
        >
          <span className="hidden sm:inline">Cancel ✕</span>
          <span className="sm:hidden">✕</span>
        </button>
      </div>
    </div>
  );
}

export default EditProfileHeader;
