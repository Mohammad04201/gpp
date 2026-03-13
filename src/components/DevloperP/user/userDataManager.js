// User data management - storage and retrieval from localStorage

const STORAGE_KEY = 'user_profile_data';

// Default user data
export const defaultUserData = {
  name: '',
  title: '',
  location: '',
  bio: '',
  experience: 0,
  available: true,
  email: '',
  phone: '',
  linkedin: '',
  github: '',
  cvFile: null, // CV file information
  skills: [],
  projects: [],
  stats: {
    views: 0,
    likes: 0,
    connections: 0
  }
};

// Save user data
export const saveUserData = (userId, data) => {
  try {
    const allData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    allData[userId] = {
      ...allData[userId],
      ...data,
      lastUpdated: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
    return true;
  } catch (error) {
    console.error('Error saving user data:', error);
    return false;
  }
};

// Load user data
export const loadUserData = (userId) => {
  try {
    const allData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return allData[userId] || null;
  } catch (error) {
    console.error('Error loading user data:', error);
    return null;
  }
};

// Merge user data with default data
export const mergeUserData = (userId, defaultData) => {
  const savedData = loadUserData(userId);
  if (savedData) {
    return { ...defaultData, ...savedData };
  }
  return defaultData;
};

// Calculate profile completion percentage
export const calculateCompletion = (data) => {
  let score = 0;
  if (data.name?.trim()) score += 15;
  if (data.title?.trim()) score += 15;
  if (data.bio?.trim().length > 30) score += 20;
  if (data.skills?.length >= 1) score += 15;
  if (data.projects?.length >= 1) score += 15;
  if (data.experience > 0) score += 10;
  if (data.email?.trim()) score += 5;
  if (data.phone?.trim()) score += 5;
  if (data.cvFile?.name) score += 15; // Bonus points for CV upload
  return Math.min(score, 100);
};

// Create new user data
export const createUserData = (userId, initialData = {}) => {
  const newData = {
    ...defaultUserData,
    ...initialData,
    id: userId,
    createdAt: new Date().toISOString()
  };
  saveUserData(userId, newData);
  return newData;
};
