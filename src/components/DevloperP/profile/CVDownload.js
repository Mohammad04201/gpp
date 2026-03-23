import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';

const CVDownload = ({ userData }) => {
  const { isDarkMode } = useTheme();
  
  if (!userData.cvFile?.name) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-700 shadow-xl">
      <div className="bg-gradient-to-r from-teal-600/20 to-cyan-600/20 p-6 border-b border-gray-700">
        <h3 className="text-xl font-bold text-white mb-2">Resume/CV</h3>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-white font-medium truncate">{userData.cvFile.name}</p>
            <p className="text-gray-400 text-sm">
              {(userData.cvFile.size / 1024).toFixed(1)} KB
            </p>
          </div>
        </div>
        <a
          href={userData.cvFile.data}
          download={userData.cvFile.name}
          className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white rounded-xl p-3 font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50"
        >
          <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download Resume
        </a>
        {userData.cvFile.type === 'application/pdf' && (
          <a
            href={userData.cvFile.data}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white rounded-xl p-3 font-semibold text-center transition-all duration-300 transform hover:scale-105 shadow-lg shadow-teal-500/50 mt-3"
          >
            <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            Preview File
          </a>
        )}
      </div>
    </div>
  );
};

export default CVDownload;
