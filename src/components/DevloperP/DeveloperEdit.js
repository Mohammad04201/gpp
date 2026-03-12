import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDeveloperById } from './developersData';

function DeveloperEdit() {
  const { id } = useParams();
  const developerId = parseInt(id) || 1;
  const developer = getDeveloperById(developerId);
  
  const [formData, setFormData] = useState({
    name: developer?.name || '',
    title: developer?.title || '',
    location: developer?.location || '',
    bio: developer?.bio || '',
    experience: developer?.experience || 0,
    available: developer?.available || false
  });
  
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedData = localStorage.getItem(`developer_${developerId}_profile`);
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData);
    }
  }, [developerId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSave = () => {
    try {
      localStorage.setItem(`developer_${developerId}_profile`, JSON.stringify(formData));
      setMessage('تم حفظ التعديلات بنجاح!');
      setIsEditing(false);
      
      if (developer) {
        Object.assign(developer, formData);
      }
    } catch (error) {
      setMessage('حدث خطأ أثناء الحفظ. يرجى المحاولة مرة أخرى.');
      console.error('Error saving profile:', error);
    }
  };

  const handleCancel = () => {
    if (developer) {
      setFormData({
        name: developer.name,
        title: developer.title,
        location: developer.location,
        bio: developer.bio,
        experience: developer.experience,
        available: developer.available
      });
    }
    setIsEditing(false);
    setMessage('');
  };

  const handleEdit = () => {
    setIsEditing(true);
    setMessage('');
  };

  if (!developer) {
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

  return (
    <div className="min-vh-100 bg-[#20232A] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">تعديل الملف الشخصي</h1>
          <p className="text-gray-400">لـ {developer.name}</p>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg ${
            message.includes('نجاح') 
              ? 'bg-green-500 text-white' 
              : 'bg-red-500 text-white'
          }`}>
            {message}
          </div>
        )}

        <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">الاسم الكامل</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">المسمى الوظيفي</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">الموقع</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">سنوات الخبرة</label>
                <input
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  min="0"
                  max="50"
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">نبذة شخصية</label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  rows="6"
                  className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors disabled:opacity-50 resize-none"
                />
              </div>

              <div className="flex items-center gap-3">
                <label className="flex items-center gap-2 text-sm font-medium text-gray-300">
                  <input
                    type="checkbox"
                    name="available"
                    checked={formData.available}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500 disabled:opacity-50"
                  />
                  متاح للعمل
                </label>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#3a4750]">
            <div className="flex items-center gap-3">
              <Link 
                to={`/developer/profile/${developerId}`}
                className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
              >
                العودة للملف الشخصي
              </Link>
              
              <Link 
                to={`/developer/skills/${developerId}`}
                className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                إدارة المهارات
              </Link>
            </div>

            <div className="flex items-center gap-3">
              {!isEditing ? (
                <button
                  onClick={handleEdit}
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  تعديل المعلومات
                </button>
              ) : (
                <>
                  <button
                    onClick={handleSave}
                    className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    حفظ التعديلات
                  </button>
                  
                  <button
                    onClick={handleCancel}
                    className="px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 font-medium"
                  >
                    إلغاء
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 p-6 bg-[#282C34] rounded-xl border border-[#3a4750]">
          <h3 className="text-xl font-semibold mb-4">البيانات الحالية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">المعلومات الأساسية</h4>
              <div className="space-y-2">
                <p><span className="text-gray-400">الاسم:</span> <span className="text-white">{formData.name}</span></p>
                <p><span className="text-gray-400">المسمى:</span> <span className="text-white">{formData.title}</span></p>
                <p><span className="text-gray-400">الموقع:</span> <span className="text-white">{formData.location}</span></p>
                <p><span className="text-gray-400">الخبرة:</span> <span className="text-white">{formData.experience} سنوات</span></p>
                <p><span className="text-gray-400">الحالة:</span> 
                  <span className={`px-2 py-1 rounded text-xs ${formData.available ? 'bg-green-500' : 'bg-yellow-500'} text-white`}>
                    {formData.available ? 'متاح للعمل' : 'مشغول'}
                  </span>
                </p>
              </div>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">النبذة الشخصية</h4>
              <p className="text-gray-300 leading-relaxed">
                {formData.bio || 'لا توجد نبذة شخصية'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeveloperEdit;
