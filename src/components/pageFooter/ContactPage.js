import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../contexts/ThemeContext';

function ContactPage() {
  const { isDarkMode } = useThemeContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className={`min-h-screen transition-all duration-300 ${
      isDarkMode ? 'text-white' : 'text-gray-800'
    }`} style={{
      background: isDarkMode 
        ? 'linear-gradient(135deg, #1a1d26 0%, #20232A 100%)'
        : 'linear-gradient(135deg, #f9f9f9 0%, #ffffff 100%)'
    }}>
 

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Contact Us</h1>
          <p className={`mb-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>Have questions? We'd love to hear from you. Send us a message!</p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700 text-white focus:border-teal-500' 
                      : 'bg-white border border-gray-300 text-gray-800 focus:border-teal-500'
                  }`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700 text-white focus:border-teal-500' 
                      : 'bg-white border border-gray-300 text-gray-800 focus:border-teal-500'
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700 text-white focus:border-teal-500' 
                      : 'bg-white border border-gray-300 text-gray-800 focus:border-teal-500'
                  }`}
                  placeholder="Message subject"
                />
              </div>

              <div>
                <label className={`block mb-2 font-semibold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full rounded-lg px-4 py-3 focus:outline-none transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-gray-800 border border-gray-700 text-white focus:border-teal-500' 
                      : 'bg-white border border-gray-300 text-gray-800 focus:border-teal-500'
                  }`}
                  placeholder="Your message..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white' 
                    : 'bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className={`rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.938 12.842a6.002 6.002 0 013.856-3.856V6.5H2.5v-2h3.5a1 1 0 011 1v3.994a5.971 5.971 0 01-4.118 3.348zM17.062 7.158a6.002 6.002 0 01-3.856 3.856v2.486h3.294v2h-3.294a1 1 0 01-1-1v-3.994a5.971 5.971 0 014.118-3.348z"/>
                  </svg>
                  Phone
                </h3>
                <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>+1 (555) 123-4567</p>
              </div>

              <div className={`rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Email
                </h3>
                <p className="text-gray-300">support@techconnect.ai</p>
              </div>

              <div className={`rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <h3 className={`text-lg font-semibold mb-2 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                  Office
                </h3>
                <p className="text-gray-300">Dubai, United Arab Emirates</p>
              </div>

              <div className={`rounded-xl p-6 border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 border-gray-700' 
                  : 'bg-white border-gray-200 shadow-lg'
              }`}>
                <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
                <div className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
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

export default ContactPage;
