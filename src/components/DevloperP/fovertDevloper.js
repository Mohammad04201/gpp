import React, { useState, useEffect } from 'react';
import { developersData } from './developersData';
import DevloperCard, { DevelopersList } from './DevloperCard';
import { Link } from 'react-router-dom';
import { getDeveloperInitials } from './helpers';
import './DeveloperStyles.css';

// Custom card for favorites page with unlike functionality
function FavoriteCard({ developer, onUnlike }) {
  const [currentLikes, setCurrentLikes] = useState(developer.stats.likes);

  const handleUnlike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const newLikes = Math.max(0, currentLikes - 1);
    setCurrentLikes(newLikes);
    
    if (onUnlike) {
      onUnlike(developer.id, newLikes);
    }
  };

  const initials = getDeveloperInitials(developer.name);

  return (
    <div className="developer-card">
      <div className="developer-header">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="developer-avatar-small group-hover:scale-105 transition-transform duration-300">
              <span className="text-xl font-bold text-white">{initials}</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-white">{developer.name}</h3>
              <p className="text-sm text-secondary">{developer.title}</p>
              <p className="text-sm text-secondary flex items-center gap-1">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                {developer.location}
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-secondary">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            {developer.experience} years experience
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            {developer.projects.length} projects
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="pt-4">
          <div className="flex items-center justify-between gap-3 mb-3">
            <button className="btn-primary">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="text-sm font-medium">Contact</span>
            </button>
            
            <button 
              onClick={handleUnlike}
              className="btn-primary text-red-500"
            >
              <svg 
                className="w-4 h-4" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium">{currentLikes}</span>
            </button>
          </div>
          
          <Link 
            to={`/developer/profile/${developer.id}`}
            className="btn-primary w-full text-center"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

function FovertDevloper() {
  const [developers, setDevelopers] = useState(developersData);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem('favoriteDevelopers');
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setDevelopers(parsedData);
    }
  }, []);

  const filteredDevelopers = developers.filter(dev =>
    dev.isFavorite && dev.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleUnlike = (developerId, newLikes) => {
    const updatedDevelopers = developers.map(dev => 
      dev.id === developerId 
        ? { ...dev, isFavorite: false, stats: { ...dev.stats, likes: newLikes } }
        : dev
    );
    
    // Update localStorage
    localStorage.setItem('favoriteDevelopers', JSON.stringify(updatedDevelopers));
    
    // Update state to remove from favorites
    setDevelopers(updatedDevelopers);
  };

  // Custom list component for favorites
  function FavoritesList({ developers, onUnlike }) {
    if (!developers?.length) {
      return (
        <div className="text-center py-16">
          <h3 className="text-xl text-secondary">No favorite developers to display</h3>
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {developers.map((developer) => (
          <FavoriteCard 
            key={developer.id} 
            developer={developer} 
            onUnlike={onUnlike}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="developer-container bg-gray-900">
      <div className="developer-content">
        <div className="mb-8">
          <h1 className="developer-title text-white">Favorites</h1>
          <p className="developer-subtitle text-teal-400">Your favorite developers</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search favorite developers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20"
            style={{ placeholderColor: '#9ca3af' }}
          />
        </div>

        {/* Developers Grid */}
        <FavoritesList developers={filteredDevelopers} onUnlike={handleUnlike} />
      </div>
    </div>
  );
}

export default FovertDevloper;
