import React, { useState } from 'react';
import { developersData } from '../developersData';

function FilterSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minExperience, setMinExperience] = useState('');

  // Calculate values inside component
  const allSkills = [...new Set(developersData.flatMap(dev => dev.skills.map(skill => skill.name)))];
  const allLocations = [...new Set(developersData.map(dev => dev.location))];
  const experienceLevels = [1, 2, 3, 4, 5, 6, 7];

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedSkills([]);
    setSelectedLocation('');
    setMinExperience('');
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Developer Filters
          </h1>
          <p className="text-gray-400 text-lg">
            Find the perfect developer by filtering through our database
          </p>
        </div>

        {/* Main Filter Card */}
        <div className="bg-gray-800/50 rounded-2xl border border-gray-700 p-8 backdrop-blur-lg shadow-2xl">
          {/* Search Bar */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-3">Search</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for a developer, skill, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 text-lg"
              />
              <svg className="absolute right-4 top-4 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          {/* Filters Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Location Filter */}
            <div>
              <label className="block text-lg font-semibold text-white mb-3">Location</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 text-lg"
              >
                <option value="">All Locations</option>
                {allLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div>
              <label className="block text-lg font-semibold text-white mb-3">Experience Level</label>
              <select
                value={minExperience}
                onChange={(e) => setMinExperience(e.target.value)}
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 text-lg"
              >
                <option value="">All Levels</option>
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}+ years</option>
                ))}
              </select>
            </div>
          </div>

          {/* Skills Filter */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-white mb-3">Skills</label>
            <div className="bg-gray-900/30 rounded-xl p-6 border border-gray-700">
              <div className="flex flex-wrap gap-3">
                {allSkills.slice(0, 20).map(skill => (
                  <button
                    key={skill}
                    onClick={() => setSelectedSkills(prev => 
                      prev.includes(skill) 
                        ? prev.filter(s => s !== skill)
                        : [...prev, skill]
                    )}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
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

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button
              onClick={clearFilters}
              className="px-8 py-4 bg-gray-700 text-white rounded-xl hover:bg-gray-600 transition-all duration-300 font-semibold text-lg"
            >
              Clear All Filters
            </button>
            <button
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-xl hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 font-semibold text-lg shadow-lg shadow-teal-500/25"
            >
              Apply Filters
            </button>
          </div>

          {/* Active Filters Display */}
          {(searchQuery || selectedSkills.length > 0 || selectedLocation || minExperience) && (
            <div className="mt-8 p-6 bg-gray-900/30 rounded-xl border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Active Filters:</h3>
              <div className="space-y-2">
                {searchQuery && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Search:</span>
                    <span className="text-teal-400 font-medium">{searchQuery}</span>
                  </div>
                )}
                {selectedLocation && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Location:</span>
                    <span className="text-teal-400 font-medium">{selectedLocation}</span>
                  </div>
                )}
                {minExperience && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Experience:</span>
                    <span className="text-teal-400 font-medium">{minExperience}+ years</span>
                  </div>
                )}
                {selectedSkills.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-gray-400">Skills:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedSkills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-teal-500/20 text-teal-400 rounded-full text-sm border border-teal-500/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-teal-400 mb-2">{developersData.length}</div>
            <div className="text-gray-400">Total Developers</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">{allSkills.length}</div>
            <div className="text-gray-400">Available Skills</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">{allLocations.length}</div>
            <div className="text-gray-400">Locations</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterSection;
