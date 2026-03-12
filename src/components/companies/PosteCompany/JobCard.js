import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { postsData } from './postsData';

function JobCard({ post }) {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showCompanyInfo, setShowCompanyInfo] = useState(false);
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    cv: null
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'اليوم';
    if (diffDays === 1) return 'أمس';
    if (diffDays <= 7) return `منذ ${diffDays} أيام`;
    if (diffDays <= 30) return `منذ ${Math.floor(diffDays / 7)} أسابيع`;
    return `منذ ${Math.floor(diffDays / 30)} شهور`;
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'bg-red-500 text-white';
      case 'medium':
        return 'bg-yellow-500 text-white';
      case 'low':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getUrgencyText = (urgency) => {
    switch (urgency) {
      case 'high':
        return 'عاجل';
      case 'medium':
        return 'متوسط';
      case 'low':
        return 'عادي';
      default:
        return 'عادي';
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
    setShowContactForm(false);
    setContactData({
      name: '',
      email: '',
      phone: '',
      message: '',
      cv: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setContactData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <div className="bg-[#282C34] rounded-xl border border-[#3a4750] overflow-hidden hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
      {/* Header */}
      <div className="p-6 border-b border-[#3a4750]">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-700 rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-white">{post.companyLogo}</span>
            </div>
            <div>
              <Link 
                to={`/company/profile/${post.companyId}`}
                className="text-white font-semibold hover:text-blue-400 transition-colors"
              >
                {post.companyName}
              </Link>
              <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                <span>{post.companyLocation}</span>
                <span>•</span>
                <span>{post.companySize}</span>
                <span>•</span>
                <span>{post.companyIndustry}</span>
              </div>
            </div>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(post.urgency)}`}>
            {getUrgencyText(post.urgency)}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
        <p className="text-gray-400 mb-4 line-clamp-2">{post.description}</p>

        {/* Job Details */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
            </svg>
            <span>{post.experienceLevel}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.414l.707-.707zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"/>
            </svg>
            <span>{post.employmentType}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
            </svg>
            <span>{post.location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
            </svg>
            <span>{post.salary}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {post.skills.slice(0, 5).map((skill, index) => (
              <span key={index} className="px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs">
                {skill}
              </span>
            ))}
            {post.skills.length > 5 && (
              <span className="px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs">
                +{post.skills.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-4">
            <span>{post.applicants} متقدم</span>
            <span>{post.views} مشاهدة</span>
            <span>{formatDate(post.publishedAt)}</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => setShowContactForm(true)}
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
          >
            التقديم على الوظيفة
          </button>
          <button
            onClick={() => setShowCompanyInfo(true)}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-colors"
          >
            معلومات الشركة
          </button>
        </div>
      </div>

      {/* Contact Form Modal */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-white mb-4">التقديم على وظيفة: {post.title}</h3>
            
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm mb-2">الاسم الكامل *</label>
                <input
                  type="text"
                  name="name"
                  value={contactData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">البريد الإلكتروني *</label>
                <input
                  type="email"
                  name="email"
                  value={contactData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">رقم الهاتف *</label>
                <input
                  type="tel"
                  name="phone"
                  value={contactData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">رسالة تعريفية</label>
                <textarea
                  name="message"
                  value={contactData.message}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="أخبرنا لماذا تريد الانضمام إلى فريقنا..."
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none resize-none"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">السيرة الذاتية (CV) *</label>
                <input
                  type="file"
                  name="cv"
                  onChange={handleInputChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  إرسال الطلب
                </button>
                <button
                  type="button"
                  onClick={() => setShowContactForm(false)}
                  className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Company Info Modal */}
      {showCompanyInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-700 rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{post.companyLogo}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{post.companyName}</h3>
                <p className="text-gray-400">{post.companyIndustry}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#1a1d23] rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">معلومات الشركة</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">الموقع:</span>
                    <span className="text-white">{post.companyLocation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">الحجم:</span>
                    <span className="text-white">{post.companySize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">المجال:</span>
                    <span className="text-white">{post.companyIndustry}</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#1a1d23] rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">طرق التواصل</h4>
                <div className="space-y-3">
                  <a href={`mailto:${post.companyEmail || 'info@company.com'}`} className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                    <span>{post.companyEmail || 'info@company.com'}</span>
                  </a>
                  
                  <a href={`tel:${post.companyPhone || '+966500000000'}`} className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span>{post.companyPhone || '+966 50 123 4567'}</span>
                  </a>
                  
                  <a href={post.companyWebsite || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm-1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd"/>
                    </svg>
                    <span>زيارة الموقع الإلكتروني</span>
                  </a>
                </div>
              </div>

              <div className="bg-[#1a1d23] rounded-lg p-4">
                <h4 className="text-white font-medium mb-3">عن الشركة</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {post.companyDescription || 'شركة رائدة في مجال ' + post.companyIndustry + '، نعمل على توفير أفضل الحلول والخدمات لعملائنا. نسعى دائماً للابتكار والتطور في جميع جوانب أعمالنا.'}
                </p>
              </div>
            </div>

            <div className="flex gap-3 pt-4">
              <button
                onClick={() => setShowContactForm(true)}
                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
              >
                التقديم على الوظيفة
              </button>
              <button
                onClick={() => setShowCompanyInfo(false)}
                className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Component for displaying all job posts
function JobPostsList() {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = postsData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filter === 'all') return matchesSearch;
    return matchesSearch && post.urgency === filter;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="البحث عن وظائف، شركات، أو مهارات..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            {['all', 'high', 'medium', 'low'].map((priority) => (
              <button
                key={priority}
                onClick={() => setFilter(priority)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === priority
                    ? 'bg-blue-500 text-white'
                    : 'bg-[#3a4750] text-gray-300 hover:bg-[#4a5760]'
                }`}
              >
                {priority === 'all' ? 'الكل' : 
                 priority === 'high' ? 'عاجل' :
                 priority === 'medium' ? 'متوسط' : 'عادي'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Job Posts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredPosts.map((post) => (
          <JobCard key={post.id} post={post} />
        ))}
      </div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-[#282C34] rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-400 mb-2">لا توجد وظائف مطابقة</h3>
          <p className="text-gray-500">جرب تغيير معايير البحث أو الفلترة</p>
        </div>
      )}
    </div>
  );
}

export { JobCard, JobPostsList };
export default JobPostsList;
