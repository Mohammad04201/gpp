import React from 'react';

function SkillsSection({ formData, onChange }) {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Skills</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Add Skills</label>
          <textarea
            value={(formData.skills || []).join(', ')}
            onChange={(e) => handleChange('skills', e.target.value.split(',').map(s => s.trim()).filter(s => s))}
            placeholder="Enter skills separated by commas"
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white h-32"
          />
        </div>
        {(formData.skills || []).length > 0 && (
          <div className="flex flex-wrap gap-2">
            {(formData.skills || []).map((skill, index) => (
              <span key={index} className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillsSection;
