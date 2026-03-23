import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';

function HelpPage() {
  const { isDarkMode } = useThemeContext();
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Visit our home page and select whether you're a company or developer. Fill in the required information and verify your email address."
    },
    {
      question: "How does AI matching work?",
      answer: "Our AI analyzes your skills, experience, and preferences to match you with relevant opportunities or candidates with high precision."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard encryption and security measures to protect your personal and professional information."
    },
    {
      question: "How can I update my profile?",
      answer: "Log in to your dashboard and go to Profile Settings. You can update your information, skills, and preferences anytime."
    },
    {
      question: "What is the fee structure?",
      answer: "We offer flexible pricing plans for both companies and developers. Contact our sales team for detailed pricing information."
    },
    {
      question: "How long does the hiring process take?",
      answer: "The timeline varies, but with our AI matching, companies typically get matched with suitable candidates within 24-48 hours."
    },
    {
      question: "Can I communicate directly with matched candidates?",
      answer: "Yes! Once matched, you can communicate directly through our integrated messaging platform."
    },
    {
      question: "What if I'm having technical issues?",
      answer: "Contact our support team at support@techconnect.ai or use the live chat on our platform. Our team is available 24/7."
    }
  ];

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`} style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)'
        : 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
    }}>


      {/* Help Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Help Center</h1>
          <p className={`mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Find answers to common questions about Graduction</p>

          {/* Search Bar */}
          <div className="mb-12">
            <input 
              type="text" 
              placeholder="Search for help..." 
              className={`w-full rounded-lg px-6 py-4 focus:outline-none transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700 text-white focus:border-gray-600' 
                  : 'bg-white border border-gray-300 text-gray-800 focus:border-blue-500'
              }`}
            />
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            {faqs.map((faq, index) => (
              <div key={index} className={`rounded-lg overflow-hidden transition-colors duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border border-gray-700' 
                  : 'bg-white border border-gray-200 shadow-sm'
              }`}>
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className={`w-full px-6 py-4 flex items-center justify-between transition-colors duration-300 ${
                    isDarkMode ? 'hover:bg-gray-700/50' : 'hover:bg-gray-50'
                  }`}
                >
                  <h3 className="font-semibold text-left">{faq.question}</h3>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${expandedFaq === index ? 'rotate-180' : ''}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                </button>
                
                {expandedFaq === index && (
                  <div className={`px-6 py-4 border-t transition-colors duration-300 ${
                    isDarkMode 
                      ? 'border-gray-700 bg-gray-700/20' 
                      : 'border-gray-200 bg-gray-50'
                  }`}>
                    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className={`mt-16 rounded-xl p-8 transition-colors duration-300 ${
            isDarkMode 
              ? 'bg-gray-800 border border-gray-700' 
              : 'bg-white border border-gray-200 shadow-sm'
          }`}>
            <h3 className="text-2xl font-semibold mb-4">Still need help?</h3>
            <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Our support team is ready to assist you. Contact us directly for more help.
            </p>
            <Link 
              to="/contact" 
              className={`inline-block px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                isDarkMode 
                  ? 'bg-teal-600 hover:bg-teal-500 text-white shadow-lg' 
                  : 'bg-teal-500 hover:bg-teal-600 text-white shadow-lg'
              }`}
            >
              Contact Support
            </Link>
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

export default HelpPage;
