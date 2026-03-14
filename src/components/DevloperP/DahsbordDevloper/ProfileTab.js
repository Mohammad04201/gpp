import React from 'react';
import DeveloperProfile from '../DeveloperProfile';

function ProfileTab({ currentDeveloper }) {
  // Create a mock params object to pass to DeveloperProfile
  const mockParams = { id: currentDeveloper?.id?.toString() || '1' };
  
  return (
    <div className="dashboard-profile">
      <DeveloperProfile hideEditButton={true} />
    </div>
  );
}

export default ProfileTab;
