import React from 'react';
import { useTheme } from '../../../hooks/useThemeContext';

function EditProfileSidebar({ sections, activeSection, onSectionChange }) {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`w-full lg:w-48 p-4 border-t lg:border-t-0 lg:border-l ${
      isDarkMode 
        ? 'bg-[#1a1d23] border-[#3a4750]' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => onSectionChange(section.id)}
            className={`flex items-center gap-2 lg:gap-3 px-3 lg:px-4 py-2 lg:py-3 rounded-lg transition-colors whitespace-nowrap ${
              activeSection === section.id 
                ? isDarkMode 
                  ? 'bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white shadow-lg shadow-[#11a3a3]/30' 
                  : 'bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white shadow-lg shadow-[#11a3a3]/30'
                : isDarkMode 
                  ? 'text-gray-400 hover:bg-[#282C34] hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'
            }`}
          >
            <span className="text-lg">{section.icon}</span>
            <span className="text-xs lg:text-sm font-medium">{section.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default EditProfileSidebar;
