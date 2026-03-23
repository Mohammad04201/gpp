import { useState, useEffect } from 'react';

export const useTheme = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
      return savedTheme === 'dark';
    }

    // fallback لنظام الجهاز
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };

  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle('dark-mode', isDarkMode);
    root.classList.toggle('light-mode', !isDarkMode);

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');

    // notify باقي الكمبوننت
    window.dispatchEvent(
      new CustomEvent('themeChanged', {
        detail: { theme: isDarkMode ? 'dark' : 'light' },
      })
    );
  }, [isDarkMode]);

  // Toggle
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return { isDarkMode, toggleTheme };
};