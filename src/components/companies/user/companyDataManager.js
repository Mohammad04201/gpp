// إدارة بيانات الشركة - تخزين واسترجاع من localStorage

const STORAGE_KEY = 'company_profile_data';

// البيانات الافتراضية للشركة
export const defaultCompanyData = {
  companyName: '',
  title: '',
  description: '',
  email: '',
  phone: '',
  location: '',
  website: '',
  established: '',
  employees: '',
  rating: 0,
  industry: '',
  companyType: '',
  social: {
    github: '',
    linkedin: '',
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

// حفظ بيانات الشركة
export const saveCompanyData = (companyId, data) => {
  try {
    const allData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    allData[companyId] = {
      ...allData[companyId],
      ...data,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
    return true;
  } catch (error) {
    console.error('Error saving company data:', error);
    return false;
  }
};

// استرجاع بيانات الشركة
export const loadCompanyData = (companyId) => {
  try {
    const allData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return allData[companyId] || null;
  } catch (error) {
    console.error('Error loading company data:', error);
    return null;
  }
};

// دمج بيانات الشركة مع البيانات الافتراضية
export const mergeCompanyData = (companyId, defaultData) => {
  const savedData = loadCompanyData(companyId);
  if (savedData) {
    return { ...defaultData, ...savedData };
  }
  return defaultData;
};

// حساب نسبة اكتمال الملف
export const calculateCompletion = (data) => {
  let score = 0;
  if (data.companyName?.trim()) score += 15;
  if (data.title?.trim()) score += 10;
  if (data.description?.trim().length > 50) score += 15;
  if (data.email?.trim()) score += 10;
  if (data.phone?.trim()) score += 5;
  if (data.location?.trim()) score += 5;
  if (data.website?.trim()) score += 5;
  if (data.established?.trim()) score += 5;
  if (data.employees?.trim()) score += 5;
  if (data.industry?.trim()) score += 5;
  if (data.departments?.length >= 1) score += 25;
  return Math.min(score, 100);
};

// إنشاء بيانات جديدة للشركة
export const createCompanyData = (companyId, initialData = {}) => {
  const newData = {
    ...defaultCompanyData,
    ...initialData,
    id: companyId,
    createdAt: new Date().toISOString()
  };
  saveCompanyData(companyId, newData);
  return newData;
};

// الحصول على مستوى الشركة
export const getCompanyLevel = (completion) => {
  if (completion >= 90) return { level: 'ممتاز', color: 'text-green-400', bgColor: 'bg-green-500' };
  if (completion >= 70) return { level: 'جيد جداً', color: 'text-blue-400', bgColor: 'bg-blue-500' };
  if (completion >= 50) return { level: 'جيد', color: 'text-yellow-400', bgColor: 'bg-yellow-500' };
  if (completion >= 30) return { level: 'متوسط', color: 'text-orange-400', bgColor: 'bg-orange-500' };
  return { level: 'مبتدئ', color: 'text-gray-400', bgColor: 'bg-gray-500' };
};

// تنسيق حجم الملف
export const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
