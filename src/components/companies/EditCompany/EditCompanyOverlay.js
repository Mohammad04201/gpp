import React, { useState } from 'react';
import { saveCompanyData ,calculateCompletion} from '../user/companyDataManager';
import EditCompanyHeader from './EditCompanyHeader';
import EditCompanySidebar from './EditCompanySidebar';
import BasicInfoSection from './BasicInfoSection';
import ContactSection from './ContactSection';
import DepartmentsEditor from './DepartmentsEditor';

function EditCompanyOverlay({ companyData, onSave, onCancel }) {
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
      <div className="bg-[#282C34] rounded-2xl border border-[#3a4750] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <EditCompanyHeader 
          completion={completion} 
          onSave={handleSave} 
          onCancel={onCancel} 
        />

        <div className="flex flex-1 overflow-hidden">
          <EditCompanySidebar 
            sections={sections}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
          />

          <div className="flex-1 p-6 overflow-y-auto">
            
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
                <h3 className="text-xl font-semibold text-white mb-4">Departments</h3>
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
  );
}

export default EditCompanyOverlay;
