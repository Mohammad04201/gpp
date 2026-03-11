import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDeveloperById } from './developersData';
import { 
  addSkill, 
  updateSkill, 
  deleteSkill, 
  saveSkillsToStorage,
  loadSkillsFromStorage
} from '../../utils/skillsUtils';
import { getSkillLevelColor, getSkillLevelText, getSkillsStats } from './helpers';

function DeveloperSkills() {
  const { id } = useParams();
  const developerId = parseInt(id) || 1;
  const developer = getDeveloperById(developerId);
  const [skills, setSkills] = useState(developer ? developer.skills : []);
  const [newSkill, setNewSkill] = useState({ name: '', level: 'Beginner' });
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(() => {
    const savedSkills = loadSkillsFromStorage(developerId);
    if (savedSkills) {
      setSkills(savedSkills);
    }
  }, [developerId]);

  if (!developer) {
    return (
      <div className="min-vh-100 bg-[#20232A] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">المطور غير موجود</h1>
        </div>
      </div>
    );
  }

  const handleAddSkill = () => {
    if (editingIndex >= 0) {
      const updatedSkills = updateSkill(skills, editingIndex, newSkill);
      setSkills(updatedSkills);
      setEditingIndex(-1);
    } else {
      const updatedSkills = addSkill(skills, newSkill);
      setSkills(updatedSkills);
    }
    setNewSkill({ name: '', level: 'Beginner' });
    saveSkillsToStorage(developerId, skills);
  };

  const handleEditSkill = (index) => {
    setNewSkill(skills[index]);
    setEditingIndex(index);
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = deleteSkill(skills, index);
    setSkills(updatedSkills);
    saveSkillsToStorage(developerId, updatedSkills);
  };

  const handleCancelEdit = () => {
    setNewSkill({ name: '', level: 'Beginner' });
    setEditingIndex(-1);
  };

  const stats = getSkillsStats(skills);

  return (
    <div className="min-vh-100 bg-[#20232A] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">إدارة المهارات</h1>
          <p className="text-gray-400">لـ {developer.name} - {developer.title}</p>
        </div>

        <div className="bg-[#282C34] rounded-xl border border-[#3a4750] p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingIndex >= 0 ? 'تعديل مهارة' : 'إضافة مهارة جديدة'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">اسم المهارة</label>
              <input
                type="text"
                value={newSkill.name}
                onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
                placeholder="مثال: React, Python, JavaScript"
                className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">المستوى</label>
              <select
                value={newSkill.level}
                onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
                className="w-full px-4 py-2 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors"
              >
                <option value="Beginner">مبتدئ</option>
                <option value="Intermediate">متوسط</option>
                <option value="Advanced">متقدم</option>
                <option value="Expert">خبير</option>
              </select>
            </div>
            
            <div className="flex items-end gap-3">
              <button
                onClick={handleAddSkill}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 font-medium"
              >
                {editingIndex >= 0 ? 'تحديث' : 'إضافة'}
              </button>
              
              {editingIndex >= 0 && (
                <button
                  onClick={handleCancelEdit}
                  className="px-6 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105 font-medium"
                >
                  إلغاء
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="bg-[#282C34] rounded-xl border border-[#3a4750] overflow-hidden">
          <div className="p-6 border-b border-[#3a4750]">
            <h2 className="text-xl font-semibold">المهارات الحالية ({skills.length})</h2>
          </div>
          
          {skills.length > 0 ? (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="bg-[#1a1d23] rounded-lg p-4 border border-[#3a4750] hover:border-blue-500 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-lg font-semibold text-white">{skill.name}</span>
                        <span className={`px-2 py-1 rounded text-xs ${getSkillLevelColor(skill.level)} text-white`}>
                          {getSkillLevelText(skill.level)}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditSkill(index)}
                          className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                          title="تعديل"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                          </svg>
                        </button>
                        
                        <button
                          onClick={() => handleDeleteSkill(index)}
                          className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                          title="حذف"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="w-full bg-[#3a4750] rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${
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
              
              <div className="mt-6 pt-6 border-t border-[#3a4750]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-[#20232A] rounded-lg p-3">
                    <div className="text-2xl font-bold text-blue-400">{stats.total}</div>
                    <div className="text-sm text-gray-400">إجمالي المهارات</div>
                  </div>
                  <div className="bg-[#20232A] rounded-lg p-3">
                    <div className="text-2xl font-bold text-green-400">{stats.advanced}</div>
                    <div className="text-sm text-gray-400">مهارات متقدمة</div>
                  </div>
                  <div className="bg-[#20232A] rounded-lg p-3">
                    <div className="text-2xl font-bold text-yellow-400">{stats.intermediate}</div>
                    <div className="text-sm text-gray-400">مهارات متوسطة</div>
                  </div>
                  <div className="bg-[#20232A] rounded-lg p-3">
                    <div className="text-2xl font-bold text-gray-400">{stats.beginner}</div>
                    <div className="text-sm text-gray-400">مهارات مبتدئة</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-20 h-20 bg-gradient-to-br from-[#3a4750] to-[#4a5568] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                  <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 100 4h2a2 2 0 100-4h2a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V5z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">لا توجد مهارات مضافة</h3>
              <p className="text-gray-400 mb-6">ابدأ بإضافة مهاراتك باستخدام النموذج أعلاه</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeveloperSkills;
