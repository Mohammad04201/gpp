import React from 'react';

const TabContent = ({ activeTab, companyData, setActiveTab }) => {
  const DepartmentCard = ({ dept, isPreview = false }) => (
    <div className="bg-[#1a1d23] rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-white font-medium">{dept.name}</h4>
        {dept.isHiring && (
          <span className="px-2 py-1 bg-green-500 text-white rounded text-xs">
            Hiring
          </span>
        )}
      </div>
      <p className="text-gray-400 text-sm mb-2">{dept.description}</p>
      <div className="flex items-center gap-2 text-blue-400 text-xs">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
        </svg>
        {dept.employees} employees
      </div>
    </div>
  );

  const DepartmentCardFull = ({ dept }) => (
    <div className="bg-[#1a1d23] rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-white font-medium text-lg">{dept.name}</h4>
        {dept.isHiring ? (
          <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium">
            Hiring
          </span>
        ) : (
          <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-xs font-medium">
            Complete
          </span>
        )}
      </div>
      <p className="text-gray-400 mb-3">{dept.description}</p>
      <div className="flex items-center gap-2 text-blue-400 text-sm">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
        </svg>
        {dept.employees} employees
      </div>
    </div>
  );

  return (
    <div>
      {activeTab === 'overview' && (
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">About Company</h2>
            <p className="text-gray-300 leading-relaxed">{companyData.description || 'No company description available'}</p>
          </div>

          {(companyData.departments?.length || 0) > 0 && (
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Functional Departments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {companyData.departments.slice(0, 4).map((dept, index) => (
                  <DepartmentCard key={index} dept={dept} isPreview={true} />
                ))}
              </div>
              {(companyData.departments?.length || 0) > 4 && (
                <button 
                  onClick={() => setActiveTab('services')}
                  className="mt-4 text-blue-400 hover:text-blue-300 text-sm"
                >
                  View All Departments →
                </button>
              )}
            </div>
          )}
        </div>
      )}

      {activeTab === 'services' && (
        <div>
          <h2 className="text-2xl font-bold mb-6">Functional Departments</h2>
          {(companyData.departments?.length || 0) === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p>No departments added yet</p>
              <p className="text-sm mt-2">Click the edit button to add departments</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {companyData.departments.map((dept, index) => (
                <DepartmentCardFull key={index} dept={dept} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TabContent;
