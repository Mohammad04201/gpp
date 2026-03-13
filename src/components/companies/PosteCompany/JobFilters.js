import React, { useState } from 'react';

function JobFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedSkills, 
  setSelectedSkills, 
  selectedLocation, 
  setSelectedLocation, 
  selectedExperience, 
  setSelectedExperience,
  activeTab,
  setActiveTab,
  allSkills,
  allLocations,
  experienceLevels,
  filteredPosts,
  clearFilters
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const getActivePostsCount = () => {
    switch (activeTab) {
      case 'trending':
        return 5;
      case 'high-urgency':
        return filteredPosts.filter(post => post.urgency === 'high').length;
      default:
        return filteredPosts.length;
    }
  };

  return (
    <div className="bg-[#282C34] rounded-2xl border border-[#3a4750] shadow-2xl overflow-hidden">
      {/* Filter Header */}
      <div className="bg-gradient-to-r from-[#11a3a3]/20 to-[#0d8383]/20 p-6 border-b border-[#3a4750]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#11a3a3] to-[#0d8383] rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Job Filters</h2>
              <p className="text-gray-400 text-sm">Find your perfect job</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 bg-[#3a4750] hover:bg-[#4a5568] rounded-lg transition-colors"
          >
            <svg 
              className={`w-5 h-5 text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-6 border-b border-[#3a4750]">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for jobs, skills, or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 bg-[#1a1d23] border border-[#3a4750] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-[#11a3a3] transition-all text-lg pr-12"
          />
          <svg className="absolute right-4 top-4.5 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Filters Content */}
      <div className={`transition-all duration-300 ${isExpanded ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <div className="p-6 space-y-6">
          {/* Quick Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-[#11a3a3] transition-colors"
            >
              <option value="">📍 All Locations</option>
              {allLocations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-[#11a3a3] transition-colors"
            >
              <option value="">💼 All Levels</option>
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            <select
              value={activeTab === 'high-urgency' ? 'high' : ''}
              onChange={(e) => setActiveTab(e.target.value === 'high' ? 'high-urgency' : 'all')}
              className="px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-[#11a3a3] transition-colors"
            >
              <option value="">⚡ All Priority</option>
              <option value="high">🔥 Urgent</option>
              <option value="medium">⚡ Medium</option>
              <option value="low">✅ Normal</option>
            </select>

            <button
              onClick={clearFilters}
              className="px-4 py-3 bg-[#3a4750] hover:bg-[#4a5568] text-white rounded-lg transition-colors font-medium"
            >
              🔄 Clear All
            </button>
          </div>

          {/* Skills Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3 flex items-center gap-2">
              <span>🎯</span> Popular Skills
            </label>
            <div className="flex flex-wrap gap-2">
              {allSkills.slice(0, 12).map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all transform hover:scale-105 ${
                    selectedSkills.includes(skill)
                      ? 'bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white shadow-lg shadow-[#11a3a3]/30'
                      : 'bg-[#3a4750] text-gray-300 hover:bg-[#4a5568]'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Filter Stats */}
      <div className="bg-[#1a1d23] p-4 border-t border-[#3a4750]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-sm">
              <span className="text-gray-400">Active filters:</span>
              <span className="text-[#11a3a3] font-bold ml-1">
                {(searchQuery ? 1 : 0) + selectedSkills.length + (selectedLocation ? 1 : 0) + (selectedExperience ? 1 : 0)}
              </span>
            </div>
            <div className="text-sm">
              <span className="text-gray-400">Results:</span>
              <span className="text-white font-bold ml-1">{getActivePostsCount()}</span>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? 'Show Less ▲' : 'Show More ▼'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobFilters;
