import { createContext, useContext, useState, useEffect } from 'react';

// 1. إنشاء الـ Context
const ThemeContext = createContext();

// 2. Theme Provider Component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Get initial theme
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    
    // Fallback to system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Apply theme and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    
    // Apply classes
    root.classList.toggle('dark-mode', isDarkMode);
    root.classList.toggle('light-mode', !isDarkMode);
    
    // Save to localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    
    // Notify other components
    window.dispatchEvent(
      new CustomEvent('themeChanged', {
        detail: { theme: isDarkMode ? 'dark' : 'light' },
      })
    );
  }, [isDarkMode]);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Set specific theme
  const setTheme = (theme) => {
    setIsDarkMode(theme === 'dark');
  };

  // Get current theme
  const getTheme = () => isDarkMode ? 'dark' : 'light';

  // Context value
  const value = {
    isDarkMode,
    theme: getTheme(),
    toggleTheme,
    setTheme,
    getTheme
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Custom Hook to use Theme Context
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  
  return context;
};

// 4. Export the context for direct usage if needed
export default ThemeContext;
