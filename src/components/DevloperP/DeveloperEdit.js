import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDeveloperById } from './developersData';
import './DeveloperStyles.css';

function DeveloperEdit() {
  const { id } = useParams();
  const developerId = parseInt(id) || 1;
  const developer = getDeveloperById(developerId);
  
  const [formData, setFormData] = useState({
    name: developer?.name || '',
    title: developer?.title || '',
    location: developer?.location || '',
    bio: developer?.bio || '',
    experience: developer?.experience || 0,
    available: developer?.available || false
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem(`developer_${developerId}_profile`);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, [developerId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSave = () => {
    try {
      localStorage.setItem(`developer_${developerId}_profile`, JSON.stringify(formData));
      setMessage('Changes saved successfully!');
      setIsEditing(false);
      
      if (developer) {
        Object.assign(developer, formData);
      }
    } catch (error) {
      setMessage('An error occurred while saving. Please try again.');
      console.error('Error saving profile:', error);
    }
  };

  const handleCancel = () => {
    if (developer) {
      setFormData({
        name: developer.name,
        title: developer.title,
        location: developer.location,
        bio: developer.bio,
        experience: developer.experience,
        available: developer.available
      });
    }
    setIsEditing(false);
    setMessage('');
  };

  const handleEdit = () => {
    setIsEditing(true);
    setMessage('');
  };

  if (!developer) {
    return (
      <div className="developer-container">
        <div className="developer-content">
          <div className="text-center">
            <h1 className="developer-title">Developer not found</h1>
            <Link to="/developers" className="btn-primary mt-4">
              Back to Developers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="developer-container">
      <div className="developer-content">
        <div className="mb-8">
          <h1 className="developer-title">Edit Profile</h1>
          <p className="developer-subtitle">For {developer.name}</p>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.includes('successfully') 
              ? 'bg-success-color text-white' 
              : 'bg-error-color text-white'
          }`}>
            {message}
          </div>
        )}

        <div className="developer-card">
          <div className="developer-header">
            <h2 className="text-xl font-semibold mb-4">Edit Information</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Job Title</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Years of Experience</label>
                  <input
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    min="0"
                    max="50"
                    className="form-input"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="form-group">
                  <label className="form-label">Personal Bio</label>
                  <textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    rows="6"
                    className="form-textarea"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-primary">
                    <input
                      type="checkbox"
                      name="available"
                      checked={formData.available}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                      className="w-4 h-4 text-accent-color border-gray-300 rounded focus:ring-accent-color disabled:opacity-50"
                    />
                    Available for Work
                  </label>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border-color">
              <div className="flex items-center gap-3">
                <Link 
                  to={`/developer/profile/${developerId}`}
                  className="btn-secondary"
                >
                  Back to Profile
                </Link>
                
                <Link 
                  to={`/developer/skills/${developerId}`}
                  className="btn-warning"
                >
                  Manage Skills
                </Link>
              </div>

              <div className="flex items-center gap-3">
                {!isEditing ? (
                  <button
                    onClick={handleEdit}
                    className="btn-primary"
                  >
                    Edit Information
                  </button>
                ) : (
                  <>
                    <button
                      onClick={handleSave}
                      className="btn-success"
                    >
                      Save Changes
                    </button>
                    
                    <button
                      onClick={handleCancel}
                      className="btn-secondary"
                    >
                      Cancel
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="developer-card mt-8">
          <div className="developer-header">
            <h3 className="text-xl font-semibold mb-4">Current Data</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-muted mb-2">Basic Information</h4>
                <div className="space-y-2">
                  <p><span className="text-muted">Name:</span> <span className="text-primary">{formData.name}</span></p>
                  <p><span className="text-muted">Title:</span> <span className="text-primary">{formData.title}</span></p>
                  <p><span className="text-muted">Location:</span> <span className="text-primary">{formData.location}</span></p>
                  <p><span className="text-muted">Experience:</span> <span className="text-primary">{formData.experience} years</span></p>
                  <p><span className="text-muted">Status:</span> 
                    <span className={`status-badge ${formData.available ? 'status-available' : 'status-busy'}`}>
                      {formData.available ? 'Available for work' : 'Busy'}
                    </span>
                  </p>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-muted mb-2">Personal Bio</h4>
                <p className="text-secondary leading-relaxed">
                  {formData.bio || 'No personal bio available'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperEdit;
