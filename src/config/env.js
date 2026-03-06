export const config = {
  mode: import.meta.env.VITE_MODE || 'mock',
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || 'https://api.example.com',
  isMock: import.meta.env.VITE_MODE === 'mock',
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
};

export default config;
