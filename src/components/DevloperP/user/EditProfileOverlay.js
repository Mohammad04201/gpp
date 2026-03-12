import React, { useState, useEffect } from 'react';
import { saveUserData, calculateCompletion } from './userDataManager';

function EditProfileOverlay({ userData, onSave, onCancel }) {
  const [formData, setFormData] = useState(userData);
  const [activeSection, setActiveSection] = useState('basic');

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    saveUserData(formData.id || 'current_user', formData);
    onSave(formData);
  };

  const completion = calculateCompletion(formData);

  const sections = [
    { id: 'basic', label: 'معلومات أساسية', icon: '👤' },
    { id: 'contact', label: 'تواصل', icon: '📧' },
    { id: 'cv', label: 'السيرة الذاتية', icon: '📄' },
    { id: 'skills', label: 'مهارات', icon: '⚡' },
    { id: 'projects', label: 'مشاريع', icon: '🚀' }
  ];

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-[#282C34] rounded-2xl border border-[#3a4750] w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-[#3a4750] flex items-center justify-between bg-[#1a1d23]">
          <div>
            <h2 className="text-2xl font-bold text-white">تعديل الملف الشخصي</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-400">نسبة الاكتمال:</span>
              <div className="w-24 bg-[#3a4750] rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-green-500"
                  style={{ width: `${completion}%` }}
                ></div>
              </div>
              <span className="text-sm font-bold text-green-400">{completion}%</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleSave}
              className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              حفظ ✓
            </button>
            <button 
              onClick={onCancel}
              className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
            >
              إلغاء ✕
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-48 bg-[#1a1d23] border-l border-[#3a4750] p-4">
            {sections.map(section => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full text-right px-4 py-3 rounded-lg mb-2 flex items-center gap-3 transition-colors ${
                  activeSection === section.id 
                    ? 'bg-blue-500 text-white' 
                    : 'text-gray-400 hover:bg-[#282C34] hover:text-white'
                }`}
              >
                <span>{section.icon}</span>
                <span>{section.label}</span>
              </button>
            ))}
          </div>

          {/* Form Area */}
          <div className="flex-1 p-6 overflow-y-auto">
            
            {/* Basic Info Section */}
            {activeSection === 'basic' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">المعلومات الأساسية</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">الاسم الكامل</label>
                    <input
                      type="text"
                      value={formData.name || ''}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="أحمد محمد"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">المسمى الوظيفي</label>
                    <input
                      type="text"
                      value={formData.title || ''}
                      onChange={(e) => handleChange('title', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="مطور واجهات أمامية"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">الموقع</label>
                    <input
                      type="text"
                      value={formData.location || ''}
                      onChange={(e) => handleChange('location', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="الرياض، السعودية"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">سنوات الخبرة</label>
                    <input
                      type="number"
                      value={formData.experience || 0}
                      onChange={(e) => handleChange('experience', parseInt(e.target.value) || 0)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      min="0"
                      max="50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">نبذة شخصية</label>
                  <textarea
                    value={formData.bio || ''}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    rows="4"
                    className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 resize-none"
                    placeholder="اكتب نبذة مختصرة عنك وخبراتك..."
                  />
                </div>

                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-3 text-white cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.available || false}
                      onChange={(e) => handleChange('available', e.target.checked)}
                      className="w-5 h-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span>متاح للعمل</span>
                  </label>
                </div>
              </div>
            )}

            {/* Contact Section */}
            {activeSection === 'contact' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">معلومات التواصل</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">البريد الإلكتروني</label>
                    <input
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">رقم الهاتف</label>
                    <input
                      type="tel"
                      value={formData.phone || ''}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="+966 50 123 4567"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">LinkedIn</label>
                    <input
                      type="text"
                      value={formData.linkedin || ''}
                      onChange={(e) => handleChange('linkedin', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="linkedin.com/in/username"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">GitHub</label>
                    <input
                      type="text"
                      value={formData.github || ''}
                      onChange={(e) => handleChange('github', e.target.value)}
                      className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
                      placeholder="github.com/username"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* CV Section */}
            {activeSection === 'cv' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">السيرة الذاتية (CV)</h3>
                <CVUploader 
                  cvFile={formData.cvFile} 
                  onChange={(cvFile) => handleChange('cvFile', cvFile)} 
                />
              </div>
            )}

            {/* Skills Section */}
            {activeSection === 'skills' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">المهارات</h3>
                <SkillsEditor 
                  skills={formData.skills || []} 
                  onChange={(skills) => handleChange('skills', skills)} 
                />
              </div>
            )}

            {/* Projects Section */}
            {activeSection === 'projects' && (
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white mb-4">المشاريع</h3>
                <ProjectsEditor 
                  projects={formData.projects || []} 
                  onChange={(projects) => handleChange('projects', projects)} 
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// محرر السيرة الذاتية
function CVUploader({ cvFile, onChange }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileSelect = (file) => {
    if (!file) return;
    
    // التحقق من نوع الملف (PDF, DOC, DOCX)
    const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!validTypes.includes(file.type)) {
      alert('يرجى رفع ملف PDF أو Word فقط');
      return;
    }
    
    // التحقق من الحجم (5MB كحد أقصى)
    if (file.size > 5 * 1024 * 1024) {
      alert('حجم الملف يجب أن يكون أقل من 5 ميجابايت');
      return;
    }

    // محاكاة رفع الملف
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // حفظ الملف كـ Base64
          const reader = new FileReader();
          reader.onload = (e) => {
            onChange({
              name: file.name,
              size: file.size,
              type: file.type,
              data: e.target.result,
              uploadedAt: new Date().toISOString()
            });
          };
          reader.readAsDataURL(file);
          return 100;
        }
        return prev + 10;
      });
    }, 100);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    handleFileSelect(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const removeCV = () => {
    onChange(null);
    setUploadProgress(0);
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <div className="space-y-4">
      {/* رفع ملف جديد */}
      {!cvFile && (
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
            isDragging 
              ? 'border-blue-500 bg-blue-500/10' 
              : 'border-[#3a4750] hover:border-gray-500'
          }`}
        >
          <div className="w-16 h-16 mx-auto mb-4 bg-[#3a4750] rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          <p className="text-white font-medium mb-2">اسحب ملف CV هنا أو انقر للاختيار</p>
          <p className="text-gray-400 text-sm mb-4">PDF, DOC, DOCX (حتى 5MB)</p>
          <input
            type="file"
            accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            onChange={(e) => handleFileSelect(e.target.files[0])}
            className="hidden"
            id="cv-upload"
          />
          <label
            htmlFor="cv-upload"
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg cursor-pointer transition-colors inline-block"
          >
            اختيار ملف
          </label>

          {/* شريط التقدم */}
          {uploadProgress > 0 && uploadProgress < 100 && (
            <div className="mt-4">
              <div className="w-full bg-[#3a4750] rounded-full h-2">
                <div 
                  className="h-2 rounded-full bg-blue-500 transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-400 mt-2">جاري الرفع... {uploadProgress}%</p>
            </div>
          )}
        </div>
      )}

      {/* عرض الملف المرفوع */}
      {cvFile && (
        <div className="bg-[#1a1d23] rounded-xl p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-white font-medium truncate">{cvFile.name}</h4>
              <p className="text-gray-400 text-sm">{formatFileSize(cvFile.size)} • تم الرفع {new Date(cvFile.uploadedAt).toLocaleDateString('ar-SA')}</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={cvFile.data}
                download={cvFile.name}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm"
              >
                تحميل
              </a>
              <button
                onClick={removeCV}
                className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors text-sm"
              >
                حذف
              </button>
            </div>
          </div>

          {/* معاينة PDF */}
          {cvFile.type === 'application/pdf' && (
            <div className="border border-[#3a4750] rounded-lg overflow-hidden">
              <div className="bg-[#282C34] p-3 border-b border-[#3a4750]">
                <span className="text-sm text-gray-400">معاينة الملف</span>
              </div>
              <iframe
                src={cvFile.data}
                className="w-full h-64 bg-white"
                title="CV Preview"
              />
            </div>
          )}

          {/* للملفات غير PDF */}
          {cvFile.type !== 'application/pdf' && (
            <div className="border border-[#3a4750] rounded-lg p-6 text-center">
              <p className="text-gray-400 mb-2">المعاينة غير متاحة لملفات Word</p>
              <a
                href={cvFile.data}
                download={cvFile.name}
                className="text-blue-400 hover:text-blue-300 underline"
              >
                تحميل الملف لمعاينته
              </a>
            </div>
          )}
        </div>
      )}

      {/* نصائح */}
      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
        <h5 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
          </svg>
          نصائح لسيرة ذاتية ناجحة
        </h5>
        <ul className="text-gray-400 text-sm space-y-1 mr-5">
          <li>• استخدم صيغة PDF للحفاظ على التنسيق</li>
          <li>• حافظ على الملف أقل من صفحتين</li>
          <li>• استخدم كلمات مفتاحية متعلقة بمجالك</li>
          <li>• راجع الملف إملائياً قبل الرفع</li>
        </ul>
      </div>
    </div>
  );
}

