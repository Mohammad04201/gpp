import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DevelopersList } from '../components/DevloperP/DevloperCard';
import { 
  developersData, 
  searchDevelopers, 
  filterDevelopersBySkills, 
  filterDevelopersByLocation, 
  filterDevelopersByExperience,
  getAvailableDevelopers,
  getTrendingDevelopers
} from '../components/DevloperP/developersData';
import { SearchFilters, DeveloperTabs, ResultsCount, EmptyState } from '../components/DevloperP/filters/filters';
import { useThemeContext } from '../components/contexts/ThemeContext';

function DevelopersPage() {
  const { isDarkMode } = useThemeContext();
  const [developers, setDevelopers] = useState(developersData);
  const [filteredDevelopers, setFilteredDevelopers] = useState(developersData);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minExperience, setMinExperience] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Filter developers based on selected criteria
  useEffect(() => {
    let result = developersData;

    if (searchQuery) {
      result = searchDevelopers(searchQuery);
    }

    if (selectedSkills.length > 0) {
      result = filterDevelopersBySkills(selectedSkills).filter(dev => 
        result.some(r => r.id === dev.id)
      );
    }

    if (selectedLocation) {
      result = filterDevelopersByLocation(selectedLocation).filter(dev => 
        result.some(r => r.id === dev.id)
      );
    }

    if (minExperience) {
      result = filterDevelopersByExperience(parseInt(minExperience)).filter(dev => 
        result.some(r => r.id === dev.id)
      );
    }

    setFilteredDevelopers(result);
  }, [searchQuery, selectedSkills, selectedLocation, minExperience]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedSkills([]);
    setSelectedLocation('');
    setMinExperience('');
  };

  const handleViewProfile = (developerId) => {
    window.location.href = `/developer/profile/${developerId}`;
  };

  const getActiveDevelopers = () => {
    switch (activeTab) {
      case 'available':
        return getAvailableDevelopers().filter(dev => 
          filteredDevelopers.some(r => r.id === dev.id)
        );
      case 'trending':
        return getTrendingDevelopers().filter(dev => 
          filteredDevelopers.some(r => r.id === dev.id)
        );
      case 'senior':
        return filteredDevelopers.filter(dev => dev.experience >= 5);
      case 'junior':
        return filteredDevelopers.filter(dev => dev.experience <= 3);
      default:
        return filteredDevelopers;
    }
  };

  return (
    <div className={`min-vh-100 transition-all duration-300 ${
      isDarkMode ? 'bg-[#20232A] text-white' : 'bg-[#f9f9f9] text-gray-800'
    }`}>      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2 transition-all duration-300 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>Talented Developers</h1>
          <p className={`transition-all duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Discover best tech talent in the region</p>
        </div>

        {/* Search and Filters */}
        <SearchFilters
          isDarkMode={isDarkMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedSkills={selectedSkills}
          setSelectedSkills={setSelectedSkills}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          minExperience={minExperience}
          setMinExperience={setMinExperience}
          clearFilters={clearFilters}
        />

        {/* Tabs */}
        <DeveloperTabs
          isDarkMode={isDarkMode}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          filteredCount={getActiveDevelopers().length}
        />

        {/* Results Count */}
        <ResultsCount
          isDarkMode={isDarkMode}
          searchQuery={searchQuery}
          selectedSkills={selectedSkills}
          selectedLocation={selectedLocation}
          minExperience={minExperience}
          activeCount={getActiveDevelopers().length}
        />

        {/* Developers List */}
        <div className="space-y-4">
          {getActiveDevelopers().length > 0 ? (
            <DevelopersList 
              developers={getActiveDevelopers()} 
              onViewProfile={handleViewProfile} 
              isDarkMode={isDarkMode}
            />
          ) : (
            <EmptyState 
              isDarkMode={isDarkMode}
              onClearFilters={clearFilters} 
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default DevelopersPage;
