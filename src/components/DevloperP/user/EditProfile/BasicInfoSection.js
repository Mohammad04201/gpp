import React from 'react';

function BasicInfoSection({ formData, onChange }) {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Basic Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Name</label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => handleChange('name', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => handleChange('title', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Bio</label>
          <textarea
            value={formData.bio || ''}
            onChange={(e) => handleChange('bio', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white h-32"
          />
        </div>
      </div>
    </div>
  );
}

export default BasicInfoSection;
