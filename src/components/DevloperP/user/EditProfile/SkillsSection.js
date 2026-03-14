import React, { useState } from 'react';

function SkillsSection({ formData, onChange }) {
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillLevel, setNewSkillLevel] = useState('Intermediate');

  const handleAddSkill = () => {
    if (newSkillName.trim()) {
      const currentSkills = formData.skills || [];
      const updatedSkills = [...currentSkills, { name: newSkillName.trim(), level: newSkillLevel }];
      onChange('skills', updatedSkills);
      setNewSkillName('');
      setNewSkillLevel('Intermediate');
    }
  };

  const handleRemoveSkill = (index) => {
    const currentSkills = formData.skills || [];
    const updatedSkills = currentSkills.filter((_, i) => i !== index);
    onChange('skills', updatedSkills);
  };

  const skillLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  return (
    <div className="text-white">
      <h3 className="text-xl font-bold mb-4">Skills</h3>
      <div className="space-y-4">
        {/* Add new skill section */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            value={newSkillName}
            onChange={(e) => setNewSkillName(e.target.value)}
            placeholder="Enter skill name"
            className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
            onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
          />
          <select
            value={newSkillLevel}
            onChange={(e) => setNewSkillLevel(e.target.value)}
            className="px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
          >
            {skillLevels.map((level) => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          <button
            onClick={handleAddSkill}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition-colors"
          >
            Add Skill
          </button>
        </div>

        {/* Display existing skills */}
        {(formData.skills || []).length > 0 && (
          <div className="space-y-2">
            {(formData.skills || []).map((skill, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="font-medium">{skill.name || skill}</span>
                  <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                    {skill.level || 'Intermediate'}
                  </span>
                </div>
                <button
                  onClick={() => handleRemoveSkill(index)}
                  className="text-red-400 hover:text-red-300 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SkillsSection;
