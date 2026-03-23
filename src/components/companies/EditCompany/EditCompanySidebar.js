import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const EditCompanySidebar = ({ sections, activeSection, setActiveSection }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`w-full md:w-56 border-l md:border-l-0 border-b md:border-b-0 p-4 transition-all duration-300 flex-shrink-0 ${
      isDarkMode 
        ? 'bg-[#1a1d23] border-[#3a4750]' 
        : 'bg-white border-gray-200 shadow-lg'
    }`}>
      <div className="flex flex-row md:flex-col gap-2 md:gap-0">
        {sections.map(section => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex-1 md:flex-initial text-right md:text-right px-4 py-3 rounded-lg mb-2 md:mb-2 flex items-center justify-center md:justify-start gap-3 transition-all duration-300 transform hover:scale-105 ${
              activeSection === section.id 
                ? `bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white shadow-lg shadow-[#11a3a3]/30` 
                : isDarkMode 
                  ? 'text-gray-400 hover:bg-[#282C34] hover:text-white' 
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
            }`}
          >
            <span className="text-lg md:text-base">{section.icon}</span>
            <span className="hidden md:inline">{section.label}</span>
            <span className="md:hidden text-sm font-medium">{section.label.split(' ')[0]}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default EditCompanySidebar;
