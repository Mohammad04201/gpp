import React from 'react';

const BasicInfoSection = ({ formData, handleChange }) => {
  return (
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
          placeholder="Write a brief description of company and its activities..."
        />
      </div>
    </div>
  );
};

export default BasicInfoSection;
