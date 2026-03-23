import React, { useState } from 'react';
import { useTheme } from '../../hooks/useThemeContext';
import './myJob.css';

const EditJobModal = ({ job, onClose, onSave, onChange }) => {
  const { isDarkMode } = useTheme();
  // Form state matching CreatePost structure
  const [formData, setFormData] = useState({
    title: job.title || '',
    type: job.type || 'Full-time',
    urgency: job.urgency || 'Normal',
    location: job.location || '',
    salary: job.salary || '',
    description: job.description || '',
    requirements: job.requirements || [],
    benefits: job.benefits || [],
    skills: job.skills || [],
    experienceLevel: job.experienceLevel || 'Mid-level',
    employmentType: job.employmentType || 'Full-time'
  });

  const [newRequirement, setNewRequirement] = useState('');
  const [newBenefit, setNewBenefit] = useState('');
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };
    setFormData(updatedData);
    onChange(name === 'title' ? 'title' : name, value);
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      const updatedRequirements = [...formData.requirements, newRequirement.trim()];
      const updatedData = { ...formData, requirements: updatedRequirements };
      setFormData(updatedData);
      onChange('requirements', updatedRequirements);
      setNewRequirement('');
    }
  };

  const removeRequirement = (index) => {
    const updatedRequirements = formData.requirements.filter((_, i) => i !== index);
    const updatedData = { ...formData, requirements: updatedRequirements };
    setFormData(updatedData);
    onChange('requirements', updatedRequirements);
  };

  const addBenefit = () => {
    if (newBenefit.trim()) {
      const updatedBenefits = [...formData.benefits, newBenefit.trim()];
      const updatedData = { ...formData, benefits: updatedBenefits };
      setFormData(updatedData);
      onChange('benefits', updatedBenefits);
      setNewBenefit('');
    }
  };

  const removeBenefit = (index) => {
    const updatedBenefits = formData.benefits.filter((_, i) => i !== index);
    const updatedData = { ...formData, benefits: updatedBenefits };
    setFormData(updatedData);
    onChange('benefits', updatedBenefits);
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      const updatedSkills = [...formData.skills, newSkill.trim()];
      const updatedData = { ...formData, skills: updatedSkills };
      setFormData(updatedData);
      onChange('skills', updatedSkills);
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter((_, i) => i !== index);
    const updatedData = { ...formData, skills: updatedSkills };
    setFormData(updatedData);
    onChange('skills', updatedSkills);
  };

  return (
    <div className={`modal-overlay ${isDarkMode ? '' : 'light-mode'}`}>
      <div className={`modal-content ${isDarkMode ? '' : 'light-mode'} max-w-4xl max-h-[90vh] overflow-y-auto`}>
        <div className="modal-header">
          <h2>Edit Job</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="form-grid">
            {/* Basic Information */}
            <div className="form-section">
              <h3>Basic Information</h3>
              <div className="form-group">
                <label>Job Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. Senior React Developer - Remote Position"
                  required
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Job Type</label>
                  <select name="type" value={formData.type} onChange={handleInputChange}>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Urgency</label>
                  <select name="urgency" value={formData.urgency} onChange={handleInputChange}>
                    <option value="Normal">Normal</option>
                    <option value="high">High</option>
                    <option value="Immediate">Immediate</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Location *</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="e.g. Riyadh, Saudi Arabia"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label>Salary Range</label>
                  <input
                    type="text"
                    name="salary"
                    value={formData.salary}
                    onChange={handleInputChange}
                    placeholder="e.g. $80,000 - $120,000"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Experience Level</label>
                  <select name="experienceLevel" value={formData.experienceLevel} onChange={handleInputChange}>
                    <option value="Entry-level">Entry-level</option>
                    <option value="Mid-level">Mid-level</option>
                    <option value="Senior">Senior</option>
                    <option value="Executive">Executive</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label>Employment Type</label>
                  <select name="employmentType" value={formData.employmentType} onChange={handleInputChange}>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="form-section">
              <h3>Job Description</h3>
              <div className="form-group">
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="6"
                  placeholder="We are looking for an experienced React developer to join our innovative team. You will work on leading projects in the region."
                  required
                />
              </div>
            </div>

            {/* Requirements */}
            <div className="form-section">
              <h3>Requirements</h3>
              <div className="form-group">
                <div className="tag-input-group">
                  <input
                    type="text"
                    value={newRequirement}
                    onChange={(e) => setNewRequirement(e.target.value)}
                    placeholder="Add a requirement..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addRequirement();
                      }
                    }}
                  />
                  <button type="button" onClick={addRequirement} className="add-btn">
                    Add
                  </button>
                </div>
                
                <div className="tags-list">
                  {formData.requirements.map((req, index) => (
                    <span key={index} className="tag">
                      {req}
                      <button type="button" onClick={() => removeRequirement(index)} className="remove-btn">
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="form-section">
              <h3>Benefits</h3>
              <div className="form-group">
                <div className="tag-input-group">
                  <input
                    type="text"
                    value={newBenefit}
                    onChange={(e) => setNewBenefit(e.target.value)}
                    placeholder="Add a benefit..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addBenefit();
                      }
                    }}
                  />
                  <button type="button" onClick={addBenefit} className="add-btn">
                    Add
                  </button>
                </div>
                
                <div className="tags-list">
                  {formData.benefits.map((benefit, index) => (
                    <span key={index} className="tag">
                      {benefit}
                      <button type="button" onClick={() => removeBenefit(index)} className="remove-btn">
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills */}
            <div className="form-section">
              <h3>Required Skills</h3>
              <div className="form-group">
                <div className="tag-input-group">
                  <input
                    type="text"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        addSkill();
                      }
                    }}
                  />
                  <button type="button" onClick={addSkill} className="add-btn">
                    Add
                  </button>
                </div>
                
                <div className="tags-list">
                  {formData.skills.map((skill, index) => (
                    <span key={index} className="tag">
                      {skill}
                      <button type="button" onClick={() => removeSkill(index)} className="remove-btn">
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="modal-footer">
          <button 
            className={`btn-cancel transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800 shadow-lg hover:shadow-xl'
            }`}
            onClick={onClose}
          >Cancel</button>
          <button 
            className={`btn-save transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white' 
                : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
            }`}
            onClick={onSave}
          >Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditJobModal;
