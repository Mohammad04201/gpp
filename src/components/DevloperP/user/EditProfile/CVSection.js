import React from 'react';
import { useTheme } from '../../../hooks/useThemeContext';

function CVSection({ formData, onChange }) {
  const { isDarkMode } = useTheme();
  
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>
      <h3 className={`text-lg lg:text-xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        Resume/CV
      </h3>
      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Upload CV
          </label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleChange('cvFile', e.target.files[0])}
            className={`w-full px-3 lg:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-800'
            }`}
          />
        </div>
        {formData.cvFile && (
          <div className={`p-3 lg:p-4 rounded-lg ${
            isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
          }`}>
            <p className={`text-sm ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Current file: {formData.cvFile.name || 'Uploaded file'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CVSection;
