import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const BasicInfoSection = ({ formData, handleChange }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="space-y-4">
      <h3 className={`text-xl font-semibold mb-4 transition-all duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>Basic Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Company Name</label>
          <input
            type="text"
            value={formData.companyName || ''}
            onChange={(e) => handleChange('companyName', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="Company Name"
          />
        </div>
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Title</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => handleChange('title', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="Leading tech company..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Industry</label>
          <input
            type="text"
            value={formData.industry || ''}
            onChange={(e) => handleChange('industry', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="Information Technology, AI..."
          />
        </div>
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Company Type</label>
          <select
            value={formData.companyType || ''}
            onChange={(e) => handleChange('companyType', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
          >
            <option value="">Select Type</option>
            <option value="startup">Startup</option>
            <option value="small">Small Company</option>
            <option value="medium">Medium Company</option>
            <option value="large">Large Company</option>
            <option value="enterprise">Enterprise</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Founded Year</label>
          <input
            type="text"
            value={formData.established || ''}
            onChange={(e) => handleChange('established', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="2020"
          />
        </div>
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Number of Employees</label>
          <input
            type="text"
            value={formData.employees || ''}
            onChange={(e) => handleChange('employees', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="50-100"
          />
        </div>
      </div>

      <div>
        <label className={`block text-sm mb-2 transition-all duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Company Description</label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => handleChange('description', e.target.value)}
          rows="4"
          className={`w-full px-4 py-2 rounded-lg focus:outline-none resize-none transition-colors ${
            isDarkMode 
              ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
              : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
          }`}
          placeholder="Write a brief description of company and its activities..."
        />
      </div>
    </div>
  );
};

export default BasicInfoSection;
