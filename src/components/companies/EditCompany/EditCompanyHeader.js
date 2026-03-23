import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const EditCompanyHeader = ({ completion, onSave, onCancel }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`p-6 border-b flex items-center justify-between transition-all duration-300 ${
      isDarkMode 
        ? 'border-[#3a4750] bg-[#1a1d23]' 
        : 'border-gray-200 bg-white shadow-sm'
    }`}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className={`text-2xl font-bold transition-all duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Edit Company Profile</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className={`text-sm transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Completion Rate:</span>
            <div className={`w-24 h-2 rounded-full transition-all duration-300 ${
              isDarkMode ? 'bg-[#3a4750]' : 'bg-gray-200'
            }`}>
              <div 
                className={`h-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-blue-500 to-green-500' 
                    : 'bg-gradient-to-r from-[#11a3a3] to-[#0d8383] shadow-lg'
                }`}
                style={{ width: `${completion}%` }}
              ></div>
            </div>
            <span className={`text-sm font-bold transition-all duration-300 ${
              isDarkMode ? 'text-green-400' : 'text-[#11a3a3]'
            }`}>{completion}%</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={onSave}
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-green-500 hover:bg-green-600 text-white' 
                : 'bg-gradient-to-r from-[#11a3a3] to-[#0d8383] hover:from-[#0d8383] hover:to-[#11a3a3] text-white shadow-lg hover:shadow-xl'
            }`}
          >
            <span className="hidden sm:inline">Save ✓</span>
            <span className="sm:hidden">Save</span>
          </button>
          <button 
            onClick={onCancel}
            className={`px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors ${
              isDarkMode 
                ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            <span className="hidden sm:inline">Cancel ✕</span>
            <span className="sm:hidden">Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCompanyHeader;
