import React, { useState } from 'react';
import { postsData } from './postsData';

function CardPost({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'اليوم';
    if (diffDays === 1) return 'أمس';
    if (diffDays <= 7) return `منذ ${diffDays} أيام`;
    if (diffDays <= 30) return `منذ ${Math.floor(diffDays / 7)} أسابيع`;
    return `منذ ${Math.floor(diffDays / 30)} شهور`;
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'عاجل';
      case 'medium':
        return 'متوسط';
      case 'low':
        return 'عادي';
      default:
        return 'عادي';
    }
  };

  return (
    <div className="bg-[#282C34] rounded-lg border border-[#3a4750] hover:border-blue-500 transition-all duration-300 overflow-hidden">
      {/* Company Header */}
      <div className="p-4 border-b border-[#3a4750]">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#3a4750] rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">{post.companyLogo}</span>
            </div>
            <div>
              <h3 className="font-semibold text-white">{post.companyName}</h3>
              <p className="text-sm text-gray-400">{post.companyLocation}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(post.urgency)}`}>
              {getUrgencyText(post.urgency)}
            </span>
            <button className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Post Meta */}
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <span>{formatDate(post.publishedAt)}</span>
          <span>•</span>
          <span>{post.views} مشاهدة</span>
          <span>•</span>
          <span>{post.applicants} متقدم</span>
        </div>
      </div>

      {/* Post Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-2">{post.title}</h2>
        <p className="text-gray-300 mb-4 line-clamp-2">{post.description}</p>
        
        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.skills.slice(0, 4).map((skill, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs"
            >
              {skill}
            </span>
          ))}
          {post.skills.length > 4 && (
            <span className="px-2 py-1 bg-[#3a4750] text-gray-400 rounded text-xs">
              +{post.skills.length - 4}
            </span>
          )}
        </div>

        {/* Job Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">{post.experienceLevel}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">{post.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">{post.salary}</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            <span className="text-gray-300">{post.employmentType}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-3 border-t border-[#3a4750]">
          <div className="flex items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
                isLiked 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-[#3a4750] text-gray-300 hover:bg-[#4a5568]'
              }`}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm">{post.likes + (isLiked ? 1 : 0)}</span>
            </button>
            
            <button className="flex items-center gap-1 px-3 py-1 bg-[#3a4750] text-gray-300 rounded-lg hover:bg-[#4a5568] transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm">{post.applicants}</span>
            </button>
          </div>
          
          <button
            onClick={handleSave}
            className={`p-2 rounded-lg transition-colors ${
              isSaved 
                ? 'bg-blue-500 text-white' 
                : 'bg-[#3a4750] text-gray-300 hover:bg-[#4a5568]'
            }`}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Component for displaying multiple posts
function PostsList({ posts = postsData, limit }) {
  const displayedPosts = limit ? posts.slice(0, limit) : posts;
  
  return (
    <div className="space-y-4">
      {displayedPosts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
}

// Component for trending posts
function TrendingPosts() {
  const trendingPosts = postsData
    .sort((a, b) => (b.likes + b.applicants) - (a.likes + a.applicants))
    .slice(0, 3);
  
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">المنشورات الأكثر تفاعلاً</h2>
      {trendingPosts.map((post) => (
        <CardPost key={post.id} post={post} />
      ))}
    </div>
  );
}

export default CardPost;
export { PostsList, TrendingPosts };