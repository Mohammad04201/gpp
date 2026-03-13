import { Link } from 'react-router-dom';

function AuthSelect() {
  return (
    <div className="min-h-screen bg-[#20232A] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Back Button */}
        <Link 
          to="/" 
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors duration-200"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to home
        </Link>

        {/* Main Card */}
        <div className="bg-[#282C34]/50 backdrop-blur-lg rounded-2xl border border-[#3a4750] p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 bg-teal-500/20 border border-teal-500/30 rounded-full mb-4">
              <span className="text-teal-400 text-sm font-medium">Choose your journey</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How do you want to sign in?
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Select whether you're a developer looking for opportunities or a company building your next tech team.
            </p>
          </div>

          {/* Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Developer Option */}
            <div className="bg-[#1a1d23]/50 border border-[#3a4750] rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full mb-1">
                    For talents
                  </span>
                  <h2 className="text-xl font-bold text-white">I'm a developer</h2>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Build your profile, sync your GitHub, and get matched with roles tailored to your skills.
              </p>
              <Link
                to="/login/developer"
                className="block w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
              >
                Continue as developer
              </Link>
            </div>

            {/* Company Option */}
            <div className="bg-[#1a1d23]/50 border border-[#3a4750] rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <span className="inline-block px-2 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full mb-1">
                    For companies
                  </span>
                  <h2 className="text-xl font-bold text-white">We're a company</h2>
                </div>
              </div>
              <p className="text-gray-400 mb-6">
                Publish roles, review vetted talent, and manage your AI-powered pipeline.
              </p>
              <Link
                to="/login/company"
                className="block w-full px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 text-center"
              >
                Continue as company
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthSelect;

