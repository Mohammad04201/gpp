import React, { useState, useEffect } from 'react';
import { PostsList, TrendingPosts } from '../components/PosteCompany/CardPost';
import { postsData, searchPosts, filterPostsBySkills, filterPostsByLocation, filterPostsByExperience } from '../components/PosteCompany/postsData';

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
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">فرص العمل</h1>
          <p className="text-gray-400">اكتشف أفضل الفرص الوظيفية في الشركات الرائدة</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-[#282C34] rounded-lg p-6 mb-8 border border-[#3a4750]">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن وظيفة، مهارة، أو شركة..."
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
              <label className="block text-sm font-medium text-gray-300 mb-2">مستوى الخبرة</label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full px-3 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="">جميع المستويات</option>
                {experienceLevels.map(level => (
                  <option key={level} value={level}>{level}</option>
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
                  onClick={() => handleSkillToggle(skill)}
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

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-[#3a4750]">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'all'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            جميع الوظائف ({filteredPosts.length})
          </button>
          <button
            onClick={() => setActiveTab('trending')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'trending'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            الأكثر تفاعلاً
          </button>
          <button
            onClick={() => setActiveTab('recent')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'recent'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            الأحدث
          </button>
          <button
            onClick={() => setActiveTab('high-urgency')}
            className={`px-4 py-2 font-medium transition-colors ${
              activeTab === 'high-urgency'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            عاجل
          </button>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-400">
          {searchQuery || selectedSkills.length > 0 || selectedLocation || selectedExperience ? (
            <span>تم العثور على {getActivePosts().length} وظيفة</span>
          ) : (
            <span>جميع الوظائف ({getActivePosts().length})</span>
          )}
        </div>

        {/* Posts List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {getActivePosts().length > 0 ? (
            getActivePosts().map((post) => (
              <div key={post.id} className="bg-[#282C34] rounded-xl border border-[#3a4750] hover:border-blue-500 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 group">
                {/* Company Header */}
                <div className="p-6 border-b border-[#3a4750]">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#3a4750] to-[#4a5568] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-xl font-bold text-white">{post.companyLogo}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{post.companyName}</h3>
                        <p className="text-sm text-gray-400 flex items-center gap-1">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                          </svg>
                          {post.companyLocation}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${post.urgency === 'high' ? 'bg-red-500 text-white' : post.urgency === 'medium' ? 'bg-yellow-500 text-white' : 'bg-green-500 text-white'}`}>
                        {post.urgency === 'high' ? 'عاجل' : post.urgency === 'medium' ? 'متوسط' : 'عادي'}
                      </span>
                      <button className="text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  {/* Post Meta */}
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      {new Date(post.publishedAt).toLocaleDateString('ar-SA')}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                      </svg>
                      {post.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
                      </svg>
                      {post.applicants}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h2>
                  <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">{post.description}</p>
                  
                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.skills.slice(0, 4).map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gradient-to-r from-[#3a4750] to-[#4a5568] text-gray-300 rounded-lg text-xs font-medium hover:from-blue-500 hover:to-blue-600 transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {post.skills.length > 4 && (
                      <span className="px-3 py-1 bg-gradient-to-r from-[#3a4750] to-[#4a5568] text-gray-400 rounded-lg text-xs font-medium">
                        +{post.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Job Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 p-2 bg-[#1a1d23] rounded-lg">
                      <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-300 font-medium">{post.experienceLevel}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#1a1d23] rounded-lg">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-300 font-medium">{post.location}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#1a1d23] rounded-lg">
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-300 font-medium">{post.salary}</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-[#1a1d23] rounded-lg">
                      <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-300 font-medium">{post.employmentType}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-[#3a4750]">
                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-medium">{post.likes}</span>
                      </button>
                      
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-sm font-medium">{post.applicants}</span>
                      </button>
                    </div>
                    
                    <button className="p-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3a4750] to-[#4a5568] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">لا توجد وظائف متاحة</h3>
              <p className="text-gray-400 mb-6 text-lg">جرب تعديل الفلاتر أو كلمات البحث</p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
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