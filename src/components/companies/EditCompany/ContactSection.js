import React from 'react';

const ContactSection = ({ formData, handleChange, handleSocialChange }) => {
  return (
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
  );
};

export default ContactSection;
