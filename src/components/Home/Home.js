import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';

function Home() {
  const { isDarkMode } = useThemeContext();

  return (
    <div className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} 
         style={{ 
           background: isDarkMode 
             ? 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)'
             : 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
         }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-0 left-0 w-full h-full ${isDarkMode ? 'bg-gradient-to-r from-gray-700/20 to-gray-600/20' : 'bg-gradient-to-r from-teal-100/20 to-cyan-100/20'}`}></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDarkMode ? 'ffffff' : '14b8a6'}' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className={`inline-flex items-center px-4 py-2 ${isDarkMode ? 'bg-[#11a3a3]/10 border border-[#11a3a3]/20' : 'bg-teal-100 border border-teal-200'} rounded-full`}>
                  <span className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>🚀 Future of Tech Recruitment</span>
                </div>
                
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-[#11a3a3] via-[#0d8383] to-[#11a3a3] bg-clip-text text-transparent">
                    Connecting Best Tech Talent
                  </span>
                  <br />
                  <span className={isDarkMode ? 'text-white' : 'text-gray-800'}>in Arab World</span>
                </h1>
                
                <p className={`text-xl leading-relaxed max-w-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  A smart platform that uses AI to connect global companies with top developers across Middle East and North Africa.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/login/company" 
                  className="px-8 py-4 bg-gradient-to-r from-[#11a3a3] to-[#0d8383] hover:from-[#0d8383] hover:to-[#11a3a3] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#11a3a3]/25 text-center"
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
                  className={`px-8 py-4 font-semibold rounded-xl transition-all duration-300 text-center ${
                    isDarkMode 
                      ? 'bg-transparent border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/10'
                      : 'bg-transparent border-2 border-teal-500/20 hover:border-teal-500/40 text-teal-600 hover:bg-teal-50'
                  }`}
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
                <div className={`bg-gradient-to-br ${isDarkMode ? 'from-[#11a3a3]/20 to-[#0d8383]/20 backdrop-blur-sm border border-white/10' : 'from-teal-100/50 to-cyan-100/50 backdrop-blur-sm border border-teal-200/50'} rounded-2xl p-8`}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <div className={`rounded-xl p-4 border ${isDarkMode ? 'bg-gray-800 border-[#11a3a3]/20' : 'bg-white border-teal-200'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-[#11a3a3] rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 1 1 0 000 2H6a2 2 0 00-2 2v6a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-1a1 1 0 100-2h1A4 4 0 014 4V6a4 4 0 01-4 4H6a4 4 0 01-4 4V7z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>500+ Companies</span>
                        </div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Trusted Companies</p>
                      </div>
                      
                      <div className={`rounded-xl p-4 border ${isDarkMode ? 'bg-gray-800 border-[#0d8383]/20' : 'bg-white border-cyan-200'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-[#0d8383] rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 011.89 1.37l-1.83 5.18A2 2 0 0116.06 16H3.94a2 2 0 01-2-1.63L.11 9.37A2 2 0 012 8h16z"/>
                            </svg>
                          </div>
                          <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>10,000+</span>
                        </div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Talented Developers</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className={`rounded-xl p-4 border ${isDarkMode ? 'bg-gray-800 border-[#11a3a3]/20' : 'bg-white border-teal-200'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-[#11a3a3]/80 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0V1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>95%</span>
                        </div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Hiring Success Rate</p>
                      </div>
                      
                      <div className={`rounded-xl p-4 border ${isDarkMode ? 'bg-gray-800 border-[#0d8383]/20' : 'bg-white border-cyan-200'}`}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 bg-[#0d8383]/80 rounded-lg flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1V.667A4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"/>
                            </svg>
                          </div>
                          <span className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>24/7</span>
                        </div>
                        <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Technical Support</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-[#11a3a3] to-[#0d8383] rounded-2xl opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#0d8383] to-[#11a3a3] rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`py-20 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} 
               style={{ 
                 background: isDarkMode 
                   ? 'linear-gradient(135deg, #20232A 0%, #2a2e3a 100%)'
                   : 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)'
               }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#11a3a3] to-[#0d8383] bg-clip-text text-transparent">
                Why Choose Our Platform?
              </span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              We provide best solutions for connecting companies with tech talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className={`rounded-2xl p-8 border transition-all duration-300 group ${
              isDarkMode 
                ? 'bg-gray-900 border-[#11a3a3]/20 hover:border-[#11a3a3]/50' 
                : 'bg-white border-teal-200 hover:border-teal-400 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#11a3a3] to-[#0d8383] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Advanced AI Matching</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                We use latest AI technologies to match talent with suitable opportunities with high precision.
              </p>
            </div>

            <div className={`rounded-2xl p-8 border transition-all duration-300 group ${
              isDarkMode 
                ? 'bg-gray-900 border-[#0d8383]/20 hover:border-[#0d8383]/50' 
                : 'bg-white border-cyan-200 hover:border-cyan-400 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#0d8383] to-[#11a3a3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"/>
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Direct Communication</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Communicate directly with companies and developers through our integrated platform without intermediaries.
              </p>
            </div>

            <div className={`rounded-2xl p-8 border transition-all duration-300 group ${
              isDarkMode 
                ? 'bg-gray-900 border-[#11a3a3]/20 hover:border-[#11a3a3]/50' 
                : 'bg-white border-teal-200 hover:border-teal-400 shadow-lg hover:shadow-xl'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-br from-[#11a3a3]/80 to-[#0d8383]/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Accurate Evaluation</h3>
              <p className={`leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                An advanced evaluation system that ensures the quality of personal profiles and posted job opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-20 transition-all duration-300 ${isDarkMode ? 'text-white' : 'text-gray-800'}`} 
               style={{ 
                 background: isDarkMode 
                   ? 'linear-gradient(135deg, #2a2e3a 0%, #20232A 100%)'
                   : 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
               }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>500+</div>
              <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>Trusted Companies</div>
            </div>
            <div className="space-y-2">
              <div className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>10,000+</div>
              <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>Professional Developers</div>
            </div>
            <div className="space-y-2">
              <div className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>50,000+</div>
              <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>Posted Jobs</div>
            </div>
            <div className="space-y-2">
              <div className={`text-4xl lg:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>95%</div>
              <div className={isDarkMode ? 'text-gray-200' : 'text-gray-600'}>Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`py-20 transition-all duration-300`} 
               style={{ 
                 background: isDarkMode 
                   ? 'linear-gradient(135deg, #20232A 0%, #1a1d26 100%)'
                   : 'linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%)'
               }}>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#11a3a3] to-[#0d8383] bg-clip-text text-transparent">
                Ready to Join Our Community?
              </span>
            </h2>
            <p className={`text-xl mb-8 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Join thousands of companies and developers who benefit from our platform daily to find the perfect opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/register/company" 
                className="px-8 py-4 bg-gradient-to-r from-[#11a3a3] to-[#0d8383] hover:from-[#0d8383] hover:to-[#11a3a3] text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#11a3a3]/25"
              >
                Start as Company
              </Link>
              <Link 
                to="/register/developer" 
                className={`px-8 py-4 font-semibold rounded-xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-transparent border-2 border-white/20 hover:border-white/40 text-white hover:bg-white/10'
                    : 'bg-transparent border-2 border-teal-500/20 hover:border-teal-500/40 text-teal-600 hover:bg-teal-50'
                }`}
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
