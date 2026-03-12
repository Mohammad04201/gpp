import React, { useState, useEffect } from 'react';
import { JobCard } from '../components/companies/PosteCompany/JobCard';
import { postsData, searchPosts, filterPostsBySkills, filterPostsByLocation, filterPostsByExperience } from '../components/companies/PosteCompany/postsData';

function Jops() {
  const [posts, setPosts] = useState(postsData);
  const [filteredPosts, setFilteredPosts] = useState(postsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Get all unique skills from posts
  const allSkills = [...new Set(postsData.flatMap(post => post.skills))];
  
  // Get all unique locations
  const allLocations = [...new Set(postsData.map(post => post.location))];
  
  // Get all experience levels
  const experienceLevels = [...new Set(postsData.map(post => post.experienceLevel))];

  // Filter posts based on selected criteria
  useEffect(() => {
    let result = postsData;

    if (searchQuery) {
      result = searchPosts(searchQuery);
    }

    if (selectedSkills.length > 0) {
      result = filterPostsBySkills(selectedSkills).filter(post => 
        result.some(r => r.id === post.id)
      );
    }

    if (selectedLocation) {
      result = filterPostsByLocation(selectedLocation).filter(post => 
        result.some(r => r.id === post.id)
      );
    }

    if (selectedExperience) {
      result = filterPostsByExperience(selectedExperience).filter(post => 
        result.some(r => r.id === post.id)
      );
    }

    setFilteredPosts(result);
  }, [searchQuery, selectedSkills, selectedLocation, selectedExperience]);

  const handleSkillToggle = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedSkills([]);
    setSelectedLocation('');
    setSelectedExperience('');
  };

  const getActivePosts = () => {
    switch (activeTab) {
      case 'trending':
        return postsData
          .sort((a, b) => (b.likes + b.applicants) - (a.likes + a.applicants))
          .slice(0, 5);
      case 'recent':
        return [...filteredPosts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
      case 'high-urgency':
        return filteredPosts.filter(post => post.urgency === 'high');
      default:
        return filteredPosts;
    }
  };

  return (
    <div className="min-vh-100 bg-[#20232A] text-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            فرص العمل
          </h1>
          <p className="text-gray-400 text-lg">اكتشف أفضل الفرص الوظيفية في الشركات الرائدة</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-[#282C34] rounded-xl p-8 mb-8 border border-[#3a4750] shadow-xl">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="ابحث عن وظيفة، مهارة، أو شركة..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-[#1a1d23] border border-[#3a4750] rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-all text-lg"
              />
              <svg className="absolute right-4 top-4.5 w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
              </svg>
            </div>
          </div>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">الموقع</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">جميع المواقع</option>
                {allLocations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>

            {/* Experience Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">مستوى الخبرة</label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">جميع المستويات</option>
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
                ))}
              </select>
            </div>

            {/* Urgency Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">الأولوية</label>
              <select
                value={activeTab === 'high-urgency' ? 'high' : ''}
                onChange={(e) => setActiveTab(e.target.value === 'high' ? 'high-urgency' : 'all')}
                className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">جميع الأولويات</option>
                <option value="high">عاجل</option>
                <option value="medium">متوسط</option>
                <option value="low">عادي</option>
              </select>
            </div>

            {/* Clear Filters */}
            <div className="flex items-end">
              <button
                onClick={clearFilters}
                className="w-full px-4 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
              >
                مسح الفلاتر
              </button>
            </div>
          </div>

          {/* Skills Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">المهارات</label>
            <div className="flex flex-wrap gap-2">
              {allSkills.slice(0, 15).map(skill => (
                <button
                  key={skill}
                  onClick={() => handleSkillToggle(skill)}
                  className={`px-3 py-1.5 rounded-full text-sm transition-all transform hover:scale-105 ${
                    selectedSkills.includes(skill)
                      ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-[#3a4750] text-gray-300 hover:bg-[#4a5568]'
                  }`}
                >
                  {skill}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[#3a4750] overflow-x-auto">
          {[
            { id: 'all', label: 'جميع الوظائف', count: filteredPosts.length },
            { id: 'trending', label: 'الأكثر تفاعلاً', count: 5 },
            { id: 'recent', label: 'الأحدث', count: filteredPosts.length },
            { id: 'high-urgency', label: 'عاجل', count: filteredPosts.filter(p => p.urgency === 'high').length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-blue-400 border-b-2 border-blue-400 bg-blue-500/10'
                  : 'text-gray-400 hover:text-white hover:bg-[#3a4750]/30'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#282C34] rounded-lg border border-[#3a4750]">
            <span className="text-gray-400">
              {searchQuery || selectedSkills.length > 0 || selectedLocation || selectedExperience ? (
                <>تم العثور على <span className="text-blue-400 font-bold mx-1">{getActivePosts().length}</span> وظيفة</>
              ) : (
                <>جميع الوظائف <span className="text-blue-400 font-bold mx-1">{getActivePosts().length}</span></>
              )}
            </span>
          </div>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {getActivePosts().length > 0 ? (
            getActivePosts().map((post) => (
              <JobCard key={post.id} post={post} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <div className="w-24 h-24 bg-gradient-to-br from-[#3a4750] to-[#4a5568] rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">لا توجد وظائف متاحة</h3>
              <p className="text-gray-400 text-lg mb-8">جرب تعديل الفلاتر أو كلمات البحث</p>
              <button
                onClick={clearFilters}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg"
              >
                مسح جميع الفلاتر
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jops;