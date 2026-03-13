import React from 'react';

const ResumeLevel = ({ userData }) => {
  // Calculate statistics
  const skillLevelPercent = Math.min((userData.skills?.length || 0) * 10, 100);
  const projectLevelPercent = Math.min((userData.projects?.length || 0) * 20, 100);
  const experienceLevelPercent = Math.min((userData.experience || 0) * 10, 100);

  return (
    <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
      <h3 className="text-lg font-semibold mb-4 text-white bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">Resume Level</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 text-sm">Technical Skills</span>
            <span className="text-gray-300 font-bold text-sm">{skillLevelPercent}%</span>
          </div>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-green-400 transition-all duration-500 ease-out"
              style={{ width: `${skillLevelPercent}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 text-sm">Projects</span>
            <span className="text-gray-300 font-bold text-sm">{projectLevelPercent}%</span>
          </div>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-blue-400 transition-all duration-500 ease-out"
              style={{ width: `${projectLevelPercent}%` }}
            ></div>
          </div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-300 text-sm">Experience</span>
            <span className="text-gray-300 font-bold text-sm">{experienceLevelPercent}%</span>
          </div>
          <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 transition-all duration-500 ease-out"
              style={{ width: `${experienceLevelPercent}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeLevel;
