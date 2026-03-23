import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const ContactSection = ({ formData, handleChange, handleSocialChange }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="space-y-4">
      <h3 className={`text-xl font-semibold mb-4 transition-all duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-900'
      }`}>Contact Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Email</label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="info@company.com"
          />
        </div>
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Phone Number</label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="+966 50 123 4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Location</label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="Riyadh, Saudi Arabia"
          />
        </div>
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Website</label>
          <input
            type="text"
            value={formData.website || ''}
            onChange={(e) => handleChange('website', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="https://company.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>LinkedIn</label>
          <input
            type="text"
            value={formData.social?.linkedin || ''}
            onChange={(e) => handleSocialChange('linkedin', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="linkedin.com/company/name"
          />
        </div>
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>GitHub</label>
          <input
            type="text"
            value={formData.social?.github || ''}
            onChange={(e) => handleSocialChange('github', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="github.com/company"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Twitter</label>
          <input
            type="text"
            value={formData.social?.twitter || ''}
            onChange={(e) => handleSocialChange('twitter', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="@company"
          />
        </div>
        <div>
          <label className={`block text-sm mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Facebook</label>
          <input
            type="text"
            value={formData.social?.facebook || ''}
            onChange={(e) => handleSocialChange('facebook', e.target.value)}
            className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
            }`}
            placeholder="facebook.com/company"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
