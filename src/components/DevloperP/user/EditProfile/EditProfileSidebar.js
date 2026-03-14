import React from 'react';

function EditProfileSidebar({ sections, activeSection, onSectionChange }) {
  return (
    <div className="w-48 bg-[#1a1d23] border-l border-[#3a4750] p-4">
      {sections.map(section => (
        <button
          key={section.id}
          onClick={() => onSectionChange(section.id)}
          className={`w-full text-right px-4 py-3 rounded-lg mb-2 flex items-center gap-3 transition-colors ${
            activeSection === section.id 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-400 hover:bg-[#282C34] hover:text-white'
          }`}
        >
          <span>{section.icon}</span>
          <span>{section.label}</span>
        </button>
      ))}
    </div>
  );
}

export default EditProfileSidebar;
