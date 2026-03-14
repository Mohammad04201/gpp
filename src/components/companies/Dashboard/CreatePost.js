import React, { useState } from 'react';
import './CreatePost.css';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: 'Full-time',
    urgency: 'Normal',
    location: '',
    salary: '',
    description: '',
    requirements: [],
    benefits: [],
    skills: [],
    experienceLevel: 'Mid-level',
    employmentType: 'Full-time'
  });

  const [newRequirement, setNewRequirement] = useState('');
  const [newBenefit, setNewBenefit] = useState('');
  const [newSkill, setNewSkill] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addRequirement = () => {
    if (newRequirement.trim()) {
      setFormData(prev => ({
        ...prev,
        requirements: [...prev.requirements, newRequirement.trim()]
      }));
      setNewRequirement('');
    }
  };

  const removeRequirement = (index) => {
    setFormData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const addBenefit = () => {
    if (newBenefit.trim()) {
      setFormData(prev => ({
        ...prev,
        benefits: [...prev.benefits, newBenefit.trim()]
      }));
      setNewBenefit('');
    }
  };

  const removeBenefit = (index) => {
    setFormData(prev => ({
      ...prev,
      benefits: prev.benefits.filter((_, i) => i !== index)
    }));
  };

  const addSkill = () => {
    if (newSkill.trim()) {
      setFormData(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (index) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get existing posts from localStorage
    const existingPosts = localStorage.getItem('companyJobPosts');
    const posts = existingPosts ? JSON.parse(existingPosts) : [];
    
    // Create new post matching postsData.js structure
    const newPost = {
      id: Date.now(),
      companyId: 'tech-solutions',
      companyName: 'Tech Solutions Arabia',
      companyLogo: 'TS',
      companyLocation: formData.location || 'Riyadh, Saudi Arabia',
      companySize: '100-500 employees',
      companyIndustry: 'Information Technology',
      publishedAt: new Date().toISOString(),
      title: formData.title,
      type: 'job',
      urgency: formData.urgency.toLowerCase(),
      description: formData.description,
      requirements: formData.requirements,
      benefits: formData.benefits,
      skills: formData.skills,
      experienceLevel: formData.experienceLevel,
      employmentType: formData.employmentType,
      location: formData.location,
      salary: formData.salary,
      applicants: 0,
      views: 0,
      likes: 0,
      isActive: true,
      tags: formData.skills
    };

    // Save to localStorage
    posts.push(newPost);
    localStorage.setItem('companyJobPosts', JSON.stringify(posts));

    // Reset form
    setFormData({
      title: '',
      type: 'Full-time',
      urgency: 'Normal',
      location: '',
      salary: '',
      description: '',
      requirements: [],
      benefits: [],
      skills: ['React', 'JavaScript', 'TypeScript'],
      experienceLevel: 'Mid-level',
      employmentType: 'Full-time'
    });

    alert('Job post created successfully!');
  };

  return (
    <div className="dashboard-create-post">
      <h2>Create New Job Post</h2>
      
      <form onSubmit={handleSubmit} className="create-post-form">
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
                  placeholder="e.g. 15,000 - 25,000 SAR"
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
                placeholder="We are looking for an experienced React developer to join our innovative team. You will work on leading projects in the region."
                rows="6"
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

        <div className="form-actions">
          <button type="button" className="btn-cancel">
            Cancel
          </button>
          <button type="submit" className="btn-submit">
            Create Job Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
