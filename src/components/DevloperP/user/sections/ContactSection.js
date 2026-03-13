import React from 'react';

function ContactSection({ formData, onChange }) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email Address</label>
          <input
            type="email"
            value={formData.email || ''}
            onChange={(e) => onChange('email', e.target.value)}
            className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="email@example.com"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Phone Number</label>
          <input
            type="tel"
            value={formData.phone || ''}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="+966 50 123 4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-2">LinkedIn</label>
          <input
            type="text"
            value={formData.linkedin || ''}
            onChange={(e) => onChange('linkedin', e.target.value)}
            className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="linkedin.com/in/username"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">GitHub</label>
          <input
            type="text"
            value={formData.github || ''}
            onChange={(e) => onChange('github', e.target.value)}
            className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="github.com/username"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
