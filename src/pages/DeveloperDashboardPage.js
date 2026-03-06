import { useState } from 'react';
import MainNavbar from '../components/navbars/MainNavbar';
import DeveloperProfilePage from '../components/Devloper/DeveloperProfilePage';
import ProjectManagementPage from '../components/Devloper/ProjectManagementPage';
import SkillsPage from '../components/Devloper/SkillsPage';
import JobsSection from '../components/Devloper/JobsSection';
import ProfileSidebar from '../components/Devloper/ProfileSidebar';

function DeveloperDashboardPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="row g-4">
            <div className="col-lg-8">
              <JobsSection />
            </div>
            <div className="col-lg-4">
              <ProfileSidebar />
            </div>
          </div>
        );
      case 'profile':
        return <DeveloperProfilePage />;
      case 'skills':
        return <SkillsPage />;
      case 'projects':
        return <ProjectManagementPage />;
      default:
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Navigation Tabs */}
          <div className="glass-card mb-4">
            <div className="p-4">
              <div className="d-flex justify-content-center">
                <div className="btn-group" role="group">
                  <button
                    className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTab('overview')}
                  >
                    📊 نظرة عامة
                  </button>
                  <button
                    className={`btn ${activeTab === 'profile' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    👤 الملف الشخصي
                  </button>
                  <button
                    className={`btn ${activeTab === 'skills' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTab('skills')}
                  >
                    🛠️ المهارات
                  </button>
                  <button
                    className={`btn ${activeTab === 'projects' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => setActiveTab('projects')}
                  >
                    📁 المشاريع
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="glass-card">
            <div className="p-4">
              {renderActiveTab()}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .btn-group .btn {
          border-radius: 0;
          margin: 0 2px;
        }
        
        .btn-group .btn:first-child {
          border-top-right-radius: 0.375rem;
          border-bottom-right-radius: 0.375rem;
        }
        
        .btn-group .btn:last-child {
          border-top-left-radius: 0.375rem;
          border-bottom-left-radius: 0.375rem;
        }
      `}</style>
    </div>
  );
}

export default DeveloperDashboardPage;
