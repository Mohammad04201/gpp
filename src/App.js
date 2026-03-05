import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import CompaniesPage from './components/CompaniesPage';
import DevelopersPage from './components/DevelopersPage';
import RoleSelection from './components/RoleSelection';
import DeveloperLogin from './components/auth/DeveloperLogin';
import CompanyLogin from './components/auth/CompanyLogin';
import DeveloperRegister from './components/auth/DeveloperRegister';
import CompanyRegister from './components/auth/CompanyRegister';
import DeveloperDashboard from './components/DeveloperDashboard';
import CompanyDashboard from './components/CompanyDashboard';
import DeveloperSkillsPage from './pages/developer/SkillsPage';
import DeveloperProfilePage from './pages/developer/DeveloperProfilePage';
import ProjectManagementPage from './pages/developer/ProjectManagementPage';
import CompanyProfilePage from './pages/company/CompanyProfilePage';
import CompanyDashboardPage from './pages/CompanyDashboardPage';
import DeveloperDashboardPage from './pages/DeveloperDashboardPage';
import DashboardPage from './pages/DashboardPage';
import IndexPage from './pages/IndexPage';

function App() {
  return (
    <Router>
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
        <Route path="/pages" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
