import React, { useState } from 'react';

function SkillsSection({ skills, onChange }) {
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Intermediate' });

  const addSkill = () => {
    if (newSkill.name.trim()) {
      onChange([...skills, { ...newSkill, name: newSkill.name.trim() }]);
      setNewSkill({ name: '', level: 'Intermediate' });
    }
  };

  const removeSkill = (index) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  const levels = [
    { value: 'Beginner', label: 'Beginner' },
    { value: 'Intermediate', label: 'Intermediate' },
    { value: 'Advanced', label: 'Advanced' },
    { value: 'Expert', label: 'Expert' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Skills</h3>
      
      <div className="flex gap-3">
        <input
          type="text"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          placeholder="Skill name..."
          className="flex-1 px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
        />
        <select
          value={newSkill.level}
          onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
          className="px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
        >
          {levels.map(l => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          Add +
        </button>
      </div>

      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between bg-[#1a1d23] p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs">
                {levels.find(l => l.value === skill.level)?.label}
              </span>
            </div>
            <button
              onClick={() => removeSkill(index)}
              className="text-red-400 hover:text-red-300 px-2 py-1"
            >
              Delete
            </button>
          </div>
        ))}
        {skills.length === 0 && (
          <p className="text-gray-500 text-center py-4">No skills added yet</p>
        )}
      </div>
    </div>
  );
}

export default SkillsSection;
