import { ThemeProvider } from './ThemeContext';

// Main App Provider that wraps all providers
export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};
