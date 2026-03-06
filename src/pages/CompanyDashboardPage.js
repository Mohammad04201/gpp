import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import MainNavbar from '../components/navbars/MainNavbar';
import BasicCompanyInfo from '../components/company/BasicCompanyInfo';
import AdditionalCompanyInfo from '../components/company/AdditionalCompanyInfo';
import SocialMedia from '../components/company/SocialMedia';
import Branches from '../components/company/Branches';
import Services from '../components/company/Services';
import Products from '../components/company/Products';
import CompanyStatus from '../components/company/CompanyStatus';
import '../styles/CompanyDashboard.css';

function CompanyDashboardPage() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [activeTab, setActiveTab] = useState('overview');
  const [about, setAbout] = useState(
    'Mawhiba AI helps companies across MENA hire vetted technical talent with AI-powered matching.'
  );
  const [stack, setStack] = useState(['React', 'Node.js', 'PostgreSQL']);
  const [newTech, setNewTech] = useState('');
  const [stats, setStats] = useState({
    openJobs: 12,
    interestedDevelopers: 48,
    completedProjects: 156,
    activeContracts: 8
  });

  const handleAddTech = (event) => {
    event.preventDefault();
    if (!newTech.trim()) return;
    setStack((prev) => [...prev, newTech.trim()]);
    setNewTech('');
  };

  const handleDeleteTech = (name) => {
    setStack((prev) => prev.filter((t) => t !== name));
  };

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: '📊' },
    { id: 'basic', label: 'المعلومات الأساسية', icon: '📋' },
    { id: 'additional', label: 'معلومات إضافية', icon: '📝' },
    { id: 'social', label: 'التواصل الاجتماعي', icon: '🔗' },
    { id: 'branches', label: 'الفروع', icon: '🏢' },
    { id: 'services', label: 'الخدمات', icon: '🛠️' },
    { id: 'products', label: 'المنتجات', icon: '📦' },
    { id: 'status', label: 'الحالة', icon: '📈' }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <div className="row g-4 mb-4">
              <div className="col-lg-3 col-md-6">
                <div className="stat-card bg-primary bg-opacity-10 border border-primary">
                  <div className="stat-card-body">
                    <div className="stat-icon text-primary">💼</div>
                    <div className="stat-number text-primary">{stats.openJobs}</div>
                    <div className="stat-label">وظيفة مفتوحة</div>
                    <div className="stat-trend text-success">+2 هذا الأسبوع</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-card bg-success bg-opacity-10 border border-success">
                  <div className="stat-card-body">
                    <div className="stat-icon text-success">👥</div>
                    <div className="stat-number text-success">{stats.interestedDevelopers}</div>
                    <div className="stat-label">مطور مهتم</div>
                    <div className="stat-trend text-success">+12 هذا الأسبوع</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-card bg-info bg-opacity-10 border border-info">
                  <div className="stat-card-body">
                    <div className="stat-icon text-info">✅</div>
                    <div className="stat-number text-info">{stats.completedProjects}</div>
                    <div className="stat-label">مشروع مكتمل</div>
                    <div className="stat-trend text-success">+8 هذا الشهر</div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-card bg-warning bg-opacity-10 border border-warning">
                  <div className="stat-card-body">
                    <div className="stat-icon text-warning">🤝</div>
                    <div className="stat-number text-warning">{stats.activeContracts}</div>
                    <div className="stat-label">عقد نشط</div>
                    <div className="stat-trend text-info">مستقر</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row g-4">
              <div className="col-lg-8">
                <div className="glass-card">
                  <div className="p-4">
                    <h3 className="h5 mb-4">🚀 الخطوات التالية</h3>
                    <div className="row g-3">
                      <div className="col-md-4">
                        <div className="next-step-card">
                          <div className="next-step-icon">📝</div>
                          <h5 className="h6">نشر وظيفة جديدة</h5>
                          <p className="small text-white-50">اجذب أفضل المواهب التقنية</p>
                          <button className="btn btn-primary btn-sm w-100">نشر الآن</button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="next-step-card">
                          <div className="next-step-icon">👤</div>
                          <h5 className="h6">إكمال الملف الشخصي</h5>
                          <p className="small text-white-50">زيادة ظهور الشركة</p>
                          <button 
                            className="btn btn-outline-primary btn-sm w-100"
                            onClick={() => setActiveTab('basic')}
                          >
                            إكمال الآن
                          </button>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="next-step-card">
                          <div className="next-step-icon">📊</div>
                          <h5 className="h6">عرض التقارير</h5>
                          <p className="small text-white-50">تحليل الأداء والنمو</p>
                          <button className="btn btn-outline-primary btn-sm w-100">عرض التقارير</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="glass-card">
                  <div className="p-4">
                    <h3 className="h5 mb-4">💡 نصائح سريعة</h3>
                    <div className="tips-list">
                      <div className="tip-item">
                        <div className="tip-icon">💡</div>
                        <div className="tip-content">
                          <h6 className="h6 mb-1">تحسين الوصف</h6>
                          <p className="small text-white-50 mb-0">أضف تفاصيل أكثر عن شركتك</p>
                        </div>
                      </div>
                      <div className="tip-item">
                        <div className="tip-icon">🎯</div>
                        <div className="tip-content">
                          <h6 className="h6 mb-1">استهداف المواهب</h6>
                          <p className="small text-white-50 mb-0">حدد التقنيات المطلوبة بدقة</p>
                        </div>
                      </div>
                      <div className="tip-item">
                        <div className="tip-icon">⚡</div>
                        <div className="tip-content">
                          <h6 className="h6 mb-1">الرد السريع</h6>
                          <p className="small text-white-50 mb-0">راجع المتقدمين في 24 ساعة</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'basic':
        return <BasicCompanyInfo />;
      case 'additional':
        return <AdditionalCompanyInfo />;
      case 'social':
        return <SocialMedia />;
      case 'branches':
        return <Branches />;
      case 'services':
        return <Services />;
      case 'products':
        return <Products />;
      case 'status':
        return <CompanyStatus />;
      default:
        return null;
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      
      <main className="flex-grow-1 py-4">
        <div className="container">
          <div className="text-center mb-5">
            <h1 className="display-5 fw-bold mb-3">🏢 لوحة تحكم الشركات</h1>
            <p className="lead text-white-50">
              إدارة ملف الشركة والوظائف والمواهب التقنية
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="dashboard-tabs mb-4">
            <div className="tabs-wrapper">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span className="tab-label">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {renderTabContent()}
          </div>
        </div>
      </main>
    </div>
  );
}

export default CompanyDashboardPage;