// محرر المهارات
function SkillsEditor({ skills, onChange }) {
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Intermediate' });

  const addSkill = () => {
    if (newSkill.name.trim()) {
      onChange([...skills, { ...newSkill, name: newSkill.name.trim() }]);
      setNewSkill({ name: '', level: 'Intermediate' });
    }
  };

  const removeSkill = (index) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  const levels = [
    { value: 'Beginner', label: 'مبتدئ' },
    { value: 'Intermediate', label: 'متوسط' },
    { value: 'Advanced', label: 'متقدم' },
    { value: 'Expert', label: 'خبير' }
  ];

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <input
          type="text"
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          placeholder="اسم المهارة..."
          className="flex-1 px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && addSkill()}
        />
        <select
          value={newSkill.level}
          onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
          className="px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
        >
          {levels.map(l => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
        <button
          onClick={addSkill}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          إضافة +
        </button>
      </div>

      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center justify-between bg-[#1a1d23] p-3 rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-white font-medium">{skill.name}</span>
              <span className="px-2 py-1 bg-[#3a4750] text-gray-300 rounded text-xs">
                {levels.find(l => l.value === skill.level)?.label}
              </span>
            </div>
            <button
              onClick={() => removeSkill(index)}
              className="text-red-400 hover:text-red-300 px-2 py-1"
            >
              حذف
            </button>
          </div>
        ))}
        {skills.length === 0 && (
          <p className="text-gray-500 text-center py-4">لا توجد مهارات مضافة بعد</p>
        )}
      </div>
    </div>
  );
}

