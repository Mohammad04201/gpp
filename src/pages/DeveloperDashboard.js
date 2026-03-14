import React, { useState, useEffect } from 'react';
import MainNavbar from '../components/navbars/MainNavbar';
import { developersData, getDeveloperById } from '../components/DevloperP/developersData';
import { getDeveloperInitials, formatExperience, formatNumber } from '../components/DevloperP/helpers';
import DashboardSidebar from '../components/DevloperP/DahsbordDevloper/DashboardSidebar';
import DashboardHeader from '../components/DevloperP/DahsbordDevloper/DashboardHeader';
import ProfileTab from '../components/DevloperP/DahsbordDevloper/ProfileTab';
import ApplicationsTab from '../components/DevloperP/DahsbordDevloper/ApplicationsTab';
import SavedJobsTab from '../components/DevloperP/DahsbordDevloper/SavedJobsTab';
import SkillsTab from '../components/DevloperP/DahsbordDevloper/SkillsTab';
import SettingsTab from '../components/DevloperP/DahsbordDevloper/SettingsTab';
import './DeveloperDashboard.css';

const DeveloperDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [currentDeveloper, setCurrentDeveloper] = useState(null);
  const [applications, setApplications] = useState([]);
  const [savedJobs, setSavedJobs] = useState([]);

  // Load developer data on component mount
  useEffect(() => {
    // For demo purposes, we'll use the first developer (Ahmed Mohammed)
    // In a real app, this would come from authentication/user context
    const developer = getDeveloperById(1);
    setCurrentDeveloper(developer);
    
    // Mock applications data
    setApplications([
      {
        id: 1,
        company: 'TechCorp Solutions',
        position: 'Senior React Developer',
        type: 'Full-time',
        location: 'Remote',
        status: 'Under Review',
        appliedDate: '3 days ago',
        logo: 'TC'
      },
      {
        id: 2,
        company: 'Digital Agency',
        position: 'Frontend Developer',
        type: 'Contract',
        location: 'Riyadh',
        status: 'Interview',
        appliedDate: '1 week ago',
        logo: 'DA'
      }
    ]);
    
    // Mock saved jobs
    setSavedJobs([
      {
        id: 1,
        company: 'Microsoft',
        position: 'Senior Frontend Developer',
        location: 'Seattle, WA',
        salary: '$120k - $180k',
        type: 'Full-time',
        skills: ['React', 'TypeScript'],
        logo: 'MS'
      },
      {
        id: 2,
        company: 'Google',
        position: 'Full Stack Developer',
        location: 'Mountain View, CA',
        salary: '$130k - $200k',
        type: 'Full-time',
        skills: ['Node.js', 'React'],
        logo: 'GO'
      }
    ]);
  }, []);
  const menuItems = [
    { id: 'profile', name: 'My Profile', icon: '👤' },
    { id: 'applications', name: 'My Applications', icon: '📋' },
    { id: 'saved-jobs', name: 'Saved Jobs', icon: '💾' },
    { id: 'skills', name: 'Skills & Portfolio', icon: '🎯' },
    { id: 'settings', name: 'Settings', icon: '⚙️' }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab currentDeveloper={currentDeveloper} />;
      
      case 'applications':
        return <ApplicationsTab currentDeveloper={currentDeveloper} />;
      
      case 'saved-jobs':
        return <SavedJobsTab savedJobs={savedJobs} />;
      
      case 'skills':
        return <SkillsTab currentDeveloper={currentDeveloper} />;
      
      case 'settings':
        return <SettingsTab currentDeveloper={currentDeveloper} />;
      
      default:
        return <ProfileTab currentDeveloper={currentDeveloper} />;
    }
  };

  return (
    <div className="developer-dashboard">
      <MainNavbar />
      
      <div className="dashboard-layout">
        {/* Sidebar */}
        <DashboardSidebar 
          currentDeveloper={currentDeveloper}
          menuItems={menuItems}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
        
        {/* Main Content */}
        <div className="dashboard-main">
          <DashboardHeader currentDeveloper={currentDeveloper} />
          
          <div className="dashboard-content">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
