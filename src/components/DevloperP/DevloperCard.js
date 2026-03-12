import React from 'react';
import { Link } from 'react-router-dom';
import { getSkillLevelColor, getSkillLevelText, getDeveloperInitials } from './helpers';

// مكون فرعي لعرض رأس البطاقة
function DeveloperHeader({ developer }) {
  const initials = getDeveloperInitials(developer.name);
  const statusClass = developer.available ? 'bg-green-500' : 'bg-yellow-500';
  const statusText = developer.available ? 'متاح للعمل' : 'مشغول';
  
  return (
    <div className="p-6 border-b border-[#3a4750]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-[#3a4750] to-[#4a5568] rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <span className="text-xl font-bold text-white">{initials}</span>
          </div>
          <div>
            <h3 className="font-bold text-white text-lg">{developer.name}</h3>
            <p className="text-sm text-gray-400">{developer.title}</p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
              </svg>
              {developer.location}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-bold ${statusClass} text-white`}>
          {statusText}
        </span>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
          </svg>
          {developer.experience} سنوات خبرة
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
          </svg>
          {developer.projects.length} مشاريع
        </span>
      </div>
    </div>
  );
}

// مكون عرض المهارات
function SkillsDisplay({ skills }) {
  const displaySkills = skills.slice(0, 4);
  const remainingCount = skills.length - 4;
  
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-400 mb-2">المهارات الرئيسية</h4>
      <div className="flex flex-wrap gap-2">
        {displaySkills.map((skill, index) => (
          <div key={index} className="flex items-center gap-1">
            <span className="px-2 py-1 bg-gradient-to-r from-[#3a4750] to-[#4a5568] text-gray-300 rounded text-xs font-medium">
              {skill.name}
            </span>
            <span className={`px-1 py-0.5 rounded text-xs ${getSkillLevelColor(skill.level)} text-white`}>
              {getSkillLevelText(skill.level)}
            </span>
          </div>
        ))}
        {remainingCount > 0 && (
          <span className="px-2 py-1 bg-gradient-to-r from-[#3a4750] to-[#4a5568] text-gray-400 rounded text-xs font-medium">
            +{remainingCount}
          </span>
        )}
      </div>
    </div>
  );
}

// مكون الإحصائيات
function StatsDisplay({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-3 mb-6 text-center">
      <div className="bg-[#1a1d23] rounded-lg p-3">
        <div className="text-lg font-bold text-blue-400">{stats.views}</div>
        <div className="text-xs text-gray-400">مشاهدة</div>
      </div>
      <div className="bg-[#1a1d23] rounded-lg p-3">
        <div className="text-lg font-bold text-green-400">{stats.likes}</div>
        <div className="text-xs text-gray-400">إعجاب</div>
      </div>
      <div className="bg-[#1a1d23] rounded-lg p-3">
        <div className="text-lg font-bold text-purple-400">{stats.connections}</div>
        <div className="text-xs text-gray-400">تواصل</div>
      </div>
    </div>
  );
}

// المكون الرئيسي - بطاقة المطور
function DevloperCard({ developer }) {
  if (!developer) return null;

  return (
    <div className="bg-[#282C34] rounded-xl border border-[#3a4750] hover:border-blue-500 transition-all duration-300 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 group">
      <DeveloperHeader developer={developer} />
      
      <div className="p-6">
        <p className="text-gray-300 mb-4 line-clamp-2 leading-relaxed">
          {developer.bio}
        </p>
        
        <SkillsDisplay skills={developer.skills} />
        <StatsDisplay stats={developer.stats} />
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-[#3a4750]">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="text-sm font-medium">تواصل</span>
            </button>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
              </svg>
              <span className="text-sm font-medium">{developer.stats.likes}</span>
            </button>
          </div>
          
          <Link 
            to={`/developer/profile/${developer.id}`}
            className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg hover:from-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 font-medium text-sm"
          >
            عرض الملف الشخصي
          </Link>
        </div>
      </div>
    </div>
  );
}

// مكون قائمة المطورين
function DevelopersList({ developers }) {
  if (!developers?.length) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl text-gray-400">لا يوجد مطورون لعرضهم</h3>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {developers.map((developer) => (
        <DevloperCard key={developer.id} developer={developer} />
      ))}
    </div>
  );
}

export default DevloperCard;
export { DevelopersList };
