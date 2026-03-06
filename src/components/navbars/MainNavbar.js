import { Link } from 'react-router-dom';
import { useState } from 'react';

function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#20232A] border-b border-[#282C34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-white font-bold text-xl hover:text-blue-400 transition-colors duration-200"
          >
            Mawhiba AI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/features" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Features
            </Link>
            <Link 
              to="/companies" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Companies
            </Link>
            <Link 
              to="/developers" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Developers
            </Link>
            <Link 
              to="/dashboard/developer" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Developer Dashboard
            </Link>
            <Link 
              to="/dashboard/company" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Company Dashboard
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link 
              to="/select-role" 
              className="px-4 py-2 text-sm border border-gray-300 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              Login
            </Link>
            <Link 
              to="/select-role" 
              className="px-4 py-2 text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link 
                to="/" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/companies" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </Link>
              <Link 
                to="/developers" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Developers
              </Link>
              <Link 
                to="/dashboard/developer" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Developer Dashboard
              </Link>
              <Link 
                to="/dashboard/company" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Company Dashboard
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="px-2 space-y-2">
                <Link 
                  to="/select-role" 
                  className="block w-full px-3 py-2 text-center text-sm border border-gray-300 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/select-role" 
                  className="block w-full px-3 py-2 text-center text-sm bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default MainNavbar;

