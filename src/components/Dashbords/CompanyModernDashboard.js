import React, { useState, useEffect } from 'react';

function CompanyModernDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    jobs: 12,
    candidates: 48,
    projects: 156,
    contracts: 8
  });
  const [recentActivity, setRecentActivity] = useState([
    { id: 1, type: 'application', message: 'مطور جديد تقدم لوظيفة Frontend', time: 'منذ 5 دقائق', icon: '👨‍💻' },
    { id: 2, type: 'project', message: 'مشروع جديد تم إكماله بنجاح', time: 'منذ 15 دقيقة', icon: '✅' },
    { id: 3, type: 'contract', message: 'عقد جديد مع شركة تقنية', time: 'منذ ساعة', icon: '📝' },
    { id: 4, type: 'message', message: 'رسالة جديدة من فريق التطوير', time: 'منذ ساعتين', icon: '💬' }
  ]);

  const [animatedStats, setAnimatedStats] = useState({
    jobs: 0,
    candidates: 0,
    projects: 0,
    contracts: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedStats(stats);
    }, 500);
    return () => clearTimeout(timer);
  }, [stats]);

  const Counter = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      let startTime = null;
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration]);

    return <span>{count}</span>;
  };

  return (
    <div className="modern-dashboard">

      {/* Header */}
      <header className="dashboard-header">
        <div className="header-content">
          <div className="header-left">
            <h1 className="dashboard-title">
              <span className="gradient-text">لوحة التحكم</span>
            </h1>
            <p className="dashboard-subtitle">مرحباً بك في منصة إدارة الشركات المتقدمة</p>
          </div>
          <div className="header-right">
            <div className="notification-bell">
              <span className="bell-icon">🔔</span>
              <span className="notification-badge">3</span>
            </div>
            <div className="user-avatar">
              <div className="avatar-glow"></div>
              <span className="avatar-text">MA</span>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="dashboard-nav">
        <div className="nav-tabs">
          {['overview', 'jobs', 'candidates', 'projects', 'analytics'].map((tab) => (
            <button
              key={tab}
              className={`nav-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              <span className="tab-icon">
                {tab === 'overview' && '📊'}
                {tab === 'jobs' && '💼'}
                {tab === 'candidates' && '👥'}
                {tab === 'projects' && '🚀'}
                {tab === 'analytics' && '📈'}
              </span>
              <span className="tab-label">
                {tab === 'overview' && 'نظرة عامة'}
                {tab === 'jobs' && 'الوظائف'}
                {tab === 'candidates' && 'المرشحين'}
                {tab === 'projects' && 'المشاريع'}
                {tab === 'analytics' && 'التحليلات'}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="dashboard-main">
        {activeTab === 'overview' && (
          <div className="overview-content">
            {/* Stats Grid */}
            <div className="stats-grid">
              <div className="stat-card primary">
                <div className="stat-header">
                  <div className="stat-icon">💼</div>
                  <div className="stat-trend up">+12%</div>
                </div>
                <div className="stat-body">
                  <div className="stat-number">
                    <Counter end={stats.jobs} />
                  </div>
                  <div className="stat-label">وظيفة مفتوحة</div>
                </div>
                <div className="stat-progress">
                  <div className="progress-bar">
                    <div className="progress-fill primary" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>

              <div className="stat-card success">
                <div className="stat-header">
                  <div className="stat-icon">👥</div>
                  <div className="stat-trend up">+25%</div>
                </div>
                <div className="stat-body">
                  <div className="stat-number">
                    <Counter end={stats.candidates} />
                  </div>
                  <div className="stat-label">مطور مهتم</div>
                </div>
                <div className="stat-progress">
                  <div className="progress-bar">
                    <div className="progress-fill success" style={{width: '60%'}}></div>
                  </div>
                </div>
              </div>

              <div className="stat-card info">
                <div className="stat-header">
                  <div className="stat-icon">✅</div>
                  <div className="stat-trend up">+8%</div>
                </div>
                <div className="stat-body">
                  <div className="stat-number">
                    <Counter end={stats.projects} />
                  </div>
                  <div className="stat-label">مشروع مكتمل</div>
                </div>
                <div className="stat-progress">
                  <div className="progress-bar">
                    <div className="progress-fill info" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>

              <div className="stat-card warning">
                <div className="stat-header">
                  <div className="stat-icon">🤝</div>
                  <div className="stat-trend up">+15%</div>
                </div>
                <div className="stat-body">
                  <div className="stat-number">
                    <Counter end={stats.contracts} />
                  </div>
                  <div className="stat-label">عقد نشط</div>
                </div>
                <div className="stat-progress">
                  <div className="progress-bar">
                    <div className="progress-fill warning" style={{width: '40%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div className="activity-section">
              <div className="section-header">
                <h3 className="section-title">النشاط الأخير</h3>
                <button className="view-all-btn">عرض الكل</button>
              </div>
              <div className="activity-feed">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="activity-item">
                    <div className="activity-icon">{activity.icon}</div>
                    <div className="activity-content">
                      <p className="activity-message">{activity.message}</p>
                      <span className="activity-time">{activity.time}</span>
                    </div>
                    <div className="activity-indicator"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
              <h3 className="section-title">إجراءات سريعة</h3>
              <div className="actions-grid">
                <button className="action-card">
                  <div className="action-icon">➕</div>
                  <span className="action-label">إضافة وظيفة</span>
                </button>
                <button className="action-card">
                  <div className="action-icon">📤</div>
                  <span className="action-label">إرسال إعلان</span>
                </button>
                <button className="action-card">
                  <div className="action-icon">📊</div>
                  <span className="action-label">تقرير شهري</span>
                </button>
                <button className="action-card">
                  <div className="action-icon">⚙️</div>
                  <span className="action-label">الإعدادات</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="jobs-content">
            <div className="content-header">
              <h2 className="content-title">إدارة الوظائف</h2>
              <button className="primary-btn">+ وظيفة جديدة</button>
            </div>
            <div className="jobs-grid">
              {[1, 2, 3, 4].map((job) => (
                <div key={job} className="job-card">
                  <div className="job-header">
                    <h4>Frontend Developer</h4>
                    <span className="job-status active">نشطة</span>
                  </div>
                  <p className="job-description">نبحث عن مطور frontend محترف...</p>
                  <div className="job-stats">
                    <span>👥 12 متقدم</span>
                    <span>📅 منذ 3 أيام</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'candidates' && (
          <div className="candidates-content">
            <div className="content-header">
              <h2 className="content-title">المرشحون</h2>
              <div className="filter-buttons">
                <button className="filter-btn active">الكل</button>
                <button className="filter-btn">جديد</button>
                <button className="filter-btn">قيد المراجعة</button>
              </div>
            </div>
            <div className="candidates-list">
              {[1, 2, 3, 4, 5].map((candidate) => (
                <div key={candidate} className="candidate-card">
                  <div className="candidate-avatar">AH</div>
                  <div className="candidate-info">
                    <h4>أحمد حسن</h4>
                    <p>Full Stack Developer</p>
                    <div className="candidate-skills">
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">MongoDB</span>
                    </div>
                  </div>
                  <div className="candidate-actions">
                    <button className="view-btn">عرض</button>
                    <button className="contact-btn">تواصل</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default CompanyModernDashboard;
