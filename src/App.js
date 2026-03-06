import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeatersP/FeaturesPage';
import CompaniesPage from './pages/CompaniesPage';
import DevelopersPage from './components/DevloperP/DevelopersPage';
import RoleSelection from './pages/AuthSelect';
import DeveloperLogin from './components/auth/DeveloperLogin';
import CompanyLogin from './components/auth/CompanyLogin';
import DeveloperRegister from './components/auth/DeveloperRegister';
import CompanyRegister from './components/auth/CompanyRegister';
import DeveloperDashboard from './components/DeveloperDashboard';
import CompanyDashboard from './components/CompanyDashboard';
import DeveloperSkillsPage from './components/Devloper/SkillsPage';
import DeveloperProfilePage from './components/Devloper/DeveloperProfilePage';
import ProjectManagementPage from './components/Devloper/ProjectManagementPage';
import CompanyProfileView from './components/company/CompanyProfileView';
import CompanyDashboardPage from './pages/CompanyDashboardPage';
import DeveloperDashboardPage from './pages/DeveloperDashboardPage';
import DashboardPage from './pages/DashboardPage';
import IndexPage from './pages/IndexPage';
import AppLayout from './components/layout/AppLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<AppLayout><FeaturesPage /></AppLayout>} />
        <Route path="/companies" element={<AppLayout><CompaniesPage /></AppLayout>} />
        <Route path="/developers" element={<AppLayout><DevelopersPage /></AppLayout>} />
        <Route path="/select-role" element={<AppLayout><RoleSelection /></AppLayout>} />
        <Route path="/login/developer" element={<AppLayout><DeveloperLogin /></AppLayout>} />
        <Route path="/login/company" element={<AppLayout><CompanyLogin /></AppLayout>} />
        <Route path="/register/developer" element={<AppLayout><DeveloperRegister /></AppLayout>} />
        <Route path="/register/company" element={<AppLayout><CompanyRegister /></AppLayout>} />
        <Route path="/dashboard/developer" element={<DeveloperDashboardPage />} />
        <Route path="/dashboard/company" element={<CompanyDashboardPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/main" element={<DashboardPage />} />
        <Route path="/dashboard/developer/skills" element={<AppLayout><DeveloperSkillsPage /></AppLayout>} />
        <Route path="/dashboard/developer/profile" element={<AppLayout><DeveloperProfilePage /></AppLayout>} />
        <Route path="/dashboard/developer/projects" element={<AppLayout><ProjectManagementPage /></AppLayout>} />
        <Route path="/dashboard/company/profile" element={<AppLayout><CompanyProfileView /></AppLayout>} />
        <Route path="/pages" element={<AppLayout><IndexPage /></AppLayout>} />
      </Routes>
    </Router>
  );
}

export default App;
