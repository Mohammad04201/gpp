import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDeveloperInitials } from './helpers';
import './DeveloperStyles.css';

// Sub-component for displaying card header
function DeveloperHeader({ developer }) {
  const initials = getDeveloperInitials(developer.name);
  const statusClass = developer.available ? 'status-available' : 'status-busy';
  const statusText = developer.available ? 'Available for work' : 'Busy';
  
  return (
    <div className="developer-header">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="developer-avatar-small group-hover:scale-105 transition-transform duration-300">
            <span className="text-xl font-bold text-white">{initials}</span>
          </div>
          <div>
            <h3 className="font-bold  text-lg">{developer.name}</h3>
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
  );
}


// Main component - Developer card
function DevloperCard({ developer, onLike, onFavorite }) {
  const navigate = useNavigate();
  const [currentLikes, setCurrentLikes] = useState(developer.stats.likes);
  const [isLiked, setIsLiked] = useState(false);

  if (!developer) return null;

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!isLiked) {
      const newLikes = currentLikes + 1;
      setCurrentLikes(newLikes);
      setIsLiked(true);
      
      // Update developer data with new likes and favorite status
      const updatedDeveloper = {
        ...developer,
        stats: { ...developer.stats, likes: newLikes },
        isFavorite: true
      };
      
      // Save to localStorage
      saveFavoriteDeveloper(updatedDeveloper);
      
      // Notify parent components
      if (onLike) onLike(developer.id, newLikes);
      if (onFavorite) onFavorite(updatedDeveloper);
    }
  };

  const saveFavoriteDeveloper = (developerData) => {
    const savedData = localStorage.getItem('favoriteDevelopers');
    let favorites = savedData ? JSON.parse(savedData) : [];
    
    // Remove existing entry for this developer if it exists
    favorites = favorites.filter(dev => dev.id !== developerData.id);
    
    // Add the updated developer
    favorites.push(developerData);
    
    localStorage.setItem('favoriteDevelopers', JSON.stringify(favorites));
  };

  return (
    <div className="developer-card">
      <DeveloperHeader developer={developer} />
      
      <div className="p-6">
        {/* Action Buttons */}
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
              onClick={handleLike}
              className={`btn-primary ${isLiked ? 'text-red-500' : ''}`}
            >
              <svg 
                className="w-4 h-4" 
                fill={isLiked ? "currentColor" : "none"} 
                stroke={isLiked ? "none" : "currentColor"} 
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

// Developers list component
function DevelopersList({ developers, onLike, onFavorite }) {
  if (!developers?.length) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl text-secondary">No developers to display</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {developers.map((developer) => (
        <DevloperCard 
          key={developer.id} 
          developer={developer} 
          onLike={onLike}
          onFavorite={onFavorite}
        />
      ))}
    </div>
  );
}

export default DevloperCard;
export { DevelopersList };
