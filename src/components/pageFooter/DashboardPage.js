import React from 'react';
import { useThemeContext } from '../contexts/ThemeContext';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  const { isDarkMode } = useThemeContext();
  
  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`} style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)'
        : 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
    }}>
      <nav className={`border-b transition-all duration-300 ${
        isDarkMode ? 'border-gray-700' : 'border-gray-200'
      }`} style={{
        backgroundColor: isDarkMode ? '#20232A' : '#ffffff'
      }}>
        <div className="container mx-auto px-4 py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-cyan-600 bg-clip-text text-transparent">
            Dashboard
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl">
          <header className={`text-center mb-12 p-8 rounded-2xl transition-all duration-300 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700' 
              : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-xl'
          }`}>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Main Dashboard</h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Your central control and monitoring hub
            </p>
          </header>

          <section className="space-y-12">
            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/50 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h2 className="text-2xl font-bold mb-4">Why Dashboards Matter</h2>
              <p className={`leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A dashboard is a centralized interface that provides a complete and integrated view of all key data and insights.
                It is essential for making informed decisions and maintaining full control over system operations.
              </p>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Key Features</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                
                <div className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-teal-500/50' 
                    : 'bg-white border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl'
                }`}>
                  <h4 className="text-lg font-semibold mb-3">📊 Data Visualization</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Transform complex numbers into clear and easy-to-understand charts and visuals
                  </p>
                </div>

                <div className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-teal-500/50' 
                    : 'bg-white border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl'
                }`}>
                  <h4 className="text-lg font-semibold mb-3">⚡ Real-Time Updates</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Live data updates to help you make accurate decisions at the right time
                  </p>
                </div>

                <div className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-teal-500/50' 
                    : 'bg-white border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl'
                }`}>
                  <h4 className="text-lg font-semibold mb-3">🎯 Performance Tracking</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Monitor KPIs and analyze trends and patterns effectively
                  </p>
                </div>

                <div className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-teal-500/50' 
                    : 'bg-white border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl'
                }`}>
                  <h4 className="text-lg font-semibold mb-3">🔍 Advanced Analytics</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Powerful tools to gain deeper insights from your data
                  </p>
                </div>

                <div className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-teal-500/50' 
                    : 'bg-white border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl'
                }`}>
                  <h4 className="text-lg font-semibold mb-3">📱 Accessibility</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Secure and easy access from any device, anytime
                  </p>
                </div>

                <div className={`rounded-xl p-6 border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700 hover:border-teal-500/50' 
                    : 'bg-white border-gray-200 hover:border-teal-400 shadow-lg hover:shadow-xl'
                }`}>
                  <h4 className="text-lg font-semibold mb-3">🚀 Productivity Boost</h4>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Save time with automated reports and organized data presentation
                  </p>
                </div>

              </div>
            </div>

            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/50 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <h3 className="text-2xl font-bold mb-6">Additional Features</h3>
              <ul className="space-y-3">
                <li className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Customization:</strong> Tailor the dashboard to your needs</span>
                </li>
                <li className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Interactive Reports:</strong> Dynamic and exportable reports</span>
                </li>
                <li className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Smart Alerts:</strong> Instant notifications for key changes</span>
                </li>
                <li className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Security:</strong> High-level data protection and access control</span>
                </li>
                <li className={`flex items-start gap-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <span className="text-teal-500 mt-1">•</span>
                  <span><strong>Integration:</strong> Seamless connection with other systems</span>
                </li>
              </ul>
            </div>

            <div className={`rounded-2xl p-8 transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800/50 border border-gray-700' 
                : 'bg-white border border-gray-200 shadow-lg'
            }`}>
              <p className={`leading-relaxed text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                A dashboard is not just a data display tool — it is a strategic partner that enhances performance,
                improves efficiency, and helps achieve organizational goals effectively.
              </p>
            </div>

                <div className="mt-12">
                  <Link 
                    to="/" 
                    className={`inline-block px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-md' 
                        : 'bg-teal-500 hover:bg-teal-600 text-white shadow-md'
                    }`}
                  >
                    Back to Home
                  </Link>
                </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;