import React, { useState, useEffect } from 'react';
import { useThemeContext } from '../components/contexts/ThemeContext';
import MainNavbar from '../components/navbars/MainNavbar';
import MyJob from '../components/companies/Dashboard/myJob';
import DashboardApplications from '../components/companies/Dashboard/DashboardApplications';
import DashboardCandidates from '../components/companies/Dashboard/DashboardCandidates';
import DashboardSettings from '../components/companies/Dashboard/DashboardSettings';
import CreatePost from '../components/companies/Dashboard/CreatePost';
import DashboardSidebar from '../components/companies/Dashboard/DashboardSidebar';
import CompanyProfileView from '../components/companies/CompanyProfileView';
import EditCompanyOverlay from '../components/companies/EditCompany/EditCompanyOverlay';
import '../components/companies/Dashboard/CompanyDashboard.css';

const CompanyDashboard = () => {
  const { isDarkMode } = useThemeContext();
  const [activeTab, setActiveTab] = useState('profile');

  const menuItems = [
    { id: 'profile', name: 'Company Profile', icon: '🏢' },
    { id: 'edit-profile', name: 'Edit Profile', icon: '✏️' },
    { id: 'jobs', name: 'My Jobs', icon: '💼' },
    { id: 'create-post', name: 'Create Post', icon: '📝' },
    { id: 'applications', name: 'Applications', icon: '📋' },
    { id: 'candidates', name: 'Candidates', icon: '👥' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <CompanyProfileView hideEditButton={true} />;
      
      case 'edit-profile':
        return (
          <EditCompanyOverlay
            companyData={{}} // Pass actual company data here
            onSave={(data) => {
              console.log('Saved:', data);
              setActiveTab('profile'); // Go back to profile after saving
            }}
            onCancel={() => setActiveTab('profile')} // Go back to profile on cancel
          />
        );
      
      case 'jobs':
        return <MyJob />;
      
      case 'create-post':
        return <CreatePost />;
      
      case 'applications':
        return <DashboardApplications />;
      
      case 'candidates':
        return <DashboardCandidates />;
      
      case 'settings':
        return <DashboardSettings />;
      
      default:
        return <MyJob />;
    }
  };

  return (
    <div className={`company-dashboard transition-all duration-300 ${
      isDarkMode ? 'bg-[#20232A] text-white' : 'bg-[#f9f9f9] text-gray-800'
    }`}>
      <MainNavbar />
      
      <div className="dashboard-layout">
        {/* Sidebar */}
        <DashboardSidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          menuItems={menuItems}
        />
        
        {/* Main Content */}
        <div className={`dashboard-main ${isDarkMode ? '' : 'light-mode'}`}>
          <div className="dashboard-header">
            <h1 className={`transition-all duration-300 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>Company Dashboard</h1>
            <div className="header-actions">
              <button 
                className={`btn-post-job transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white' 
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl'
                }`}
                onClick={() => setActiveTab('create-post')}
              >
                Post New Job
              </button>
            </div>
          </div>
          
          <div className="dashboard-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
