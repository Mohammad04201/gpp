import React from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';

function PrivacyPage() {
  const { isDarkMode } = useThemeContext();
  
  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`} style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)'
        : 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
    }}>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: March 2024</p>

          <div className="space-y-8 leading-relaxed">
            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>1. Introduction</h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                TechConnect AI ("we", "our", or "us") operates the smart recruitment platform. This page informs you about our privacy policies regarding the collection and use of your data when using our service.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>2. Data Collection & Use</h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>We collect different types of information for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Personal identification information (name, email, phone number)</li>
                <li>Professional information (resume, skills, experience)</li>
                <li>Usage data (how you interact with our platform)</li>
                <li>Device information (IP address, browser type)</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>3. How We Use Data</h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>TechConnect AI uses collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analytics or valuable information to improve our service</li>
                <li>To monitor the use of our service and address technical and security issues</li>
              </ul>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>4. Data Security</h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                Your data security is very important to us. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>5. Changes to This Policy</h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the updated policy with the "Last updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>6. Contact Us</h2>
              <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>
                If you have any questions about this privacy policy, please contact us via email: <a href="mailto:privacy@techconnect.ai" className={`text-teal-400 hover:text-teal-300 underline ${isDarkMode ? 'hover:text-teal-200' : 'hover:text-teal-600'}`}>privacy@techconnect.ai</a>
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

export default PrivacyPage;