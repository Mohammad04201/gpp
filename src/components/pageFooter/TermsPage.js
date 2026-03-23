import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';

function TermsPage() {
  const { isDarkMode } = useThemeContext();
  
  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`} style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)'
        : 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
    }}>

      {/* Terms of Service Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-gray-400 mb-12">Last updated: March 2024</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                These Terms of Service constitute a legally binding agreement made between you and Graduction
                concerning your access to and use of the Graduction website and mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on 
                Graduction's website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Disclaimer</h2>
              <p>
                The materials on Graduction website and mobile application are provided on an 'as is' basis. 
                Graduction makes no warranties, expressed or implied, and hereby disclaims and negates all other 
                warranties including, without limitation, implied warranties or conditions of merchantability, fitness for 
                a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Limitations</h2>
              <p>
                In no event shall Graduction or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability to 
                use the materials on Graduction's website and mobile application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on Graduction's website and mobile application could include technical, 
                typographical, or photographic errors. Graduction does not warrant that any of the materials on its 
                website and mobile application are accurate or complete.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Modifications</h2>
              <p>
                Graduction may revise these terms of service for its website and mobile application at any time without 
                notice. By using this website and mobile application, you are agreeing to be bound by the then current 
                version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law</h2>
              <p>
                These terms and conditions are governed by and constructed in accordance with the laws of the United Arab 
                Emirates, and you irrevocably submit to the exclusive jurisdiction of the courts located in Dubai.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at terms@techconnect.ai
              </p>
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

export default TermsPage;
