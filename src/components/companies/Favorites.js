import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JobCard } from './PosteCompany/JobCard';
import { postsData } from './PosteCompany/postsData';

function Favorites() {
  const [likedJobs, setLikedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent'); // recent, likes, salary

  useEffect(() => {
    // Load liked jobs from localStorage
    const savedLikedJobs = localStorage.getItem('likedJobs');
    if (savedLikedJobs) {
      const likedJobIds = JSON.parse(savedLikedJobs);
      // Get the actual job data from postsData
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
    <div className="min-h-screen bg- p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-500/20 p-3 rounded-xl">
              <svg className="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">My Favorites</h1>
              <p className="text-gray-400 text-lg">Jobs you've liked and saved</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
              {likedJobs.length} saved jobs
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              {likedJobs.reduce((sum, job) => sum + job.likes, 0)} total likes
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              {likedJobs.reduce((sum, job) => sum + job.applicants, 0)} total applicants
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-gray-800/50 rounded-xl border border-gray-700 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search your favorite jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>
            
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:border-teal-500 focus:outline-none transition-colors"
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
                className="px-4 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Jobs Grid */}
        {filteredAndSortedJobs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredAndSortedJobs.map((job) => (
              <JobCard 
                key={job.id} 
                post={job} 
                initialLiked={isJobInitiallyLiked(job.id)}
                onLikeChange={handleLikeChange}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-12 h-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-400 mb-3">No favorite jobs yet</h3>
            <p className="text-gray-500 mb-6">Start liking jobs to see them here</p>
            <Link
              to="/jobs"
              className="inline-block px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Browse Jobs
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
