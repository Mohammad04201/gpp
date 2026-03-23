import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';
import './myJob.css';

const JobCard = ({ job, onEdit, onToggleStatus, onDelete }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`job-card relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
      job.status === 'closed' ? 'opacity-75' : ''
    } ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border max-w-md mx-auto`}>
      
      {/* Status Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${
          job.status === 'active' 
            ? 'bg-green-100 text-green-800 border border-green-200' 
            : 'bg-red-100 text-red-800 border border-red-200'
        }`}>
          {job.status === 'active' ? 'ACTIVE' : 'CLOSED'}
        </span>
      </div>

      {/* Card Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className={`text-xl font-bold mb-2 line-clamp-2 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {job.title}
            </h3>
            
            {/* Urgency Badge */}
            {job.urgency && (
              <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                job.urgency === 'high' || job.urgency === 'Immediate'
                  ? 'bg-orange-100 text-orange-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                <span className="w-2 h-2 mr-1 rounded-full bg-orange-400"></span>
                {job.urgency}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Body - Compact */}
      <div className="p-6 space-y-3">
        {/* Job Details Tags */}
        <div className="flex flex-wrap gap-2">
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}>
            <span className="mr-2">📍</span>
            <span className={isDarkMode ? 'text-gray-100' : 'text-gray-700'}>{job.location}</span>
          </div>
          
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}>
            <span className="mr-2">💼</span>
            <span className={isDarkMode ? 'text-gray-100' : 'text-gray-700'}>{job.type}</span>
          </div>
          
          <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold ${
            isDarkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-50 text-blue-700'
          }`}>
            <span className="mr-2">💰</span>
            <span className={isDarkMode ? 'text-blue-100' : 'text-blue-700'}>{job.salary}</span>
          </div>
        </div>

        {/* Description */}
        <div className={`p-3 rounded-lg ${
          isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
        }`}>
          <p className={`text-sm line-clamp-2 ${
            isDarkMode ? 'text-gray-100' : 'text-gray-600'
          }`}>
            {job.description}
          </p>
        </div>

        {/* Skills */}
        {job.skills && job.skills.length > 0 && (
          <div>
            <h4 className={`text-sm font-semibold mb-2 ${
              isDarkMode ? 'text-gray-100' : 'text-gray-700'
            }`}>
              Skills:
            </h4>
            <div className="flex flex-wrap gap-1">
              {job.skills.slice(0, 3).map((skill, index) => (
                <span key={index} className={`inline-block px-2 py-1 text-xs rounded-md ${
                  isDarkMode ? 'bg-teal-900 text-teal-300' : 'bg-teal-50 text-teal-700'
                }`}>
                  {skill}
                </span>
              ))}
              {job.skills.length > 3 && (
                <span className={`inline-block px-2 py-1 text-xs rounded-md ${
                  isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-gray-200 text-gray-600'
                }`}>
                  +{job.skills.length - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Stats */}
        <div className={`flex items-center justify-between pt-3 border-t ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center space-x-3">
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-1">👁️</span>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{job.views || 0}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-1">❤️</span>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{job.likes || 0}</span>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-1">👥</span>
              <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{job.applicants}</span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
              {new Date(job.postedDate).toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>

      {/* Card Footer - Actions */}
      <div className={`px-6 py-4 ${
        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-200'
      } border-t`}>
        <div className="flex gap-2">
          <button 
            onClick={() => onEdit(job)}
            className={`flex-1 px-3 py-2 text-xs font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isDarkMode 
                ? 'bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white shadow-teal-500/20' 
                : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-blue-500/20'
            }`}
          >
            <span className="flex items-center justify-center">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
              <span className="tracking-wide">Edit</span>
            </span>
          </button>
          
          <button 
            onClick={() => onToggleStatus(job.id)}
            className={`flex-1 px-3 py-2 text-xs font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              job.status === 'active'
                ? isDarkMode 
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white shadow-amber-500/20' 
                  : 'bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white shadow-amber-400/20'
                : isDarkMode
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white shadow-emerald-500/20'
                  : 'bg-gradient-to-r from-emerald-400 to-green-400 hover:from-emerald-500 hover:to-green-500 text-white shadow-emerald-400/20'
            }`}
          >
            <span className="flex items-center justify-center">
              {job.status === 'active' ? (
                <>
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="tracking-wide">Close</span>
                </>
              ) : (
                <>
                  <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="tracking-wide">Activate</span>
                </>
              )}
            </span>
          </button>
          
          <button 
            onClick={() => onDelete(job.id)}
            className={`px-3 py-2 text-xs font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isDarkMode 
                ? 'bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-red-500/20' 
                : 'bg-gradient-to-r from-red-400 to-pink-400 hover:from-red-500 hover:to-pink-500 text-white shadow-red-400/20'
            }`}
          >
            <span className="flex items-center justify-center">
              <svg className="w-3.5 h-3.5 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="tracking-wide">Delete</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