// محرر المشاريع
function ProjectsEditor({ projects, onChange }) {
  const [newProject, setNewProject] = useState({ name: '', tech: '' });

  const addProject = () => {
    if (newProject.name.trim()) {
      const techArray = newProject.tech.split(',').map(t => t.trim()).filter(Boolean);
      onChange([...projects, { name: newProject.name.trim(), tech: techArray }]);
      setNewProject({ name: '', tech: '' });
    }
  };

  const removeProject = (index) => {
    onChange(projects.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-3">
        <input
          type="text"
          value={newProject.name}
          onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
          placeholder="اسم المشروع..."
          className="flex-1 px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          value={newProject.tech}
          onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })}
          placeholder="التقنيات (مفصولة بفاصلة)"
          className="flex-1 px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500"
          onKeyPress={(e) => e.key === 'Enter' && addProject()}
        />
        <button
          onClick={addProject}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
        >
          إضافة +
        </button>
      </div>

      <div className="space-y-2">
        {projects.map((project, index) => (
          <div key={index} className="flex items-center justify-between bg-[#1a1d23] p-3 rounded-lg">
            <div>
              <span className="text-white font-medium">{project.name}</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 bg-[#3a4750] text-gray-300 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => removeProject(index)}
              className="text-red-400 hover:text-red-300 px-2 py-1"
            >
              حذف
            </button>
          </div>
        ))}
        {projects.length === 0 && (
          <p className="text-gray-500 text-center py-4">لا توجد مشاريع مضافة بعد</p>
        )}
      </div>
    </div>
  );
}

export default EditProfileOverlay;
