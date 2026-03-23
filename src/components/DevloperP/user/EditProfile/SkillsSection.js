import React, { useState } from 'react';
import { useTheme } from '../../../hooks/useThemeContext';

function SkillsSection({ formData, onChange }) {
  const { isDarkMode } = useTheme();
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
    <div className={isDarkMode ? 'text-white' : 'text-gray-800'}>
      <h3 className={`text-lg lg:text-xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>
        Skills
      </h3>
      <div className="space-y-4">
        {/* Add new skill section */}
        <div className="flex flex-col sm:flex-row gap-2">
          <input
            type="text"
            placeholder="Skill name"
            value={newSkillName}
            onChange={(e) => setNewSkillName(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddSkill()}
            className={`flex-1 px-3 lg:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500'
            }`}
          />
          <select
            value={newSkillLevel}
            onChange={(e) => setNewSkillLevel(e.target.value)}
            className={`px-3 lg:px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              isDarkMode 
                ? 'bg-gray-700 border-gray-600 text-white' 
                : 'bg-white border-gray-300 text-gray-800'
            }`}
          >
            {skillLevels.map(level => (
              <option key={level} value={level}>{level}</option>
            ))}
          </select>
          <button
            onClick={handleAddSkill}
            className={`px-4 lg:px-6 py-2 rounded-lg font-medium transition-colors ${
              isDarkMode 
                ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Add
          </button>
        </div>

        {/* Skills list */}
        <div className="space-y-2">
          {(formData.skills || []).map((skill, index) => (
            <div 
              key={index}
              className={`flex items-center justify-between p-3 rounded-lg border ${
                isDarkMode 
                  ? 'bg-gray-700 border-gray-600' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div>
                <span className={`font-medium ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {skill.name}
                </span>
                <span className={`ml-2 text-xs px-2 py-1 rounded ${
                  isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-100 text-blue-800'
                }`}>
                  {skill.level}
                </span>
              </div>
              <button
                onClick={() => handleRemoveSkill(index)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  isDarkMode 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-red-500 hover:bg-red-600 text-white'
                }`}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsSection;
