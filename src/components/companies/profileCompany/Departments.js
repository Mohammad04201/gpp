         import React from 'react';
import { companyData } from '../CompanyData';

const Departments = () => {
  return (
    <div className="lg:col-span-2">
      <div className="rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
          <svg className="w-6 h-6 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Departments ({companyData.departments?.length || 0})
        </h2>
        {companyData.departments && companyData.departments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companyData.departments.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-teal-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg p-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <span className="bg-green-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full">Active</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{dept.name}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{dept.description}</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-teal-500/10 rounded-lg px-3 py-2 border border-teal-500/20">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                      <span className="text-sm font-medium text-teal-400">{dept.employees}</span>
                    </div>
                    <span className="text-xs text-teal-300">Employees</span>
                  </div>
                  <div className="flex items-center justify-between bg-cyan-500/10 rounded-lg px-3 py-2 border border-cyan-500/20">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-cyan-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-sm font-medium text-cyan-400">{dept.projects}</span>
                    </div>
                    <span className="text-xs text-cyan-300">Projects</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="bg-gray-800 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <p className="text-gray-400 text-lg font-medium">No departments available</p>
            <p className="text-gray-500 text-sm mt-2">Start by adding your first department</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Departments;