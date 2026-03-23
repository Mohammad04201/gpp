import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../hooks/useThemeContext';

function CompanyRegister() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard/company');
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
          className={`inline-flex items-center mb-6 font-medium transition-all duration-300 hover:scale-105 ${
            isDarkMode
              ? 'text-gray-300 hover:text-white hover:text-teal-400'
              : 'text-gray-600 hover:text-gray-900 hover:text-teal-600'
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>

            <h1 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Create Company Account
            </h1>

            <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
              Set up your hiring space to start posting roles and discovering talent.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Company Name */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Company Name
              </label>
              <input
                type="text"
                required
                placeholder="Your company"
                className={`w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  isDarkMode
                    ? 'text-gray-300 placeholder-gray-500'
                    : 'text-gray-900 placeholder-gray-400'
                }`}
              />
            </div>

            {/* Size */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Company Size
              </label>
              <select
                className={`w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  isDarkMode
                    ? 'text-gray-300'
                    : 'text-gray-900'
                }`}
              >
                <option>1–10</option>
                <option>11–50</option>
                <option>51–200</option>
                <option>200+</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className={`block text-sm mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Work Email
              </label>
              <input
                type="email"
                required
                placeholder="you@company.com"
                className={`w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 ${
                  isDarkMode
                    ? 'text-gray-300 placeholder-gray-500'
                    : 'text-gray-900 placeholder-gray-400'
                }`}
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
                className={`w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 placeholder-gray-400 ${
                  isDarkMode
                    ? 'text-gray-300 placeholder-gray-500'
                    : 'text-gray-900'
                }`}
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
                className={`w-full px-4 py-3 rounded-lg bg-transparent border border-gray-300 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 placeholder-gray-400 ${
                  isDarkMode
                    ? 'text-gray-300 placeholder-gray-500'
                    : 'text-gray-900'
                }`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full px-4 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                isDarkMode
                  ? 'bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white shadow-teal-500/25'
                  : 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-teal-500/25'
              }`}
            >
              Create Company Account
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
              to="/login/company"
              className={`font-medium transition-all duration-300 hover:underline ${
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

export default CompanyRegister;