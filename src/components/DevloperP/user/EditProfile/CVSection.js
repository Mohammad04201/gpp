import React from 'react';

function CVSection({ formData, onChange }) {
  const handleChange = (field, value) => {
    onChange(field, value);
  };

  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Resume/CV</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Upload CV</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={(e) => handleChange('cvFile', e.target.files[0])}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
          />
        </div>
        {formData.cvFile && (
          <div className="p-4 bg-gray-700 rounded-lg">
            <p className="text-sm text-gray-300">Current file: {formData.cvFile.name || 'Uploaded file'}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CVSection;
