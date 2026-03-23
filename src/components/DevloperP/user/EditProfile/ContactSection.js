import React from 'react';
import { useTheme } from '../../../hooks/useThemeContext';

function ContactSection({ formData, onChange }) {
  const { isDarkMode } = useTheme();
  
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>
      <h3 className={`text-lg lg:text-xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        Contact Information
      </h3>
      <div className="space-y-4">
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Email
          </label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-3 lg:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-800'
            }`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Phone
          </label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`w-full px-3 lg:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-800'
            }`}
          />
        </div>
        <div>
          <label className={`block text-sm font-medium mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Location
          </label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            className={`w-full px-3 lg:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-800'
            }`}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
