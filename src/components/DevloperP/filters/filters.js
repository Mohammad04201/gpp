import React from 'react';
import { developersData } from '../developersData';
import { useThemeContext } from '../../contexts/ThemeContext';

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
  const { isDarkMode } = useThemeContext();
  // Calculate values inside component
  const allSkills = [...new Set(developersData.flatMap(dev => dev.skills.map(skill => skill.name)))];
  const allLocations = [...new Set(developersData.map(dev => dev.location))];
  const experienceLevels = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className={`rounded-xl p-6 mb-8 border transition-all duration-300 ${
      isDarkMode 
        ? 'bg-gray-800/50 border-gray-700 hover:border-teal-500/50' 
        : 'bg-gradient-to-br from-white to-gray-50 border-gray-200 shadow-xl hover:shadow-2xl hover:border-teal-400'
    }`}>
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for a developer, skill, or location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg focus:outline-none transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-900/50 border border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                : 'bg-white border-gray-300 text-gray-800 placeholder-gray-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm'
            }`}
          />
          <svg className={`absolute right-3 top-3.5 w-5 h-5 transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
          </svg>
        </div>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {/* Location Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>Location</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className={`w-full px-3 py-2 rounded-lg focus:outline-none transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-900/50 border border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm'
            }`}
          >
            <option value="">All Locations</option>
            {allLocations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div>
          <label className={`block text-sm font-medium mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>Experience (years)</label>
          <select
            value={minExperience}
            onChange={(e) => setMinExperience(e.target.value)}
            className={`w-full px-3 py-2 rounded-lg focus:outline-none transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-900/50 border border-gray-600 text-white focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20' 
                : 'bg-white border-gray-300 text-gray-800 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm'
            }`}
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
            className={`w-full px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium ${
              isDarkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 hover:from-gray-200 hover:to-gray-300 shadow-md hover:shadow-lg'
              }`}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Skills Filter */}
      <div>
        <label className={`block text-sm font-medium mb-2 transition-all duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>Skills</label>
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
                  : isDarkMode 
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600 border border-gray-600'
                    : 'bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 hover:from-gray-100 hover:to-gray-200 border border-gray-300 shadow-sm hover:shadow-md'
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
  const { isDarkMode } = useThemeContext();
  return (
    <div className={`flex gap-4 mb-6 border-b transition-all duration-300 ${
      isDarkMode ? 'border-[#3a4750]' : 'border-gray-200'
    }`}>
      <button
        onClick={() => setActiveTab('all')}
        className={`px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 rounded-t-lg ${
          activeTab === 'all'
            ? isDarkMode 
              ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]' 
              : 'text-blue-600 border-b-2 border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
            : isDarkMode 
              ? 'text-gray-400 hover:text-white' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
        }`}
      >
        All Developers ({filteredCount})
      </button>
      <button
        onClick={() => setActiveTab('available')}
        className={`px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 rounded-t-lg ${
          activeTab === 'available'
            ? isDarkMode 
              ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]' 
              : 'text-blue-600 border-b-2 border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
            : isDarkMode 
              ? 'text-gray-400 hover:text-white' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
        }`}
      >
        Available for Work
      </button>
      <button
        onClick={() => setActiveTab('trending')}
        className={`px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 rounded-t-lg ${
          activeTab === 'trending'
            ? isDarkMode 
              ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]' 
              : 'text-blue-600 border-b-2 border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
            : isDarkMode 
              ? 'text-gray-400 hover:text-white' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
        }`}
      >
        Most Viewed
      </button>
      <button
        onClick={() => setActiveTab('senior')}
        className={`px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 rounded-t-lg ${
          activeTab === 'senior'
            ? isDarkMode 
              ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]' 
              : 'text-blue-600 border-b-2 border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
            : isDarkMode 
              ? 'text-gray-400 hover:text-white' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
        }`}
      >
        Senior Developers (5+ years)
      </button>
      <button
        onClick={() => setActiveTab('junior')}
        className={`px-4 py-2 font-medium transition-all duration-300 transform hover:scale-105 rounded-t-lg ${
          activeTab === 'junior'
            ? isDarkMode 
              ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]' 
              : 'text-blue-600 border-b-2 border-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 shadow-md'
            : isDarkMode 
              ? 'text-gray-400 hover:text-white' 
              : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
        }`}
      >
        Junior Developers (1-3 years)
      </button>
    </div>
  );
}

// Component for results count
function ResultsCount({ searchQuery, selectedSkills, selectedLocation, minExperience, activeCount }) {
  const { isDarkMode } = useThemeContext();
  return (
    <div className={`mb-6 transition-all duration-300 ${
      isDarkMode ? 'text-gray-400' : 'text-gray-600'
    }`}>
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
  const { isDarkMode } = useThemeContext();
  return (
    <div className="text-center py-16">
      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-[#3a4750] to-[#4a5568]' 
          : 'bg-gradient-to-br from-blue-100 via-blue-200 to-cyan-100 shadow-xl'
      }`}>
        <svg className={`w-10 h-10 transition-all duration-300 ${
          isDarkMode ? 'text-gray-400' : 'text-gray-500'
        }`} fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
        </svg>
      </div>
      <h3 className={`text-2xl font-bold mb-3 transition-all duration-300 ${
        isDarkMode ? 'text-white' : 'text-gray-800'
      }`}>No developers available</h3>
      <p className={`mb-6 text-lg transition-all duration-300 ${
        isDarkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>Try adjusting filters or search terms</p>
      <button
        onClick={onClearFilters}
        className={`px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium ${
          isDarkMode 
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700' 
            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
        }`}
      >
        Clear All Filters
      </button>
    </div>
  );
}

export { SearchFilters, DeveloperTabs, ResultsCount, EmptyState };
