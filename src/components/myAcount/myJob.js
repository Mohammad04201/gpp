import React, { useState, useEffect } from 'react';
import './myJob.css';

const MyJob = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Mock job data
  useEffect(() => {
    const mockJobs = [
      {
        id: 1,
        title: 'Frontend Developer',
        company: 'Advanced Tech Company',
        location: 'Riyadh',
        type: 'Full-time',
        salary: '15,000 - 20,000 SAR',
        description: 'We are looking for an experienced frontend developer with React and JavaScript skills',
        requirements: '3 years experience in React, HTML5, CSS3',
        postedDate: '2024-03-10',
        applicants: 12,
        status: 'active'
      },
      {
        id: 2,
        title: 'Backend Developer',
        company: 'Advanced Tech Company',
        location: 'Jeddah',
        type: 'Part-time',
        salary: '10,000 - 15,000 SAR',
        description: 'Backend developer specialized in Node.js and MongoDB needed',
        requirements: '2 years experience in Node.js, Express, MongoDB',
        postedDate: '2024-03-08',
        applicants: 8,
        status: 'active'
      },
      {
        id: 3,
        title: 'UI Designer',
        company: 'Advanced Tech Company',
        location: 'Dammam',
        type: 'Remote',
        salary: '12,000 - 18,000 SAR',
        description: 'Creative UI designer needed to improve user experience',
        requirements: 'Experience in Figma, Adobe XD, UI/UX design',
        postedDate: '2024-03-05',
        applicants: 15,
        status: 'closed'
      }
    ];
    
    setTimeout(() => {
      setJobs(mockJobs);
      setLoading(false);
    }, 1000);
  }, []);

  const handleEditJob = (job) => {
    setEditingJob({ ...job });
    setShowEditModal(true);
  };

  const handleDeleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      setJobs(jobs.filter(job => job.id !== jobId));
    }
  };

  const handleSaveEdit = () => {
    setJobs(jobs.map(job => 
      job.id === editingJob.id ? editingJob : job
    ));
    setShowEditModal(false);
    setEditingJob(null);
  };

  const handleToggleStatus = (jobId) => {
    setJobs(jobs.map(job => 
      job.id === jobId 
        ? { ...job, status: job.status === 'active' ? 'closed' : 'active' }
        : job
    ));
  };

  if (loading) {
    return (
      <div className="myjob-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="myjob-container">
      <div className="myjob-header">
        <h1>My Posted Jobs</h1>
        <p>Manage and control your company's posted jobs</p>
      </div>

      <div className="jobs-stats">
        <div className="stat-card">
          <h3>{jobs.length}</h3>
          <p>Total Jobs</p>
        </div>
        <div className="stat-card">
          <h3>{jobs.filter(job => job.status === 'active').length}</h3>
          <p>Active Jobs</p>
        </div>
        <div className="stat-card">
          <h3>{jobs.reduce((sum, job) => sum + job.applicants, 0)}</h3>
          <p>Total Applicants</p>
        </div>
      </div>

      <div className="jobs-grid">
        {jobs.map(job => (
          <div key={job.id} className={`job-card ${job.status === 'closed' ? 'closed' : ''}`}>
            <div className="job-header">
              <h3>{job.title}</h3>
              <span className={`status-badge ${job.status}`}>
                {job.status === 'active' ? 'Active' : 'Closed'}
              </span>
            </div>
            
            <div className="job-details">
              <div className="detail-item">
                <span className="icon">📍</span>
                <span>{job.location}</span>
              </div>
              <div className="detail-item">
                <span className="icon">💼</span>
                <span>{job.type}</span>
              </div>
              <div className="detail-item">
                <span className="icon">💰</span>
                <span>{job.salary}</span>
              </div>
              <div className="detail-item">
                <span className="icon">👥</span>
                <span>{job.applicants} applicants</span>
              </div>
            </div>

            <div className="job-description">
              <p>{job.description}</p>
            </div>

            <div className="job-actions">
              <button 
                className="btn-edit"
                onClick={() => handleEditJob(job)}
              >
                Edit
              </button>
              <button 
                className="btn-toggle"
                onClick={() => handleToggleStatus(job.id)}
              >
                {job.status === 'active' ? 'Close' : 'Activate'}
              </button>
              <button 
                className="btn-delete"
                onClick={() => handleDeleteJob(job.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {jobs.length === 0 && (
        <div className="empty-state">
          <div className="empty-icon">📋</div>
          <h3>No posted jobs</h3>
          <p>Start posting jobs to find the right talent</p>
        </div>
      )}

      {showEditModal && (
        <EditJobModal
          job={editingJob}
          onClose={() => setShowEditModal(false)}
          onSave={handleSaveEdit}
          onChange={(field, value) => setEditingJob({...editingJob, [field]: value})}
        />
      )}
    </div>
  );
};

const EditJobModal = ({ job, onClose, onSave, onChange }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Edit Job</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-body">
          <div className="form-group">
            <label>Job Title</label>
            <input
              type="text"
              value={job.title}
              onChange={(e) => onChange('title', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              value={job.location}
              onChange={(e) => onChange('location', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Job Type</label>
            <select
              value={job.type}
              onChange={(e) => onChange('type', e.target.value)}
            >
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          
          <div className="form-group">
            <label>Salary</label>
            <input
              type="text"
              value={job.salary}
              onChange={(e) => onChange('salary', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="3"
              value={job.description}
              onChange={(e) => onChange('description', e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Requirements</label>
            <textarea
              rows="2"
              value={job.requirements}
              onChange={(e) => onChange('requirements', e.target.value)}
            />
          </div>
        </div>
        
        <div className="modal-footer">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-save" onClick={onSave}>Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default MyJob;
