import React, { useState } from 'react';
import { useTheme } from '../../hooks/useThemeContext';

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
  const { isDarkMode } = useTheme();
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
    <div className={`rounded-2xl border shadow-2xl overflow-hidden transition-all duration-300 ${
      isDarkMode 
        ? 'bg-[#282C34] border-[#3a4750]' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Filter Header */}
      <div className={`p-6 border-b transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-[#11a3a3]/20 to-[#0d8383]/20 border-[#3a4750]' 
          : 'bg-gradient-to-r from-[#11a3a3]/10 to-[#0d8383]/10 border-gray-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-[#11a3a3] to-[#0d8383]' 
                : 'bg-gradient-to-br from-[#11a3a3] to-[#0d8383] shadow-lg'
            }`}>
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd"/>
              </svg>
            </div>
            <div>
              <h2 className={`text-xl font-bold transition-all duration-300 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>Job Filters</h2>
              <p className={`text-sm transition-all duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Find your perfect job</p>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`p-2 rounded-lg transition-colors ${
              isDarkMode 
                ? 'bg-[#3a4750] hover:bg-[#4a5568]' 
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            <svg 
              className={`w-5 h-5 text-white transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className={`p-6 border-b transition-all duration-300 ${
        isDarkMode ? 'border-[#3a4750]' : 'border-gray-200'
      }`}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search for jobs, skills, or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-6 py-4 rounded-xl text-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-[#1a1d23] border-[#3a4750] text-white placeholder-gray-400 focus:outline-none focus:border-[#11a3a3]' 
                : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-[#11a3a3] shadow-sm'
            }`}
          />
          <svg className={`absolute right-4 top-4.5 w-6 h-6 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Filters Content */}
      <div className={`transition-all duration-300 ${isExpanded ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <div className={`p-6 space-y-6 ${
          isDarkMode ? 'bg-[#1a1d23]' : 'bg-gray-50'
        }`}>
          {/* Quick Filters */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className={`px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'bg-[#282C34] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
              }`}
            >
              <option value="">📍 All Locations</option>
              {allLocations.map(location => (
                <option key={location} value={location}>{location}</option>
              ))}
            </select>

            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className={`px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'bg-[#282C34] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
              }`}
            >
              <option value="">💼 All Levels</option>
              {experienceLevels.map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>

            <select
              value={activeTab === 'high-urgency' ? 'high' : ''}
              onChange={(e) => setActiveTab(e.target.value === 'high' ? 'high-urgency' : 'all')}
              className={`px-4 py-3 rounded-lg focus:outline-none transition-colors ${
                isDarkMode 
                  ? 'bg-[#282C34] border-[#3a4750] text-white focus:border-[#11a3a3]' 
                  : 'bg-white border-gray-300 text-gray-800 focus:border-[#11a3a3] shadow-sm'
              }`}
            >
              <option value="">⚡ All Priority</option>
              <option value="high">🔥 Urgent</option>
              <option value="medium">⚡ Medium</option>
              <option value="low">✅ Normal</option>
            </select>

            <button
              onClick={clearFilters}
              className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-[#3a4750] hover:bg-[#4a5568] text-white' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:shadow-md'
              }`}
            >
              🔄 Clear All
            </button>
          </div>

          {/* Skills Filter */}
          <div>
            <label className={`block text-sm font-medium mb-3 flex items-center gap-2 transition-all duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              <span>🎯</span> Popular Skills
            </label>
            <div className="flex flex-wrap gap-2">
              {allSkills.slice(0, 12).map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all transform hover:scale-105 ${
                    selectedSkills.includes(skill)
                      ? `bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white shadow-lg shadow-[#11a3a3]/30`
                      : isDarkMode 
                        ? 'bg-[#3a4750] text-gray-300 hover:bg-[#4a5568]'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
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
      <div className={`p-4 border-t transition-all duration-300 ${
        isDarkMode 
          ? 'bg-[#1a1d23] border-[#3a4750]' 
          : 'bg-gray-50 border-gray-200'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className={`text-sm transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>Active filters:</span>
              <span className={`font-bold ml-1 ${
                isDarkMode ? 'text-[#11a3a3]' : 'text-[#11a3a3]'
              }`}>
                {(searchQuery ? 1 : 0) + selectedSkills.length + (selectedLocation ? 1 : 0) + (selectedExperience ? 1 : 0)}
              </span>
            </div>
            <div className={`text-sm transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>Results:</span>
              <span className={`font-bold ml-1 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>{getActivePostsCount()}</span>
            </div>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={`text-xs transition-all duration-300 transform hover:scale-105 ${
              isDarkMode 
                ? 'text-gray-400 hover:text-white' 
                : 'text-gray-500 hover:text-gray-800 hover:font-medium'
            }`}
          >
            {isExpanded ? 'Show Less ▲' : 'Show More ▼'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobFilters;
