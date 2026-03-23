import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';

function AboutPage() {
  const { isDarkMode } = useThemeContext();
  
  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`} style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)'
        : 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
    }}>
  

      {/* About Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8">About Us</h1>
          
          <div className={`space-y-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
         

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>What We Do</h2>
              <p className="leading-relaxed">
                Our platform uses cutting-edge AI algorithms to match companies with developers based on skills, experience, 
                and career aspirations. We eliminate intermediaries and create direct connections that benefit both parties.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>Our Values</h2>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>•</span>
                  <span><strong>Innovation:</strong> We continuously improve our AI technology to provide better matches.</span>
                </li>
                <li className="flex gap-3">
                  <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>•</span>
                  <span><strong>Transparency:</strong> We believe in clear communication and honest practices.</span>
                </li>
                <li className="flex gap-3">
                  <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>•</span>
                  <span><strong>Community:</strong> We support the tech community in the Arab region.</span>
                </li>
                <li className="flex gap-3">
                  <span className={isDarkMode ? 'text-teal-400' : 'text-teal-600'}>•</span>
                  <span><strong>Excellence:</strong> Quality is at the core of everything we do.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${
                isDarkMode ? 'text-white' : 'text-gray-800'
              }`}>Why Choose Us?</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-4">
                <div className={`rounded-xl p-6 border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}>
                  <h3 className="font-semibold mb-2">Advanced AI Matching</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Our AI analyzes thousands of data points to find the perfect match.</p>
                </div>
                <div className={`rounded-xl p-6 border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}>
                  <h3 className="font-semibold mb-2">500+ Companies</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Join thousands of successful companies hiring through our platform.</p>
                </div>
                <div className={`rounded-xl p-6 border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}>
                  <h3 className="font-semibold mb-2">10,000+ Developers</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Access a vast pool of talented developers ready for new opportunities.</p>
                </div>
                <div className={`rounded-xl p-6 border transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-white border-gray-200 shadow-lg'
                }`}>
                  <h3 className="font-semibold mb-2">95% Success Rate</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Our AI-driven approach ensures high-quality matches and successful hires.</p>
                </div>
              </div>
            </section>
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
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
