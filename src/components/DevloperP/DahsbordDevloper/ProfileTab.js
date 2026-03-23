import React from 'react';
import DeveloperProfile from '../DeveloperProfile';
import { useThemeContext } from '../../contexts/ThemeContext';

function ProfileTab({ currentDeveloper }) {
  const { isDarkMode } = useThemeContext();
  // Create a mock params object to pass to DeveloperProfile
  const mockParams = { id: currentDeveloper?.id?.toString() || '1' };
  
  return (
    <div className={`dashboard-profile transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`}>
      <DeveloperProfile hideEditButton={true} />
    </div>
  );
}

export default ProfileTab;
