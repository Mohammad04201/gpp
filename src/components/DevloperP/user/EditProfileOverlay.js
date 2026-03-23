import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useThemeContext';
import { saveUserData, calculateCompletion } from './userDataManager';
import EditProfileHeader from './EditProfile/EditProfileHeader';
import EditProfileSidebar from './EditProfile/EditProfileSidebar';
import BasicInfoSection from './EditProfile/BasicInfoSection';
import ContactSection from './EditProfile/ContactSection';
import CVSection from './EditProfile/CVSection';
import SkillsSection from './EditProfile/SkillsSection';
import ProjectsSection from './EditProfile/ProjectsSection';

function EditProfileOverlay({ userData, onSave, onCancel }) {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState(userData);
  const [activeSection, setActiveSection] = useState('basic');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    saveUserData(formData.id || 'current_user', formData);
    onSave(formData);
  };

  const completion = calculateCompletion(formData);

  const sections = [
    { id: 'basic', label: 'Basic Info', icon: '👤' },
    { id: 'contact', label: 'Contact', icon: '📧' },
    { id: 'cv', label: 'Resume', icon: '📄' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'projects', label: 'Projects', icon: '🚀' }
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'basic':
        return <BasicInfoSection formData={formData} onChange={handleChange} />;
      case 'contact':
        return <ContactSection formData={formData} onChange={handleChange} />;
      case 'cv':
        return <CVSection formData={formData} onChange={handleChange} />;
      case 'skills':
        return <SkillsSection formData={formData} onChange={handleChange} />;
      case 'projects':
        return <ProjectsSection formData={formData} onChange={handleChange} />;
      default:
        return <BasicInfoSection formData={formData} onChange={handleChange} />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`rounded-2xl border w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col ${
        isDarkMode 
          ? 'bg-[#282C34] border-[#3a4750]' 
          : 'bg-white border-gray-200'
      }`}>
        
        {/* Header */}
        <EditProfileHeader 
          completion={completion} 
          onSave={handleSave} 
          onCancel={onCancel} 
        />

        {/* Content */}
        <div className="flex flex-1 overflow-hidden flex-col lg:flex-row">
          {/* Mobile Sidebar */}
          <div className={`lg:hidden w-full border-b p-4 transition-all duration-300 flex-shrink-0 ${
            isDarkMode 
              ? 'bg-[#1a1d23] border-[#3a4750]' 
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <div className="flex flex-row gap-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex-1 text-center px-3 py-2 rounded-lg flex flex-col items-center gap-1 transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section.id 
                      ? `bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white shadow-lg shadow-[#11a3a3]/30` 
                      : isDarkMode 
                        ? 'text-gray-400 hover:bg-[#282C34] hover:text-white' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="text-xs font-medium">{section.label.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Sidebar */}
          <div className={`hidden lg:block w-56 border-l p-4 transition-all duration-300 flex-shrink-0 ${
            isDarkMode 
              ? 'bg-[#1a1d23] border-[#3a4750]' 
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <div className="flex flex-col gap-2">
              {sections.map(section => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-all duration-300 transform hover:scale-105 ${
                    activeSection === section.id 
                      ? `bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white shadow-lg shadow-[#11a3a3]/30` 
                      : isDarkMode 
                        ? 'text-gray-400 hover:bg-[#282C34] hover:text-white' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                  }`}
                >
                  <span className="text-lg">{section.icon}</span>
                  <span className="font-medium">{section.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Form Area */}
          <div className={`flex-1 p-4 lg:p-6 overflow-y-auto min-h-0 ${
            isDarkMode ? 'bg-[#282C34]' : 'bg-gray-50'
          }`}>
            <div className="w-full max-w-none lg:max-w-5xl mx-auto">
              {renderActiveSection()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileOverlay;
