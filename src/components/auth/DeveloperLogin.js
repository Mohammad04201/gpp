import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useThemeContext';

function DeveloperLogin() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard/developer');
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-[#20232A]'
          : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'
      }`}
    >
      <div className="max-w-md w-full">
        {/* Back */}
        <Link
          to="/select-role"
          className={`inline-flex items-center mb-6 ${
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>

        {/* Card */}
        <div
          className={`rounded-2xl border shadow-lg p-8 ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 shadow-gray-900/20'
              : 'bg-white border-gray-200 shadow-gray-500/10'
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Developer Login
            </h1>

            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              Sign in to manage your profile, applications, and matches.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 focus:border-teal-400'
                    : 'bg-white text-gray-900 border-gray-300 focus:border-teal-500'
                } focus:outline-none`}
              />
            </div>

            {/* Password */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                className={`w-full px-4 py-3 rounded-lg ${
                  isDarkMode
                    ? 'bg-gray-700 text-gray-300 border-gray-600 focus:border-teal-400'
                    : 'bg-white text-gray-900 border-gray-300 focus:border-teal-500'
                } focus:outline-none`}
              />
            </div>

            {/* Options */}
            <div className="flex items-center justify-between">
              <div className={`flex items-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                <input
                  type="checkbox"
                  className={`w-4 h-4 ${
                    isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-300'
                  }`}
                />
                <span className="ml-2 text-sm">Remember me</span>
              </div>

              <button
                type="button"
                className={`text-sm ${
                  isDarkMode
                    ? 'text-teal-400 hover:text-teal-300'
                    : 'text-teal-600 hover:text-teal-700'
                }`}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                isDarkMode
                  ? 'bg-gradient-to-r from-teal-500 to-cyan-500 text-white'
                  : 'bg-gradient-to-r from-teal-400 to-cyan-400 text-white'
              }`}
            >
              Sign In
            </button>

            <p className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              This is a prototype login – no real authentication yet.
            </p>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center space-y-2">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            New here?{' '}
            <Link
              to="/register/developer"
              className={`${
                isDarkMode
                  ? 'text-teal-400 hover:text-teal-300'
                  : 'text-teal-600 hover:text-teal-700'
              }`}
            >
              Create a developer account
            </Link>
          </p>

          {/* <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Not a developer?{' '}
            <Link
              to="/login/company"
              className={`${
                isDarkMode
                  ? 'text-teal-400 hover:text-teal-300'
                  : 'text-teal-600 hover:text-teal-700'
              }`}
            >
              Switch to company login
            </Link>
          </p> */}
        </div>
      </div>
    </div>
  );
}

export default DeveloperLogin;