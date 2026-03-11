import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDeveloperById } from './developersData';
import { getSkillLevelColor, getSkillLevelText, getDeveloperInitials } from './helpers';
import EditProfileOverlay from './user/EditProfileOverlay';
import { loadUserData, mergeUserData, calculateCompletion } from './user/userDataManager';

function DeveloperProfile() {
  const { id } = useParams();
  const developerId = id || '1';
  const baseDeveloper = getDeveloperById(developerId);
  
  const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);

  // تحميل البيانات عند بدء الصفحة
  useEffect(() => {
    if (baseDeveloper) {
      const merged = mergeUserData(developerId, baseDeveloper);
      setUserData(merged);
      setIsLoaded(true);
    }
  }, [developerId, baseDeveloper]);

  // تحديث البيانات بعد التعديل
  const handleSave = (newData) => {
    setUserData(newData);
    setIsEditing(false);
  };

  if (!isLoaded || !userData) {
    return (
      <div className="min-vh-100 bg-[#20232A] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>جاري التحميل...</p>
        </div>
      </div>
    );
  }

  if (!baseDeveloper) {
    return (
      <div className="min-vh-100 bg-[#20232A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">المطور غير موجود</h1>
          <Link to="/developers" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            العودة للمطورين
          </Link>
        </div>
      </div>
    );
  }

  const initials = getDeveloperInitials(userData.name);
  const profileCompletion = calculateCompletion(userData);

  // حساب الإحصائيات
  const skillLevelPercent = Math.min((userData.skills?.length || 0) * 10, 100);
  const projectLevelPercent = Math.min((userData.projects?.length || 0) * 20, 100);
  const experienceLevelPercent = Math.min((userData.experience || 0) * 10, 100);

  // بيانات التواصل
  const socialAccounts = [
    { 
      name: 'LinkedIn', 
      url: userData.linkedin || `linkedin.com/in/${userData.name?.toLowerCase().replace(/\s+/g, '-')}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
        </svg>
      ),
      color: 'bg-blue-600'
    },
    { 
      name: 'GitHub', 
      url: userData.github || `github.com/${userData.name?.toLowerCase().replace(/\s+/g, '')}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 2.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
        </svg>
      ),
      color: 'bg-gray-800'
    },
    { 
      name: 'Email', 
      url: userData.email || `${userData.name?.toLowerCase().replace(/\s+/g, '.')}@example.com`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      color: 'bg-red-500'
    },
    { 
      name: 'Phone', 
      url: userData.phone || '+966 50 123 4567',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
        </svg>
      ),
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="min-vh-100 bg-[#20232A] text-white relative">
      {/* زر التعديل العائم */}
      <button
        onClick={() => setIsEditing(true)}
        className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-90 group"
        title="تعديل الملف الشخصي"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
        <span className="absolute left-full ml-3 px-3 py-1 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          تعديل الملف
        </span>
      </button>

      {/* نافذة التعديل المنبثقة */}
      {isEditing && (
        <EditProfileOverlay 
          userData={userData} 
          onSave={handleSave} 
          onCancel={() => setIsEditing(false)} 
        />
      )}

      <div className="container mx-auto px-4 py-8">
        
        {/* Profile Header with Completion */}
        <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-[#3a4750] to-[#4a5568] rounded-xl flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{initials}</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#282C34] rounded-full flex items-center justify-center border-2 border-[#3a4750]">
                <span className="text-xs font-bold text-green-400">{profileCompletion}%</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-3xl font-bold mb-2">{userData.name}</h1>
              <p className="text-xl text-gray-300 mb-4">{userData.title}</p>
              
              <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-400 mb-1">
                  <span>نسبة اكتمال الملف</span>
                  <span>{profileCompletion}%</span>
                </div>
                <div className="w-full bg-[#3a4750] rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500"
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400">
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  {userData.location}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  {userData.experience} سنوات خبرة
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${userData.available ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                  {userData.available ? 'متاح للعمل' : 'مشغول'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Left Sidebar - Contact & Social */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
              <div className="space-y-3">
                {socialAccounts.map((account, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${account.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {account.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400">{account.name}</p>
                      <p className="text-sm text-white truncate" title={account.url}>{account.url}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-lg font-semibold mb-4">إحصائيات سريعة</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">{userData.stats?.views || 0}</div>
                  <div className="text-xs text-gray-400">مشاهدة</div>
                </div>
                <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{userData.stats?.likes || 0}</div>
                  <div className="text-xs text-gray-400">إعجاب</div>
                </div>
                <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">{userData.stats?.connections || 0}</div>
                  <div className="text-xs text-gray-400">تواصل</div>
                </div>
                <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">{userData.projects?.length || 0}</div>
                  <div className="text-xs text-gray-400">مشاريع</div>
                </div>
              </div>
            </div>

            {/* CV Download Section */}
            {userData.cvFile?.name && (
              <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
                <h3 className="text-lg font-semibold mb-4">السيرة الذاتية</h3>
                <div className="flex items-center gap-3 bg-[#1a1d23] p-4 rounded-lg">
                  <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium truncate">{userData.cvFile.name}</p>
                    <p className="text-gray-400 text-sm">
                      {(userData.cvFile.size / 1024).toFixed(1)} KB
                    </p>
                  </div>
                </div>
                <a
                  href={userData.cvFile.data}
                  download={userData.cvFile.name}
                  className="w-full mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  تحميل السيرة الذاتية
                </a>
                {userData.cvFile.type === 'application/pdf' && (
                  <a
                    href={userData.cvFile.data}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors text-center flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    معاينة الملف
                  </a>
                )}
              </div>
            )}

            {/* CV Level */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-lg font-semibold mb-4">مستوى السيرة الذاتية</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-400 text-sm">المهارات التقنية</span>
                    <span className="text-green-400 font-bold text-sm">{skillLevelPercent}%</span>
                  </div>
                  <div className="w-full bg-[#3a4750] rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-green-500 transition-all duration-500"
                      style={{ width: `${skillLevelPercent}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-400 text-sm">المشاريع</span>
                    <span className="text-blue-400 font-bold text-sm">{projectLevelPercent}%</span>
                  </div>
                  <div className="w-full bg-[#3a4750] rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-blue-500 transition-all duration-500"
                      style={{ width: `${projectLevelPercent}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-400 text-sm">الخبرة</span>
                    <span className="text-purple-400 font-bold text-sm">{experienceLevelPercent}%</span>
                  </div>
                  <div className="w-full bg-[#3a4750] rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-purple-500 transition-all duration-500"
                      style={{ width: `${experienceLevelPercent}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] overflow-hidden">
              <div className="flex border-b border-[#3a4750]">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`px-6 py-3 font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  نظرة عامة
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`px-6 py-3 font-medium transition-colors ${
                    activeTab === 'skills'
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  المهارات ({userData.skills?.length || 0})
                </button>
                <button
                  onClick={() => setActiveTab('projects')}
                  className={`px-6 py-3 font-medium transition-colors ${
                    activeTab === 'projects'
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  المشاريع ({userData.projects?.length || 0})
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <div>
                    {/* Bio Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">نبذة عني</h2>
                      <p className="text-gray-300 leading-relaxed">{userData.bio || 'لا توجد نبذة شخصية'}</p>
                    </div>

                    {/* Skills Preview */}
                    {(userData.skills?.length || 0) > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">المهارات الرئيسية</h3>
                        <div className="flex flex-wrap gap-2">
                          {userData.skills.slice(0, 8).map((skill, index) => (
                            <div key={index} className="flex items-center gap-1 bg-[#1a1d23] rounded-lg px-3 py-2">
                              <span className="text-white text-sm">{skill.name}</span>
                              <span className={`px-1.5 py-0.5 rounded text-xs ${getSkillLevelColor(skill.level)} text-white`}>
                                {getSkillLevelText(skill.level)}
                              </span>
                            </div>
                          ))}
                          {(userData.skills?.length || 0) > 8 && (
                            <span className="px-3 py-2 bg-[#1a1d23] text-gray-400 rounded-lg text-sm">
                              +{(userData.skills?.length || 0) - 8} مهارات أخرى
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Projects Preview */}
                    {(userData.projects?.length || 0) > 0 && (
                      <div>
                        <h3 className="text-xl font-semibold mb-4">أحدث المشاريع</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {userData.projects.slice(0, 2).map((project, index) => (
                            <div key={index} className="bg-[#1a1d23] rounded-lg p-4">
                              <h4 className="font-semibold text-white mb-2">{project.name}</h4>
                              <div className="flex flex-wrap gap-1 mb-2">
                                {project.tech?.slice(0, 3).map((tech, techIndex) => (
                                  <span key={techIndex} className="px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs">
                                    {tech}
                                  </span>
                                ))}
                                {(project.tech?.length || 0) > 3 && (
                                  <span className="px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs">
                                    +{(project.tech?.length || 0) - 3}
                                  </span>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'skills' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">المهارات التقنية</h2>
                    {(userData.skills?.length || 0) === 0 ? (
                      <div className="text-center py-12 text-gray-500">
                        <p>لا توجد مهارات مضافة بعد</p>
                        <p className="text-sm mt-2">اضغط على زر التعديل لإضافة مهاراتك</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {userData.skills.map((skill, index) => (
                          <div key={index} className="bg-[#1a1d23] rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-white font-medium">{skill.name}</span>
                              <span className={`px-2 py-1 rounded text-xs ${getSkillLevelColor(skill.level)} text-white`}>
                                {getSkillLevelText(skill.level)}
                              </span>
                            </div>
                            <div className="w-full bg-[#3a4750] rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  skill.level === 'Expert' ? 'bg-green-500 w-full' :
                                  skill.level === 'Advanced' ? 'bg-blue-500 w-4/5' :
                                  skill.level === 'Intermediate' ? 'bg-yellow-500 w-3/5' :
                                  'bg-gray-500 w-2/5'
                                }`}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'projects' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">المشاريع</h2>
                    {(userData.projects?.length || 0) === 0 ? (
                      <div className="text-center py-12 text-gray-500">
                        <p>لا توجد مشاريع مضافة بعد</p>
                        <p className="text-sm mt-2">اضغط على زر التعديل لإضافة مشاريعك</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {userData.projects.map((project, index) => (
                          <div key={index} className="bg-[#1a1d23] rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-3">{project.name}</h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tech?.map((tech, techIndex) => (
                                <span key={techIndex} className="px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <p className="text-gray-400">
                              مشروع متكامل يستخدم أحدث التقنيات لتقديم حلول مبتكرة في المجال.
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            to="/developers"
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            العودة للمطورين
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DeveloperProfile;
