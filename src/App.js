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
import MainNavbar from './components/navbars/MainNavbar';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><MainNavbar /><LandingPage /></>} />
        <Route path="/features" element={<><MainNavbar /><FeaturesPage /></>} />
        <Route path="/companies" element={<><MainNavbar /><CompaniesPage /></>} />
        <Route path="/developers" element={<><MainNavbar /><DevelopersPage /></>} />
        <Route path="/select-role" element={<><MainNavbar /><RoleSelection /></>} />
        <Route path="/login/developer" element={<><MainNavbar /><DeveloperLogin /></>} />
        <Route path="/login/company" element={<><MainNavbar /><CompanyLogin /></>} />
        <Route path="/register/developer" element={<><MainNavbar /><DeveloperRegister /></>} />
        <Route path="/register/company" element={<><MainNavbar /><CompanyRegister /></>} />
        <Route path="/dashboard/developer" element={<><MainNavbar /><DeveloperDashboardPage /></>} />
        <Route path="/dashboard/company" element={<><MainNavbar /><CompanyDashboardPage /></>} />
        <Route path="/dashboard" element={<><MainNavbar /><DashboardPage /></>} />
        <Route path="/dashboard/main" element={<><MainNavbar /><DashboardPage /></>} />
        <Route path="/dashboard/developer/skills" element={<><MainNavbar /><DeveloperSkillsPage /></>} />
        <Route path="/dashboard/developer/profile" element={<><MainNavbar /><DeveloperProfilePage /></>} />
        <Route path="/dashboard/developer/projects" element={<><MainNavbar /><ProjectManagementPage /></>} />
        <Route path="/dashboard/company/profile" element={<><MainNavbar /><CompanyProfileView /></>} />
        <Route path="/pages" element={<><MainNavbar /><IndexPage /></>} />
      </Routes>
    </Router>
  );
}

export default App;
