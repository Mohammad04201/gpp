import React from 'react';
import { Link } from 'react-router-dom';

function PrivacyPage() {
  return (
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)' }}>
      {/* Header */}
      <nav className="border-b border-gray-700" style={{ backgroundColor: '#20232A' }}>
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
            TechConnect AI
          </Link>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-gray-400 mb-12">Last updated: March 2024</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p>
                TechConnect AI ("we", "us", or "our") operates the TechConnect AI platform. This page informs you of our privacy policies regarding the collection, use, and disclosure of your personal data when you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information Collection and Use</h2>
              <p>We collect several different types of information for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Professional information (resume, skills, experience)</li>
                <li>Usage data (how you interact with our platform)</li>
                <li>Device information (IP address, browser type)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Use of Data</h2>
              <p>TechConnect AI uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical and security issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Security of Data</h2>
              <p>
                The security of your data is important to us but remember that no method of transmission over the Internet 
                or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect 
                your personal data, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
                Privacy Policy on this page and updating the "Last updated" date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@techconnect.ai
              </p>
            </section>
          </div>

          <div className="mt-12">
            <Link 
              to="/" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
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
