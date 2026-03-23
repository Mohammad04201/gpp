import React, { useState } from 'react';
import { useTheme } from '../../hooks/useThemeContext';
import { saveCompanyData ,calculateCompletion} from '../user/companyDataManager';
import EditCompanyHeader from './EditCompanyHeader';
import EditCompanySidebar from './EditCompanySidebar';
import BasicInfoSection from './BasicInfoSection';
import ContactSection from './ContactSection';
import DepartmentsEditor from './DepartmentsEditor';

function EditCompanyOverlay({ companyData, onSave, onCancel }) {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState(companyData);
  const [activeSection, setActiveSection] = useState('basic');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (platform, value) => {
    setFormData(prev => ({
      ...prev,
      social: { ...prev.social, [platform]: value }
    }));
  };

  const handleSave = () => {
    saveCompanyData(formData.id || 'current_company', formData);
    onSave(formData);
  };

  const completion = calculateCompletion(formData);
  const sections = [
    { id: 'basic', label: 'Basic Information', icon: '🏢' },
    { id: 'contact', label: 'Contact', icon: '📧' },
    { id: 'services', label: 'Departments', icon: '🏗️' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`rounded-2xl border w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#282C34] border-[#3a4750]' 
          : 'bg-white border-gray-200 shadow-2xl'
      }`}>
        <EditCompanyHeader 
          completion={completion} 
          onSave={handleSave} 
          onCancel={onCancel} 
        />

        {/* Mobile: Stacked Layout | Desktop: Side-by-Side Layout */}
        <div className="flex flex-col lg:flex-row flex-1 overflow-hidden min-h-0">
          {/* Sidebar - Mobile: Top | Desktop: Left */}
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

          {/* Content Area */}
          <div className={`flex-1 p-4 lg:p-6 overflow-y-auto min-h-0 ${
            isDarkMode ? 'bg-[#282C34]' : 'bg-gray-50'
          }`}>
            <div className="w-full max-w-none lg:max-w-5xl mx-auto">
              {activeSection === 'basic' && (
                <BasicInfoSection 
                  formData={formData}
                  handleChange={handleChange}
                />
              )}

              {activeSection === 'contact' && (
                <ContactSection 
                  formData={formData}
                  handleChange={handleChange}
                  handleSocialChange={handleSocialChange}
                />
              )}

              {activeSection === 'services' && (
                <div className="space-y-4">
                  <h3 className={`text-xl font-semibold mb-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>Departments</h3>
                  <DepartmentsEditor 
                    departments={formData.departments || []} 
                    onChange={(departments) => handleChange('departments', departments)} 
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditCompanyOverlay;
