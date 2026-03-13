import { Link, useNavigate } from 'react-router-dom';

function DeveloperLogin() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/dashboard/developer');
  };

  return (
    <div className="min-h-screen bg-[#20232A] flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Back Button */}
        <Link
          to="/select-role"
          className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back
        </Link>

        {/* Main Card */}
        <div className="bg-[#282C34]/50 backdrop-blur-lg rounded-2xl border border-[#3a4750] p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Developer Login</h1>
            <p className="text-gray-400">
              Sign in to manage your profile, applications, and matches.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="dev-email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="dev-email"
                placeholder="you@example.com"
                required
                className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="dev-password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="dev-password"
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="dev-remember"
                  type="checkbox"
                  className="w-4 h-4 bg-[#1a1d23] border-[#3a4750] rounded focus:ring-teal-500 focus:border-teal-500"
                />
                <label htmlFor="dev-remember" className="ml-2 text-sm text-gray-400">
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-teal-400 hover:text-teal-300 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Sign In
            </button>

            <p className="text-center text-gray-400 text-sm">
              This is a prototype login – no real authentication is connected yet.
            </p>
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center space-y-2">
          <p className="text-gray-400 text-sm">
            New here?{' '}
            <Link
              to="/register/developer"
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              Create a developer account
            </Link>
          </p>
          <p className="text-gray-400 text-sm">
            Not a developer?{' '}
            <Link 
              to="/login/company" 
              className="text-teal-400 hover:text-teal-300 transition-colors"
            >
              Switch to company login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DeveloperLogin;

