// ============================================
// Helper Functions for Developer Components
// ============================================

// Skill level types
export const SKILL_LEVELS = {
  EXPERT: 'Expert',
  ADVANCED: 'Advanced',
  INTERMEDIATE: 'Intermediate',
  BEGINNER: 'Beginner'
};

// Level colors
export const LEVEL_COLORS = {
  [SKILL_LEVELS.EXPERT]: 'bg-green-500',
  [SKILL_LEVELS.ADVANCED]: 'bg-blue-500',
  [SKILL_LEVELS.INTERMEDIATE]: 'bg-yellow-500',
  [SKILL_LEVELS.BEGINNER]: 'bg-gray-500'
};

// Level progress percentages
export const LEVEL_PROGRESS = {
  [SKILL_LEVELS.EXPERT]: 'w-full',
  [SKILL_LEVELS.ADVANCED]: 'w-4/5',
  [SKILL_LEVELS.INTERMEDIATE]: 'w-3/5',
  [SKILL_LEVELS.BEGINNER]: 'w-2/5'
};

// Level translations to English
export const LEVEL_TRANSLATIONS = {
  [SKILL_LEVELS.EXPERT]: 'Expert',
  [SKILL_LEVELS.ADVANCED]: 'Advanced',
  [SKILL_LEVELS.INTERMEDIATE]: 'Intermediate',
  [SKILL_LEVELS.BEGINNER]: 'Beginner'
};

// ============================================
// Helper functions for skills
// ============================================

export const getSkillLevelColor = (level) => LEVEL_COLORS[level] || LEVEL_COLORS[SKILL_LEVELS.BEGINNER];

export const getSkillLevelText = (level) => LEVEL_TRANSLATIONS[level] || LEVEL_TRANSLATIONS[SKILL_LEVELS.BEGINNER];

export const getSkillProgress = (level) => LEVEL_PROGRESS[level] || LEVEL_PROGRESS[SKILL_LEVELS.BEGINNER];

// Skill statistics calculation function
export const getSkillsStats = (skills) => {
  return {
    total: skills.length,
    advanced: skills.filter(s => s.level === SKILL_LEVELS.EXPERT || s.level === SKILL_LEVELS.ADVANCED).length,
    intermediate: skills.filter(s => s.level === SKILL_LEVELS.INTERMEDIATE).length,
    beginner: skills.filter(s => s.level === SKILL_LEVELS.BEGINNER).length
  };
};

// ============================================
// Helper functions for developers
// ============================================

export const getDeveloperInitials = (name) => {
  if (!name) return '';
  return name.split(' ').map(word => word[0]).join('').substring(0, 2);
};

export const formatExperience = (years) => {
  if (years === 1) return '1 year';
  if (years === 2) return '2 years';
  if (years <= 10) return `${years} years`;
  return `${years} years`;
};

export const getAvailabilityStatus = (available) => ({
  text: available ? 'Available for work' : 'Busy',
  className: available ? 'bg-green-500' : 'bg-yellow-500'
});

// ============================================
// LocalStorage Helpers
// ============================================

const STORAGE_KEYS = {
  PROFILE: (id) => `developer_${id}_profile`,
  SKILLS: (id) => `developer_${id}_skills`
};

export const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    return true;
  } catch (error) {
    console.error(`Error saving to localStorage [${key}]:`, error);
    return false;
  }
};

export const loadFromStorage = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Error loading from localStorage [${key}]:`, error);
    return null;
  }
};

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error(`Error removing from localStorage [${key}]:`, error);
    return false;
  }
};

export { STORAGE_KEYS };

// ============================================
// Validators
// ============================================

export const validateSkill = (skill) => {
  const errors = [];
  
  if (!skill.name?.trim()) {
    errors.push('Skill name is required');
  }
  
  if (!Object.values(SKILL_LEVELS).includes(skill.level)) {
    errors.push('Invalid skill level');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// ============================================
// Formatters
// ============================================

export const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const generateSocialLinks = (name) => {
  const cleanName = name.toLowerCase().replace(/\s+/g, '');
  return {
    email: `${cleanName}@example.com`,
    linkedin: `linkedin.com/in/${cleanName}`,
    github: `github.com/${cleanName}`,
    phone: '+966 50 123 4567'
  };
};
