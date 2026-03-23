import React, { useState, useEffect } from 'react';
import { useTheme } from '../../hooks/useThemeContext';
import './myJob.css';
import EditJobModal from './EditJobModal';
import JobCard from './JobCard';

const MyJob = () => {
  const { isDarkMode } = useTheme();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingJob, setEditingJob] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  // Load jobs from localStorage (same structure as CreatePost)
  useEffect(() => {
    const loadJobs = () => {
      const savedJobs = localStorage.getItem('companyJobPosts');
      const jobsData = savedJobs ? JSON.parse(savedJobs) : [];
      
      // If no jobs in localStorage, use mock data
      if (jobsData.length === 0) {
        const mockJobs = [
          {
            id: 3,
            title: 'UI Designer',
            type: 'Remote',
            urgency: 'high',
            location: 'Dammam',
            salary: '12,000 - 18,000 SAR',
            description: 'Creative UI designer needed to improve user experience',
            requirements: ['Experience in Figma', 'Adobe XD', 'UI/UX design'],
            benefits: ['Creative freedom', 'Modern equipment'],
            skills: ['Figma', 'Adobe XD', 'UI/UX'],
            experienceLevel: 'Senior',
            employmentType: 'Remote',
            postedDate: '2024-03-05',
            applicants: 15,
            views: 67,
            likes: 12,
            status: 'closed'
          }
        ];
        setJobs(mockJobs);
      } else {
        setJobs(jobsData);
      }
      
      setLoading(false);
    };

    loadJobs();
    
    // Listen for storage changes (when new jobs are created)
    const handleStorageChange = () => {
      loadJobs();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('jobPostCreated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('jobPostCreated', handleStorageChange);
    };
  }, []);

  const handleEditJob = (job) => {
    setEditingJob({ ...job });
    setShowEditModal(true);
  };

  const handleDeleteJob = (jobId) => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      // Remove from localStorage as well
      const savedJobs = localStorage.getItem('companyJobPosts');
      if (savedJobs) {
        const jobsData = JSON.parse(savedJobs);
        const updatedJobs = jobsData.filter(job => job.id !== jobId);
        localStorage.setItem('companyJobPosts', JSON.stringify(updatedJobs));
      }
      
      setJobs(jobs.filter(job => job.id !== jobId));
    }
  };

  const handleSaveEdit = () => {
    // Update in localStorage
    const savedJobs = localStorage.getItem('companyJobPosts');
    if (savedJobs) {
      const jobsData = JSON.parse(savedJobs);
      const updatedJobs = jobsData.map(job => 
        job.id === editingJob.id ? editingJob : job
      );
      localStorage.setItem('companyJobPosts', JSON.stringify(updatedJobs));
    }
    
    setJobs(jobs.map(job => 
      job.id === editingJob.id ? editingJob : job
    ));
    setShowEditModal(false);
    setEditingJob(null);
  };

  const handleToggleStatus = (jobId) => {
    const updatedJobs = jobs.map(job => 
      job.id === jobId 
        ? { ...job, status: job.status === 'active' ? 'closed' : 'active' }
        : job
    );
    
    // Update in localStorage
    const savedJobs = localStorage.getItem('companyJobPosts');
    if (savedJobs) {
      const jobsData = JSON.parse(savedJobs);
      const updatedStorageJobs = jobsData.map(job => 
        job.id === jobId 
          ? { ...job, status: job.status === 'active' ? 'closed' : 'active' }
          : job
      );
      localStorage.setItem('companyJobPosts', JSON.stringify(updatedStorageJobs));
    }
    
    setJobs(updatedJobs);
  };

  if (loading) {
    return (
      <div className={`myjob-container ${isDarkMode ? '' : 'light-mode'}`}>
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`myjob-container min-h-screen p-6 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="myjob-header text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My Posted Jobs
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Manage and control your company's posted jobs
          </p>
        </div>

        <div className="jobs-stats grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className={`stat-card ${isDarkMode ? '' : 'light-mode'}`}>
            <h3 className={isDarkMode ? 'text-white' : 'text-gray-800'}>{jobs.length}</h3>
            <p className={isDarkMode ? 'text-white' : 'text-gray-800'}>Total Jobs</p>
          </div>
          <div className={`stat-card ${isDarkMode ? '' : 'light-mode'}`}>
            <h3 className={isDarkMode ? 'text-white' : 'text-gray-800'}>{jobs.filter(job => job.status === 'active').length}</h3>
            <p className={isDarkMode ? 'text-white' : 'text-gray-800'}>Active Jobs</p>
          </div>
          <div className={`stat-card ${isDarkMode ? '' : 'light-mode'}`}>
            <h3 className={isDarkMode ? 'text-white' : 'text-gray-800'}>{jobs.reduce((sum, job) => sum + job.applicants, 0)}</h3>
            <p className={isDarkMode ? 'text-white' : 'text-gray-800'}>Total Applicants</p>
          </div>
        </div>

        <div className="jobs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map(job => (
          <JobCard
            key={job.id}
            job={job}
            onEdit={handleEditJob}
            onToggleStatus={handleToggleStatus}
            onDelete={handleDeleteJob}
          />
        ))}
      </div>

      {jobs.length === 0 && (
        <div className={`empty-state text-center py-16 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          <div className="text-6xl mb-4 opacity-50">📋</div>
          <h3 className={`text-xl font-semibold mb-2 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            No posted jobs
          </h3>
          <p className="text-sm">
            Start posting jobs to find the right talent
          </p>
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
    </div>
  );
};

export default MyJob;
