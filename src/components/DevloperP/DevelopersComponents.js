import React from 'react';
import { developersData } from './developersData';

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
  // حساب القيم داخل المكون
  const allSkills = [...new Set(developersData.flatMap(dev => dev.skills.map(skill => skill.name)))];
  const allLocations = [...new Set(developersData.map(dev => dev.location))];
  const experienceLevels = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6 mb-8">
      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="ابحث عن مطور، مهارة، أو موقع..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
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
          <label className="block text-sm font-medium text-gray-300 mb-2">الموقع</label>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="w-full px-3 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">جميع المواقع</option>
            {allLocations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Experience Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">الخبرة (سنوات)</label>
          <select
            value={minExperience}
            onChange={(e) => setMinExperience(e.target.value)}
            className="w-full px-3 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">جميع المستويات</option>
            {experienceLevels.map(level => (
              <option key={level} value={level}>{level}+ سنوات</option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        <div className="flex items-end">
          <button
            onClick={clearFilters}
            className="w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            مسح الفلاتر
          </button>
        </div>
      </div>

      {/* Skills Filter */}
      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">المهارات</label>
        <div className="flex flex-wrap gap-2">
          {allSkills.slice(0, 12).map(skill => (
            <button
              key={skill}
              onClick={() => setSelectedSkills(prev => 
                prev.includes(skill) 
                  ? prev.filter(s => s !== skill)
                  : [...prev, skill]
              )}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedSkills.includes(skill)
                  ? 'bg-blue-500 text-white'
                  : 'bg-[#3a4750] text-gray-300 hover:bg-[#4a5568]'
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
        جميع المطورين ({filteredCount})
      </button>
      <button
        onClick={() => setActiveTab('available')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'available'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        متاحون للعمل
      </button>
      <button
        onClick={() => setActiveTab('trending')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'trending'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        الأكثر مشاهدة
      </button>
      <button
        onClick={() => setActiveTab('senior')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'senior'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        كبار المطورين (5+ سنوات)
      </button>
      <button
        onClick={() => setActiveTab('junior')}
        className={`px-4 py-2 font-medium transition-colors ${
          activeTab === 'junior'
            ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
            : 'text-gray-400 hover:text-white'
        }`}
      >
        مطورين شباب (1-3 سنوات)
      </button>
    </div>
  );
}

// Component for results count
function ResultsCount({ searchQuery, selectedSkills, selectedLocation, minExperience, activeCount }) {
  return (
    <div className="mb-6 text-gray-400">
      {searchQuery || selectedSkills.length > 0 || selectedLocation || minExperience ? (
        <span>تم العثور على {activeCount} مطور</span>
      ) : (
        <span>جميع المطورين ({activeCount})</span>
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
      <h3 className="text-2xl font-bold text-white mb-3">لا يوجد مطورون متاحون</h3>
      <p className="text-gray-400 mb-6 text-lg">جرب تعديل الفلاتر أو كلمات البحث</p>
      <button
        onClick={onClearFilters}
        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
      >
        مسح جميع الفلاتر
      </button>
    </div>
  );
}

export { SearchFilters, DeveloperTabs, ResultsCount, EmptyState };
