import React from 'react';

const ProfileTabs = ({ activeTab, setActiveTab, userData }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl overflow-hidden">
      <div className="flex border-b border-gray-700 bg-gray-800/50">
        <button
          onClick={() => setActiveTab('overview')}
          className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 relative ${
            activeTab === 'overview'
              ? 'text-teal-400 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border-b-2 border-teal-400'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
          }`}
        >
          Overview
          {activeTab === 'overview' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 relative ${
            activeTab === 'skills'
              ? 'text-teal-400 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border-b-2 border-teal-400'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
          }`}
        >
          Skills ({userData.skills?.length || 0})
          {activeTab === 'skills' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 relative ${
            activeTab === 'projects'
              ? 'text-teal-400 bg-gradient-to-r from-teal-600/20 to-cyan-600/20 border-b-2 border-teal-400'
              : 'text-gray-400 hover:text-white hover:bg-gray-700/50'
          }`}
        >
          Projects ({userData.projects?.length || 0})
          {activeTab === 'projects' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 to-cyan-400"></div>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProfileTabs;
