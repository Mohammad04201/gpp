import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays <= 7) return `${diffDays} days ago`;
  if (diffDays <= 30) return `${Math.floor(diffDays / 7)} weeks ago`;
  return `${Math.floor(diffDays / 30)} months ago`;
};

const getUrgencyColor = (urgency) => {
  switch (urgency) {
    case 'high':
      return 'bg-red-500 text-white';
    case 'medium':
      return 'bg-teal-500 text-white';
    case 'low':
      return 'bg-green-500 text-white';
    default:
      return 'bg-gray-500 text-white'
  }
};

const getUrgencyText = (urgency) => {
  switch (urgency) {
    case 'high':
      return 'Urgent';
    case 'medium':
      return 'Normal';
    case 'low':
      return 'Normal';
    default:
      return 'Normal';
  }
};

const JobCardHeader = ({ post }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`p-6 border-b transition-all duration-300 ${
      isDarkMode ? 'border-gray-700/50' : 'border-gray-200'
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-teal-500 to-cyan-500' 
              : 'bg-gradient-to-br from-[#11a3a3] to-[#0d8b8b] shadow-lg'
          }`}>
            <span className="text-lg font-bold text-white">{post.companyLogo}</span>
          </div>
          <div>
            <a 
              href={`/company/profile/${post.companyId}`}
              className={`font-semibold transition-colors ${
                isDarkMode 
                  ? 'text-white hover:text-teal-400' 
                  : 'text-gray-800 hover:text-[#11a3a3]'
              }`}
            >
              {post.companyName}
            </a>
            <div className={`flex items-center gap-2 text-sm mt-1 transition-all duration-300 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <span>{post.companyLocation}</span>
              <span>•</span>
              <span>{post.companySize}</span>
              <span>•</span>
              <span>{post.companyIndustry}</span>
            </div>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${getUrgencyColor(post.urgency)}`}>
          {getUrgencyText(post.urgency)}
        </span>
      </div>
    </div>
  );
};

export default JobCardHeader;
