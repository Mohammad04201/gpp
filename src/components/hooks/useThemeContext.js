import { useThemeContext } from '../contexts/ThemeContext';

// Simplified hook that uses the context
export const useTheme = () => {
  const { isDarkMode, theme, toggleTheme, setTheme, getTheme } = useThemeContext();
  
  return {
    isDarkMode,
    theme,
    toggleTheme,
    setTheme,
    getTheme
  };
};
