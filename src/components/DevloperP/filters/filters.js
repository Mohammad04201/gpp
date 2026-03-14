import React from 'react';
import { developersData } from '../developersData';

// Component for search and filters
function SearchFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedSkills, 
  setSelectedSkills, 
  selectedLocation, 
  setSelectedLocation, 
  minExperience, 
  setMinExperience, 
  clearFilters
}) {
  // Calculate values inside component
  const allSkills = [...new Set(developersData.flatMap(dev => dev.skills.map(skill => skill.name)))];
  const allLocations = [...new Set(developersData.map(dev => dev.location))];
  const experienceLevels = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 mb-8 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a developer, skill, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-gray-900/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
          />
          <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
          >
            <option value="">All Locations</option>
            {allLocations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Experience (years)</label>
          <select
            value={minExperience}
            onChange={(e) => setMinExperience(e.target.value)}
            className="w-full px-3 py-2 bg-gray-900/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
          >
            <option value="">All Levels</option>
            {experienceLevels.map(level => (
              <option key={level} value={level}>{level} years</option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          <button
            onClick={clearFilters}
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-all duration-300"
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Skills Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">Skills</label>
        <div className="flex flex-wrap gap-2">
          {allSkills.slice(0, 12).map(skill => (
            <button
              key={skill}
              onClick={() => setSelectedSkills(prev => 
                prev.includes(skill) 
                  ? prev.filter(s => s !== skill)
                  : [...prev, skill]
              )}
              className={`px-3 py-1 rounded-full text-sm transition-all duration-300 transform hover:scale-105 ${
                selectedSkills.includes(skill)
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
              }`}
            >
              {skill}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// Component for tabs
function DeveloperTabs({ activeTab, setActiveTab, filteredCount }) {
  return (
    <div className="flex gap-4 mb-6 border-b border-[#3a4750]">
      <button
        onClick={() => setActiveTab('all')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'all'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        All Developers ({filteredCount})
      </button>
      <button
        onClick={() => setActiveTab('available')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'available'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Available for Work
      </button>
      <button
        onClick={() => setActiveTab('trending')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'trending'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Most Viewed
      </button>
      <button
        onClick={() => setActiveTab('senior')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'senior'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Senior Developers (5+ years)
      </button>
      <button
        onClick={() => setActiveTab('junior')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'junior'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        Junior Developers (1-3 years)
      </button>
    </div>
  );
}

// Component for results count
function ResultsCount({ searchQuery, selectedSkills, selectedLocation, minExperience, activeCount }) {
  return (
    <div className="mb-6 text-gray-400">
      {searchQuery || selectedSkills.length > 0 || selectedLocation || minExperience ? (
        <span>Found {activeCount} developers</span>
      ) : (
        <span>All Developers ({activeCount})</span>
      )}
    </div>
  );
}

// Component for empty state
function EmptyState({ onClearFilters }) {
  return (
    <div className="text-center py-16">
      <div className="w-20 h-20 bg-gradient-to-br from-[#3a4750] to-[#4a5568] rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
        </svg>
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">No developers available</h3>
      <p className="text-gray-400 mb-6 text-lg">Try adjusting filters or search terms</p>
      <button
        onClick={onClearFilters}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
      >
        Clear All Filters
      </button>
    </div>
  );
}

export { SearchFilters, DeveloperTabs, ResultsCount, EmptyState };
