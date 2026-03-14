import React from 'react';

function ContactSection({ formData, onChange }) {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Contact Information</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => handleChange('email', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Phone</label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => handleChange('phone', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Location</label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => handleChange('location', e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
