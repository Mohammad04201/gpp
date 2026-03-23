import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JobCard } from '../../companies/PosteCompany/JobCard';
import { postsData } from '../../companies/PosteCompany/postsData';
import { useThemeContext } from '../../contexts/ThemeContext';

function SavedJobsTab({ savedJobs }) {
  const { isDarkMode } = useThemeContext();
  const [likedJobs, setLikedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent'); // recent, likes, salary

  useEffect(() => {
    // Load liked jobs from localStorage
    const savedLikedJobs = localStorage.getItem('likedJobs');
    if (savedLikedJobs) {
      const likedJobIds = JSON.parse(savedLikedJobs);
      // Get actual job data from postsData
      const actualLikedJobs = postsData.filter(job => likedJobIds.includes(job.id));
      setLikedJobs(actualLikedJobs);
    } else {
      setLikedJobs([]);
    }
  }, []);

  const handleUnlike = (jobId) => {
    // Remove from localStorage
    const savedLikedJobs = localStorage.getItem('likedJobs');
    if (savedLikedJobs) {
      const likedJobIds = JSON.parse(savedLikedJobs);
      const updatedLikedJobIds = likedJobIds.filter(id => id !== jobId);
      localStorage.setItem('likedJobs', JSON.stringify(updatedLikedJobIds));
      
      // Update state
      const updatedJobs = likedJobs.filter(job => job.id !== jobId);
      setLikedJobs(updatedJobs);
    }
  };

  const handleLikeChange = (jobId, isLiked) => {
    if (isLiked) {
      // Add to liked jobs
      const savedLikedJobs = localStorage.getItem('likedJobs');
      const likedJobIds = savedLikedJobs ? JSON.parse(savedLikedJobs) : [];
      if (!likedJobIds.includes(jobId)) {
        likedJobIds.push(jobId);
        localStorage.setItem('likedJobs', JSON.stringify(likedJobIds));
        
        // Add to state if not already there
        const jobToAdd = postsData.find(job => job.id === jobId);
        if (jobToAdd && !likedJobs.find(job => job.id === jobId)) {
          setLikedJobs(prev => [...prev, jobToAdd]);
        }
      }
    } else {
      // Remove from liked jobs
      handleUnlike(jobId);
    }
  };

  // Check if a job is initially liked
  const isJobInitiallyLiked = (jobId) => {
    const savedLikedJobs = localStorage.getItem('likedJobs');
    if (savedLikedJobs) {
      const likedJobIds = JSON.parse(savedLikedJobs);
      return likedJobIds.includes(jobId);
    }
    return false;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays <= 7) return `${diffDays} days ago`;
    if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };

  // Filter and sort jobs
  const filteredAndSortedJobs = likedJobs
    .filter(job => 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'recent':
          return new Date(b.publishedAt) - new Date(a.publishedAt);
        case 'likes':
          return b.likes - a.likes;
        case 'salary':
          const aSalary = parseInt(a.salary.replace(/[^0-9]/g, ''));
          const bSalary = parseInt(b.salary.replace(/[^0-9]/g, ''));
          return bSalary - aSalary;
        default:
          return 0;
      }
    });

  return (
    <div className={`dashboard-saved-jobs transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`}>
      <h2 className={`mb-6 transition-all duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>Saved Jobs</h2>
      
      {/* Search and Filters */}
      <div className={`rounded-xl border p-4 mb-6 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gray-800/50 border-gray-700' 
          : 'bg-white border-gray-200 shadow-lg'
      }`}>
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search your saved jobs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-teal-500'
              }`}
            />
          </div>
          
          <div className="flex gap-2">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className={`px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'bg-gray-900/50 border-gray-600 text-white focus:border-teal-500' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-teal-500'
              }`}
            >
              <option value="recent">Most Recent</option>
              <option value="likes">Most Liked</option>
              <option value="salary">Highest Salary</option>
            </select>
            
            <button
              onClick={() => {
                setSearchTerm('');
                setSortBy('recent');
              }}
              className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                isDarkMode 
                  ? 'bg-gray-700 text-white hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Clear Filters
            </button>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      {filteredAndSortedJobs.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredAndSortedJobs.map((job) => (
            <JobCard 
              key={job.id} 
              post={job} 
              initialLiked={isJobInitiallyLiked(job.id)}
              onLikeChange={handleLikeChange}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100 shadow-lg'
          }`}>
            <svg className={`w-12 h-12 transition-all duration-300 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-400'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>No saved jobs yet</h3>
          <p className={`mb-6 transition-all duration-300 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-500'
          }`}>Start liking jobs to see them here</p>
          <Link
            to="/jobs"
            className={`inline-block px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600' 
                : 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white hover:from-teal-600 hover:to-cyan-600 shadow-lg hover:shadow-xl'
              }`}
          >
            Browse Jobs
          </Link>
        </div>
      )}
    </div>
  );
}

export default SavedJobsTab;
