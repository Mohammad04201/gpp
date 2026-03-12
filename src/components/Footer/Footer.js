import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-white border-t border-gray-700" style={{backgroundColor: '#20232A'}}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-600 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent">
                TechConnect AI
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Connecting best tech talent in Arab World with global opportunities through advanced AI matching.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v8.385C8.5 22.992 4.388 18.063 4.388 12.073c0-6.627 5.373-12 12-12s12 5.373 12 12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.012 4.971 1.117 5.12 1.138 1.01 1.809 2.227 1.623 3.31.337.362-.78.634-1.115.06-.175-.109-.469-.109-.469 0-.31.17-.775.703-1.148.164-.198.353-.431.673-.668-1.512-.624-2.475-.703-.447-.065-.895-.095-1.34-.095-.24 0-.483.027-.718.076-.506.074-.858.137-1.184.322-.35.196-.696-.424-1.225-.424-.464 0-.856.028-1.184.083-.328.055-.671.157-.965.248-.293.09-.496.166-.589.298-.04.12-.034.277-.034.453 0 .332.053.713.156 1.01.309.358.196.672.423 1.078.423.453 0 .801-.064 1.051-.189.328-.166.582-.421.857-.543.275-.139.605-.331.605-.531v-.531c0-.506-.045-.986-.127-1.442-.082-.456-.196-.891-.344-1.299-.148-.408-.33-.776-.544-1.112-.215-.336-.408-.714-.576-1.112-.168-.398-.314-.846-.435-1.333-.121-.487-.214-.996-.279-1.525-.065-.529-.098-1.064-.098-1.597 0-.533.033-1.066.098-1.596.065-.53.158-1.027.279-1.525.121-.498.268-.715.544-1.112.276-.398.314-.846.435-1.333.121-.487.214-.996.279-1.525.065-.529.098-1.064.098-1.597z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-3.461 1.789-3.461 3.926v4.68h-3.548c-.044-1.119-.063-2.618-.063-4.68 0-1.589.019-3.089.063-4.68l2.438-.003c.877 0 1.538-.66 1.538-1.548v-4.68c0-2.137 1.608-3.926 3.461-3.926 1.825 0 1.852 1.709 1.852 3.037v5.569h-3.547c-1.676 0-3.247.782-4.255 1.919v6.629c1.008 1.137 2.579 1.919 4.255 1.919h7.097c1.676 0 3.247-.782 4.255-1.919v-6.629c-1.008-1.137-2.579-1.919-4.255-1.919z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/jobs" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link to="/companies" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                  Companies
                </Link>
              </li>
              <li>
                <Link to="/dashboard/main" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-gray-200 transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              {new Date().getFullYear()} TechConnect AI. All rights reserved.
            </div>
            <div className="text-gray-400 text-sm">
              Made with <span className="text-red-500">♥</span> for Arab tech companies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;