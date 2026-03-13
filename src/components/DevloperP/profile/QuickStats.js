import React from 'react';

const QuickStats = ({ userData }) => {
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl">
      <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 p-6 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white mb-2">Quick Stats</h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center hover:border-teal-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-teal-400">{userData.stats?.views || 0}</div>
            <div className="text-xs text-gray-400 mt-1">Views</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center hover:border-green-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-green-400">{userData.stats?.likes || 0}</div>
            <div className="text-xs text-gray-400 mt-1">Likes</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center hover:border-purple-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-purple-400">{userData.stats?.connections || 0}</div>
            <div className="text-xs text-gray-400 mt-1">Connections</div>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center hover:border-cyan-500/50 transition-all duration-300">
            <div className="text-2xl font-bold text-cyan-400">{userData.projects?.length || 0}</div>
            <div className="text-xs text-gray-400 mt-1">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
