import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import EditCompanyOverlay from './EditCompanyOverlay';
import { mergeCompanyData, calculateCompletion, getCompanyLevel } from './user/companyDataManager';

// بيانات افتراضية للشركة
const defaultCompanyData = {
  companyName: 'Mawhiba AI Technologies',
  title: 'شركة تقنية رائدة في التوظيف الذكي',
  description: 'نقوم بتوصيل أفضل المواهب التقنية في العالم العربي بالشركات الرائدة من خلال الذكاء الاصطناعي وتحليل المهارات الحقيقية.',
  email: 'info@mawhiba.ai',
  phone: '+966 50 123 4567',
  location: 'الرياض، السعودية',
  website: 'https://mawhiba.ai',
  established: '2020',
  employees: '150',
  rating: 4.8,
  industry: 'تقنية المعلومات',
  companyType: 'شركة ناشئة',
  social: {
    github: 'https://github.com/mawhiba',
    linkedin: 'https://linkedin.com/company/mawhiba',
    twitter: '',
    facebook: ''
  },
  departments: [],
  stats: {
    views: 0,
    likes: 0,
    followers: 0
  }
};

function CompanyProfileView() {
  const { id } = useParams();
  const companyId = id || '1';
  
  const [companyData, setCompanyData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoaded, setIsLoaded] = useState(false);

  // تحميل البيانات عند بدء الصفحة
  useEffect(() => {
    const merged = mergeCompanyData(companyId, defaultCompanyData);
    setCompanyData(merged);
    setIsLoaded(true);
  }, [companyId]);

  // تحديث البيانات بعد التعديل
  const handleSave = (newData) => {
    setCompanyData(newData);
    setIsEditing(false);
  };

  if (!isLoaded || !companyData) {
    return (
      <div className="min-vh-100 bg-[#20232A] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p>جاري التحميل...</p>
        </div>
      </div>
    );
  }

  const initials = companyData.companyName?.split(' ').map(word => word[0]).join('').substring(0, 2) || 'CO';
  const profileCompletion = calculateCompletion(companyData);
  const companyLevel = getCompanyLevel(profileCompletion);

  // بيانات التواصل
  const socialAccounts = [
    { 
      name: 'LinkedIn', 
      url: companyData.social?.linkedin || '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.779 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd"/>
        </svg>
      ),
      color: 'bg-blue-600'
    },
    { 
      name: 'GitHub', 
      url: companyData.social?.github || '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 2.836c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.308.678.92.678 1.852 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
        </svg>
      ),
      color: 'bg-gray-800'
    },
    { 
      name: 'Twitter', 
      url: companyData.social?.twitter || '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"/>
        </svg>
      ),
      color: 'bg-blue-400'
    },
    { 
      name: 'Email', 
      url: `mailto:${companyData.email}`,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
        </svg>
      ),
      color: 'bg-red-500'
    }
  ].filter(account => account.url && account.url !== '#');

  return (
    <div className="min-vh-100 bg-[#20232A] text-white relative">
      {/* زر التعديل العائم */}
      <button
        onClick={() => setIsEditing(true)}
        className="fixed bottom-8 left-8 z-40 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:rotate-90 group"
        title="تعديل ملف الشركة"
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
        <EditCompanyOverlay 
          companyData={companyData} 
          onSave={handleSave} 
          onCancel={() => setIsEditing(false)} 
        />
      )}

      <div className="container mx-auto px-4 py-8">
        
        {/* Profile Header with Completion */}
        <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                <span className="text-4xl font-bold text-white">{initials}</span>
              </div>
              <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-[#282C34] rounded-full flex items-center justify-center border-2 border-[#3a4750]">
                <span className="text-xs font-bold text-green-400">{profileCompletion}%</span>
              </div>
            </div>
            
            <div className="flex-1 text-center md:text-right">
              <h1 className="text-3xl font-bold mb-2">{companyData.companyName}</h1>
              <p className="text-blue-400 text-lg mb-3">{companyData.title}</p>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  {companyData.location}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                  </svg>
                  تأسست {companyData.established}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                  </svg>
                  {companyData.employees} موظف
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full max-w-md mx-auto md:mx-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-gray-400">اكتمال الملف</span>
                  <span className={`text-sm font-bold ${companyLevel.color}`}>{companyLevel.level}</span>
                </div>
                <div className="w-full bg-[#3a4750] rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${companyLevel.bgColor} transition-all duration-500`}
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          
          {/* Left Sidebar - Contact & Stats */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-lg font-semibold mb-4">معلومات التواصل</h3>
              <div className="space-y-3">
                {socialAccounts.map((account, index) => (
                  <a 
                    key={index} 
                    href={account.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 hover:bg-[#1a1d23] p-2 rounded-lg transition-colors"
                  >
                    <div className={`w-10 h-10 ${account.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {account.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-400">{account.name}</p>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-3 p-2">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400">الهاتف</p>
                    <p className="text-sm text-white">{companyData.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.083A1 1 0 006 4.55c-.577 1.333-.786 3.078-.917 4.45zm6.25 0h-2.666c.1-1.333.5-2.667 1.333-3.667.833 1 1.233 2.333 1.333 3.667zm2.834 0h1.946c-.131-1.372-.34-3.117-.917-4.45a1 1 0 00-.866 1.417c.454 1.113.748 2.537.837 4.083zM10 15.5a3.5 3.5 0 003.5-3.5h-7a3.5 3.5 0 003.5 3.5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-400">الموقع</p>
                    <a href={companyData.website} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-400 hover:underline">
                      {companyData.website?.replace('https://', '')}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-lg font-semibold mb-4">إحصائيات سريعة</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                  <div className="text-2xl font-bold text-blue-400">{companyData.stats?.views || 0}</div>
                  <div className="text-xs text-gray-400">مشاهدة</div>
                </div>
                <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                  <div className="text-2xl font-bold text-green-400">{companyData.stats?.likes || 0}</div>
                  <div className="text-xs text-gray-400">إعجاب</div>
                </div>
                <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                  <div className="text-2xl font-bold text-purple-400">{companyData.stats?.followers || 0}</div>
                  <div className="text-xs text-gray-400">متابع</div>
                </div>
                <div className="text-center p-3 bg-[#1a1d23] rounded-lg">
                  <div className="text-2xl font-bold text-yellow-400">{companyData.projects?.length || 0}</div>
                  <div className="text-xs text-gray-400">مشاريع</div>
                </div>
              </div>
            </div>

            {/* Company Info Card */}
            <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
              <h3 className="text-lg font-semibold mb-4">معلومات الشركة</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">المجال</span>
                  <span className="text-white text-sm">{companyData.industry || 'غير محدد'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">النوع</span>
                  <span className="text-white text-sm">{companyData.companyType || 'غير محدد'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">التقييم</span>
                  <span className="text-yellow-400 text-sm flex items-center gap-1">
                    ⭐ {companyData.rating || 0}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 text-sm">الحالة</span>
                  <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">
                    نشطة
                  </span>
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
                  onClick={() => setActiveTab('services')}
                  className={`px-6 py-3 font-medium transition-colors ${
                    activeTab === 'services'
                      ? 'text-blue-400 border-b-2 border-blue-400 bg-[#1a1d23]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  الأقسام ({companyData.departments?.length || 0})
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'overview' && (
                  <div>
                    {/* Description Section */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-4">عن الشركة</h2>
                      <p className="text-gray-300 leading-relaxed">{companyData.description || 'لا يوجد وصف للشركة'}</p>
                    </div>

                    {/* Departments Preview */}
                    {(companyData.departments?.length || 0) > 0 && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">الأقسام الوظيفية</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {companyData.departments.slice(0, 4).map((dept, index) => (
                            <div key={index} className="bg-[#1a1d23] rounded-lg p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h4 className="text-white font-medium">{dept.name}</h4>
                                {dept.isHiring && (
                                  <span className="px-2 py-1 bg-green-500 text-white rounded text-xs">
                                    نتوظف
                                  </span>
                                )}
                              </div>
                              <p className="text-gray-400 text-sm mb-2">{dept.description}</p>
                              <div className="flex items-center gap-2 text-blue-400 text-xs">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                                </svg>
                                {dept.employees} موظف
                              </div>
                            </div>
                          ))}
                        </div>
                        {(companyData.departments?.length || 0) > 4 && (
                          <button 
                            onClick={() => setActiveTab('services')}
                            className="mt-4 text-blue-400 hover:text-blue-300 text-sm"
                          >
                            عرض جميع الأقسام →
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'services' && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">الأقسام الوظيفية</h2>
                    {(companyData.departments?.length || 0) === 0 ? (
                      <div className="text-center py-12 text-gray-500">
                        <p>لا توجد أقسام مضافة بعد</p>
                        <p className="text-sm mt-2">اضغط على زر التعديل لإضافة أقسام</p>
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {companyData.departments.map((dept, index) => (
                          <div key={index} className="bg-[#1a1d23] rounded-lg p-4">
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="text-white font-medium text-lg">{dept.name}</h4>
                              {dept.isHiring ? (
                                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-xs font-medium">
                                  نتوظف
                                </span>
                              ) : (
                                <span className="px-3 py-1 bg-gray-600 text-white rounded-full text-xs font-medium">
                                  مكتمل
                                </span>
                              )}
                            </div>
                            <p className="text-gray-400 mb-3">{dept.description}</p>
                            <div className="flex items-center gap-2 text-blue-400 text-sm">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                              </svg>
                              {dept.employees} موظف
                            </div>
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
            to="/companies"
            className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            العودة للشركات
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CompanyProfileView;
