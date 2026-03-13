import React from 'react';

const EditButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-90 group"
      title="Edit Company Profile"
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
      <span className="absolute left-full ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Edit Profile
      </span>
    </button>
  );
};

export default EditButton;
