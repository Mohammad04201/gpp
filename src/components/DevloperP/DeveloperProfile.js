import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDeveloperById } from './developersData';
import { getDeveloperInitials } from './helpers';
import { calculateCompletion } from './user/userDataManager';
import EditProfileOverlay from './user/EditProfileOverlay';
import { loadUserData, mergeUserData } from './user/userDataManager';
import './DeveloperStyles.css';

// Import profile components
import ProfileHeader from './profile/ProfileHeader';
import QuickStats from './profile/QuickStats';
import ResumeLevel from './profile/ResumeLevel';
import SkillsTab from './profile/SkillsTab';
import ProjectsTab from './profile/ProjectsTab';
import EditButton from './profile/EditButton';

function DeveloperProfile({ hideEditButton = false }) {
  const { id } = useParams();
  const developerId = id || '1';
  const baseDeveloper = getDeveloperById(developerId);
  
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Load data when page starts
  useEffect(() => {
    if (baseDeveloper) {
      const merged = mergeUserData(developerId, baseDeveloper);
      setUserData(merged);
      setIsLoaded(true);
      // Trigger entrance animation
      setTimeout(() => setIsVisible(true), 100);
    }
  }, [developerId, baseDeveloper]);

  // Update data after editing
  const handleSave = (newData) => {
    setUserData(newData);
    setIsEditing(false);
  };

  if (!isLoaded || !userData) {
    return (
      <div className="developer-container">
        <div className="developer-content">
          <div className="text-center">
            <div className="loading-spinner"></div>
            <p className="mt-4">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!baseDeveloper) {
    return (
      <div className="developer-container">
        <div className="developer-content">
          <div className="text-center">
            <h1 className="developer-title">Developer not found</h1>
            <Link to="/developers" className="btn-primary mt-4">
              Back to Developers
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const initials = getDeveloperInitials(userData.name);
  const profileCompletion = calculateCompletion(userData);

  return (
    <div className="developer-container">
      {/* Floating edit button */}
      {!hideEditButton && <EditButton setIsEditing={setIsEditing} />}

      {/* Edit modal overlay */}
      {isEditing && (
        <EditProfileOverlay 
          userData={userData} 
          onSave={handleSave} 
          onCancel={() => setIsEditing(false)} 
        />
      )}

      <div className="developer-content">
        {/* Profile Header with Completion */}
        <ProfileHeader userData={userData} />

        {/* Skills Tab */}
        <div className="mb-8">
          <SkillsTab userData={userData} />
        </div>

        {/* Projects Tab */}
        <div className="mb-8">
          <ProjectsTab userData={userData} />
        </div>

        {/* Quick Stats and Resume Level Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Quick Stats */}
          <QuickStats userData={userData} />
          
          {/* Resume Level */}
          <ResumeLevel userData={userData} />
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/developers"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900 text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg border border-gray-600"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Developers
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeveloperProfile;