import React from 'react';
import { Link } from 'react-router-dom';

function CompanyCard({ company }) {
  // Get company initials
  const initials = company.companyName?.split(' ').map(word => word[0]).join('').substring(0, 2) || 'CO';
  
  // Calculate number of hiring departments
  const hiringDepartments = company.departments?.filter(dept => dept.isHiring).length || 0;

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 group">
      {/* Header with Avatar */}
      <div className="relative h-24 bg-gradient-to-r from-teal-600/20 to-cyan-600/20">
        <div className="absolute -bottom-10 left-6">
          <div className="w-20 h-20 bg-gray-800/50 rounded-xl flex items-center justify-center border-4 border-gray-800/50 group-hover:border-teal-500/50 transition-colors backdrop-blur-sm">
            <span className="text-2xl font-bold text-teal-400">{initials}</span>
          </div>
        </div>
        
        {/* Badge for hiring */}
        {hiringDepartments > 0 && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full flex items-center gap-1">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Hiring
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="pt-12 px-6 pb-6">
        {/* Company Name */}
        <h3 className="text-xl font-bold text-white mb-1 truncate">{company.companyName}</h3>
        <p className="text-teal-400 text-sm mb-3 truncate">{company.title || company.industry}</p>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">
          {company.description || 'No description available'}
        </p>

        {/* Stats Row */}
        <div className="flex items-center gap-4 mb-4 text-sm">
          <div className="flex items-center gap-1 text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
            <span>{company.employees || '0'}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span className="truncate">{company.location || 'Not specified'}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span>{company.rating || '0'}</span>
          </div>
        </div>

        {/* Departments Preview */}
        {(company.departments?.length || 0) > 0 && (
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-2">Departments:</p>
            <div className="flex flex-wrap gap-1">
              {company.departments.slice(0, 3).map((dept, index) => (
                <span 
                  key={index} 
                  className={`px-2 py-1 rounded text-xs ${
                    dept.isHiring 
                      ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30' 
                      : 'bg-gray-700 text-gray-300'
                  }`}
                >
                  {dept.name}
                </span>
              ))}
              {(company.departments?.length || 0) > 3 && (
                <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                  +{(company.departments?.length || 0) - 3}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Action Button */}
        <Link 
          to={`/company/profile/${company.id || '1'}`}
          className="w-full block text-center py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
        >
          View Profile 
        </Link>
      </div>
    </div>
  );
}

export default CompanyCard;
