// دوال مساعدة لإدارة المهارات

// دالة إضافة مهارة
export const addSkill = (skills, newSkill) => {
  if (newSkill.name.trim()) {
    return [...skills, newSkill];
  }
  return skills;
};

// دالة تعديل مهارة
export const updateSkill = (skills, index, updatedSkill) => {
  const updatedSkills = [...skills];
  updatedSkills[index] = updatedSkill;
  return updatedSkills;
};

// دالة حذف مهارة
export const deleteSkill = (skills, index) => {
  return skills.filter((_, i) => i !== index);
};

// دالة الحصول على لون مستوى المهارة
export const getSkillLevelColor = (level) => {
  switch (level) {
    case 'Expert':
      return 'bg-green-500';
    case 'Advanced':
      return 'bg-blue-500';
    case 'Intermediate':
      return 'bg-yellow-500';
    case 'Beginner':
      return 'bg-gray-500';
    default:
      return 'bg-gray-500';
  }
};

// دالة الحصول على نص مستوى المهارة
export const getSkillLevelText = (level) => {
  switch (level) {
    case 'Expert':
      return 'خبير';
    case 'Advanced':
      return 'متقدم';
    case 'Intermediate':
      return 'متوسط';
    case 'Beginner':
      return 'مبتدئ';
    default:
      return 'مبتدئ';
  }
};

// دالة الحصول على نسبة التقدم للمهارة
export const getSkillProgress = (level) => {
  switch (level) {
    case 'Expert':
      return 'w-full';
    case 'Advanced':
      return 'w-4/5';
    case 'Intermediate':
      return 'w-3/5';
    case 'Beginner':
      return 'w-2/5';
    default:
      return 'w-2/5';
  }
};

// دالة حساب إحصائيات المهارات
export const getSkillsStats = (skills) => {
  return {
    total: skills.length,
    advanced: skills.filter(s => s.level === 'Expert' || s.level === 'Advanced').length,
    intermediate: skills.filter(s => s.level === 'Intermediate').length,
    beginner: skills.filter(s => s.level === 'Beginner').length
  };
};

// دالة التحقق من صحة بيانات المهارة
export const validateSkill = (skill) => {
  const errors = [];
  
  if (!skill.name || skill.name.trim() === '') {
    errors.push('اسم المهارة مطلوب');
  }
  
  if (!skill.level) {
    errors.push('مستوى المهارة مطلوب');
  }
  
  const validLevels = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
  if (!validLevels.includes(skill.level)) {
    errors.push('مستوى المهارة غير صالح');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

// دالة حفظ المهارات في localStorage (للاستخدام المستقبلي)
export const saveSkillsToStorage = (developerId, skills) => {
  try {
    localStorage.setItem(`developer_${developerId}_skills`, JSON.stringify(skills));
    return true;
  } catch (error) {
    console.error('Error saving skills:', error);
    return false;
  }
};

// دالة جلب المهارات من localStorage
export const loadSkillsFromStorage = (developerId) => {
  try {
    const skills = localStorage.getItem(`developer_${developerId}_skills`);
    return skills ? JSON.parse(skills) : null;
  } catch (error) {
    console.error('Error loading skills:', error);
    return null;
  }
};
