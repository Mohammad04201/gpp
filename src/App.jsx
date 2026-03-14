import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './components/Home/Home';
import CompaniesPage from './pages/CompaniesPage';
import DevelopersPage from './pages/DevelopersPage';
import DeveloperProfile from './components/DevloperP/DeveloperProfile';
import RoleSelection from './pages/AuthSelect';
import DeveloperLogin from './components/auth/DeveloperLogin';
import CompanyLogin from './components/auth/CompanyLogin';
import DeveloperRegister from './components/auth/DeveloperRegister';
import CompanyRegister from './components/auth/CompanyRegister';
import CompanyProfileView from './components/companies/CompanyProfileView';
import DashboardPage from './components/pageFooter/DashboardPage';

import CompanyDashboardNew from './pages/CompanyDashboard';
import DeveloperDashboard from './pages/DeveloperDashboard';
import Jops from './pages/Jops';
import Favorites from './components/companies/Favorites';
import FovertDevloper from './components/DevloperP/fovertDevloper';

import MainNavbar from './components/navbars/MainNavbar';
import Footer from './components/Footer/Footer';

import AboutPage from './components/pageFooter/AboutPage';
import ContactPage from './components/pageFooter/ContactPage';
import HelpPage from './components/pageFooter/HelpPage';
import PrivacyPage from './components/pageFooter/PrivacyPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={
          <>
            <MainNavbar />
            <LandingPage />
            <Footer />
          </>
        } />

        <Route path="/about" element={
          <>
            <MainNavbar />
            <AboutPage />
            <Footer />
          </>
        } />

        <Route path="/contact" element={
          <>
            <MainNavbar />
            <ContactPage />
            <Footer />
          </>
        } />

        <Route path="/help" element={
          <>
            <MainNavbar />
            <HelpPage />
            <Footer />
          </>
        } />

        <Route path="/privacy" element={
          <>
            <MainNavbar />
            <PrivacyPage />
            <Footer />
          </>
        } />

        <Route path="/terms" element={
          <>
            <MainNavbar />
            <FovertDevloper />
            <Footer />
          </>
        } />

        <Route path="/companies" element={
          <>
            <MainNavbar />
            <CompaniesPage />
            <Footer />
          </>
        } />

        <Route path="/developers" element={
          <>
            <MainNavbar />
            <DevelopersPage />
            <Footer />
          </>
        } />

        <Route path="/developer/profile/:id" element={
          <>
            <MainNavbar />
            <DeveloperProfile />
            <Footer />
          </>
        } />


        <Route path="/jobs" element={
          <>
            <MainNavbar />
            <Jops />
            <Footer />
          </>
        } />

        <Route path="/favorites" element={
          <>
            <MainNavbar />
            <Favorites />
            <Footer />
          </>
        } />

        <Route path="/FovertDevloper" element={
          <>
            <MainNavbar />
            <FovertDevloper />
            <Footer />
          </>
        } />

        <Route path="/select-role" element={
          <>
            <MainNavbar />
            <RoleSelection />
            <Footer />
          </>
        } />

        <Route path="/login/developer" element={
          <>
            <MainNavbar />
            <DeveloperLogin />
            <Footer />
          </>
        } />

        <Route path="/login/company" element={
          <>
            <MainNavbar />
            <CompanyLogin />
            <Footer />
          </>
        } />

        <Route path="/register/developer" element={
          <>
            <MainNavbar />
            <DeveloperRegister />
            <Footer />
          </>
        } />

        <Route path="/register/company" element={
          <>
            <MainNavbar />
            <CompanyRegister />
            <Footer />
          </>
        } />

        <Route path="/dashboard/developer" element={<DeveloperDashboard />} />
        <Route path="/dashboard/company" element={<CompanyDashboardNew />} />
        <Route path="/my-jobs" element={<CompanyDashboardNew />} />

        <Route path="/dashboard" element={
          <>
            <MainNavbar />
            <DashboardPage />
            <Footer />
          </>
        } />

        <Route path="/dashboard/main" element={
          <>
            <MainNavbar />
            <DashboardPage />
            <Footer />
          </>
        } />

        <Route path="/dashboard/developer/profile" element={
          <>
            <MainNavbar />
            <DeveloperProfile />
            <Footer />
          </>
        } />

        <Route path="/company/profile/:id" element={
          <>
            <MainNavbar />
            <CompanyProfileView />
            <Footer />
          </>
        } />

        <Route path="/dashboard/company/profile" element={
          <>
            <MainNavbar />
            <CompanyProfileView />
            <Footer />
          </>
        } />

      </Routes>
    </Router>
  );
}

export default App;