import React, { useState, useEffect } from 'react';
import { saveUserData, calculateCompletion } from './userDataManager';
import EditProfileHeader from './EditProfile/EditProfileHeader';
import EditProfileSidebar from './EditProfile/EditProfileSidebar';
import BasicInfoSection from './EditProfile/BasicInfoSection';
import ContactSection from './EditProfile/ContactSection';
import CVSection from './EditProfile/CVSection';
import SkillsSection from './EditProfile/SkillsSection';
import ProjectsSection from './EditProfile/ProjectsSection';

function EditProfileOverlay({ userData, onSave, onCancel }) {
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
      <div className="bg-[#282C34] rounded-2xl border border-[#3a4750] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <EditProfileHeader 
          completion={completion} 
          onSave={handleSave} 
          onCancel={onCancel} 
        />

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <EditProfileSidebar 
            sections={sections}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* Form Area */}
          <div className="flex-1 p-6 overflow-y-auto">
            {renderActiveSection()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileOverlay;
