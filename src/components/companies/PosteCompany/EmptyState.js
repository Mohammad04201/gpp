import React from 'react';

const EmptyState = () => {
  return (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-400 mb-2">No matching jobs found</h3>
      <p className="text-gray-500">Try changing your search or filter criteria</p>
    </div>
  );
};

export default EmptyState;
