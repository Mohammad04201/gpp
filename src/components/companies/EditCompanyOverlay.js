import React, { useState, useEffect } from 'react';
import { saveCompanyData, calculateCompletion } from './user/companyDataManager';

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
        
        {/* Header */}
        <div className="p-6 border-b border-[#3a4750] flex items-center justify-between bg-[#1a1d23]">
          <div>
            <h2 className="text-2xl font-bold text-white">Edit Company Profile</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-400">Completion Rate:</span>
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
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Basic Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company Name</label>
                    <input
                      type="text"
                      value={formData.companyName || ''}
                      onChange={(e) => handleChange('companyName', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Company Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Title</label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => handleChange('title', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Leading tech company..."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Industry</label>
                    <input
                      type="text"
                      value={formData.industry || ''}
                      onChange={(e) => handleChange('industry', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Information Technology, AI..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Company Type</label>
                    <select
                      value={formData.companyType || ''}
                      onChange={(e) => handleChange('companyType', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                    >
                      <option value="">Select Type</option>
                      <option value="startup">Startup</option>
                      <option value="small">Small Company</option>
                      <option value="medium">Medium Company</option>
                      <option value="large">Large Company</option>
                      <option value="enterprise">Enterprise</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Founded Year</label>
                    <input
                      type="text"
                      value={formData.established || ''}
                      onChange={(e) => handleChange('established', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="2020"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Number of Employees</label>
                    <input
                      type="text"
                      value={formData.employees || ''}
                      onChange={(e) => handleChange('employees', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="50-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Company Description</label>
                  <textarea
                    value={formData.description || ''}
                    onChange={(e) => handleChange('description', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="Write a brief description of the company and its activities..."
                  />
                </div>
              </div>
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="info@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="+966 50 123 4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Location</label>
                    <input
                      type="text"
                      value={formData.location || ''}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="Riyadh, Saudi Arabia"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Website</label>
                    <input
                      type="text"
                      value={formData.website || ''}
                      onChange={(e) => handleChange('website', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="https://company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">LinkedIn</label>
                    <input
                      type="text"
                      value={formData.social?.linkedin || ''}
                      onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="linkedin.com/company/name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">GitHub</label>
                    <input
                      type="text"
                      value={formData.social?.github || ''}
                      onChange={(e) => handleSocialChange('github', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="github.com/company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Twitter</label>
                    <input
                      type="text"
                      value={formData.social?.twitter || ''}
                      onChange={(e) => handleSocialChange('twitter', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="@company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Facebook</label>
                    <input
                      type="text"
                      value={formData.social?.facebook || ''}
                      onChange={(e) => handleSocialChange('facebook', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="facebook.com/company"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Departments Section */}
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

// Departments editor
function DepartmentsEditor({ departments, onChange }) {
  const [newDepartment, setNewDepartment] = useState({ 
    name: '', 
    description: '', 
    employees: '',
    isHiring: false
  });

  const addDepartment = () => {
    if (newDepartment.name.trim()) {
      onChange([...departments, { 
        ...newDepartment, 
        name: newDepartment.name.trim()
      }]);
      setNewDepartment({ name: '', description: '', employees: '', isHiring: false });
    }
  };

  const removeDepartment = (index) => {
    onChange(departments.filter((_, i) => i !== index));
  };

  const toggleHiring = (index) => {
    const updated = [...departments];
    updated[index].isHiring = !updated[index].isHiring;
    onChange(updated);
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        value={newDepartment.name}
        onChange={(e) => setNewDepartment({ ...newDepartment, name: e.target.value })}
        placeholder="Department name (e.g., Software Development)..."
        className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
        onKeyPress={(e) => e.key === 'Enter' && addDepartment()}
      />
      <textarea
        value={newDepartment.description}
        onChange={(e) => setNewDepartment({ ...newDepartment, description: e.target.value })}
        placeholder="Department description and main tasks..."
        rows="2"
        className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          value={newDepartment.employees}
          onChange={(e) => setNewDepartment({ ...newDepartment, employees: e.target.value })}
          placeholder="Number of employees (e.g., 25)..."
          className="px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
        />
        <label className="flex items-center gap-3 px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg cursor-pointer">
          <input
            type="checkbox"
            checked={newDepartment.isHiring}
            onChange={(e) => setNewDepartment({ ...newDepartment, isHiring: e.target.checked })}
            className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="text-white">Accepting Applications</span>
        </label>
      </div>
      <button
        onClick={addDepartment}
        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors w-full"
      >
        Add Department +
      </button>

      <div className="space-y-2 mt-4">
        {departments.map((dept, index) => (
          <div key={index} className="bg-[#1a1d23] p-4 rounded-lg">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="text-white font-medium text-lg">{dept.name}</span>
                {dept.isHiring && (
                  <span className="px-2 py-1 bg-green-500 text-white rounded text-xs">
                    Hiring
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => toggleHiring(index)}
                  className={`px-3 py-1 rounded text-xs transition-colors ${
                    dept.isHiring ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-600 hover:bg-gray-700'
                  } text-white`}
                >
                  {dept.isHiring ? 'Stop' : 'Hire'}
                </button>
                <button
                  onClick={() => removeDepartment(index)}
                  className="text-red-400 hover:text-red-300 px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-2">{dept.description}</p>
            <div className="flex items-center gap-2 text-blue-400 text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
              </svg>
              {dept.employees} employees
            </div>
          </div>
        ))}
        {departments.length === 0 && (
          <p className="text-gray-500 text-center py-4">No departments added yet</p>
        )}
      </div>
    </div>
  );
}

export default EditCompanyOverlay;
