import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-700/20 to-gray-600/20"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-gray-700/10 border border-gray-600/20 rounded-full">
                  <span className="text-gray-300 text-sm font-medium">🚀 Future of Tech Recruitment</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-400 via-gray-300 to-gray-200 bg-clip-text text-transparent">
                    Connecting Best Tech Talent
                  </span>
                  <br />
                  <span className="text-white">in Arab World</span>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                  A smart platform that uses AI to connect global companies with top developers across Middle East and North Africa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/login/company" 
                  className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-700/25 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1H.01A1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                    I'm a Company
                  </span>
                </Link>
                
                <Link 
                  to="/login/developer" 
                  className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 text-center"
                >
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                    </svg>
                    I'm a Developer
                  </span>
                </Link>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-gradient-to-br from-gray-700/20 to-gray-600/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700/20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-1a1 1 0 100-2h1A4 4 0 014 4V6a4 4 0 01-4 4H6a4 4 0 01-4 4V7z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-white">500+ Companies</span>
                        </div>
                        <p className="text-xs text-gray-400">Trusted Companies</p>
                      </div>
                      
                      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700/20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gray-600 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 011.89 1.37l-1.83 5.18A2 2 0 0116.06 16H3.94a2 2 0 01-2-1.63L.11 9.37A2 2 0 012 8h16z"/>
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-white">10,000+</span>
                        </div>
                        <p className="text-xs text-gray-400">Talented Developers</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700/20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gray-500 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0V1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-white">95%</span>
                        </div>
                        <p className="text-xs text-gray-400">Hiring Success Rate</p>
                      </div>
                      
                      <div className="bg-gray-800 rounded-xl p-4 border border-gray-700/20">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-gray-400 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1V.667A4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                            </svg>
                          </div>
                          <span className="text-sm font-medium text-white">24/7</span>
                        </div>
                        <p className="text-xs text-gray-400">Technical Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-600 rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-gray-600 to-gray-500 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #20232A 0%, #2a2e3a 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                Why Choose Our Platform?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide best solutions for connecting companies with tech talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/20 hover:border-gray-600/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Advanced AI Matching</h3>
              <p className="text-gray-400 leading-relaxed">
                We use latest AI technologies to match talent with suitable opportunities with high precision.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/20 hover:border-gray-600/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-gray-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Direct Communication</h3>
              <p className="text-gray-400 leading-relaxed">
                Communicate directly with companies and developers through our integrated platform without intermediaries.
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700/20 hover:border-gray-500/50 transition-all duration-300 group">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Accurate Evaluation</h3>
              <p className="text-gray-400 leading-relaxed">
                An advanced evaluation system that ensures the quality of personal profiles and posted job opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 text-white" style={{ background: 'linear-gradient(135deg, #2a2e3a 0%, #20232A 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">500+</div>
              <div className="text-gray-200">Trusted Companies</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">10,000+</div>
              <div className="text-gray-200">Professional Developers</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">50,000+</div>
              <div className="text-gray-200">Posted Jobs</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold text-white">95%</div>
              <div className="text-gray-200">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" >
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                Ready to Join Our Community?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of companies and developers who benefit from our platform daily to find the perfect opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register/company" 
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gray-700/25"
              >
                Start as Company
              </Link>
              <Link 
                to="/register/developer" 
                className="px-8 py-4 bg-transparent border-2 border-white/20 hover:border-white/40 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10"
              >
                Start as Developer
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
