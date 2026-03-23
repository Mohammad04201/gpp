import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [user] = useState(null);
  const userMenuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleLogout = () => {
    // In dev mode there is no auth lock; keep pages accessible and only close the menu.
    setIsUserMenuOpen(false);
  };

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
            className="text-teal-400 font-bold text-xl hover:text-teal-300 transition-colors duration-200"
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
              to="/jobs" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Jobs
            </Link>
            <Link 
              to="/favorites" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Favorites
            </Link>
            <Link 
              to="/FovertDevloper" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              FovertDevloper
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
            <button
              type="button"
              onClick={toggleTheme}
              className="px-3 py-2 text-sm border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              {theme === 'dark' ? 'White Mode' : 'Dark Mode'}
            </button>
            {user ? (
              /* Professional user menu */
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-3 p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group"
                >
                  {/* User icon */}
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold shadow-lg group-hover:shadow-xl transition-all duration-200">
                      {user.avatar}
                    </div>
                    {/* Status circle */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                  
                  {/* User name */}
                  <div className="flex flex-col items-start">
                    <span className="text-sm font-medium text-white">{user.name}</span>
                    <span className="text-xs text-gray-400">
                      {user.type === 'company' ? 'Company' : 'Developer'}
                    </span>
                  </div>
                  
                  {/* Menu arrow */}
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isUserMenuOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Dropdown menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-3 w-80 bg-[#20232A] rounded-xl shadow-2xl border border-[#3a4750] overflow-hidden z-50">
                    {/* Menu header */}
                    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-6 text-white">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold backdrop-blur-sm">
                          {user.avatar}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{user.name}</h3>
                          <p className="text-sm opacity-90">{user.email}</p>
                          <div className="mt-2 flex items-center space-x-2">
                            <span className="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                              {user.type === 'company' ? 'Company' : 'Developer'}
                            </span>
                            <span className="flex items-center space-x-1 text-xs">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span>Active</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Quick links */}
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <Link
                          to="/dashboard/developer"
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center mb-2">
                            <svg className="w-6 h-6 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">Dashboard</span>
                        </Link>
                        
                        <Link
                          to="/profile"
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center mb-2">
                            <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">Profile</span>
                        </Link>
                        
                        <Link
                          to="/my-jobs"
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center mb-2">
                            <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">وظائفي</span>
                        </Link>
                        
                        <Link
                          to="/settings"
                          className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center mb-2">
                            <svg className="w-6 h-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">Settings</span>
                        </Link>
                      </div>
                      
                      {/* Notifications section */}
                      <div className="border-t border-[#3a4750] pt-3 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">Notifications</span>
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">3</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-3 p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer transition-colors">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-200">Your application for Frontend Developer was accepted</p>
                              <p className="text-xs text-gray-400">5 minutes ago</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-3 p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer transition-colors">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-200">New developer is following your profile</p>
                              <p className="text-xs text-gray-400">1 hour ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Logout button */}
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-2 p-3 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors duration-200"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-medium">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Login buttons */
              <>
                <Link 
                  to="/select-role" 
                  className="px-4 py-2 text-sm border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
                <Link 
                  to="/select-role" 
                  className="px-4 py-2 text-sm bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md hover:from-teal-600 hover:to-cyan-600 transition-all duration-200"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button and User Icon */}
          <div className="md:hidden flex items-center space-x-2">
            {/* User Icon for Mobile */}
            {user && (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                >
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold text-sm shadow-lg">
                      {user.avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-gray-900"></div>
                  </div>
                </button>
                
                {/* Mobile User Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 top-full mt-2 w-72 bg-[#20232A] rounded-xl shadow-2xl border border-[#3a4750] overflow-hidden z-50 max-h-96 overflow-y-auto">
                    {/* Mobile User Header */}
                    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 p-4 text-white">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold backdrop-blur-sm">
                          {user.avatar}
                        </div>
                        <div>
                          <h3 className="text-base font-semibold">{user.name}</h3>
                          <p className="text-xs opacity-90">{user.email}</p>
                          <div className="mt-1 flex items-center space-x-2">
                            <span className="px-2 py-1 bg-white/20 rounded-full text-xs backdrop-blur-sm">
                              {user.type === 'company' ? 'Company' : 'Developer'}
                            </span>
                            <span className="flex items-center space-x-1 text-xs">
                              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                              <span>Active</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Mobile Quick Links */}
                    <div className="p-3">
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <Link
                          to="/dashboard/developer"
                          className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center mb-1">
                            <svg className="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">Dashboard</span>
                        </Link>
                        
                        <Link
                          to="/profile"
                          className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center mb-1">
                            <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">الملف</span>
                        </Link>
                        
                        <Link
                          to="/my-jobs"
                          className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center mb-1">
                            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">وظائفي</span>
                        </Link>
                        
                        <Link
                          to="/settings"
                          className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-700/50 transition-colors duration-200"
                          onClick={() => setIsUserMenuOpen(false)}
                        >
                          <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center mb-1">
                            <svg className="w-5 h-5 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <span className="text-xs text-gray-300 font-medium">Settings</span>
                        </Link>
                      </div>
                      
                      {/* Mobile Notifications */}
                      <div className="border-t border-[#3a4750] pt-2 mb-2">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-300">Notifications</span>
                          <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">3</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer transition-colors">
                            <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-200">Your application for Frontend was accepted</p>
                              <p className="text-xs text-gray-400">5 minutes ago</p>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 p-2 hover:bg-gray-700/50 rounded-lg cursor-pointer transition-colors">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="flex-1">
                              <p className="text-xs text-gray-200">New developer is following your profile</p>
                              <p className="text-xs text-gray-400">1 hour ago</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Mobile Logout Button */}
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="w-full flex items-center justify-center space-x-2 p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors duration-200"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        <span className="font-medium text-sm">Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
            
            {/* Hamburger Menu Button */}
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
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/features" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/companies" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Companies
              </Link>
              <Link 
                to="/developers" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Developers
              </Link>
              <Link 
                to="/jobs" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Jobs
              </Link>
              <Link 
                to="/favorites" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Favorites
              </Link>
              <Link 
                to="/FovertDevloper" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FovertDevloper
              </Link>
              <Link 
                to="/dashboard/developer" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Developer Dashboard
              </Link>
              <Link 
                to="/dashboard/company" 
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-md transition-all duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Company Dashboard
              </Link>
            </div>
            <div className="pt-4 pb-3 border-t border-[#3a4750]">
              <div className="px-2 space-y-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="block w-full px-3 py-2 text-center text-sm border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800/50 hover:text-white transition-all duration-200"
                >
                  {theme === 'dark' ? 'White Mode' : 'Dark Mode'}
                </button>
                <Link 
                  to="/select-role" 
                  className="block w-full px-3 py-2 text-center text-sm border border-gray-600 text-gray-300 rounded-md hover:bg-gray-800/50 hover:text-white transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/select-role" 
                  className="block w-full px-3 py-2 text-center text-sm bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-md hover:from-teal-600 hover:to-cyan-600 transition-all duration-200"
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

