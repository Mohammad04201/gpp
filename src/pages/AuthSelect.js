import { Link } from 'react-router-dom';
import { useTheme } from '../components/hooks/useThemeContext';

function AuthSelect() {
  const { isDarkMode, toggleTheme, setTheme } = useTheme();

  const clearTheme = () => {
    localStorage.removeItem('theme');
    // Reset to system preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(prefersDark ? 'dark' : 'light');
  };

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
      isDarkMode ? 'bg-[#20232A]' : 'bg-[#f9f9f9]'
    }`}>
      <div className="max-w-4xl w-full">
        {/* Back Button */}
        <Link 
          to="/" 
          className={`inline-flex items-center mb-8 transition-colors duration-200 ${
            isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>

        {/* Main Card */}
        <div className={`rounded-2xl border shadow-lg p-8 md:p-12 transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 shadow-gray-900/20' 
            : 'bg-white border-gray-200 shadow-gray-500/10'
        }`}>
          {/* Header */}
          <div className="text-center mb-10">
            <div className={`inline-flex items-center px-3 py-1 rounded-full mb-4 ${
              isDarkMode 
                ? 'bg-teal-900/30 border border-teal-400/30' 
                : 'bg-teal-50 border border-teal-200'
            }`}>
              <span className={`text-sm font-medium ${
                isDarkMode ? 'text-teal-300' : 'text-teal-700'
              }`}>Choose your journey</span>
            </div>
            <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              How do you want to sign in?
            </h1>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Select whether you're a developer looking for opportunities or a company building your next tech team.
            </p>
          </div>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Developer Option */}
            <div className={`rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
              isDarkMode 
                ? 'bg-gray-700 border border-gray-600 hover:border-teal-400 hover:shadow-teal-500/10' 
                : 'bg-white border border-gray-200 hover:border-teal-300 hover:shadow-teal-500/10'
            }`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                  isDarkMode ? 'bg-gradient-to-br from-teal-600 to-cyan-600' : 'bg-gradient-to-br from-teal-500 to-cyan-500'
                }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mb-1 ${
                    isDarkMode ? 'bg-teal-800/50 text-teal-300' : 'bg-teal-100 text-teal-700'
                  }`}>For talents</span>
                  <h2 className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>I'm a developer</h2>
                </div>
              </div>
              <p className={`mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Build your profile, sync your GitHub, and get matched with roles tailored to your skills.
              </p>
              <Link
                to="/login/developer"
                className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-teal-500/20' 
                    : 'bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white shadow-teal-400/20'
                }`}
              >
                Continue as developer
              </Link>
            </div>

            {/* Company Option */}
            <div className={`rounded-xl p-6 transition-all duration-300 hover:shadow-lg ${
              isDarkMode 
                ? 'bg-gray-700 border border-gray-600 hover:border-teal-400 hover:shadow-teal-500/10' 
                : 'bg-white border border-gray-200 hover:border-teal-300 hover:shadow-teal-500/10'
            }`}>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                  isDarkMode ? 'bg-gradient-to-br from-teal-600 to-cyan-600' : 'bg-gradient-to-br from-teal-500 to-cyan-500'
                }`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full mb-1 ${
                    isDarkMode ? 'bg-teal-800/50 text-teal-300' : 'bg-teal-100 text-teal-700'
                  }`}>For companies</span>
                  <h2 className={`text-xl font-bold ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>We're a company</h2>
                </div>
              </div>
              <p className={`mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Publish roles, review vetted talent, and manage your AI-powered pipeline.
              </p>
              <Link
                to="/login/company"
                className={`block w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-teal-500/20' 
                    : 'bg-gradient-to-r from-teal-400 to-cyan-400 hover:from-teal-500 hover:to-cyan-500 text-white shadow-teal-400/20'
                }`}
              >
                Continue as company
              </Link>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="fixed top-4 right-4 flex gap-2">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m0-16l-3.172-3.172a4 4 0 00-5.656 0l-3.172 3.172h1.036l3.172 3.172a4 4 0 005.656 0L12 20.828z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 0118.646 9 0 00-1.354 1.354L12 19.646l-6.292-6.292A9 9 0 012.646 2.646L12 4.354z" />
              </svg>
            )}
          </button>
          
          <button
            onClick={clearTheme}
            className={`p-2 rounded-lg transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-700 text-red-400 hover:bg-gray-600' 
                : 'bg-white text-red-600 hover:bg-gray-100'
            }`}
            title="Clear theme from localStorage"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthSelect;

