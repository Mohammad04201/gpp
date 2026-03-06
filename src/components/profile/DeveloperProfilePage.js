import { useState } from 'react';
import MainNavbar from '../layout/MainNavbar';

function DeveloperProfilePage() {
  const [profile, setProfile] = useState({
    fullName: 'أحمد محمد',
    title: 'مطور واجهات أمامية',
    bio: 'مطور متخصص في React و JavaScript مع خبرة 3 سنوات في بناء تطبيقات ويب حديثة وسريعة الاستجابة',
    email: 'ahmed@example.com',
    phone: '+966 50 123 4567',
    location: 'الرياض، المملكة العربية السعودية',
    github: 'github.com/ahmeddev',
    linkedin: 'linkedin.com/in/ahmeddev'
  });

  const [skills, setSkills] = useState([
    { 
      id: 1, 
      name: 'React', 
      level: 'متقدم', 
      description: 'خبرة عميقة في React Hooks، Context API، وإدارة الحالة',
      years: 3
    },
    { 
      id: 2, 
      name: 'JavaScript', 
      level: 'متقدم', 
      description: 'ES6+، asynchronous programming، وتصميم الأنماط',
      years: 4
    },
    { 
      id: 3, 
      name: 'CSS/Tailwind', 
      level: 'متقدم', 
      description: 'تصميم متجاوب، animations، وتجربة المستخدم',
      years: 3
    },
    { 
      id: 4, 
      name: 'Node.js', 
      level: 'متوسط', 
      description: 'REST APIs، Express، والعمل مع قواعد البيانات',
      years: 2
    }
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState({ ...profile });

  const handleProfileUpdate = () => {
    setProfile({ ...editedProfile });
    setIsEditing(false);
  };

  const getLevelColor = (level) => {
    switch (level) {
      case 'متقدم': return 'success';
      case 'متوسط': return 'warning';
      case 'مبتدئ': return 'info';
      default: return 'secondary';
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column bg-dark text-white">
      <MainNavbar />
      <main className="flex-grow-1 py-5">
        <div className="container">
          {/* Profile Header */}
          <div className="row mb-4">
            <div className="col-12">
              <div className="glass-card">
                <div className="p-4">
                  <div className="row align-items-center">
                    <div className="col-md-3 text-center mb-3 mb-md-0">
                      <div className="profile-avatar-large mb-3">
                        <span className="avatar-initials-large">
                          {profile.fullName.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <button 
                        className="btn btn-primary btn-sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? 'إلغاء' : 'تعديل الملف الشخصي'}
                      </button>
                    </div>
                    
                    <div className="col-md-9">
                      {isEditing ? (
                        <div className="row g-3">
                          <div className="col-md-6">
                            <label className="form-label small">الاسم الكامل</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={editedProfile.fullName}
                              onChange={(e) => setEditedProfile({...editedProfile, fullName: e.target.value})}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label small">المسمى الوظيفي</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={editedProfile.title}
                              onChange={(e) => setEditedProfile({...editedProfile, title: e.target.value})}
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label small">الوصف الشخصي</label>
                            <textarea
                              className="form-control form-control-sm"
                              rows="3"
                              value={editedProfile.bio}
                              onChange={(e) => setEditedProfile({...editedProfile, bio: e.target.value})}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label small">البريد الإلكتروني</label>
                            <input
                              type="email"
                              className="form-control form-control-sm"
                              value={editedProfile.email}
                              onChange={(e) => setEditedProfile({...editedProfile, email: e.target.value})}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label small">رقم الهاتف</label>
                            <input
                              type="tel"
                              className="form-control form-control-sm"
                              value={editedProfile.phone}
                              onChange={(e) => setEditedProfile({...editedProfile, phone: e.target.value})}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label small">موقع السكن</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={editedProfile.location}
                              onChange={(e) => setEditedProfile({...editedProfile, location: e.target.value})}
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="form-label small">GitHub</label>
                            <input
                              type="text"
                              className="form-control form-control-sm"
                              value={editedProfile.github}
                              onChange={(e) => setEditedProfile({...editedProfile, github: e.target.value})}
                            />
                          </div>
                          <div className="col-12">
                            <button className="btn btn-success btn-sm" onClick={handleProfileUpdate}>
                              حفظ التغييرات
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <h1 className="h2 mb-2">{profile.fullName}</h1>
                          <p className="text-primary h5 mb-3">{profile.title}</p>
                          <p className="text-white-50 mb-4">{profile.bio}</p>
                          
                          <div className="row g-3">
                            <div className="col-md-6">
                              <div className="d-flex align-items-center mb-2">
                                <span className="contact-icon">📧</span>
                                <span className="me-2">{profile.email}</span>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <span className="contact-icon">📱</span>
                                <span className="me-2">{profile.phone}</span>
                              </div>
                              <div className="d-flex align-items-center">
                                <span className="contact-icon">📍</span>
                                <span className="me-2">{profile.location}</span>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="d-flex align-items-center mb-2">
                                <span className="contact-icon">💻</span>
                                <a href={`https://${profile.github}`} className="text-info me-2" target="_blank" rel="noopener noreferrer">
                                  {profile.github}
                                </a>
                              </div>
                              <div className="d-flex align-items-center">
                                <span className="contact-icon">💼</span>
                                <a href={`https://${profile.linkedin}`} className="text-info me-2" target="_blank" rel="noopener noreferrer">
                                  {profile.linkedin}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="row">
            <div className="col-12">
              <h2 className="h4 mb-4">المهارات التقنية</h2>
              <div className="row g-4">
                {skills.map((skill) => (
                  <div key={skill.id} className="col-md-6 col-lg-4">
                    <div className="glass-card h-100">
                      <div className="p-4">
                        <div className="d-flex justify-content-between align-items-start mb-3">
                          <h3 className="h5 mb-0">{skill.name}</h3>
                          <span className={`badge bg-${getLevelColor(skill.level)}`}>
                            {skill.level}
                          </span>
                        </div>
                        
                        <p className="text-white-50 small mb-3">
                          {skill.description}
                        </p>
                        
                        <div className="d-flex justify-content-between align-items-center">
                          <span className="text-white-50 small">
                            <span className="experience-icon">⏱️</span>
                            {skill.years} سنوات خبرة
                          </span>
                          <div className="skill-level-indicator">
                            {[...Array(5)].map((_, i) => (
                              <span 
                                key={i} 
                                className={`skill-dot ${i < (skill.level === 'متقدم' ? 5 : skill.level === 'متوسط' ? 3 : 1) ? 'active' : ''}`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Company View Message */}
          <div className="row mt-4">
            <div className="col-12">
              <div className="alert alert-info border-0" role="alert">
                <div className="d-flex align-items-center">
                  <span className="alert-icon">🏢</span>
                  <div className="me-3">
                    <strong>للشركات:</strong> هذا الملف الشخصي معروض بشكل احترافي ليساعدكم في تقييم المطورين بشكل أفضل.
                    جميع المعلومات متاحة للتواصل المباشر ومراجعة المهارات بشكل مفصل.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .profile-avatar-large {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        
        .avatar-initials-large {
          font-size: 2.5rem;
          font-weight: bold;
          color: white;
        }
        
        .contact-icon {
          font-size: 1.2rem;
          margin-left: 8px;
        }
        
        .experience-icon {
          font-size: 0.9rem;
        }
        
        .skill-level-indicator {
          display: flex;
          gap: 3px;
        }
        
        .skill-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #495057;
          transition: background-color 0.3s;
        }
        
        .skill-dot.active {
          background-color: #28a745;
        }
        
        .alert-icon {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}

export default DeveloperProfilePage;
