import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDeveloperById } from './developersData';
import { 
  addSkill, 
  updateSkill, 
  deleteSkill, 
  saveSkillsToStorage,
  loadSkillsFromStorage
} from '../../utils/skillsUtils';
import { getSkillLevelColor, getSkillLevelText, getSkillsStats } from './helpers';
import './DeveloperStyles.css';

function DeveloperSkills() {
  const { id } = useParams();
  const developerId = parseInt(id) || 1;
  const developer = getDeveloperById(developerId);
  const [skills, setSkills] = useState(developer ? developer.skills : []);
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner' });
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    const savedSkills = loadSkillsFromStorage(developerId);
    if (savedSkills) {
      setSkills(savedSkills);
    }
  }, [developerId]);

  if (!developer) {
    return (
      <div className="developer-container">
        <div className="developer-content">
          <div className="text-center">
            <h1 className="developer-title">Developer not found</h1>
          </div>
        </div>
      </div>
    );
  }

  const handleAddSkill = () => {
    if (editingIndex >= 0) {
      const updatedSkills = updateSkill(skills, editingIndex, newSkill);
      setSkills(updatedSkills);
      setEditingIndex(-1);
    } else {
      const updatedSkills = addSkill(skills, newSkill);
      setSkills(updatedSkills);
    }
    setNewSkill({ name: '', level: 'Beginner' });
    saveSkillsToStorage(developerId, skills);
  };

  const handleEditSkill = (index) => {
    setNewSkill(skills[index]);
    setEditingIndex(index);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = deleteSkill(skills, index);
    setSkills(updatedSkills);
    saveSkillsToStorage(developerId, updatedSkills);
  };

  const handleCancelEdit = () => {
    setNewSkill({ name: '', level: 'Beginner' });
    setEditingIndex(-1);
  };

  const stats = getSkillsStats(skills);

  return (
    <div className="developer-container">
      <div className="developer-content">
        <div className="mb-8">
          <h1 className="developer-title">Skills Management</h1>
          <p className="developer-subtitle">For {developer.name} - {developer.title}</p>
        </div>

        <div className="developer-card mb-8">
          <div className="developer-header">
            <h2 className="text-xl font-semibold mb-4">
              {editingIndex >= 0 ? 'Edit Skill' : 'Add New Skill'}
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div className="form-group">
                <label className="form-label">Skill Name</label>
                <input
                  type="text"
                  value={newSkill.name}
                  onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                  placeholder="e.g., React, Python, JavaScript"
                  className="form-input"
                />
              </div>
              
              <div className="form-group">
                <label className="form-label">Level</label>
                <select
                  value={newSkill.level}
                  onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                  className="form-select"
                >
                  <option value="Intermediate">Intermediate</option>
                  <option value="Advanced">Advanced</option>
                  <option value="Expert">Expert</option>
                </select>
              </div>
              
              <div className="flex items-end gap-3">
                <button
                  onClick={handleAddSkill}
                  className="btn-primary"
                >
                  {editingIndex >= 0 ? 'Update' : 'Add'}
                </button>
                
                {editingIndex >= 0 && (
                  <button
                    onClick={handleCancelEdit}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="developer-card">
          <div className="developer-header">
            <h2 className="text-xl font-semibold">Current Skills ({skills.length})</h2>
          </div>
          
          {skills.length > 0 ? (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="developer-card">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold text-primary">{skill.name}</span>
                        <span className={`skill-badge ${getSkillLevelColor(skill.level)}`}>
                          {getSkillLevelText(skill.level)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditSkill(index)}
                          className="btn-primary p-2"
                          title="Edit"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                          </svg>
                        </button>
                        
                        <button
                          onClick={() => handleDeleteSkill(index)}
                          className="btn-danger p-2"
                          title="Delete"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="progress-bar">
                      <div 
                        className={`progress-fill ${
                          skill.level === 'Expert' ? 'bg-success-color' :
                          skill.level === 'Advanced' ? 'bg-info-color' :
                          skill.level === 'Intermediate' ? 'bg-warning-color' :
                          'bg-gray-500'
                        }`}
                        style={{
                          width: skill.level === 'Expert' ? '100%' : 
                                 skill.level === 'Advanced' ? '80%' : 
                                 skill.level === 'Intermediate' ? '60%' : '40%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border-color">
                <div className="stats-grid">
                  <div className="stat-card">
                    <div className="stat-number">{stats.total}</div>
                    <div className="stat-label">Total Skills</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{stats.advanced}</div>
                    <div className="stat-label">Advanced Skills</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{stats.intermediate}</div>
                    <div className="stat-label">Intermediate Skills</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">{stats.beginner}</div>
                    <div className="stat-label">Beginner Skills</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="developer-avatar-large mx-auto mb-6">
                <svg className="w-10 h-10 text-muted" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">No skills added yet</h3>
              <p className="text-muted mb-6">Start adding your skills using form above</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeveloperSkills;
