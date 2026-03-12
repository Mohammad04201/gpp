import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function HelpPage() {
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
    <div className="min-h-screen text-white" style={{ background: 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)' }}>
      {/* Header */}
      <nav className="border-b border-gray-700" style={{ backgroundColor: '#20232A' }}>
        <div className="container mx-auto px-4 py-4">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
            TechConnect AI
          </Link>
        </div>
      </nav>

      {/* Help Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Help Center</h1>
          <p className="text-gray-300 mb-12">Find answers to common questions about TechConnect AI</p>

          {/* Search Bar */}
          <div className="mb-12">
            <input 
              type="text" 
              placeholder="Search for help..." 
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-gray-600"
            />
          </div>

          {/* FAQs */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-700/50 transition-colors duration-300"
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
                  <div className="px-6 py-4 border-t border-gray-700 bg-gray-700/20">
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Support */}
          <div className="mt-16 bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-semibold mb-4">Still need help?</h3>
            <p className="text-gray-300 mb-6">
              Our support team is ready to assist you. Contact us directly for more help.
            </p>
            <Link 
              to="/contact" 
              className="inline-block px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Contact Support
            </Link>
          </div>

          <div className="mt-12">
            <Link 
              to="/" 
              className="inline-block px-8 py-3 bg-gray-700 hover:bg-gray-600 rounded-xl font-semibold transition-all duration-300"
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
