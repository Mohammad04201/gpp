import { useState } from 'react';
import MainNavbar from '../components/layout/MainNavbar';
import DeveloperProfilePage from '../pages/DeveloperProfilePage';
import ProjectManagementPage from '../pages/ProjectManagementPage';
import SkillsPage from '../pages/DeveloperSkillsPage';

function DeveloperDashboardPage() {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'الملف الشخصي', component: DeveloperProfilePage },
    { id: 'projects', label: 'المشاريع', component: ProjectManagementPage },
    { id: 'skills', label: 'المهارات', component: SkillsPage }
  ];

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || DeveloperProfilePage;

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-4">
        <div className="container">
          {/* Dashboard Header */}
          <div className="dashboard-header mb-4">
            <h1 className="h3">لوحة تحكم المطور</h1>
            <div className="dashboard-tabs">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Active Component */}
          <div className="dashboard-content">
            <ActiveComponent />
          </div>
        </div>
      </main>

      <style jsx>{`
        .dashboard-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .dashboard-tabs {
          display: flex;
          gap: 1rem;
        }
        
        .tab-button {
          padding: 0.75rem 1.5rem;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .tab-button:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
        }
        
        .tab-button.active {
          background: #007bff;
          border-color: #007bff;
        }
        
        .dashboard-content {
          min-height: 600px;
        }
        
        @media (max-width: 768px) {
          .dashboard-header {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }
          
          .dashboard-tabs {
            width: 100%;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
}

export default DeveloperDashboardPage;
