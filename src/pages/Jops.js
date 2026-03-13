import React, { useState, useEffect } from 'react';
import { JobCard } from '../components/companies/PosteCompany/JobCard';
import { postsData, searchPosts, filterPostsBySkills, filterPostsByLocation, filterPostsByExperience } from '../components/companies/PosteCompany/postsData';
import JobFilters from '../components/companies/PosteCompany/JobFilters';

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
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#11a3a3] to-[#0d8383] bg-clip-text text-transparent">
            Job Opportunities
          </h1>
          <p className="text-gray-400 text-lg">Discover the best job opportunities at leading companies</p>
        </div>

        {/* New Filters Component */}
        <JobFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          selectedExperience={selectedExperience}
          setSelectedExperience={setSelectedExperience}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          allSkills={allSkills}
          allLocations={allLocations}
          experienceLevels={experienceLevels}
          filteredPosts={filteredPosts}
          clearFilters={clearFilters}
        />

        {/* Tabs */}
        <div className="flex gap-2 mb-8 border-b border-[#3a4750] overflow-x-auto">
          {[
            { id: 'all', label: 'All Jobs', count: filteredPosts.length },
            { id: 'trending', label: 'Most Popular', count: 5 },
            { id: 'recent', label: 'Latest', count: filteredPosts.length },
            { id: 'high-urgency', label: 'Urgent', count: filteredPosts.filter(p => p.urgency === 'high').length }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium transition-all whitespace-nowrap ${
                activeTab === tab.id
                  ? 'text-[#11a3a3] border-b-2 border-[#11a3a3] bg-[#11a3a3]/10'
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
                <><span className="text-[#11a3a3] font-bold mx-1">{getActivePosts().length}</span> jobs</>
              ) : (
                <>All Jobs <span className="text-[#11a3a3] font-bold mx-1">{getActivePosts().length}</span></>
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
              <h3 className="text-3xl font-bold text-white mb-4">No Jobs Available</h3>
              <p className="text-gray-400 text-lg mb-8">Try adjusting filters or search terms</p>
              <button
                onClick={clearFilters}
                className="px-8 py-4 bg-gradient-to-r from-[#11a3a3] to-[#0d8383] text-white rounded-xl hover:from-[#0d8383] hover:to-[#11a3a3] transition-all duration-300 transform hover:scale-105 font-medium text-lg shadow-lg shadow-[#11a3a3]/25"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jops;