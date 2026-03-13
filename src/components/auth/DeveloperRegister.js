import { Link, useNavigate } from 'react-router-dom';

function DeveloperRegister() {
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
            <h1 className="text-2xl font-bold text-white mb-2">Create Developer Account</h1>
            <p className="text-gray-400">
              Tell us a bit about you so we can start matching you with the right roles.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="dev-name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="dev-name"
                placeholder="Your name"
                required
                className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

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
              <label htmlFor="dev-username" className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="text"
                id="dev-username"
                placeholder="mohammad"
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
                required
                className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="dev-password-confirm" className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="dev-password-confirm"
                required
                className="w-full px-4 py-3 bg-[#1a1d23] border border-[#3a4750] rounded-lg text-white placeholder-gray-400 focus:border-teal-500 focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              Create Account
            </button>

            <p className="text-center text-gray-400 text-sm">
              This form is for demo purposes only – no real account will be created.
            </p>
          </form>
        </div>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Already have an account?{' '}
            <Link 
              to="/login/developer" 
              className="text-teal-400 hover:text-teal-300 transition-colors"
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

