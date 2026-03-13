import React, { useState, useEffect } from 'react';
import { saveUserData, calculateCompletion } from './userDataManager';
import BasicInfoSection from './sections/BasicInfoSection';
import ContactSection from './sections/ContactSection';
import ResumeSection from './sections/ResumeSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';

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

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#282C34] rounded-2xl border border-[#3a4750] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-[#3a4750] flex items-center justify-between bg-[#1a1d23]">
          <div>
            <h2 className="text-2xl font-bold text-white">Edit Profile</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-400">Completion:</span>
              <div className="w-24 bg-[#3a4750] rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                  style={{ width: `${completion}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold text-green-400">{completion}%</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleSave}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              Save ✓
            </button>
            <button 
              onClick={onCancel}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
            >
              Cancel ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 bg-[#1a1d23] border-l border-[#3a4750] p-4">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
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

          {/* Form Area */}
          <div className="flex-1 p-6 overflow-y-auto">
            
            {/* Basic Info Section */}
            {activeSection === 'basic' && (
              <BasicInfoSection 
                formData={formData} 
                onChange={handleChange} 
              />
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <ContactSection 
                formData={formData} 
                onChange={handleChange} 
              />
            )}

            {/* CV Section */}
            {activeSection === 'cv' && (
              <ResumeSection 
                cvFile={formData.cvFile} 
                onChange={(cvFile) => handleChange('cvFile', cvFile)} 
              />
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <SkillsSection 
                skills={formData.skills || []} 
                onChange={(skills) => handleChange('skills', skills)} 
              />
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <ProjectsSection 
                projects={formData.projects || []} 
                onChange={(projects) => handleChange('projects', projects)} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfileOverlay;
