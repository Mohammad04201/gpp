import React, { useState } from 'react';
import MainNavbar from '../components/navbars/MainNavbar';
import MyJob from '../components/myAcount/myJob';
import DashboardOverview from '../components/companies/Dashboard/DashboardOverview';
import DashboardApplications from '../components/companies/Dashboard/DashboardApplications';
import DashboardCandidates from '../components/companies/Dashboard/DashboardCandidates';
import DashboardAnalytics from '../components/companies/Dashboard/DashboardAnalytics';
import DashboardSettings from '../components/companies/Dashboard/DashboardSettings';
import DashboardSidebar from '../components/companies/Dashboard/DashboardSidebar';
import '../components/companies/Dashboard/CompanyDashboard.css';

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  const menuItems = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'jobs', name: 'My Jobs', icon: '💼' },
    { id: 'applications', name: 'Applications', icon: '📋' },
    { id: 'candidates', name: 'Candidates', icon: '👥' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <DashboardOverview />;
      
      case 'jobs':
        return <MyJob />;
      
      case 'applications':
        return <DashboardApplications />;
      
      case 'candidates':
        return <DashboardCandidates />;
      
      case 'analytics':
        return <DashboardAnalytics />;
      
      case 'settings':
        return <DashboardSettings />;
      
      default:
        return <MyJob />;
    }
  };

  return (
    <div className="company-dashboard">
      <MainNavbar />
      
      <div className="dashboard-layout">
        {/* Sidebar */}
        <DashboardSidebar 
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          menuItems={menuItems}
        />
        
        {/* Main Content */}
        <div className="dashboard-main">
          <div className="dashboard-header">
            <h1>Company Dashboard</h1>
            <div className="header-actions">
              <button className="btn-post-job">Post New Job</button>
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
