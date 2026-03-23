import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useThemeContext';

function DeveloperRegister() {
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
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'
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
          className={`rounded-2xl border shadow-xl p-8 ${
            isDarkMode
              ? 'bg-gray-800/90 border-gray-600/50 shadow-2xl backdrop-blur-sm'
              : 'bg-white/95 border-gray-200/50 shadow-gray-500/20 backdrop-blur-sm'
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
              Create Developer Account
            </h1>

            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              Tell us about yourself to match you with the right roles.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Your name"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700/80 text-gray-200 border-gray-600/60 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 placeholder-gray-500'
                    : 'bg-white/90 text-gray-800 border-gray-300/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 placeholder-gray-400'
                } focus:outline-none`}
              />
            </div>

            {/* Email */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email
              </label>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700/80 text-gray-200 border-gray-600/60 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 placeholder-gray-500'
                    : 'bg-white/90 text-gray-800 border-gray-300/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 placeholder-gray-400'
                } focus:outline-none`}
              />
            </div>

            {/* Username */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Username
              </label>
              <input
                type="text"
                placeholder="mohammad"
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700/80 text-gray-200 border-gray-600/60 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 placeholder-gray-500'
                    : 'bg-white/90 text-gray-800 border-gray-300/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 placeholder-gray-400'
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
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700/80 text-gray-200 border-gray-600/60 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 placeholder-gray-500'
                    : 'bg-white/90 text-gray-800 border-gray-300/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 placeholder-gray-400'
                } focus:outline-none`}
              />
            </div>

            {/* Confirm */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Confirm Password
              </label>
              <input
                type="password"
                required
                className={`w-full px-4 py-3 rounded-lg transition-all duration-300 ${
                  isDarkMode
                    ? 'bg-gray-700/80 text-gray-200 border-gray-600/60 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/30 placeholder-gray-500'
                    : 'bg-white/90 text-gray-800 border-gray-300/80 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 placeholder-gray-400'
                } focus:outline-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDarkMode
                  ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white shadow-teal-500/30'
                  : 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-teal-500/20'
              }`}
            >
              Create Account
            </button>

            <p className={`text-center text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Demo only – no real account is created.
            </p>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Already have an account?{' '}
            <Link
              to="/login/developer"
              className={`${
                isDarkMode
                  ? 'text-teal-400 hover:text-teal-300'
                  : 'text-teal-600 hover:text-teal-700'
              }`}
            >
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeveloperRegister;