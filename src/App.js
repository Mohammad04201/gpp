import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import CompaniesPage from './pages/CompaniesPage';
import DevelopersPage from './pages/DevelopersPage';
import RoleSelection from './pages/RoleSelection';
import DeveloperLogin from './pages/auth/DeveloperLogin';
import CompanyLogin from './pages/auth/CompanyLogin';
import DeveloperRegister from './pages/auth/DeveloperRegister';
import CompanyRegister from './pages/auth/CompanyRegister';
import DeveloperDashboard from './components/DeveloperDashboard';
import CompanyDashboard from './components/CompanyDashboard';
import DeveloperSkillsPage from './pages/DeveloperSkillsPage';
import DeveloperProfilePage from './pages/DeveloperProfilePage';
import ProjectManagementPage from './pages/ProjectManagementPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import CompanyProfileForm from './pages/CompanyProfileForm';
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
        <Route path="/dashboard/company/edit" element={<CompanyProfileForm />} />
        <Route path="/pages" element={<IndexPage />} />
      </Routes>
    </Router>
  );
}

export default App;
