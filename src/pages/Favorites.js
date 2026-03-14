import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Mock data for liked jobs - in real app this would come from API/localStorage
const mockLikedJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    companyName: "Tech Solutions Inc.",
    companyLogo: "TS",
    location: "Riyadh, Saudi Arabia",
    salary: "$120,000 - $150,000",
    type: "Full-time",
    urgency: "high",
    likes: 45,
    applicants: 23,
    views: 156,
    publishedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    skills: ["React", "TypeScript", "Node.js", "AWS", "GraphQL"],
    isLiked: true
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    companyName: "Digital Innovations",
    companyLogo: "DI",
    location: "Dubai, UAE",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    urgency: "medium",
    likes: 32,
    applicants: 18,
    views: 98,
    publishedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    skills: ["JavaScript", "Python", "Django", "PostgreSQL", "Docker"],
    isLiked: true
  },
  {
    id: 3,
    title: "React Native Developer",
    companyName: "Mobile First Co",
    companyLogo: "MF",
    location: "Jeddah, Saudi Arabia",
    salary: "$90,000 - $120,000",
    type: "Remote",
    urgency: "low",
    likes: 28,
    applicants: 12,
    views: 67,
    publishedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    skills: ["React Native", "TypeScript", "Redux", "Firebase", "Git"],
    isLiked: true
  }
];

function Favorites() {
  const [likedJobs, setLikedJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent'); // recent, likes, salary

  useEffect(() => {
    // Load liked jobs from localStorage or API
    const savedLikedJobs = localStorage.getItem('likedJobs');
    if (savedLikedJobs) {
      setLikedJobs(JSON.parse(savedLikedJobs));
    } else {
      setLikedJobs(mockLikedJobs);
    }
  }, []);

  const handleUnlike = (jobId) => {
    const updatedJobs = likedJobs.filter(job => job.id !== jobId);
    setLikedJobs(updatedJobs);
    localStorage.setItem('likedJobs', JSON.stringify(updatedJobs));
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

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-500 text-white';
      case 'medium':
        return 'bg-teal-500 text-white';
      case 'low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'Urgent';
      case 'medium':
        return 'Medium';
      case 'low':
        return 'Normal';
      default:
        return 'Normal';
    }
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
              <div key={job.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
                {/* Header */}
                <div className="p-6 border-b border-gray-700/50">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <span className="text-lg font-bold text-white">{job.companyLogo}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{job.companyName}</h3>
                        <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                          <span>{job.location}</span>
                          <span>•</span>
                          <span>{job.type}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(job.urgency)}`}>
                      {getUrgencyText(job.urgency)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{job.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{job.salary}</p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 4).map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 4 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          +{job.skills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center gap-4">
                      <span>{job.applicants} applicants</span>
                      <span>{job.views} views</span>
                    </div>
                    <span>{formatDate(job.publishedAt)}</span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      to={`/jobs/${job.id}`}
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => handleUnlike(job.id)}
                      className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg font-medium transition-colors border border-red-500/30"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                      </svg>
                    </button>
                  </div>

                  {/* Like Section */}
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <div className="flex -space-x-2">
                          {[1, 2, 3].map((i) => (
                            <div 
                              key={i} 
                              className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full border-2 border-gray-800 flex items-center justify-center"
                            >
                              <span className="text-xs font-bold text-white">
                                {String.fromCharCode(65 + i)}
                              </span>
                            </div>
                          ))}
                        </div>
                        <span>{job.likes} people liked this</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
