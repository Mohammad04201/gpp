import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const ContactFormModal = ({ show, post, contactData, onClose, onSubmit, onInputChange }) => {
  const { isDarkMode } = useTheme();
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className={`rounded-xl border p-6 max-w-md w-full max-h-[90vh] overflow-y-auto transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/95 border-gray-700' 
          : 'bg-white border-gray-200 shadow-2xl'
      }`}>
        <h3 className={`text-xl font-bold mb-4 transition-all duration-300 ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>Apply for Job: {post.title}</h3>
        
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className={`block text-sm mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Full Name *</label>
            <input
              type="text"
              name="name"
              value={contactData.name}
              onChange={onInputChange}
              required
              className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
              }`}
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className={`block text-sm mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Email *</label>
            <input
              type="email"
              name="email"
              value={contactData.email}
              onChange={onInputChange}
              required
              className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
              }`}
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label className={`block text-sm mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              value={contactData.phone}
              onChange={onInputChange}
              required
              className={`w-full px-4 py-2 rounded-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
              }`}
              placeholder="+966 50 123 4567"
            />
          </div>

          <div>
            <label className={`block text-sm mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Cover Letter</label>
            <textarea
              name="message"
              value={contactData.message}
              onChange={onInputChange}
              rows="3"
              placeholder="Tell us why you want to join our team..."
              className={`w-full px-4 py-2 rounded-lg focus:outline-none resize-none transition-colors ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
              }`}
            />
          </div>

          <div>
            <label className={`block text-sm mb-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Resume (CV) *</label>
            <input
              type="file"
              name="cv"
              onChange={onInputChange}
              accept=".pdf,.doc,.docx"
              required
              className={`w-full px-4 py-2 rounded-lg focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold transition-colors ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white focus:border-teal-500 file:bg-teal-500 file:text-white hover:file:bg-teal-600' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm file:bg-[#11a3a3] file:text-white hover:file:bg-[#0d8383]'
              }`}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="submit"
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white' 
                  : 'bg-gradient-to-r from-[#11a3a3] to-[#0d8383] hover:from-[#0d8383] hover:to-[#11a3a3] text-white shadow-lg hover:shadow-xl'
              }`}
            >
              Submit Application
            </button>
            <button
              type="button"
              onClick={onClose}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                isDarkMode 
                  ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
              }`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactFormModal;
