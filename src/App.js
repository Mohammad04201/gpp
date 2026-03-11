import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import CompaniesPage from './pages/CompaniesPage';
import DevelopersPage from './pages/DevelopersPage';
import DeveloperProfile from './components/DevloperP/DeveloperProfile';
import DeveloperEdit from './components/DevloperP/DeveloperEdit';
import RoleSelection from './pages/AuthSelect';
import DeveloperLogin from './components/auth/DeveloperLogin';
import CompanyLogin from './components/auth/CompanyLogin';
import DeveloperRegister from './components/auth/DeveloperRegister';
import CompanyRegister from './components/auth/CompanyRegister';
import CompanyDashboard from './components/Dashbords/CompanyModernDashboard';
import DeveloperSkills from './components/DevloperP/DeveloperSkills';
import DashboardPage from './pages/DashboardPage';
import IndexPage from './pages/IndexPage';
import Jops from './pages/Jops';
import MainNavbar from './components/navbars/MainNavbar';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><MainNavbar /><LandingPage /></>} />
        <Route path="/companies" element={<><MainNavbar /><CompaniesPage /></>} />
        <Route path="/developers" element={<><MainNavbar /><DevelopersPage /></>} />
        <Route path="/developer/profile/:id" element={<><MainNavbar /><DeveloperProfile /></>} />
        <Route path="/developer/edit/:id" element={<><MainNavbar /><DeveloperEdit /></>} />
        <Route path="/developer/skills/:id" element={<><MainNavbar /><DeveloperSkills /></>} />
        <Route path="/jobs" element={<><MainNavbar /><Jops /></>} />
        <Route path="/select-role" element={<><MainNavbar /><RoleSelection /></>} />
        <Route path="/login/developer" element={<><MainNavbar /><DeveloperLogin /></>} />
        <Route path="/login/company" element={<><MainNavbar /><CompanyLogin /></>} />
        <Route path="/register/developer" element={<><MainNavbar /><DeveloperRegister /></>} />
        <Route path="/register/company" element={<><MainNavbar /><CompanyRegister /></>} />
        <Route path="/dashboard/developer" element={<><MainNavbar /><DeveloperProfile /></>} />
        <Route path="/dashboard/company" element={<><MainNavbar /><CompanyDashboard /></>} />
        <Route path="/dashboard" element={<><MainNavbar /><DashboardPage /></>} />
        <Route path="/dashboard/main" element={<><MainNavbar /><DashboardPage /></>} />
        <Route path="/dashboard/developer/skills" element={<><MainNavbar /><DeveloperSkills /></>} />
        <Route path="/dashboard/developer/profile" element={<><MainNavbar /><DeveloperProfile /></>} />
        <Route path="/pages" element={<><MainNavbar /><IndexPage /></>} />
      </Routes>
    </Router>
  );
}

export default App;
