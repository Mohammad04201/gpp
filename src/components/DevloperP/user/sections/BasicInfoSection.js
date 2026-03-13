import React from 'react';

function BasicInfoSection({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Basic Information</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Full Name</label>
          <input
            type="text"
            value={formData.name || ''}
            onChange={(e) => onChange('name', e.target.value)}
            className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="Ahmed Mohammed"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Job Title</label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => onChange('title', e.target.value)}
            className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="Frontend Developer"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Location</label>
          <input
            type="text"
            value={formData.location || ''}
            onChange={(e) => onChange('location', e.target.value)}
            className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="Riyadh, Saudi Arabia"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Years of Experience</label>
          <input
            type="number"
            value={formData.experience || 0}
            onChange={(e) => onChange('experience', parseInt(e.target.value) || 0)}
            className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
            min="0"
            max="50"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-gray-400 mb-2">Personal Bio</label>
        <textarea
          value={formData.bio || ''}
          onChange={(e) => onChange('bio', e.target.value)}
          rows="4"
          className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
          placeholder="Write a brief bio about yourself and your experience..."
        />
      </div>

      <div className="flex items-center gap-3">
        <label className="flex items-center gap-3 text-white cursor-pointer">
          <input
            type="checkbox"
            checked={formData.available || false}
            onChange={(e) => onChange('available', e.target.checked)}
            className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
          />
          <span>Available for Work</span>
        </label>
      </div>
    </div>
  );
}

export default BasicInfoSection;
