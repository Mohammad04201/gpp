import React from 'react';

const JobCardActions = ({ post, setShowContactForm, setShowCompanyInfo }) => {
  return (
    <div className="flex gap-3 p-6 pt-0">
      <button
        onClick={() => setShowContactForm(true)}
        className="flex-1 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
      >
        Apply for Job
      </button>
      <button
        onClick={() => setShowCompanyInfo(true)}
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
      >
        Company Info
      </button>
      <a 
        href="/favorites"
        className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
      >
        Favorites
      </a>
    </div>
  );
};

export default JobCardActions;
