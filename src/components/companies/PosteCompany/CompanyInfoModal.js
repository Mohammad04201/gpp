import React from 'react';

const CompanyInfoModal = ({ show, post, onClose, onApply }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800/95 rounded-xl border border-gray-700 p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
            <span className="text-2xl font-bold text-white">{post.companyLogo}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{post.companyName}</h3>
            <p className="text-gray-400">{post.companyIndustry}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-900/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-3">Company Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Location:</span>
                <span className="text-white">{post.companyLocation}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Size:</span>
                <span className="text-white">{post.companySize}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Industry:</span>
                <span className="text-white">{post.companyIndustry}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-3">Contact Methods</h4>
            <div className="space-y-3">
              <a href={`mailto:${post.companyEmail || 'info@company.com'}`} className="flex items-center gap-3 text-teal-400 hover:text-teal-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span>{post.companyEmail || 'info@company.com'}</span>
              </a>
              
              <a href={`tel:${post.companyPhone || '+966500000000'}`} className="flex items-center gap-3 text-teal-400 hover:text-teal-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>{post.companyPhone || '+966 50 123 4567'}</span>
              </a>
              
              <a href={post.companyWebsite || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-teal-400 hover:text-teal-300 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm-1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                </svg>
                <span>Visit Website</span>
              </a>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-4">
            <h4 className="text-white font-medium mb-3">About Company</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              {post.companyDescription || 'Leading company in ' + post.companyIndustry + ', we work to provide the best solutions and services to our clients. We always strive for innovation and development in all aspects of our business.'}
            </p>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            onClick={onApply}
            className="flex-1 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Apply for Job
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoModal;
