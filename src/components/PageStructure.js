import React from 'react';

/**
 * هيكل الصفحات - توثيق لتنظيم المشروع
 * 
 * هذا الملف يوضح هيكل الصفحات وكيفية تنظيمها
 */

// هيكل المجلدات:
/*
src/
├── components/          # المكونات العامة القابلة لإعادة الاستخدام
│   ├── auth/          # مكونات المصادقة (Login, Register)
│   ├── PageStructure.js # هذا الملف - توثيق الهيكل
│   ├── MainNavbar.js  # شريط التنقل الرئيسي
│   ├── LandingPage.js # الصفحة الرئيسية
│   ├── FeaturesPage.js # صفحة المميزات
│   ├── CompaniesPage.js # صفحة الشركات
│   ├── DevelopersPage.js # صفحة المطورين
│   ├── RoleSelection.js # اختيار الدور
│   ├── DeveloperDashboard.js # داشبورد المطور (قديم)
│   └── CompanyDashboard.js # داشبورد الشركة (قديم)
│
├── pages/              # الصفحات الكاملة والمكونات الخاصة
│   ├── DashboardPage.js # صفحة الداشبورد الرئيسية الجديدة
│   ├── developer/      # صفحات خاصة بالمطورين
│   │   ├── DeveloperProfilePage.js # ملف المطور الشخصي
│   │   ├── SkillsPage.js # صفحة المهارات
│   │   ├── ProjectManagementPage.js # إدارة المشاريع
│   │   ├── ProjectCard.js # بطاقة المشروع
│   │   ├── AddProjectModal.js # نافذة إضافة مشروع
│   │   ├── ModalStyles.css # أنماط النوافذ
│   │   ├── JobsSection.js # قسم الوظائف
│   │   ├── OverviewSection.js # نظرة عامة
│   │   └── ProfileSidebar.js # الشريط الجانبي للملف الشخصي
│   │
│   └── company/        # صفحات خاصة بالشركات
│       ├── CompanyProfilePage.js # ملف الشركة الشخصي
│       ├── OverviewSection.js # نظرة عامة للشركة
│       ├── OpenRolesSection.js # الوظائف المتاحة
│       └── SidebarPanels.js // الألواح الجانبية
│
└── App.js             # التوجيه الرئيسي (Routing)
*/

// مسارات الصفحات:
const pageRoutes = {
  // الصفحات العامة
  '/': 'LandingPage.js - الصفحة الرئيسية',
  '/features': 'FeaturesPage.js - صفحة المميزات',
  '/companies': 'CompaniesPage.js - صفحة الشركات',
  '/developers': 'DevelopersPage.js - صفحة المطورين',
  '/select-role': 'RoleSelection.js - اختيار الدور',
  
  // المصادقة
  '/login/developer': 'DeveloperLogin.js - تسجيل دخول المطور',
  '/login/company': 'CompanyLogin.js - تسجيل دخول الشركة',
  '/register/developer': 'DeveloperRegister.js - تسجيل مطور جديد',
  '/register/company': 'CompanyRegister.js - تسجيل شركة جديدة',
  
  // الداشبورد الجديد
  '/dashboard': 'DashboardPage.js - الداشبورد الرئيسي',
  '/dashboard/developer': 'DashboardPage.js - داشبورد المطور',
  '/dashboard/company': 'DashboardPage.js - داشبورد الشركة',
  
  // صفحات المطور
  '/dashboard/developer/profile': 'DeveloperProfilePage.js - الملف الشخصي للمطور',
  '/dashboard/developer/skills': 'SkillsPage.js - مهارات المطور',
  '/dashboard/developer/projects': 'ProjectManagementPage.js - إدارة مشاريع المطور',
  
  // صفحات الشركة
  '/dashboard/company/profile': 'CompanyProfilePage.js - الملف الشخصي للشركة',
};

// كيفية الاستخدام في App.js:
const appJsStructure = `
// استيراد الصفحات من المجلدات المنظمة
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

// استيراد الصفحات من مجلد pages/
import DashboardPage from './pages/DashboardPage';
import DeveloperProfilePage from './pages/developer/DeveloperProfilePage';
import SkillsPage from './pages/developer/SkillsPage';
import ProjectManagementPage from './pages/developer/ProjectManagementPage';
import CompanyProfilePage from './pages/company/CompanyProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        {/* الصفحات العامة */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/companies" element={<CompaniesPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/select-role" element={<RoleSelection />} />
        
        {/* المصادقة */}
        <Route path="/login/developer" element={<DeveloperLogin />} />
        <Route path="/login/company" element={<CompanyLogin />} />
        <Route path="/register/developer" element={<DeveloperRegister />} />
        <Route path="/register/company" element={<CompanyRegister />} />
        
        {/* الداشبورد */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/dashboard/developer" element={<DashboardPage />} />
        <Route path="/dashboard/company" element={<DashboardPage />} />
        
        {/* صفحات المطور */}
        <Route path="/dashboard/developer/skills" element={<SkillsPage />} />
        <Route path="/dashboard/developer/profile" element={<DeveloperProfilePage />} />
        <Route path="/dashboard/developer/projects" element={<ProjectManagementPage />} />
        
        {/* صفحات الشركة */}
        <Route path="/dashboard/company/profile" element={<CompanyProfilePage />} />
      </Routes>
    </Router>
  );
}
`;

// قواعد التنظيم:
const organizationRules = [
  {
    title: 'المكونات العامة (components/)',
    description: 'المكونات التي يمكن إعادة استخدامها في عدة صفحات',
    examples: ['MainNavbar', 'LandingPage', 'auth/*']
  },
  {
    title: 'الصفحات الكاملة (pages/)',
    description: 'الصفحات الكاملة والمكونات الخاصة بقسم معين',
    examples: ['DashboardPage', 'developer/*', 'company/*']
  },
  {
    title: 'المسارات المنظمة',
    description: 'استخدام مسارات هرمية لتنظيم الصفحات',
    examples: ['/dashboard/developer/profile', '/dashboard/company/profile']
  }
];

function PageStructure() {
  return (
    <div className="container my-5">
      <div className="glass-card">
        <div className="p-4">
          <h1 className="h3 mb-4">📁 هيكل الصفحات</h1>
          
          <div className="mb-4">
            <h2 className="h5 mb-3">🎯 قواعد التنظيم:</h2>
            <ul className="list-unstyled">
              {organizationRules.map((rule, index) => (
                <li key={index} className="mb-3">
                  <strong>{rule.title}:</strong> {rule.description}
                  <br />
                  <small className="text-white-50">
                    أمثلة: {rule.examples.join(', ')}
                  </small>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h2 className="h5 mb-3">🗺️ مسارات الصفحات:</h2>
            <div className="row">
              {Object.entries(pageRoutes).map(([path, description], index) => (
                <div key={index} className="col-md-6 mb-2">
                  <code className="text-info">{path}</code>
                  <br />
                  <small className="text-white-50">{description}</small>
                </div>
              ))}
            </div>
          </div>

          <div className="alert alert-info border-0">
            <strong>💡 ملاحظة:</strong> هذا الملف للتوثيق فقط ولا يؤثر على عمل التطبيق.
            يمكنك الرجوع إليه لفهم هيكل المشروع وكيفية تنظيم الصفحات.
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageStructure;
