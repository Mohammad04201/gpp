import React from 'react';
import { AppProvider } from '../components/contexts/AppProvider';
import { useTheme } from '../components/hooks/useThemeContext';

// Example Component
const ExampleComponent = () => {
  const { isDarkMode, theme, toggleTheme, setTheme, getTheme } = useTheme();

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-4">Theme Context Example</h1>
        
        <div className="space-y-4">
          <p>Current Theme: <strong>{theme}</strong></p>
          <p>Is Dark Mode: <strong>{isDarkMode ? 'Yes' : 'No'}</strong></p>
          
          <div className="space-x-4">
            <button
              onClick={toggleTheme}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Toggle Theme
            </button>
            
            <button
              onClick={() => setTheme('dark')}
              className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Set Dark
            </button>
            
            <button
              onClick={() => setTheme('light')}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300"
            >
              Set Light
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Full App Example
const ThemeExampleApp = () => {
  return (
    <AppProvider>
      <ExampleComponent />
    </AppProvider>
  );
};

export default ThemeExampleApp;
