         import React from 'react';
import { useTheme } from '../../hooks/useThemeContext';
import { companyData } from '../CompanyData';

const Departments = () => {
  const { isDarkMode } = useTheme();
  return (
    <div className="lg:col-span-2">
      <div className={`rounded-xl p-8 transition-all duration-300 ${
        isDarkMode ? 'bg-gray-800/50' : ''
      }`}>
        <h2 className={`text-2xl font-bold mb-6 flex items-center ${
          isDarkMode ? 'text-white' : 'text-gray-800'
        }`}>
          <svg className={`w-6 h-6 mr-2 ${isDarkMode ? 'text-teal-400' : 'text-teal-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Departments ({companyData.departments?.length || 0})
        </h2>
        {companyData.departments && companyData.departments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyData.departments.map((dept, index) => (
              <div key={index} className={`rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 shadow-md hover:shadow-xl hover:shadow-teal-500/20 hover:border-teal-500'
                  : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-teal-400/30 hover:border-teal-400'
              }`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg p-3 shadow-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full shadow-md">Active</span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  {dept.name}
                </h3>
                <p className={`text-sm mb-4 line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {dept.description}
                </p>
                <div className="space-y-3">
                  <div className={`flex items-center justify-between rounded-lg px-3 py-2 border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-teal-500/10 border-teal-500/20' 
                      : 'bg-teal-50 border-teal-200 shadow-sm'
                  }`}>
                    <div className="flex items-center">
                      <svg className={`w-4 h-4 mr-2 ${isDarkMode ? 'text-teal-400' : 'text-teal-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-teal-400' : 'text-teal-700'}`}>
                        {dept.employees}
                      </span>
                    </div>
                    <span className={`text-xs ${isDarkMode ? 'text-teal-300' : 'text-teal-600'}`}>
                      Employees
                    </span>
                  </div>
                  <div className={`flex items-center justify-between rounded-lg px-3 py-2 border transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-cyan-500/10 border-cyan-500/20' 
                      : 'bg-cyan-50 border-cyan-200 shadow-sm'
                  }`}>
                    <div className="flex items-center">
                      <svg className={`w-4 h-4 mr-2 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className={`text-sm font-medium ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
                        {dept.projects}
                      </span>
                    </div>
                    <span className={`text-xs ${isDarkMode ? 'text-cyan-300' : 'text-cyan-600'}`}>
                      Projects
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className={`rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800' : 'bg-gray-100 shadow-lg'
            }`}>
              <svg className={`w-10 h-10 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className={`text-lg font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              No departments available
            </p>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              Start by adding your first department
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;