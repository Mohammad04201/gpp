import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// Lazy load pages
const LandingPage = lazy(() => import('../pages/IndexPage'));
const FeaturesPage = lazy(() => import('../pages/FeaturesPage'));
const CompaniesPage = lazy(() => import('../pages/Companies/CompaniesPage.js'));
const DevelopersPage = lazy(() => import('../pages/Developers/DevelopersPage.js'));
const RoleSelection = lazy(() => import('../pages/auth/RoleSelection'));
const DeveloperLogin = lazy(() => import('../pages/auth/DeveloperLogin'));
const CompanyLogin = lazy(() => import('../pages/auth/CompanyLogin'));
const DeveloperRegister = lazy(() => import('../pages/auth/DeveloperRegister'));
const CompanyRegister = lazy(() => import('../pages/auth/CompanyRegister'));
const DeveloperDashboardPage = lazy(() => import('../pages/developer/DeveloperDashboardPage'));
const CompanyDashboardPage = lazy(() => import('../pages/company/CompanyDashboardPage'));
const DashboardPage = lazy(() => import('../pages/DashboardPage'));
const DeveloperSkillsPage = lazy(() => import('../pages/developer/DeveloperSkillsPage'));
const DeveloperProfilePage = lazy(() => import('../pages/developer/DeveloperProfilePage'));
const ProjectManagementPage = lazy(() => import('../pages/developer/ProjectManagementPage'));
const CompanyProfilePage = lazy(() => import('../pages/company/CompanyProfilePage'));
const CompanyProfileForm = lazy(() => import('../pages/company/CompanyProfileForm'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/select-role" element={<RoleSelection />} />
          <Route path="/login/developer" element={<DeveloperLogin />} />
          <Route path="/login/company" element={<CompanyLogin />} />
          <Route path="/register/developer" element={<DeveloperRegister />} />
          <Route path="/register/company" element={<CompanyRegister />} />
          <Route path="/dashboard/developer" element={<DeveloperDashboardPage />} />
          <Route path="/dashboard/company" element={<CompanyDashboardPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/main" element={<DashboardPage />} />
          <Route path="/dashboard/developer/skills" element={<DeveloperSkillsPage />} />
          <Route path="/dashboard/developer/profile" element={<DeveloperProfilePage />} />
          <Route path="/dashboard/developer/projects" element={<ProjectManagementPage />} />
          <Route path="/dashboard/company/profile" element={<CompanyProfilePage />} />
          <Route path="/dashboard/company/profile-form" element={<CompanyProfileForm />} />
          <Route path="/pages" element={<IndexPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
